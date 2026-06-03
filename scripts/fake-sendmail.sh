#!/bin/sh
# Captures PHP mail() output for local testing (not used in production).
LOG="${MAIL_CAPTURE_PATH:-/tmp/mail-capture.eml}"
cat >> "$LOG"
printf '\n---MAIL_SENT---\n' >> "$LOG"
exit 0
