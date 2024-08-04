const postApiCTRL = async (req, res) => {
  try {
    const { index } = req.body;
    const delay = Math.floor(Math.random() * 1000) + 1;
    await new Promise(resolve => setTimeout(resolve, delay));

    return res.status(200).json({
      message: "success",
      data: { result: index },
    });
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = postApiCTRL;
