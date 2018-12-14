# javascript-protection-data

It's just my practice for protection data.
I wrote simple desktop app using electron.
At the start, the application checks the file " application.ini" and looks to see if there is a license key in it. If the key is missing, it asks to enter it in the appropriate window and if the key is correct, the application is launched, and the key is written to the file.
If the registration data is incorrect or missing - the program must issue an authentication code for key generation and input fields license key. Until the correct key is entered - the program should not continue on.
To complicate the hacking process, a linear congruential generator is used.
When starting, the application reads the serial number of the hard disk x. For the given parameters A, B, C, D, P, Q generates numbers y, z

y=(A*x+B)modP;

z=(C*y+D)modP;

Where P are 32-bit prime number, x is the device serial number, y is the license key, z is the authentication code.

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/advardo/javascript-protection-data
# Go into the repository
cd javascript-protection-data
# Install dependencies
npm install
# Run the app
npm start
```


