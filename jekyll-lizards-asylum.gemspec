# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "jekyll-lizards-asylum"
  spec.version       = "1.0.0"
  spec.authors       = ["JM Ibanez"]
  spec.email         = ["jm@jmibanez.com"]

  spec.summary       = "Jekyll theme for my blog (https://blog.jmibanez.com/)"
  spec.homepage      = "https://blog.jmibanez.com/"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 3.8.4"
  spec.add_runtime_dependency "jekyll-feed", "~> 0.9"
  spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.1"

  spec.add_development_dependency "bundler", "~> 1.16"
end
