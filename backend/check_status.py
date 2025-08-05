#!/usr/bin/env python
"""
Status check script to verify all endpoints are working
Run this locally to test your deployed backend
"""

import requests
import json
from urllib.parse import urljoin

BASE_URL = "https://jevelon.onrender.com"

def check_endpoint(endpoint, expected_status=200):
    """Check if an endpoint is working"""
    url = urljoin(BASE_URL, endpoint)
    try:
        response = requests.get(url, timeout=10)
        status = response.status_code
        if status == expected_status:
            print(f"✅ {endpoint}: {status}")
            return True
        else:
            print(f"❌ {endpoint}: {status} (expected {expected_status})")
            return False
    except requests.exceptions.RequestException as e:
        print(f"❌ {endpoint}: Error - {e}")
        return False

def check_health_endpoint():
    """Check health endpoint and display configuration"""
    url = urljoin(BASE_URL, "/")
    try:
        response = requests.get(url, timeout=10)
        if response.status_code == 200:
            data = response.json()
            print("\n🔍 Health Check Results:")
            print(f"Status: {data.get('status')}")
            print(f"Message: {data.get('message')}")
            print(f"Debug Mode: {data.get('debug')}")
            print(f"Database Status: {data.get('database_status')}")
            print(f"Static URL: {data.get('static_url')}")
            print(f"Static Root: {data.get('static_root')}")
            print(f"Allowed Hosts: {data.get('allowed_hosts')}")
            print(f"CORS Origins: {data.get('cors_origins')}")
            return True
        else:
            print(f"❌ Health check failed: {response.status_code}")
            return False
    except requests.exceptions.RequestException as e:
        print(f"❌ Health check error: {e}")
        return False

def main():
    print("🚀 Jevelon Backend Status Check")
    print("=" * 50)
    
    # Check health endpoint first
    if not check_health_endpoint():
        print("\n❌ Health check failed. Backend may not be running properly.")
        return
    
    print("\n🔍 Checking Endpoints:")
    print("-" * 30)
    
    endpoints = [
        ("/", 200, "Health Check"),
        ("/test/", 200, "Test Endpoint"),
        ("/favicon.ico", 204, "Favicon"),
        ("/admin/", 200, "Admin Panel"),
        ("/api/contact/", 200, "Contact API"),
        ("/api/support/", 200, "Support API"),
        ("/api/consultation/", 200, "Consultation API"),
    ]
    
    results = []
    for endpoint, expected_status, description in endpoints:
        success = check_endpoint(endpoint, expected_status)
        results.append((description, success))
    
    print("\n" + "=" * 50)
    print("📊 Summary:")
    successful = sum(1 for _, success in results if success)
    total = len(results)
    
    for description, success in results:
        status = "✅" if success else "❌"
        print(f"{status} {description}")
    
    print(f"\n🎯 Overall: {successful}/{total} endpoints working")
    
    if successful == total:
        print("🎉 All endpoints are working! Your backend is ready.")
    else:
        print("⚠️  Some endpoints need attention. Check the logs above.")

if __name__ == "__main__":
    main() 