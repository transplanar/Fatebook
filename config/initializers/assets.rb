# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
Rails.application.config.assets.precompile +=
        %w( app.js
        stories.css
        normalize.css
        authoring_tools.css
        ng-app/services/StoryNavSrv.js
        ng-app/services/StorySrv.js
        ng-app/services/StoriesSrv.js
        ng-app/services/PageSrv.js
        ng-app/services/PagesSrv.js
        ng-app/services/BranchSrv.js
        ng-app/controllers/StoryNavCtrl.js
        ng-app/controllers/StoryCreateCtrl.js
        ng-app/controllers/PageEditCtrl.js
        ng-app/controllers/LandingCtrl.js
        )
