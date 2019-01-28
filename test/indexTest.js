describe("heyJude", () => {
  it("function heyJude repeats verse 16x", () => {
    expect(heyJude()).to.match(/Na na na na na na na, na na na na, hey Jude./)
  })
  it("has function 'prohibitedLanguage'", () => {
    expect(prohibitedLanguage()).to.exist;
  })
})

