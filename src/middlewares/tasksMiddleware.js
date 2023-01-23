const validadeTitle = (req, res, next) => {
	const { body } = req;
	if(body.title == undefined) {
		return res.status(400).json({ message: "Campo título obrigatório" });
	}
	if(body.title.trim() == "") {
		return res.status(400).json({ message: "Campo título vazio" });
	}
	next();
};

const validadeStatus = (req, res, next) => {
	const { body } = req;
	if(body.status == undefined) {
		return res.status(400).json({ message: "Campo status obrigatório" });
	}
	if(body.status.trim() == "") {
		return res.status(400).json({ message: "Campo status vazio" });
	}
	next();
};

module.exports = {
	validadeTitle,
	validadeStatus
};