source "https://rubygems.org"

# Ruby 버전
ruby "~> 3.4.0"

# 핵심 Jekyll 구성 (컴파일 문제 gem들 제외)
gem "jekyll", "~> 4.3.0"

# 웹서버
gem "webrick", "~> 1.8"

# Ruby 3.4.x 필수 gem들
gem "base64"
gem "csv"
gem "ostruct"

# Jekyll 플러그인 (기본만)
group :jekyll_plugins do
  gem "jekyll-seo-tag"
  gem "jekyll-sitemap"
end

# Windows 필수 (문제 없는 것만)
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
