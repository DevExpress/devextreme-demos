testUtils.postponeUntilFound('#requests ul li').then(() => {
    testUtils.findElements('#requests ul li').forEach((x) => {
        x.innerText = x.innerText.substr(8);
    });
});
