# AngularJS Unit Testing #

This document provides [AngularJS](http://angularjs.org/) unit testing examples. The samples are authored in Visual Studio (VS) 2013 and test angularjs and javascript code contained in an ASP.NET MVC project.

Tests are contained in a library project. The tests use Chutzpah as the test runner and Jasmine as the testing framework. Note that QUnit can be used instead of Jasmine. Tests will be created for the following AngularJS elements:

- Controllers (refer to Sandbox.Tests.Javascript.Unit/App/Students/Controllers)
- Routes (refer to Sandbox.Tests.Javascript.Unit/App/Students/Routes)
- Directives (work in progress)
- Filters (work in progress)

Note that the tests refer to stupid-simple AngularJS code contained within Sandbox.UI.Main. All of the AngularJS code is contained within the App folder. It is organized with the intent that the containing ASP.NET MVC website would be comprised of multiple AngularJS single page applications (SPA) where each SPA corresponds to a grouping of functionality. For a large site, SPAs may align to top-level main menu items/tabs/etc. Each SPA is given the same name as there would only one SPA loaded/active at any given time. In the example, the name of the primary SPA module is 'sandbox'.

#Required Configuration/Software#

- VS 2012/2013
- [Chutzpah](http://chutzpah.codeplex.com/) - a javascript test runner that provides VS integration.
- [Jasmine](http://pivotal.github.io/jasmine/) - a BDD-style framework for testing JavaScript code.

#Optional But Very Helpful Elements#
- [ReSharper](http://blogs.jetbrains.com/dotnet/tag/resharper-8/)
- Google Chrome Browser (is your friend.)
- [AngularJS Batarang](https://chrome.google.com/webstore/detail/angularjs-batarang/ighdmehidhipcmcojjgiloacoafjmpfk?hl=en) - extends the developer tools.

#Quirks#

- If your JavaScript unit tests do not appear in test explorer, restart VS.
- In VS 2013, running unit tests with ReSharper results in a new blank browser session each time.