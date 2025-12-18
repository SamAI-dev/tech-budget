import os
import subprocess
import hashlib

def risky_execution(user_input):
    
    eval(user_input)
    
    
    os.system("echo " + user_input)

def hardcoded_secrets():
    
    api_key = "12345-ABCDE-SECRET-KEY"
    return api_key

def weak_hashing(password):
    
    return hashlib.md5(password.encode()).hexdigest()
