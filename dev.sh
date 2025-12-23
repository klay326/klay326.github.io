#!/bin/bash
# Simple script to start the development server

cd "$(dirname "$0")" || exit
python3 serve.py
