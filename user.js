// Compact mode
user_pref("browser.compactmode.show", true);

// Crash reports
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);

// Disable activity stream snippets (runs code from a remote server)
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.asrouter.providers.snippets", "");

// Disable add-on recommendations
user_pref("extensions.getAddons.showPane", false);  // Disable about:addons "Recommendations" (uses Google Analytics) [HIDDEN PREF]
user_pref("extensions.htmlaboutaddons.discover.enabled", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.discovery.enabled", false);  // Disable "Allow Firefox to make personalized extension recommendations"
user_pref("datareporting.healthreport.uploadEnabled", false);  // Disable "Allow Firefox to send technical and interaction data to Mozilla"

// Disable Mozilla VPN
user_pref("browser.privatebrowsing.vpnpromourl", "");

// Disable Pocket
user_pref("extensions.pocket.enabled", false);

// Disable recommdations
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);   // Disable "Recommend extensions as you browse"
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false); // Disable "Recommend features as you browse"

// Disable stuff
user_pref("browser.newtabpage.activity-stream.showSearch", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);

// Disable telemetry
user_pref("browser.newtabpage.activity-stream.telemetry.ping.endpoint", "");
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.ping-centre.telemetry", false);
user_pref("datareporting.healthreport.service.enabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.sessions.current.clean", true);
user_pref("devtools.onboarding.telemetry.logged", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.prompted", 2);
user_pref("toolkit.telemetry.rejected", true);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.server", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.unifiedIsOptIn", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);

// Don't warn when opening about:config 
user_pref("browser.aboutConfig.showWarning", false);

// Enable container tabs and corresponding UI
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);
user_pref("privacy.usercontext.about_newtab_segregation.enabled", true);  // Using private containers for thumbnail loads

// Enable HTTPS-only mode
user_pref("dom.security.https_only_mode", true);

// Enable loading userChrome.css and userContent.css
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Hide more from Mozilla
user_pref("browser.preferences.moreFromMozilla", false);

// Make sure DNS is sent through the proxy server when using a SOCKS v5 proxy
user_pref("network.proxy.socks_remote_dns", true);

// New profile switcher
// user_pref("browser.profiles.enabled", true);

// Password and forms
user_pref("signon.rememberSignons", false);   // Disable Ask to save logins and passwords for websites
user_pref("signon.autofillForms", false);     // Disable "Autofill logins and passwords"
user_pref("browser.formfill.enable", false);  // Disable "Remember search and form history"
user_pref("extensions.formautofill.available", "off");
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);

// Scrolling fix
user_pref("apz.overscroll.enabled", true); 
user_pref("general.smoothScroll", true); 
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 650);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", "2");
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250);
user_pref("general.smoothScroll.currentVelocityWeighting", "1");
user_pref("general.smoothScroll.stopDecelerationWeighting", "1");
user_pref("mousewheel.default.delta_multiplier_y", 250); // 250-400; adjust this number to your liking

// Simple Tab Groups
user_pref("svg.context-properties.content.enabled", true);

// Startup page
user_pref("browser.shell.checkDefaultBrowser", false); // Disable check for default browser
user_pref("browser.startup.homepage", "about:blank");  // Set "Homepage and new windows"
user_pref("browser.newtabpage.enabled", false);        // Set "New tabs"
user_pref("browser.newtab.preload", false);
user_pref("browser.onboarding.enabled", false);        // Hide onboarding tour (uses Google Analytics)

// Tracking
user_pref("privacy.trackingprotection.enabled", true);                   // Turn on tracking protection
user_pref("privacy.trackingprotection.cryptomining.enabled", true);      // Enable cryptomining protection
user_pref("privacy.trackingprotection.socialtracking.enabled", true);    // Enable social protection
user_pref("privacy.globalprivacycontrol.enabled", true);                 // Successor to DNT
user_pref("privacy.globalprivacycontrol.functionality.enabled", true);   // Successor to DNT

// Turn off search suggestions so you don't leak everything from the URL bar to a search engine
user_pref("keyword.enabled", true);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.fixup.alternate.enabled", false);
user_pref("browser.urlbar.trimURLs", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);

// When double-clicking a word on a page, only copy the word itself, not the space character next to it 
user_pref("layout.word_select.eat_space_to_next_word", false);
