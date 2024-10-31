function maskify(cc) {
  if (cc.length <= 4) return cc
  const maskLength = cc.length - 4
  const maskedPart = "#".repeat(maskLength)
  const visiblePart = cc.slice(-4)
  return maskedPart + visiblePart
}

maskify("Nananananananananananananananana Batman!")
maskify("4556364607935616")
maskify("11")
