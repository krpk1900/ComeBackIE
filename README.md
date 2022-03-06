# 甦れIE

https://chrome.google.com/webstore/detail/%E7%94%A6%E3%82%8Cie/lhmdcacnhmmbfjagjcjpgedpaoamkocm

# サービス概要

<a href="https://chrome.google.com/webstore/detail/%E7%94%A6%E3%82%8Cie/lhmdcacnhmmbfjagjcjpgedpaoamkocm">
  <img width="50%" src="https://user-images.githubusercontent.com/72296262/156818524-ff2b1fef-d41e-4334-91f3-ebc5f03364f8.gif" />
</a>


TwitterのいいねボタンをInternetExplorer(IE)のアイコンに変更できるChrome拡張機能です。  
IEのアイコンだけでなく、星や親指などのアイコンにも変更することができます。

# 注意

いいねが相手に届かなくなってしまうため表示のみでお楽しみください。  
修正できるアイデアがございましたらぜひとも[twitter](https://twitter.com/krpk1900_dev)までご連絡お願い致します。

# 原因

Twitterのいいね機能をそのまま残しつつ表示だけを変更するためにハートのアニメーションに該当するclassを上書きしようと考えましたが、class名の一部がハッシュ化されており該当classを特定できませんでした。  
そのため今回は、IEアイコンのボタンと隣の数字を新たに作りいいねボタンのノードと入れ替えることでアニメーションの変更を行っています。  
ノードを入れ替えてしまっているためいいね機能が動作しなくなり、現状相手にいいねが届かなくなってしまっています。
