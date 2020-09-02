#! /bin/bash
set -o pipefail

function installBrew() {
    echo "...."
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
    echo "installed homebrew..."
}

# HOMEBREW CHECK:

#  checks for hombrew on host machine
if [[ -f !$(which brew) ]]; then
 echo "installing homebrew on your system...."
 echo "trust me you will thank me later..."
 installBrew
fi 

# SPECIFIED COURSE DEPENDENCIES:
declare -a CASKS 
FORMULAE="git node npm"

echo "installing dev dependencies for P422....."
echo "for this course you will need a text editor"

# OPTIONAL TEXT EDITOR INSTALLATION:

read -p "do you want to install visual studio code? Y/N " ANSWER
case "$ANSWER" in 
    [yY] | [yY][eE][sS])
    CASKS+=("visual-studio-code")
    ;;
    [nN] | [nN][oO])
    echo "You need a text editor for this course"
    ;;
*)
# if they dont put anything
    echo "Please enter y/yes or n/no"
    ;;
esac

read -p "do you want to install webstorm? Y/N " ANSWER
case "$ANSWER" in [yY] | [yY][eE][sS])
        echo "ensure you are registered with your Jetbrains Student pack..."
        echo "opening jetbrains registration site..."
        sleep 5 
        open https://account.jetbrains.com/login
        CASKS+=("webstorm")
    ;;
    [nN] | [nN][oO])
    echo "You need to download a text editor for this course"
    ;;
*)
# if they dont put anything
    echo "Please enter y/yes or n/no"
    ;;
esac

for cask in "${CASKS[@]}"
    do
        echo "installing $cask"
        brew cask install "$cask"
    done

for formulae in $FORMULAE
    do
    echo "installing $formulae"
        brew install "$formulae"
    done

#  INSTALLING MONGODB
echo "installing mongodb"
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb/brew/mongodb-community

# INSTALLING ANGULAR:
echo "installing angular-cli"
npm install -g @angular/cli
