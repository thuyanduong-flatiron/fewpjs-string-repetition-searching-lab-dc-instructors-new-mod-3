describe("heyJude", () => {
  it("function heyJude repeats verse 16x", () => {
    let verse = "Na na na na na na na, na na na na, hey Jude."
    expect(heyJude(verse)).to.match(/Na na na na na na na, na na na na, hey Jude./)
  })
  it("function 'prohibitedLanguage' bans 'candycorn' and 'brusselssprouts'", () => {
    let safeName = "playernumberone"
    let badName1 = "ilovecandycorn"
    let badName2 = "brusselssproutsarenumberone"
    expect(prohibitedLanguage(safeName)).to.eql(-1)
    expect(prohibitedLanguage(badName1)).to.eql(5)
    expect(prohibitedLanguage(badName2)).to.eql(0)
  })
})
