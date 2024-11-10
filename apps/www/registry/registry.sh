#!/bin/bash

source_dir="/workspace/ui/apps/www/registry/default/ui"
dest_dir="/workspace/ui/apps/www/registry/new-york/ui"

for file in "$source_dir"/*; do
  target_file="$dest_dir/$(basename "$file")"
  if [ -f "$target_file" ]; then
    target_file="$dest_dir/copy_$(basename "$file")"
  fi
  cp -r "$file" "$target_file"
done