import os
import subprocess
import hashlib

def risky_execution(user_input):
    
    eval(user_input)
    
    
    os.system("echo " + user_input)

def hardcoded_secrets():
    
    api_key = "AKIAIOSFODNN7HDHDU*&HDHD1HJ4"
    return api_key

def weak_hashing(password):
    
import bcrypt

def secure_hashing(password):
    # Generate salt and hash password
    salt = bcrypt.gensalt(rounds=12)
    hashed = bcrypt.hashpw(password.encode(), salt)
    return hashed.decode()

def verify_password(password, hashed):
    return bcrypt.checkpw(password.encode(), hashed.encode())\n