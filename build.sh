#!/bin/bash
# 极鱼社官网 - 一键构建脚本
# 用法：bash build.sh

echo "🔨 极鱼社官网构建中..."
echo ""

# 压缩 CSS
echo "📦 压缩 CSS..."
npx clean-css-cli style.css -o style.min.css 2>/dev/null
echo "   style.css → style.min.css ✓"

# 压缩 JS
echo "📦 压缩 JS..."
npx uglify-js common.js -o common.min.js -c -m 2>/dev/null
echo "   common.js → common.min.js ✓"
npx uglify-js script.js -o script.min.js -c -m 2>/dev/null
echo "   script.js → script.min.js ✓"

echo ""
echo "✅ 构建完成！"
echo ""
echo "📋 下一步："
echo "   git add -A"
echo "   git commit -m '更新构建'"
echo "   git push"
