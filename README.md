# Using DataMuse to power a word search tool

> Using the DataMuse API to search for forgotten words.

The EasyWordFinder is an appication that allows the user to search for gotten
words in 3 different words. The user can search by association (table:chair).
The user can search by descriptive term (short:tree) and the user can search by
word completion (chu:chunky).

This project uses API requests made to the DataMuse API [Datamuse API](http://www.datamuse.com/api/), 
from within a Vue.js application. For these purposes no API key was needed, the DataMuse API doesn't require one, just a URL and a request. The EasyWordFinder. Is build on the code base of a project from WATS 4000, a class in the 3rd quarter of the Seattle Universtiy Web Development Program.

## Setting up the Application for Deployment

This application is currently hosted on GitHub Pages at [EasyWordFinder](https://github.com/TravisBassett/WATS4000-word-reminder).

If you want to host it yourself on GitHuge pages, be sure to select as the Source 'master/branch docs folder.' If you have a custom domain connected to your GitHub pages you will also need to click 'Enforce HTTPS.' The repo is already built so unless you make changes it should be ready to run.

If you do make changes, you will need to run 'npm install' and 'npm run serve' in your development environment to prototype what you've done. When you're ready for deployment complete the steps above to deploy to GitHub Pages, and alter them as appropriate for other platforms of your choosing.

## Credits
This project makes use of the [Datamuse API](http://www.datamuse.com/api/), which is a wonderful, free API service that you should support.

This project also makes use of code from [WATS4000-Using-APIs](https://github.com/suwebdev/wats4000-using-apis/).