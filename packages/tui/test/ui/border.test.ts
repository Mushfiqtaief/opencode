import { describe, expect, it } from "bun:test"
import {
  EmptyBorder,
  SplitBorder,
  CardBorderChars,
  LeftAccentBorder,
  RoundedBorder,
  SingleBorder,
  AsciiBorder,
} from "../../src/ui/border"

describe("border presets", () => {
  const requiredKeys = [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight",
    "horizontal",
    "vertical",
    "topT",
    "bottomT",
    "leftT",
    "rightT",
    "cross",
  ] as const

  it("EmptyBorder contains all empty/blank fields", () => {
    for (const key of requiredKeys) {
      expect(typeof EmptyBorder[key]).toBe("string")
    }
    expect(EmptyBorder.horizontal).toBe(" ")
    expect(EmptyBorder.vertical).toBe("")
  })

  it("CardBorderChars matches SplitBorder with heavy vertical", () => {
    expect(CardBorderChars.vertical).toBe("┃")
    expect(SplitBorder.customBorderChars.vertical).toBe("┃")
  })

  it("LeftAccentBorder configures single left border with CardBorderChars", () => {
    expect(LeftAccentBorder.border).toEqual(["left"])
    expect(LeftAccentBorder.customBorderChars.vertical).toBe("┃")
  })

  it("RoundedBorder provides proper curved corner characters", () => {
    expect(RoundedBorder.border).toEqual(["top", "right", "bottom", "left"])
    expect(RoundedBorder.customBorderChars.topLeft).toBe("╭")
    expect(RoundedBorder.customBorderChars.topRight).toBe("╮")
    expect(RoundedBorder.customBorderChars.bottomLeft).toBe("╰")
    expect(RoundedBorder.customBorderChars.bottomRight).toBe("╯")
    expect(RoundedBorder.customBorderChars.horizontal).toBe("─")
    expect(RoundedBorder.customBorderChars.vertical).toBe("│")
  })

  it("SingleBorder provides crisp standard box drawing characters", () => {
    expect(SingleBorder.border).toEqual(["top", "right", "bottom", "left"])
    expect(SingleBorder.customBorderChars.topLeft).toBe("┌")
    expect(SingleBorder.customBorderChars.topRight).toBe("┐")
    expect(SingleBorder.customBorderChars.bottomLeft).toBe("└")
    expect(SingleBorder.customBorderChars.bottomRight).toBe("┘")
    expect(SingleBorder.customBorderChars.horizontal).toBe("─")
    expect(SingleBorder.customBorderChars.vertical).toBe("│")
  })

  it("AsciiBorder provides pure ASCII fallback characters", () => {
    expect(AsciiBorder.border).toEqual(["top", "right", "bottom", "left"])
    expect(AsciiBorder.customBorderChars.topLeft).toBe("+")
    expect(AsciiBorder.customBorderChars.horizontal).toBe("-")
    expect(AsciiBorder.customBorderChars.vertical).toBe("|")
  })
})
