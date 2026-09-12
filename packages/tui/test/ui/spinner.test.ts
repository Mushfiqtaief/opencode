import { describe, expect, it } from "bun:test"
import { createFrames } from "../../src/ui/spinner"

describe("spinner frames", () => {
  it("generates expected frame count for default options", () => {
    const width = 8
    const holdStart = 30
    const holdEnd = 9
    const expectedFrames = width + holdEnd + (width - 1) + holdStart

    const frames = createFrames()
    expect(frames.length).toBe(expectedFrames)
  })

  it("generates diamond frames containing only supported glyphs", () => {
    const frames = createFrames({ style: "diamonds", width: 6 })
    const validChars = new Set(["◆", "◇", "·"])

    for (const frame of frames) {
      for (const char of frame) {
        expect(validChars.has(char)).toBe(true)
      }
    }
  })

  it("generates block frames containing only supported glyphs", () => {
    const frames = createFrames({ style: "blocks", width: 6 })
    const validChars = new Set(["●", "·"])

    for (const frame of frames) {
      for (const char of frame) {
        expect(validChars.has(char)).toBe(true)
      }
    }
  })
})
