export const getThemePostfix = (theme) => {
  const themeName = theme === 'generic.light' ? '' : ` (${theme})`;

  return themeName;
};

export async function testScreenshot(
  t,
  takeScreenshot,
  screenshotName,
  options,
) {
  await t
    .expect(await takeScreenshot(screenshotName.replace('.png', `${getThemePostfix(process.env.THEME)}.png`), options.element))
    .ok();
}
