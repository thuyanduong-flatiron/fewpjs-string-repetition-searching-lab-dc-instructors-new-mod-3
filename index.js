let heyJude = (verse) => {
  return verse.repeat(16)
}

let prohibitedLanguage = (string) => {
  let bannedWords = /candycorn|brusselssprouts/;
  return string.search(bannedWords);  
}
