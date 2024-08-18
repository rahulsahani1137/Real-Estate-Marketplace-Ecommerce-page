export const welcome = (req, res) => {
    res.json({
        data: "hello from nodejs servers api"
    });
};

export const preRegister = async (req, res) => {
    // create jwt with email and password then email as clickable link
    // only when user click on that email link, registration completes
    try {
        console.log(req.body);

        const emailSent = true;

        if (emailSent) {
            return res.json({ ok: true });
        } else {
            return res.json({ ok: false });
        }
    } catch (err) {
        console.log(err);
        return res.json({ error: "SOmething went wrong. Try again."})
    }
}