#!/usr/bin/env python3
"""
Simple HTTP server for local development.
Usage: python3 serve.py
Then visit: http://localhost:8000
"""

import http.server
import socketserver
import os
import sys
import webbrowser
import time

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """Custom request handler with no-cache headers"""
    def end_headers(self):
        # Prevent caching during development
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Expires', '0')
        super().end_headers()
    
    def log_message(self, format, *args):
        # Cleaner logging
        if '200' in str(args):
            print(f"✓ {args[0]}")
        else:
            print(f"  {format % args}")

if __name__ == '__main__':
    handler = MyHTTPRequestHandler
    
    try:
        with socketserver.TCPServer(("", PORT), handler) as httpd:
            url = f'http://localhost:{PORT}'
            print(f"\n🚀 Server running at: {url}")
            print(f"📁 Serving from: {os.getcwd()}")
            print(f"📝 Edit your HTML/CSS files and refresh your browser")
            print(f"\n⌨️  Press Ctrl+C to stop\n")
            
            # Open browser automatically
            time.sleep(0.5)
            try:
                webbrowser.open(url)
            except:
                pass
            
            httpd.serve_forever()
    except KeyboardInterrupt:
        print("\n\n👋 Server stopped")
        sys.exit(0)
    except OSError as e:
        print(f"\n❌ Error: {e}")
        if "Address already in use" in str(e):
            print(f"Port {PORT} is already in use.")
            print("Try: lsof -i :{} | grep LISTEN | awk '{{print $2}}' | xargs kill -9".format(PORT))
        sys.exit(1)
