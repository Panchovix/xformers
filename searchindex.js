Search.setIndex({"docnames": ["components/attentions", "components/feedforward", "components/index", "components/mha", "components/ops", "components/position_embedding", "components/reversible", "custom_parts/index", "index", "tutorials/extend_attentions", "tutorials/index", "tutorials/reversible", "tutorials/sparse_vit", "tutorials/use_attention", "what_is_xformers"], "filenames": ["components/attentions.rst", "components/feedforward.rst", "components/index.rst", "components/mha.rst", "components/ops.rst", "components/position_embedding.rst", "components/reversible.rst", "custom_parts/index.rst", "index.rst", "tutorials/extend_attentions.rst", "tutorials/index.rst", "tutorials/reversible.rst", "tutorials/sparse_vit.rst", "tutorials/use_attention.rst", "what_is_xformers.rst"], "titles": ["Attention mechanisms", "Feedforward mechanisms", "API Reference", "Multi Head Attention", "xFormers optimized operators", "Position Embeddings", "Reversible layer", "Custom parts reference", "Welcome to xFormers\u2019s documentation!", "Extend the xFormers parts zoo", "Tutorials", "Using the Reversible block", "Replace all attentions from an existing ViT model with a sparse equivalent?", "I\u2019m only interested in testing out the attention mechanisms that are hosted here", "What is xFormers?"], "terms": {"class": [0, 4, 9, 11], "xformer": [0, 2, 7, 10, 11, 12, 13], "compon": [0, 9, 11, 12, 13], "scaleddotproduct": [0, 12], "dropout": [0, 4, 9, 13], "float": [0, 4, 9], "0": [0, 4, 7, 13], "causal": [0, 4, 9], "bool": [0, 4, 9, 11], "fals": [0, 9, 11, 12], "seq_len": [0, 13], "option": [0, 4, 8, 9, 11], "int": [0, 4, 9, 11], "none": [0, 4, 9], "to_seq_len": 0, "arg": [0, 9], "kwarg": [0, 4, 9, 11], "sourc": [0, 4, 7, 12, 14], "base": [0, 4, 7, 8, 9, 12, 13], "implement": [0, 7, 11], "scale": [0, 4, 7], "dot": [0, 7], "product": [0, 7], "propos": [0, 11, 12, 14], "all": [0, 4, 8, 9, 10, 11, 13, 14], "you": [0, 4, 7, 9, 11, 12, 13, 14], "need": [0, 4, 9, 11], "vaswani": [0, 11], "et": [0, 11], "al": [0, 11], "mask": [0, 4, 7, 12, 13], "attentionmask": 0, "forward": [0, 4, 9, 11], "q": [0, 4, 9], "tensor": [0, 4, 9, 11, 12], "k": [0, 4, 9], "v": [0, 4, 9], "att_mask": [0, 12], "union": [0, 4, 11], "A": [0, 4, 7, 11], "2d": 0, "3d": 0, "which": [0, 4, 7, 8, 9, 11, 12, 13, 14], "ignor": [0, 4], "certain": 0, "posit": [0, 2, 4, 8], "If": [0, 4], "boolean": [0, 11], "valu": [0, 4, 7, 14], "true": [0, 4, 7, 9, 11], "keep": 0, "while": 0, "kei": [0, 4], "pad": [0, 4], "dimens": [0, 4, 13], "batch": [0, 4, 9, 13], "x": [0, 4, 7, 9, 11, 13], "sequenc": [0, 4, 11, 13], "length": [0, 4], "OR": 0, "can": [0, 4, 7, 8, 9, 11, 12, 13, 14], "combin": [0, 4, 8, 11, 13], "pass": [0, 4, 11], "here": [0, 4, 8, 10], "method": 0, "maybe_merge_mask": 0, "provid": [0, 4, 7, 13], "util": 0, "us": [0, 4, 7, 8, 9, 10, 12, 13], "merg": [0, 4], "ha": [0, 4], "type": [0, 4, 9], "an": [0, 4, 8, 10, 13], "addit": [0, 4], "expect": [0, 13], "ar": [0, 4, 7, 8, 9, 10, 11, 12, 14], "inf": [0, 4], "modul": [0, 7, 9, 11, 12], "The": [0, 4, 7, 9, 11, 12, 13], "typic": [0, 12], "sub": 0, "part": [0, 4, 10], "multi": [0, 2, 4, 8, 11, 13], "head": [0, 2, 4, 8, 11, 13], "classmethod": [0, 4], "from_config": 0, "config": [0, 9], "attentionconfig": [0, 9], "self": [0, 4, 9, 11], "abstract": 0, "additive_mask": 0, "is_caus": 0, "object": [0, 4], "hold": 0, "along": [0, 4], "coupl": [0, 7, 9], "helper": [0, 11, 12, 13], "attribut": 0, "to_bool": 0, "from_bool": 0, "creat": [0, 4, 7, 8], "given": [0, 4, 9, 12, 13, 14], "pattern": [0, 4, 12], "warn": [0, 4], "we": [0, 4, 9, 11, 12, 13], "assum": [0, 4], "impli": 0, "should": [0, 4, 11, 13], "comput": [0, 4, 7, 11], "from_multipl": 0, "multipl": [0, 11], "make_caus": [0, 4], "devic": [0, 4, 13], "dtype": [0, 4], "make_crop": 0, "return": [0, 4, 12], "crop": 0, "whose": [0, 4], "underli": 0, "view": 0, "thi": [0, 4, 9, 11, 12, 13, 14], "one": [0, 4, 9, 11, 12, 14], "properti": 0, "is_spars": 0, "ndim": 0, "shape": [0, 4, 12], "build_attent": [0, 13], "dict": [0, 4, 13], "str": [0, 4], "ani": [0, 4, 9, 12, 14], "build": [0, 8, 11, 13, 14], "from": [0, 4, 7, 8, 9, 10, 11, 13], "name": [0, 7, 9, 12, 13], "determin": 0, "what": 0, "instanti": [0, 13], "For": [0, 4], "instanc": [0, 9], "my_attent": 0, "foo": 0, "bar": 0, "find": 0, "wa": [0, 9, 11, 13], "regist": [0, 4, 9], "see": [0, 4, 7, 11], "register_attent": [0, 9], "call": [0, 4, 9], "subclass": 0, "decor": 0, "allow": [0, 4, 13, 14], "configur": [0, 9], "file": [0, 4, 13], "even": [0, 9], "itself": 0, "librari": [0, 8, 14], "optim": [2, 8, 14], "oper": [2, 8], "memori": [2, 11], "effici": [2, 11], "attent": [2, 7, 8, 9, 10, 11], "mechan": [2, 4, 8, 9, 10, 12], "feedforward": [2, 8, 11], "embed": [2, 4, 8], "revers": [2, 8, 10], "layer": [2, 8, 11], "op": 4, "attentionopbas": 4, "baseoper": 4, "fmha": 4, "cutlass": 4, "fwop": 4, "bwop": 4, "flash": 4, "triton": 4, "not_supported_reason": 4, "d": 4, "input": [4, 11, 13], "list": 4, "reason": 4, "why": 4, "support": [4, 7, 12], "kernel": [4, 8], "run": 4, "onli": [4, 8, 10], "empti": 4, "memory_efficient_attent": 4, "queri": 4, "attn_bia": 4, "attentionbia": 4, "p": 4, "tupl": 4, "attentionfwopbas": 4, "attentionbwopbas": 4, "output_dtyp": 4, "follow": [4, 9, 11, 12, 14], "doe": [4, 11], "Not": 4, "o": 4, "n": [4, 9, 11], "2": [4, 11], "must": 4, "format": 4, "b": [4, 11], "m": [4, 8, 10, 11], "h": 4, "where": 4, "size": 4, "number": [4, 11], "per": 4, "have": [4, 12], "3": [4, 7, 11, 12, 13], "1": [4, 11, 12, 13], "also": [4, 7, 9, 11, 14], "5": 4, "gqa": 4, "note": [4, 11, 12], "below": 4, "contigu": 4, "requir": [4, 7, 9, 11], "last": 4, "s": [4, 9, 12, 13], "stride": 4, "equival": [4, 8, 10], "pytorch": [4, 8, 12], "code": [4, 7, 9, 13], "transpos": 4, "attn": 4, "softmax": 4, "f": [4, 11], "exampl": [4, 7, 12], "import": [4, 12, 13], "xop": 4, "regular": 4, "y": 4, "With": 4, "lowertriangularmask": 4, "hardwar": 4, "nvidia": 4, "gpu": [4, 11], "capabl": [4, 7], "abov": [4, 11, 12], "6": [4, 7, 9], "p100": 4, "datatyp": 4, "f16": 4, "bf16": 4, "f32": 4, "experiment": 4, "mqa": 4, "group": 4, "featur": 4, "16": [4, 12, 13], "dim": [4, 11, 12], "g": [4, 11], "8": [4, 7, 12], "pleas": [4, 11, 12], "automat": [4, 7, 9, 14], "broadcast": 4, "so": [4, 9, 14], "manual": [4, 12], "befor": 4, "torch": [4, 9, 11, 12, 13], "32": 4, "128": 4, "cuda": [4, 8, 12], "float16": 4, "randn": 4, "out_gqa": 4, "reshap": 4, "4": 4, "expand": 4, "rais": 4, "notimplementederror": 4, "mha": [4, 11], "valueerror": 4, "invalid": 4, "paramet": [4, 12, 13], "mq": 4, "mkv": 4, "kv": 4, "bia": 4, "appli": [4, 9, 11], "matrix": 4, "default": [4, 9], "common": [4, 7], "arbitrari": 4, "slower": 4, "probabl": 4, "disabl": 4, "set": [4, 7, 11], "factor": 4, "recommend": [4, 9], "dispatch": [4, 13], "best": 4, "depend": [4, 13], "larg": [4, 11], "includ": [4, 11], "without": [4, 11], "tensorcor": 4, "old": 4, "sm60": 4, "ck": [4, 9], "compos": [4, 14], "ck_decod": 4, "256": 4, "fit": 4, "test": [4, 8, 9, 10, 14], "work": [4, 9, 12, 13], "mi250x": 4, "contain": 4, "argument": [4, 9], "essenti": 4, "ad": 4, "t": 4, "goal": 4, "custom": 4, "made": [4, 11], "instead": 4, "dens": 4, "want": [4, 7, 9, 12], "avoid": 4, "load": [4, 7], "perform": 4, "abl": [4, 7], "know": 4, "hand": 4, "eg": 4, "some": [4, 7, 11, 12, 13], "veri": [4, 11, 13], "blockdiagonalmask": 4, "That": [4, 13], "function": [4, 11, 12], "abil": 4, "add": 4, "qk": 4, "calcul": 4, "n_queri": 4, "most": 4, "case": [4, 12, 13], "zero": 4, "neg": 4, "infin": 4, "form": 4, "attend": 4, "children": 4, "defin": [4, 9, 11, 12, 14], "altern": [4, 12, 13], "thing": [4, 9], "when": [4, 7, 11, 12], "materi": 4, "hardcod": 4, "better": 4, "lowertriangularfrombottomrightmask": 4, "lowertriangularmaskwithtensorbia": 4, "blockdiagonalcausalmask": 4, "float32": 4, "cpu": 4, "slow": [4, 7], "don": 4, "attempt": 4, "make": [4, 11, 13], "fast": [4, 14], "debug": 4, "like": [4, 9, 11, 12, 13], "q_seqlen": 4, "k_seqlen": 4, "localattentionfrombottomrightmask": 4, "window_left": 4, "window_right": 4, "local": [4, 9, 14], "window": 4, "_left": 4, "_right": 4, "num": 4, "_queri": 4, "_kei": 4, "print": 4, "exp": 4, "4x4": 4, "4x5": 4, "illustr": 4, "total": 4, "exactli": [4, 11], "same": [4, 9, 11], "differ": [4, 9, 11], "triangular": 4, "shift": 4, "In": [4, 12, 13], "other": [4, 9, 11, 12, 14], "word": 4, "cannot": [4, 14], "nearer": 4, "final": 4, "than": [4, 7, 11], "between": [4, 11], "left": 4, "right": 4, "thei": [4, 8], "becom": [4, 11, 13], "equal": 4, "make_local_attent": 4, "window_s": 4, "lowertriangularfrombottomrightlocalattentionmask": 4, "new": [4, 9, 13, 14], "_window_s": 4, "both": [4, 9], "distanc": 4, "either": [4, 13], "less": [4, 7, 11], "i": [4, 8, 10], "e": [4, 7], "greater": 4, "green": 4, "area": 4, "grei": 4, "out": [4, 8, 10], "q_seqinfo": 4, "_seqleninfo": 4, "k_seqinfo": 4, "_batch_siz": 4, "block": [4, 8, 9, 10, 14], "diagon": 4, "each": [4, 14], "divid": 4, "handl": 4, "via": [4, 11], "from_tensor_list": 4, "list_x": 4, "linear": 4, "nn": [4, 9, 11, 12], "unbind": 4, "list_out": 4, "split": 4, "assert": 4, "from_seqlen": 4, "kv_seqlen": 4, "concaten": 4, "back": 4, "vari": 4, "m_i": 4, "correspond": 4, "sum_i": 4, "invers": 4, "token": 4, "possibl": [4, 7, 13], "make_causal_from_bottomright": 4, "blockdiagonalcausalfrombottomrightmask": 4, "prefix": 4, "blockdiagonalcausallocalattentionmask": 4, "make_local_attention_from_bottomright": 4, "blockdiagonalcausallocalattentionfrombottomrightmask": 4, "start": 4, "bottom": 4, "except": 4, "nor": 4, "farther": 4, "initi": [4, 13], "num_kei": 4, "num_queri": 4, "otherwis": 4, "vector": 4, "blockdiagonalpaddedkeysmask": 4, "_paddedseqleninfo": 4, "space": 4, "12": 4, "three": [4, 9], "max": 4, "first": [4, 11], "kv_pad": 4, "causal_diagon": 4, "upperbound": 4, "individu": 4, "unus": 4, "bc": 4, "blockdiagonalcausalwithoffsetpaddedkeysmask": 4, "offset": 4, "blockdiagonalcausallocalattentionpaddedkeysmask": 4, "more": [4, 9, 11, 12, 13, 14], "further": 4, "pagedblockdiagonalpaddedkeysmask": 4, "block_tabl": 4, "page_s": 4, "page": 4, "batch_siz": 4, "max_num_pag": 4, "num_head": [4, 9, 12, 13], "head_dim": 4, "num_group": 4, "pagedblockdiagonalcausalwithoffsetpaddedkeysmask": 4, "blockdiagonalgappykeysmask": 4, "_gappyseqinfo": 4, "gappi": 4, "kv_seqstart": 4, "make_pag": 4, "notional_pad": 4, "paged_typ": 4, "pagedblockdiagonalgappykeysmask": 4, "our": [4, 12], "actual": 4, "live": 4, "separ": 4, "convert": 4, "version": [4, 7], "blockdiagonalcausalwithoffsetgappykeysmask": 4, "unlik": 4, "address": 4, "element": 4, "were": 4, "do": [4, 7, 9, 12, 13], "two": [4, 11, 13], "100": 4, "chang": [4, 7], "would": [4, 9, 12, 13], "101": 4, "200": 4, "But": 4, "pagedblockdiagonalcausalwithoffsetgappykeysmask": 4, "band": 4, "its": 4, "_subtensor": 4, "attentionbiassubtensor": 4, "lower": 4, "aka": 4, "static": 4, "__new__": 4, "cl": 4, "context": [4, 11], "mistak": 4, "add_bia": 4, "memory_efficient_attention_parti": 4, "output": [4, 11, 12], "lse": 4, "style": 4, "extra": [4, 9, 11, 12], "data": [4, 13], "log": [4, 9], "sum": 4, "merge_attent": 4, "obtain": 4, "against": [4, 14], "disjoint": 4, "backward": 4, "quit": 4, "restrict": 4, "particular": [4, 12], "weren": 4, "anywher": 4, "attn_split": 4, "lse_split": 4, "write_ls": 4, "get": [4, 11, 12], "whole": 4, "http": 4, "arxiv": 4, "org": 4, "ab": 4, "2402": 4, "05099": 4, "result": 4, "out_ful": 4, "out1": 4, "lse1": 4, "out2": 4, "lse2": 4, "lse_ful": 4, "chunk": [4, 11], "kq": 4, "singl": 4, "num_chunk": 4, "whether": [4, 11, 13], "attn_out": 4, "lse_out": 4, "memory_efficient_attention_backward": 4, "grad": 4, "gradient": 4, "dq": 4, "dk": 4, "dv": 4, "explan": 4, "memory_efficient_attention_forward_requires_grad": 4, "memory_efficient_attention_forward": 4, "later": 4, "transpar": 7, "sputnik": 7, "These": 7, "instal": 7, "recipi": 7, "machin": 7, "compil": 7, "git": 7, "clone": 7, "github": 7, "com": 7, "fairintern": 7, "conda": 7, "xformer_env": 7, "python": 7, "activ": [7, 11], "cd": 7, "pip": 7, "r": [7, 11], "txt": 7, "issu": 7, "relat": [7, 11], "nvcc": 7, "current": 7, "runtim": 7, "match": 7, "often": 7, "unload": 7, "xx": 7, "gcc": 7, "re": [7, 12, 13], "torch_cuda_arch_list": 7, "env": 7, "variabl": 7, "architur": 7, "suggest": 7, "setup": 7, "comprehens": 7, "export": 7, "7": 7, "trigger": [7, 9], "enough": 7, "30": 7, "There": [7, 9, 13], "noth": 7, "specif": [7, 14], "tutori": 7, "host": [8, 10], "flexibl": [8, 14], "transform": [8, 12, 14], "interoper": [8, 14], "state": [8, 14], "art": [8, 14], "model": [8, 10, 11, 13, 14], "api": [8, 13], "refer": [8, 12, 14], "replac": [8, 10], "exist": [8, 10], "vit": [8, 10], "spars": [8, 10], "extend": [8, 10, 14], "zoo": [8, 10, 14], "interest": [8, 10], "done": 9, "privat": 9, "fork": 9, "progress": 9, "someth": [9, 11, 13], "share": 9, "point": 9, "directli": [9, 13], "order": 9, "submit": 9, "pr": [9, 14], "architectur": [9, 13, 14], "practic": [9, 12], "unit": 9, "loos": 9, "inherit": 9, "expos": [9, 11, 12, 13], "exact": 9, "interfac": 9, "let": [9, 12], "consid": [9, 11, 12], "nystrom": 9, "dataclass": 9, "nystromselfattentionconfig": 9, "nystromattent": 9, "def": [9, 11, 12], "__init__": [9, 11], "num_landmark": 9, "64": 9, "landmark_pool": 9, "use_razavi_pinvers": 9, "pinverse_original_init": 9, "inv_iter": 9, "paper": [9, 11], "v_skip_connect": 9, "conv_kernel_s": 9, "remark": 9, "extens": [9, 14], "explicitli": 9, "constructor": 9, "It": 9, "benchmark": [9, 14], "construct": 9, "accept": 9, "field": [9, 14], "registr": 9, "snippet": 9, "ti": 9, "open": [9, 11], "up": [9, 11], "least": 9, "tool": 9, "toolbox": 9, "relev": [9, 14], "now": [9, 12], "pick": 9, "variant": [9, 14], "them": [9, 11], "go": 9, "pytest": 9, "my_component_nam": 9, "applic": [9, 11], "lra": 9, "json": 9, "your": [9, 11, 13], "job": 9, "As": 9, "remind": 9, "inform": 9, "dedic": 9, "readm": 9, "python3": 9, "run_task": 9, "py": 9, "task": 9, "config_path": 9, "world_siz": 9, "slurm": 9, "enabl": 9, "cluster": 9, "batch_submit": 9, "c": 9, "checkpo": 9, "path": [9, 11, 13], "residu": 11, "gomez": 11, "Its": 11, "reform": 11, "unrel": 11, "lsh": 11, "mlp": 11, "process": 11, "lightli": 11, "adapt": 11, "robin": 11, "bruegger": 11, "lucidrain": 11, "x1": 11, "x2": 11, "produc": 11, "y1": 11, "y2": 11, "turn": [11, 13], "mean": [11, 14], "recov": 11, "detail": 11, "anoth": 11, "fw": 11, "effect": 11, "compar": [11, 14], "checkpoint": 11, "tradeoff": 11, "One": 11, "benefit": 11, "wrap": 11, "natur": 11, "distribut": 11, "free": 11, "help": 11, "save": 11, "commun": 11, "cost": 11, "moreov": 11, "stack": 11, "increas": 11, "norm": 11, "close": 11, "origin": 11, "formul": 11, "deal": 11, "accuraci": 11, "affect": 11, "verifi": 11, "repositori": [11, 12], "main": 11, "reversibleblock": 11, "reversiblesequ": 11, "take": [11, 12, 13], "sequenti": 11, "similarli": 11, "modulelist": 11, "f_arg": 11, "g_arg": 11, "arg_rout": 11, "rout": 11, "complet": [11, 13], "factori": 11, "model_factori": 11, "yet": 11, "compat": 11, "ddp": 11, "xformerstackconfig": 11, "block_config": 11, "xformerencoderconfig": 11, "xformerdecoderconfig": 11, "num_lay": 11, "ren": 11, "urtasun": 11, "gross": 11, "2017": 11, "network": 11, "backpropag": 11, "store": 11, "kitaev": 11, "kaiser": 11, "\u0142": 11, "levskaya": 11, "2020": 11, "sai": 12, "experi": 12, "show": 12, "how": 12, "reus": [12, 14], "imag": 12, "aspect": 12, "translat": 12, "just": 12, "well": 12, "check": 12, "notebook": 12, "exhaust": 12, "timm": 12, "vision_transform": 12, "visiontransform": 12, "timm_sparse_attent": 12, "timmsparseattent": 12, "img_siz": 12, "224": 12, "patch_siz": 12, "embed_dim": 12, "96": 12, "depth": 12, "mlp_ratio": 12, "qkv_bia": 12, "norm_lay": 12, "layernorm": 12, "suppos": 12, "snipper": 12, "precis": 12, "mind": 12, "alreadi": 12, "sever": 12, "attention_pattern": 12, "my_fancy_mask": 12, "recurs": 12, "monkei": 12, "patch": 12, "replace_attn_with_xformers_on": 12, "module_output": 12, "isinst": 12, "qkv": 12, "weight": 12, "minim": 12, "attn_mask": 12, "child": 12, "named_children": 12, "add_modul": 12, "del": 12, "awar": 12, "variat": 12, "exchang": 12, "mai": 12, "good": 12, "idea": 12, "closer": 12, "exhibit": 12, "clear": 12, "sparsiti": 12, "alter": 12, "sparsifi": 12, "fine": 13, "similar": 13, "own": 13, "everyth": 13, "requires_head_dimens": 13, "flag": 13, "defer": 13, "lot": 13, "littl": 13, "obscur": 13, "although": 13, "hopefulli": 13, "straightforward": 13, "built": 13, "intern": 13, "sure": 13, "programat": 13, "sweep": 13, "search": [13, 14], "multihead": 13, "definit": 13, "multiheaddispatch": 13, "seq": 13, "1024": 13, "384": 13, "my_config": 13, "attention_nam": 13, "easili": [13, 14], "attention_query_mask": 13, "rand": 13, "dummi": 13, "multi_head": 13, "dim_model": 13, "residual_dropout": 13, "my": 13, "focus": 14, "agnost": 14, "design": 14, "ideal": 14, "break": 14, "inspir": 14, "studi": 14, "ablat": 14, "aim": 14, "being": 14, "easi": 14, "focu": 14, "improv": 14, "across": 14, "domain": 14, "engin": 14, "effort": 14, "And": 14, "sinc": 14, "measur": 14, "heavi": 14, "everi": 14, "repo": 14, "alon": 14, "happen": 14, "anytim": 14, "somebodi": 14, "through": 14, "crowd": 14, "realli": 14, "welcom": 14, "move": 14, "too": 14, "anyth": 14}, "objects": {"xformers.components": [[0, 0, 0, "-", "attention"]], "xformers.components.attention": [[0, 1, 1, "", "Attention"], [0, 1, 1, "", "AttentionMask"], [0, 1, 1, "", "ScaledDotProduct"], [0, 5, 1, "", "build_attention"], [0, 5, 1, "", "register_attention"]], "xformers.components.attention.Attention": [[0, 2, 1, "", "forward"], [0, 2, 1, "", "from_config"]], "xformers.components.attention.AttentionMask": [[0, 3, 1, "", "device"], [0, 3, 1, "", "dtype"], [0, 2, 1, "", "from_bool"], [0, 2, 1, "", "from_multiplicative"], [0, 3, 1, "", "is_sparse"], [0, 2, 1, "", "make_causal"], [0, 2, 1, "", "make_crop"], [0, 3, 1, "", "ndim"], [0, 3, 1, "", "shape"], [0, 2, 1, "", "to"], [0, 2, 1, "", "to_bool"]], "xformers.components.attention.ScaledDotProduct": [[0, 2, 1, "", "forward"], [0, 4, 1, "", "mask"]], "xformers": [[4, 0, 0, "-", "ops"]], "xformers.ops": [[4, 1, 1, "", "AttentionOpBase"], [4, 0, 0, "module-0", "fmha"], [4, 5, 1, "", "memory_efficient_attention"]], "xformers.ops.AttentionOpBase": [[4, 2, 1, "", "not_supported_reasons"]], "xformers.ops.fmha": [[4, 0, 0, "-", "attn_bias"], [4, 0, 0, "-", "ck"], [4, 0, 0, "-", "ck_decoder"], [4, 0, 0, "-", "ck_splitk"], [4, 0, 0, "-", "cutlass"], [4, 0, 0, "-", "flash"], [4, 5, 1, "", "memory_efficient_attention_backward"], [4, 5, 1, "", "memory_efficient_attention_forward"], [4, 5, 1, "", "memory_efficient_attention_forward_requires_grad"], [4, 5, 1, "", "memory_efficient_attention_partial"], [4, 5, 1, "", "merge_attentions"]], "xformers.ops.fmha.attn_bias": [[4, 1, 1, "", "AttentionBias"], [4, 1, 1, "", "BlockDiagonalCausalFromBottomRightMask"], [4, 1, 1, "", "BlockDiagonalCausalLocalAttentionFromBottomRightMask"], [4, 1, 1, "", "BlockDiagonalCausalLocalAttentionMask"], [4, 1, 1, "", "BlockDiagonalCausalLocalAttentionPaddedKeysMask"], [4, 1, 1, "", "BlockDiagonalCausalMask"], [4, 1, 1, "", "BlockDiagonalCausalWithOffsetGappyKeysMask"], [4, 1, 1, "", "BlockDiagonalCausalWithOffsetPaddedKeysMask"], [4, 1, 1, "", "BlockDiagonalGappyKeysMask"], [4, 1, 1, "", "BlockDiagonalMask"], [4, 1, 1, "", "BlockDiagonalPaddedKeysMask"], [4, 1, 1, "", "LocalAttentionFromBottomRightMask"], [4, 1, 1, "", "LowerTriangularFromBottomRightLocalAttentionMask"], [4, 1, 1, "", "LowerTriangularFromBottomRightMask"], [4, 1, 1, "", "LowerTriangularMask"], [4, 1, 1, "", "LowerTriangularMaskWithTensorBias"], [4, 1, 1, "", "PagedBlockDiagonalCausalWithOffsetGappyKeysMask"], [4, 1, 1, "", "PagedBlockDiagonalCausalWithOffsetPaddedKeysMask"], [4, 1, 1, "", "PagedBlockDiagonalGappyKeysMask"], [4, 1, 1, "", "PagedBlockDiagonalPaddedKeysMask"]], "xformers.ops.fmha.attn_bias.AttentionBias": [[4, 2, 1, "", "materialize"]], "xformers.ops.fmha.attn_bias.BlockDiagonalCausalWithOffsetGappyKeysMask": [[4, 2, 1, "", "materialize"]], "xformers.ops.fmha.attn_bias.BlockDiagonalCausalWithOffsetPaddedKeysMask": [[4, 2, 1, "", "from_seqlens"]], "xformers.ops.fmha.attn_bias.BlockDiagonalGappyKeysMask": [[4, 2, 1, "", "from_seqlens"], [4, 2, 1, "", "make_paged"], [4, 2, 1, "", "materialize"]], "xformers.ops.fmha.attn_bias.BlockDiagonalMask": [[4, 2, 1, "", "from_seqlens"], [4, 2, 1, "", "from_tensor_list"], [4, 2, 1, "", "make_causal"], [4, 2, 1, "", "make_causal_from_bottomright"], [4, 2, 1, "", "make_local_attention"], [4, 2, 1, "", "make_local_attention_from_bottomright"], [4, 2, 1, "", "materialize"], [4, 2, 1, "", "split"]], "xformers.ops.fmha.attn_bias.BlockDiagonalPaddedKeysMask": [[4, 2, 1, "", "from_seqlens"], [4, 2, 1, "", "materialize"]], "xformers.ops.fmha.attn_bias.LowerTriangularFromBottomRightMask": [[4, 2, 1, "", "make_local_attention"]], "xformers.ops.fmha.attn_bias.LowerTriangularMask": [[4, 2, 1, "", "__new__"], [4, 2, 1, "", "add_bias"]], "xformers.ops.fmha.attn_bias.PagedBlockDiagonalGappyKeysMask": [[4, 2, 1, "", "from_seqlens"], [4, 2, 1, "", "materialize"]], "xformers.ops.fmha.attn_bias.PagedBlockDiagonalPaddedKeysMask": [[4, 2, 1, "", "from_seqlens"], [4, 2, 1, "", "materialize"]], "xformers.ops.fmha.ck": [[4, 1, 1, "", "BwOp"], [4, 1, 1, "", "FwOp"]], "xformers.ops.fmha.ck_decoder": [[4, 1, 1, "", "FwOp"]], "xformers.ops.fmha.cutlass": [[4, 1, 1, "", "BwOp"], [4, 1, 1, "", "FwOp"]], "xformers.ops.fmha.flash": [[4, 1, 1, "", "BwOp"], [4, 1, 1, "", "FwOp"]]}, "objtypes": {"0": "py:module", "1": "py:class", "2": "py:method", "3": "py:property", "4": "py:attribute", "5": "py:function"}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "class", "Python class"], "2": ["py", "method", "Python method"], "3": ["py", "property", "Python property"], "4": ["py", "attribute", "Python attribute"], "5": ["py", "function", "Python function"]}, "titleterms": {"attent": [0, 3, 4, 12, 13], "mechan": [0, 1, 13], "feedforward": 1, "api": 2, "refer": [2, 7], "multi": 3, "head": 3, "xformer": [4, 8, 9, 14], "optim": 4, "oper": 4, "memori": 4, "effici": 4, "avail": 4, "implement": 4, "bias": 4, "partial": 4, "non": 4, "autograd": 4, "posit": 5, "embed": 5, "revers": [6, 11], "layer": 6, "custom": [7, 8], "part": [7, 8, 9], "spars": [7, 12], "cuda": 7, "kernel": 7, "1": 7, "build": 7, "2": 7, "usag": 7, "welcom": 8, "s": 8, "document": 8, "compon": 8, "tutori": [8, 10], "exampl": 8, "some": 8, "extend": 9, "zoo": 9, "us": 11, "block": 11, "intro": 11, "transform": 11, "In": 11, "practic": 11, "replac": 12, "all": 12, "from": 12, "an": 12, "exist": 12, "vit": 12, "model": 12, "equival": 12, "i": 13, "m": 13, "onli": 13, "interest": 13, "test": 13, "out": 13, "ar": 13, "host": 13, "here": 13, "what": 14}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx.ext.todo": 2, "sphinx.ext.viewcode": 1, "sphinx": 56}})