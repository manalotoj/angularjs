using System.Web;
using System.Web.Optimization;

namespace Sandbox.UI.Main
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(
                        "~/Scripts/jquery-ui-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.unobtrusive*",
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/site.css"));

            bundles.Add(new StyleBundle("~/Content/themes/base/css").Include(
                        "~/Content/themes/base/jquery.ui.core.css",
                        "~/Content/themes/base/jquery.ui.resizable.css",
                        "~/Content/themes/base/jquery.ui.selectable.css",
                        "~/Content/themes/base/jquery.ui.accordion.css",
                        "~/Content/themes/base/jquery.ui.autocomplete.css",
                        "~/Content/themes/base/jquery.ui.button.css",
                        "~/Content/themes/base/jquery.ui.dialog.css",
                        "~/Content/themes/base/jquery.ui.slider.css",
                        "~/Content/themes/base/jquery.ui.tabs.css",
                        "~/Content/themes/base/jquery.ui.datepicker.css",
                        "~/Content/themes/base/jquery.ui.progressbar.css",
                        "~/Content/themes/base/jquery.ui.theme.css"));

            // angular bundle.
            bundles.Add(new Bundle("~/bundles/files/scripts")
                .Include("~/Scripts/angular.js",
                    "~/Scripts/angular-xeditable/xeditable.js",
                    "~/Scripts/angular-route.js",
                    "~/Scripts/angular-resource.js",
                    "~/Scripts/mask.js"));

            bundles.Add(CreateAppBundle("Common", "Services", "Filters")); 

            var bundle = CreateAppBundle("Students");
            IncludeDirectories(bundle, "Students", "Routes");
            bundles.Add(bundle);

            bundle = CreateAppBundle("Institutions");
            IncludeDirectories(bundle, "Institutions", "Routes");
            bundles.Add(bundle);
        }


        private static Bundle CreateAppBundle(string appName, params string[] folders)
        {
            //// standard angular app bundle
            var bundle = new Bundle(string.Format("~/bundles/App/{0}", appName))
                            .IncludeDirectory(string.Format("~/App/{0}", appName), "*.js");

            foreach (var folder in folders)
            {
                bundle.IncludeDirectory(string.Format("~/App/{0}/{1}", appName, folder), "*.js");
            }

            return bundle;
        }

        private static void IncludeDirectories(Bundle bundle, string appName, params string[] directories)
        {
            foreach (var directory in directories)
            {
                bundle.IncludeDirectory(string.Format("~/App/{0}/{1}", appName, directory), "*.js");
            }
        }

        private static Bundle CreateAppBundle(string appName)
        {
            //// standard angular app bundle
            return new Bundle(string.Format("~/bundles/App/{0}", appName))
                            .IncludeDirectory(string.Format("~/App/{0}", appName), "*.js")
                            .IncludeDirectory(string.Format("~/App/{0}/Controllers", appName), "*.js")
                            .IncludeDirectory(string.Format("~/App/{0}/Directives", appName), "*.js")
                            .IncludeDirectory(string.Format("~/App/{0}/Filters", appName), "*.js")
                            .IncludeDirectory(string.Format("~/App/{0}/Models", appName), "*.js")
                            .IncludeDirectory(string.Format("~/App/{0}/Services", appName), "*.js")
                            .IncludeDirectory(string.Format("~/App/{0}/Partials", appName), "*.js");
        }
    }
}