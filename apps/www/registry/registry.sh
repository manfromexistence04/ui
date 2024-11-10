#!/bin/bash

source_dir="/workspace/ui/apps/www/registry/default/example"
dest_dir="/workspace/ui/apps/www/registry/new-york/example"

for file in "$source_dir"/*; do
  if [ -f "$file" ]; then
    target_file="$dest_dir/$(basename "$file")"
    if [ -f "$target_file" ]; then
      target_file="$dest_dir/copy_$(basename "$file")"
    fi
    cp "$file" "$target_file"
  fi
done