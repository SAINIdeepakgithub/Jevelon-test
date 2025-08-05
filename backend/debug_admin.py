#!/usr/bin/env python
"""
Debug script to troubleshoot admin endpoint issues
Run this in the Render shell to diagnose problems
"""

import os
import sys
import django

# Setup Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'jevelon_backend.settings')
django.setup()

from django.conf import settings
from django.db import connection
from django.contrib.auth.models import User

def check_database():
    """Check database connection and tables"""
    print("🔍 Checking database connection...")
    try:
        with connection.cursor() as cursor:
            cursor.execute("SELECT 1")
            print("✅ Database connection successful")
            
            # Check if auth tables exist
            cursor.execute("""
                SELECT table_name 
                FROM information_schema.tables 
                WHERE table_schema = 'public' 
                AND table_name LIKE 'auth_%'
            """)
            auth_tables = [row[0] for row in cursor.fetchall()]
            print(f"✅ Auth tables found: {auth_tables}")
            
    except Exception as e:
        print(f"❌ Database error: {e}")
        return False
    return True

def check_static_files():
    """Check static files configuration"""
    print("\n🔍 Checking static files...")
    print(f"STATIC_URL: {settings.STATIC_URL}")
    print(f"STATIC_ROOT: {settings.STATIC_ROOT}")
    print(f"DEBUG: {settings.DEBUG}")
    
    if os.path.exists(settings.STATIC_ROOT):
        print("✅ STATIC_ROOT directory exists")
        static_files = os.listdir(settings.STATIC_ROOT)
        print(f"✅ Static files found: {len(static_files)} files")
    else:
        print("❌ STATIC_ROOT directory does not exist")

def check_admin_users():
    """Check if admin users exist"""
    print("\n🔍 Checking admin users...")
    try:
        users = User.objects.all()
        admin_users = [user for user in users if user.is_superuser]
        print(f"✅ Total users: {users.count()}")
        print(f"✅ Admin users: {len(admin_users)}")
        
        if admin_users:
            for user in admin_users:
                print(f"   - {user.username} ({user.email})")
        else:
            print("⚠️  No admin users found")
            
    except Exception as e:
        print(f"❌ Error checking users: {e}")

def check_environment():
    """Check environment variables"""
    print("\n🔍 Checking environment variables...")
    required_vars = [
        'SECRET_KEY',
        'DATABASE_URL',
        'DEBUG',
        'ALLOWED_HOSTS',
        'CORS_ALLOWED_ORIGINS'
    ]
    
    for var in required_vars:
        value = os.environ.get(var)
        if value:
            if var == 'SECRET_KEY':
                print(f"✅ {var}: {'*' * 10}...{value[-4:]}")
            else:
                print(f"✅ {var}: {value}")
        else:
            print(f"❌ {var}: Not set")

def main():
    print("🚀 Jevelon Backend Debug Script")
    print("=" * 50)
    
    check_environment()
    check_database()
    check_static_files()
    check_admin_users()
    
    print("\n" + "=" * 50)
    print("🎯 Debug Summary:")
    print("1. Check the health endpoint: https://jevelon.onrender.com/")
    print("2. Check Render logs for detailed error messages")
    print("3. Ensure all environment variables are set")
    print("4. Create admin user if none exists: python manage.py createsuperuser")

if __name__ == "__main__":
    main() 