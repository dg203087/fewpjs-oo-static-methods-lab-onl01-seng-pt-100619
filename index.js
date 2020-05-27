class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9\s\-']+/g, '')
  }

  static titleize(string) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    
    let words = string.split(" ")

    let sentence = words.map(word => {
      if(!exceptions.find(ex => ex === word)) {
        return Formatter.capitalize(word)
      }
      else if(words[0] === word) {
        return Formatter.capitalize(word)
      }
      else {
        return word
      }
    })
    return sentence.join(" ")
  }

}