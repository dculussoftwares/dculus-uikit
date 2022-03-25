 #!/usr/bin/env bash 
 RESULT=$(git diff --staged --numstat | wc -l)
# if [ $RESULT == 0 ]
# then
#  echo -e "\e[1;31mThere are no staged files.\e[0m" 
#  echo -e "\e[1;31mgit-add - Add file contents to the index\e[0m" 
#  exit 1
# fi
 echo "Upadating package version"
 cd ./scripts && npm --no-git-tag-version version patch -f
 git add package.json
 exit 0