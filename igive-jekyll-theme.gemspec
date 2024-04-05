# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "igive-jekyll-theme"
  spec.version       = "0.1.4"
  spec.authors       = ["iGive.com"]
  spec.email         = ["objectif@igive.com"]

  spec.summary       = "This theme is used for igive.com and its subdomains."
  spec.homepage      = "https://www.igive.com"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_pages|_sass|LICENSE|README|feed.xml|pagefind.yml|sitemap.xml|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.3"
end
