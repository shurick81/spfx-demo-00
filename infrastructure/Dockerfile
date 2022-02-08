FROM mcr.microsoft.com/powershell:7.2.1-alpine-3.14-20211215

RUN pwsh -c "Install-Module -Name PnP.PowerShell -RequiredVersion 1.9.0 -Force"

##FROM mcr.microsoft.com/powershell:7.2.1-debian-11-20211215
#FROM mcr.microsoft.com/powershell:7.2.1-ubuntu-18.04-20211215
#
#RUN apt-get update && \
#    apt-get install -y wget
#RUN apt-get install -y libcurl4-openssl-dev
#RUN wget https://github.com/microsoft/omi/releases/download/v1.6.8-1/omi-1.6.8-1.ssl_110.ulinux.x64.deb && \
#    dpkg -i omi-1.6.8-1.ssl_110.ulinux.x64.deb && \
#    wget https://github.com/microsoft/PowerShell-DSC-for-Linux/releases/download/v1.2.2-0/dsc-1.2.2-0.ssl_110.x64.deb && \
#    dpkg -i dsc-1.2.2-0.ssl_110.x64.deb
#RUN pwsh -c "Install-Module -Name Microsoft365DSC -RequiredVersion 1.22.202.1 -Force"
##RUN pwsh -c "Install-Module -Name PSDesiredStateConfiguration -Repository PSGallery -MaximumVersion 2.99 -Force"
##ENV DSC_HOME=/root/.local/share/powershell/Modules/PSDesiredStateConfiguration/2.0.5/Configuration
