#! /bin/bash
set -o pipefail

function installBrew() {
    echo "...."
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
    echo "installed homebrew..."
}

# HOMEBREW CHECK:

 checks for hombrew on host machine
if [ !$(which brew) ] ; then
 echo "installing homebrew on your system...."
 echo "trust me you will thank me later..."
 installBrew
fi 


# SPECIFIED COURSE DEPENDENCIES:
# CASKS="visual-studio-code"
FORMULAE="git node npm"

echo "installing dev dependencies for p422....."
echo " for this course you will need a text editor"

# OPTIONAL TEXT EDITOR INSTALLATION:

# read -p "do you want to install visual studio code? Y/N " ANSWER
# case "$ANSWER" in 
#     [yY] | [yY][eE][sS])
#     CASKS=${visual-studio-code}
#     ;;
#     [nN] | [nN][oO])
#     echo "You need a text editor"
#     ;;
# *)
# # if they dont put anything
#     echo "Please enter y/yes or n/no"
#     ;;
# esac

# read -p "do you want to install webstorm? Y/N " ANSWER
# case "$ANSWER" in 
#     [yY] | [yY][eE][sS])
#     CASKS=${webstorm}
#     ;;
#     [nN] | [nN][oO])
#     echo "You need a text editor"
#     ;;
# *)
# # if they dont put anything
#     echo "Please enter y/yes or n/no"
#     ;;
# esac


for formulae in $FORMULAE
    do
        # brew install "$formulae"
        echo "$formulae"
    done

#  INSTALLING MONGODB
echo "installing mongodb"
brew tap mongodb/brew
brew install mongodb-community

# INSTALLING ANGULAR:
echo "installing angular-cli"
npm install -g @angular/cli