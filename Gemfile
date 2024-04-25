source 'https://rubygems.org'
gemspec

gem "jekyll", ENV["JEKYLL_VERSION"] if ENV["JEKYLL_VERSION"]
gem "kramdown-parser-gfm" if ENV["JEKYLL_VERSION"] == "~> 3.9.4"

group :jekyll_plugins do
  # gem 'jekyll-toc'
  gem 'jekyll-paginate-v2'
  gem 'jekyll-redirect-from'
  gem 'jekyll-feed', '~> 0.12'
  gem 'jekyll-sitemap'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Performance-booster for watching directories on Windows
gem 'wdm', '~> 0.1.0' if Gem.win_platform?