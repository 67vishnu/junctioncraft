#!/usr/bin/env python3
"""
Backend API Test Suite for Junctioncraft
Tests all backend endpoints at the external URL
"""

import requests
import json
from datetime import datetime

# Get backend URL from environment
BACKEND_URL = "https://epc-power-solutions.preview.emergentagent.com/api"

def test_hello_world():
    """Test GET /api/ endpoint"""
    print("\n" + "="*80)
    print("TEST 1: GET /api/ - Hello World")
    print("="*80)
    
    try:
        response = requests.get(f"{BACKEND_URL}/", timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        assert response.status_code == 200, f"Expected 200, got {response.status_code}"
        data = response.json()
        assert "message" in data, "Response missing 'message' field"
        assert data["message"] == "Hello World", f"Expected 'Hello World', got '{data['message']}'"
        
        print("✅ PASS: Hello World endpoint working correctly")
        return True
    except Exception as e:
        print(f"❌ FAIL: {str(e)}")
        return False


def test_create_enquiry_contact():
    """Test POST /api/enquiries with contact form data"""
    print("\n" + "="*80)
    print("TEST 2: POST /api/enquiries - Contact Form")
    print("="*80)
    
    payload = {
        "name": "Test User",
        "email": "test@example.com",
        "phone": "+91 9999999999",
        "service": "Substations",
        "message": "Need a quote for 33kV substation",
        "source": "contact",
        "item": ""
    }
    
    try:
        print(f"Sending payload: {json.dumps(payload, indent=2)}")
        response = requests.post(f"{BACKEND_URL}/enquiries", json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {json.dumps(response.json(), indent=2)}")
        
        assert response.status_code == 200, f"Expected 200, got {response.status_code}"
        data = response.json()
        
        # Verify all required fields are present
        assert "id" in data, "Response missing 'id' field"
        assert "name" in data, "Response missing 'name' field"
        assert "email" in data, "Response missing 'email' field"
        assert "phone" in data, "Response missing 'phone' field"
        assert "service" in data, "Response missing 'service' field"
        assert "message" in data, "Response missing 'message' field"
        assert "source" in data, "Response missing 'source' field"
        assert "item" in data, "Response missing 'item' field"
        assert "created_at" in data, "Response missing 'created_at' field"
        
        # Verify echoed fields match
        assert data["name"] == payload["name"], f"Name mismatch: {data['name']} != {payload['name']}"
        assert data["email"] == payload["email"], f"Email mismatch: {data['email']} != {payload['email']}"
        assert data["phone"] == payload["phone"], f"Phone mismatch: {data['phone']} != {payload['phone']}"
        assert data["service"] == payload["service"], f"Service mismatch: {data['service']} != {payload['service']}"
        assert data["message"] == payload["message"], f"Message mismatch"
        assert data["source"] == payload["source"], f"Source mismatch: {data['source']} != {payload['source']}"
        
        # Verify ID is a valid UUID-like string
        assert len(data["id"]) > 0, "ID is empty"
        
        # Verify created_at is a valid timestamp
        try:
            datetime.fromisoformat(data["created_at"].replace('Z', '+00:00'))
        except:
            raise AssertionError(f"Invalid created_at timestamp: {data['created_at']}")
        
        print("✅ PASS: Contact form enquiry created successfully")
        return True, data["id"]
    except Exception as e:
        print(f"❌ FAIL: {str(e)}")
        return False, None


def test_create_enquiry_product():
    """Test POST /api/enquiries with product quote form data"""
    print("\n" + "="*80)
    print("TEST 3: POST /api/enquiries - Product Quote Form")
    print("="*80)
    
    payload = {
        "name": "Product Buyer",
        "email": "buyer@example.com",
        "phone": "+91 8888888888",
        "service": "",
        "message": "Need pricing for lattice towers",
        "source": "product",
        "item": "Lattice Towers"
    }
    
    try:
        print(f"Sending payload: {json.dumps(payload, indent=2)}")
        response = requests.post(f"{BACKEND_URL}/enquiries", json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {json.dumps(response.json(), indent=2)}")
        
        assert response.status_code == 200, f"Expected 200, got {response.status_code}"
        data = response.json()
        
        # Verify key fields
        assert "id" in data, "Response missing 'id' field"
        assert data["source"] == "product", f"Source should be 'product', got '{data['source']}'"
        assert data["item"] == "Lattice Towers", f"Item should be 'Lattice Towers', got '{data['item']}'"
        assert data["email"] == payload["email"], f"Email mismatch"
        
        print("✅ PASS: Product quote enquiry created successfully")
        return True, data["id"]
    except Exception as e:
        print(f"❌ FAIL: {str(e)}")
        return False, None


def test_create_enquiry_invalid_email():
    """Test POST /api/enquiries with invalid email (should return 422)"""
    print("\n" + "="*80)
    print("TEST 4: POST /api/enquiries - Invalid Email Validation")
    print("="*80)
    
    payload = {
        "name": "Invalid User",
        "email": "notanemail",
        "phone": "+91 7777777777",
        "service": "Testing",
        "message": "This should fail",
        "source": "contact",
        "item": ""
    }
    
    try:
        print(f"Sending payload with invalid email: {json.dumps(payload, indent=2)}")
        response = requests.post(f"{BACKEND_URL}/enquiries", json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.text}")
        
        assert response.status_code == 422, f"Expected 422 validation error, got {response.status_code}"
        
        print("✅ PASS: Invalid email correctly rejected with 422")
        return True
    except Exception as e:
        print(f"❌ FAIL: {str(e)}")
        return False


def test_list_enquiries():
    """Test GET /api/enquiries - should return list with newest first"""
    print("\n" + "="*80)
    print("TEST 5: GET /api/enquiries - List Enquiries")
    print("="*80)
    
    try:
        response = requests.get(f"{BACKEND_URL}/enquiries", timeout=10)
        print(f"Status Code: {response.status_code}")
        
        assert response.status_code == 200, f"Expected 200, got {response.status_code}"
        data = response.json()
        
        assert isinstance(data, list), f"Expected list, got {type(data)}"
        print(f"Total enquiries: {len(data)}")
        
        if len(data) > 0:
            print(f"\nFirst enquiry (newest):")
            print(json.dumps(data[0], indent=2))
            
            # Verify structure of first enquiry
            first = data[0]
            assert "id" in first, "Enquiry missing 'id' field"
            assert "name" in first, "Enquiry missing 'name' field"
            assert "email" in first, "Enquiry missing 'email' field"
            assert "created_at" in first, "Enquiry missing 'created_at' field"
            
            # Verify ordering (newest first)
            if len(data) > 1:
                first_time = datetime.fromisoformat(data[0]["created_at"].replace('Z', '+00:00'))
                second_time = datetime.fromisoformat(data[1]["created_at"].replace('Z', '+00:00'))
                assert first_time >= second_time, "Enquiries not sorted by created_at descending"
                print("✅ Enquiries correctly sorted (newest first)")
        
        print("✅ PASS: List enquiries endpoint working correctly")
        return True
    except Exception as e:
        print(f"❌ FAIL: {str(e)}")
        return False


def test_company_profile_pdf():
    """Test GET /api/company-profile.pdf - should return PDF file"""
    print("\n" + "="*80)
    print("TEST 6: GET /api/company-profile.pdf - Company Profile PDF")
    print("="*80)
    
    try:
        response = requests.get(f"{BACKEND_URL}/company-profile.pdf", timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Content-Type: {response.headers.get('Content-Type')}")
        print(f"Content-Disposition: {response.headers.get('Content-Disposition')}")
        print(f"Content Length: {len(response.content)} bytes")
        
        assert response.status_code == 200, f"Expected 200, got {response.status_code}"
        
        # Verify Content-Type
        content_type = response.headers.get('Content-Type', '')
        assert content_type == 'application/pdf', f"Expected 'application/pdf', got '{content_type}'"
        
        # Verify Content-Disposition header
        content_disp = response.headers.get('Content-Disposition', '')
        assert 'attachment' in content_disp, f"Expected 'attachment' in Content-Disposition, got '{content_disp}'"
        assert 'Junctioncraft-Company-Profile.pdf' in content_disp, f"Expected filename in Content-Disposition"
        
        # Verify PDF magic bytes
        pdf_content = response.content
        assert len(pdf_content) > 1024, f"PDF too small: {len(pdf_content)} bytes (expected > 1KB)"
        assert pdf_content[:4] == b'%PDF', f"Invalid PDF magic bytes: {pdf_content[:4]}"
        
        print(f"✅ PDF starts with correct magic bytes: {pdf_content[:4]}")
        print(f"✅ PDF size is reasonable: {len(pdf_content)} bytes")
        print("✅ PASS: Company profile PDF endpoint working correctly")
        return True
    except Exception as e:
        print(f"❌ FAIL: {str(e)}")
        return False


def main():
    """Run all tests"""
    print("\n" + "="*80)
    print("JUNCTIONCRAFT BACKEND API TEST SUITE")
    print(f"Testing backend at: {BACKEND_URL}")
    print("="*80)
    
    results = {}
    
    # Test 1: Hello World
    results['hello_world'] = test_hello_world()
    
    # Test 2: Create contact enquiry
    contact_result, contact_id = test_create_enquiry_contact()
    results['create_enquiry_contact'] = contact_result
    
    # Test 3: Create product enquiry
    product_result, product_id = test_create_enquiry_product()
    results['create_enquiry_product'] = product_result
    
    # Test 4: Invalid email validation
    results['invalid_email_validation'] = test_create_enquiry_invalid_email()
    
    # Test 5: List enquiries
    results['list_enquiries'] = test_list_enquiries()
    
    # Test 6: Company profile PDF
    results['company_profile_pdf'] = test_company_profile_pdf()
    
    # Summary
    print("\n" + "="*80)
    print("TEST SUMMARY")
    print("="*80)
    
    passed = sum(1 for v in results.values() if v)
    total = len(results)
    
    for test_name, result in results.items():
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{status}: {test_name}")
    
    print(f"\nTotal: {passed}/{total} tests passed")
    print("="*80)
    
    return passed == total


if __name__ == "__main__":
    success = main()
    exit(0 if success else 1)
