source "https://rubygems.org"

# Ruby 버전
ruby "~> 3.4.0"

# 핵심 Jekyll 구성 (컴파일 문제 gem들 제외)
gem "jekyll", "~> 4.3.0"
gem "minimal-mistakes-jekyll"

# 웹서버
gem "webrick", "~> 1.8"

# Ruby 3.4.x 필수 gem들
gem "base64"
gem "csv"
gem "ostruct"

# Jekyll 플러그인 (기본만)
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-sitemap"
  gem "jekyll-paginate"
end

# Windows 필수 (문제 없는 것만)
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# 주석처리: 컴파일 문제가 있는 gem들
# gem "wdm", "~> 0.1.1", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
# gem 'nokogiri', '~> 1.16.0', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
# gem "github-pages", group: :jekyll_plugins