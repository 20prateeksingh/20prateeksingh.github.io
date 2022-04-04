LottieInteractivity.create({
    player: "#firstLottie",
    mode:"cursor",
    container: "#cover",
    actions: [
        {
            position: { x: [0, 1], y: [0,1] },
            type: "seek",
            frames: [0, 73]
        }
    ]
});
