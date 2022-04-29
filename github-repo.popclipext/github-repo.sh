#!/bin/sh

echo "${POPCLIP_TEXT}" | sed -E 's!([-a-zA-Z0-9]+)[[:space:]]?/[[:space:]]?([-a-zA-Z0-9]+)!\1/\2!'
