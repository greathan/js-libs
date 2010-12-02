var sN = function () {
    this.clear = function () {};
    this.paint = function () {};
    this.lB = function () {};
    this.lE = function () {};
    this.setColor = function () {}
};
var jsGraphics = function (name) {};
var q1 = function (name) {
    if (document.getElementById(name) != null) {
        return document.getElementById(name)
    }
    return null
};
var q2 = function (name) {
    if (document.getElementById(name) != null) {
        return document.getElementById(name).style
    }
    return null
};
var qZ = function (name, left, top, width, height, visible, zindex, content) {
    document.writeln('<div unselectable="on" id="' + name + '" style="position:absolute; overflow:none; left:' + left + 'px; top:' + top + 'px; width:' + width + 'px; height:' + height + 'px;' + ' visibility:' + (visible ? 'visible;' : 'hidden;') + 'z-Index:' + zindex + ';">');
    document.writeln(content);
    document.writeln('</div>')
};
var gq = function (name, left, top, width, height, visible, zindex, content) {
    var h = document.createElement("div");
    h.unselectable = "on";
    h.id = name;
    h.style.position = "absolute";
    h.style.top = parseInt(top) + "px";
    h.style.left = parseInt(left) + "px";
    h.style.zIndex = zindex;
    h.style.width = width + (width == "auto" ? "" : "px");
    h.style.height = height + (height == "auto" ? "" : "px");
    h.style.visibility = (visible) ? 'visible' : 'hidden';
    h.innerHTML = content;
    return h
};
var gt = function (w6, left, top, width, height) {
    var h = new Image();
    h.unselectable = "on";
    h.style.position = "absolute";
    h.style.top = parseInt(top) + "px";
    h.style.left = parseInt(left) + "px";
    h.style.width = parseInt(width) + "px";
    h.style.height = parseInt(height) + "px";
    if (w6 != "undefined") h.src = w6;
    h.onerror = function () {
        this.onerror = null;
        if (this.parentNode) this.parentNode.removeChild(this)
    };
    return h
};
var gu = function (zC, color) {
    var h = document.createElement("div");
    h.style.position = "absolute";
    h.unselectable = "on";
    var nQ = '<div unselectable="on" id="mbglabel" style="' + 'border:1px solid ' + color + ';' + 'left:2px;top:2px;' + 'background-color:' + color + ';' + 'color:' + this.color + ';">' + '<table border="1" cellspacing="0" cellpadding="0" bordercolor="' + color + '">' + '<tr><td width="100%">' + '<font class="ptlabel" color="' + color + '">' + zC + '</font>' + '</td></tr>' + '</table>' + '<\/div>';
    nQ += '<div unselectable="on" id="mfglabel" style="' + 'border:1px solid ' + color + ';' + 'left:0px;top:0px;' + 'background-color:#FFFFCC;' + 'color:' + this.color + ';">' + '<table border="1" cellspacing="0" cellpadding="0" bordercolor=#FFFFCC>' + '<tr><td width="100%">' + '<font class="ptlabel" color="' + color + '" title="' + zC + '">' + zC + '</font>' + '</td></tr>' + '</table>' + '<\/div>';
    h.innerHTML = nQ;
    return h
};
var PerformControl = function (lM, uy, qu) {
    var maplet = uy.parentNode.q9;
    switch (qu) {
    case 1:
        maplet.panTo(parseInt(maplet.width) / 2, 0);
        break;
    case 2:
        maplet.panTo(0, parseInt(maplet.height) / 2);
        break;
    case 3:
        maplet.panTo(-parseInt(maplet.width) / 2, 0);
        break;
    case 4:
        maplet.panTo(0, -parseInt(maplet.height) / 2);
        break;
    case 5:
        maplet.zoomIn();
        break;
    case 6:
        maplet.zoomOut();
        break;
    case 7:
        maplet.setMode(ts.tb);
        break;
    case 8:
        var yoffset = parseInt(uy.style.top) - 96 + parseInt(maplet.controlCanvas.top);
        var y = parseInt((px) ? event.clientY : lM.clientY) - parseInt(maplet.offsetY) - parseInt(maplet.top);
        y -= yoffset;
        if (!px && maplet.panel.style.position != "absolute") {}
        AB = sY - Math.max(0, Math.min(sY, parseInt((parseInt(y) - 100) / gb.n5tt)));
        uy.parentNode.update(AB);
        maplet.ed58();
        maplet.setZoomLevel(AB, true, false);
        break;
    default:
        break
    }
};
var y4 = null;
var showMouseTipBox = function (x, y, x8, container) {
    try {
        if (y4 == null || y4 == "undefined") {
            if (maplet.sS != ts.tw) {
                var xu = '<table style="border:1px solid #0E347F;">' + '<tr><td>' + '<font class="ptlabel" color="#D50F1E">' + x8 + '</font>' + '</td></tr>' + '</table>';
                y4 = gq("mousetipbox", parseInt(x) + 10, parseInt(y) + 18, "auto", "auto", 1, 100, xu);
                y4.style.backgroundColor = "#FFFFFF";
                y4.style.padding = "1px"
            } else {
                y4 = gq("mousetipbox", parseInt(x) + 10, parseInt(y) + 18, "auto", "auto", 1, 100, x8)
            }
            y4.unselectable = "on";
            y4.style.MozUserSelect = "none"
        } else {
            y4.style.left = (parseInt(x) + 10) + "px";
            y4.style.top = (parseInt(y) + 18) + "px";
            y4.visibility = "visible"
        }
        if (y4 != null && (y4.parentNode == null || y4.parentNode != container)) {
            container.appendChild(y4)
        }
    } catch (lM) {}
};
var nX = function () {
    if (y4 != null) {
        if (y4.parentNode != null) {
            _removeNode(y4)
        }
        y4 = null
    }
};
var nE = function (lM) {
    return (px) ? event.srcElement.id : lM.target.id
};
var imageTileError = function (yF) {
    if (yF.width == 300 && yF.ntry == "0") {
        yF.ntry = "1";
        yF.src = yF.src + "?"
    } else if (yF.width == 300 && yF.ntry == "1") {
        yF.ntry = "2";
        yF.src = yF.src + "?"
    } else {
        yF.ntry = "3";
        yF.onerror = null;
        yF.src = strImgsvrUrl + "images/mask.gif";
        yF.style.width = "300px";
        yF.style.height = "300px"
    }
};
var imageTileOk = function (yF) {
    yF.onerror = null;
    yF.onload = null;
    yF.style.width = "300px";
    yF.style.height = "300px"
};
var fJ = function (uy, yH) {
    var cU = false;
    while (uy != null) {
        if ((typeof yH == "string" && uy.id == yH) || (uy == yH)) {
            cU = true;
            break
        }
        uy = uy.parentNode
    }
    return cU
};
var pE = function (w6, left, top, width, height, container) {
    this.pP = gt(w6, left, top, width, height);
    this.gd = 0;
    this.ge = 0;
    this.name = name;
    container.appendChild(this.pP);
    this.hide = function () {
        this.pP.style.visibility = "hidden"
    };
    this.show = function () {
        this.pP.style.visibility = "visible"
    };
    this.moveTo = function (x, y) {
        this.pP.style.left = parseInt(x) + "px";
        this.pP.style.top = parseInt(y) + "px"
    };
    this.resize = function (w, h) {
        this.pP.style.width = parseInt(w) + "px";
        this.pP.style.height = parseInt(h) + "px"
    };
    this.getName = function () {
        return this.name
    };
    this.aW = function (container) {
        container.appendChild(this.pP)
    }
};
var yq = function (h, pS, zIndex) {
    if (pS != "undefined" && pS != "") h.src = pS;
    h.style.zIndex = zIndex
};
var vB = function (uy, aB) {
    try {
        if (document.getElementById(aB) != null && uy != null) {
            document.getElementById(aB).innerHTML = vo(uy.responseText)
        }
    } catch (lM) {}
};
var vo = function (xM) {
    return xM
};
var uP = function (lM, title, content) {
    var maplet = document["mapbar-maplet"];
    var x = ((px) ? event.clientX : lM.clientX) - maplet.offsetX - maplet.left;
    var y = ((px) ? event.clientY : lM.clientY) - maplet.offsetY - maplet.top;
    maplet.wN(x, y, title, content)
};
var lbp2 = function (id, url) {
    if (typeof id == "string" && id != null && document.getElementById(id) != null && typeof url == "string" && url != null) {
        document.getElementById(id).innerHTML += url
    }
};
var y5 = null;
var waitHideTip = function () {
    if (y5) clearTimeout(y5);
    y5 = null;
    y5 = setTimeout("hideToolTipMenu()", 2000)
};
var lbp = function (id, x, y, w, wO, y6, yU, b$54s) {
    fry4K[id] = {
        x: x,
        y: y,
        w: w,
        wO: wO,
        y6: y6,
        yU: yU,
        b$54s: b$54s
    };
    EO5lx(id, x, y, w, wO, y6, yU, b$54s)
};
var EO5lx = function (id, x, y, w, wO, y6, yU, b$54s) {
    if (typeof id == "string" && id != null && document.getElementById(id) != null && typeof wO == "string" && wO != null) {
        if (!b$54s) {
            document.getElementById(id).innerHTML += "<div unselectable=\"on\" class=\"hotspotlabel\" onmouseout=\"javascript:waitHideTip();\" onmouseover=\"javascript:{var e = arguments[0];setToolTipMenu(e,e,'" + y6 + "','" + (yU) + "',e)};\" style=\"position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:0px\">" + wO + "</div>"
        } else {
            document.getElementById(id).innerHTML += "<div unselectable=\"on\"  style=\"position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:0px\">" + wO + "</div>"
        }
    }
};
var fry4K = {};
var _2q = function (lM, uy, qu) {
    var maplet = uy.parentNode.q9;
    switch (qu) {
    case 1:
        hideBubble(maplet);
        maplet.panTo(parseInt(maplet.width) / 2, 0);
        break;
    case 2:
        hideBubble(maplet);
        maplet.panTo(0, parseInt(maplet.height) / 2);
        break;
    case 3:
        hideBubble(maplet);
        maplet.panTo(-parseInt(maplet.width) / 2, 0);
        break;
    case 4:
        hideBubble(maplet);
        maplet.panTo(0, -parseInt(maplet.height) / 2);
        break;
    case 5:
        hideBubble(maplet);
        maplet.zoomIn();
        break;
    case 6:
        hideBubble(maplet);
        maplet.zoomOut();
        break;
    case 7:
        hideBubble(maplet);
        maplet.setMode(ts.tb);
        break;
    case 8:
        hideBubble(maplet);
        var yoffset = parseInt(uy.style.top) - 96 + parseInt(maplet.controlCanvas.top);
        var y = parseInt((px) ? event.clientY : lM.clientY) - parseInt(maplet.offsetY) - parseInt(maplet.top);
        y -= yoffset;
        if (!px && maplet.panel.style.position != "absolute") {}
        AB = sY - Math.max(0, Math.min(sY, parseInt((parseInt(y) - 100) / (132 / (sY - 1)))));
        uy.parentNode.update(AB);
        maplet.setZoomLevel(AB);
        break;
    default:
        break
    }
};

function CreateToolTip(qR, ya, xu) {
    var ContentInfo = '<table id="mytooltip_container" border="0" width="150" cellspacing="0" cellpadding="0"><tr><td width="100%" bgcolor="#FF0000"><table border="0" width="150" cellspacing="1" cellpadding="0">' + '<tr><td width="100%" bgcolor="#FF0000">' + '<table border="0" width="100%" cellspacing="0" cellpadding="0">' + '<tr><td width="100%" bgcolor=' + topColor + '>' + '<table border="0" width="100%" cellspacing="0" cellpadding="0" align="center">' + '<tr><td id="mytooltiptitle"width="100%" class="tooltiptitle">' + ya + '</td>' + '<td style="cursor:hand;cursor:pointer;" valign="top" align="right">' + '<img src="' + strImgsvrUrl + 'images/xclose.gif" onclick="javascript:hideToolTipMenu();">' + '</td>' + '</tr>' + '</table>' + '</td></tr>' + '<tr><td width="100%" bgcolor=' + subColor + '>' + '<table border="0" width="100%" cellpadding="0" cellspacing="0" align="center">' + '<tr><td id="mytooltipcontent" width="100%" class="tooltipcontent">' + xu + '</td></tr>' + '</table>' + '</td></tr>' + '</table>' + '</td></tr>' + '</table></td></tr></table>';
    document.getElementById(qR).innerHTML = ContentInfo;
    var yw = document.getElementById(qR).childNodes[0];
    document.getElementById(qR).style.width = yw.clientWidth;
    document.getElementById(qR).style.height = yw.clientHeight
};
var setToolTipMenu = function (x, y, ya, xu, lM) {
    var maplet = document["mapbar-maplet"];
    if (maplet != null && maplet.width && maplet.height) {
        mapwidth = maplet.width;
        mapheight = maplet.height;
        if (typeof x == "undefined" || typeof lM == "object") {
            x = ((px) ? event.clientX : lM.clientX) - maplet.offsetX - maplet.left;
            y = ((px) ? event.clientY : lM.clientY) - maplet.offsetY - maplet.top
        }
    }
    UpdateContent("ToolTip", ya, xu);
    var y8 = document.getElementById("ToolTip").clientWidth;
    var y1 = document.getElementById("ToolTip").clientHeight;
    if (x > mapwidth - y8) {
        x = x - y8
    };
    if (y > mapheight - y1) {
        y = y - y1
    };
    MoveToolTip("ToolTip", y + yoffset, x + xoffset);
    document.getElementById("ToolTip").style.visibility = 'visible'
};
var hideToolTipMenu = function () {
    document.getElementById("ToolTip").style.visibility = "hidden";
    var maplet = document["mapbar-maplet"];
    if (maplet.getContextMenu() != null) {
        maplet.getContextMenu().hide()
    }
    MoveToolTip("ToolTip", 0, 0)
};
var MoveToolTip = function (qR, nr, nq) {
    if (px) {
        document.getElementById(qR).style.top = parseInt(eval(nr)) + "px"
    } else {
        document.getElementById(qR).style.top = parseInt(eval(nr)) + "px"
    }
    document.getElementById(qR).style.left = parseInt(eval(nq)) + "px"
};
var UpdateContent = function (qR, ya, xu) {
    if (initialize == 0) {
        CreateToolTip(qR, ya, xu);
        initialize = 1
    }
    if (document.getElementById("mytooltiptitle")) document.getElementById("mytooltiptitle").innerHTML = ya;
    if (document.getElementById("mytooltipcontent")) document.getElementById("mytooltipcontent").innerHTML = xu;
    var dy4v9 = document.getElementById("ToolTip");
    var B$8XU = document.getElementById("mytooltip_container");
    if (B$8XU) {
        dy4v9.style.width = B$8XU.clientWidth + "px";
        dy4v9.style.height = B$8XU.clientHeight + "px"
    }
};
var ts = {
    tz: 1,
    tA: 2,
    ty: 3,
    tv: 5,
    tw: 6,
    tx: 7,
    tt: 8,
    lz: 9,
    ly: 10,
    tb: 11,
    np: 12,
    l3: 13,
    tM: 14,
    tu: 23,
    ta: 15,
    _Q5y4: 24
};
var showLoading = function () {
    sb++;
    if (document.getElementById("loading")) {
        document.getElementById("loading").style.display = "block";
        document.getElementById("loading").style.visibility = "visible"
    }
};
var hideLoading = function () {
    sb--;
    if (sb <= 0) {
        if (document.getElementById("loading")) {
            document.getElementById("loading").style.display = "none";
            document.getElementById("loading").style.visibility = "hidden";
            if (ad && new Date().getTime() - ac.getTime() > 9) {
                document.getElementById("sendmapload").src = "http://211.157.24.143:8001/log.jsp?type=map-mapbar&time=" + (new Date().getTime() - ac.getTime()) + "&" + Math.random();
                if (typeof ad == "undefined") {
                    var ad = false
                } else {
                    ad = false
                }
            }
        }
    }
};
var vZ = function (maplet) {
    if (document.getElementById("loading")) {
        document.getElementById("loading").style.left = ((maplet.width - parseInt(document.getElementById("loading").clientWidth)) / 2) + "px";
        document.getElementById("loading").style.top = ((maplet.height - parseInt(document.getElementById("loading").clientHeight)) / 2) + "px"
    }
};
var pc = new Array();
pc["icon1"] = strImgsvrUrl + 'images/' + "number1.gif";
pc["icon2"] = strImgsvrUrl + 'images/' + "number2.gif";
pc["icon3"] = strImgsvrUrl + 'images/' + "number3.gif";
pc["icon4"] = strImgsvrUrl + 'images/' + "number4.gif";
pc["icon5"] = strImgsvrUrl + 'images/' + "number5.gif";
pc["icon6"] = strImgsvrUrl + 'images/' + "number6.gif";
pc["icon7"] = strImgsvrUrl + 'images/' + "number7.gif";
pc["icon8"] = strImgsvrUrl + 'images/' + "number8.gif";
pc["icon9"] = strImgsvrUrl + 'images/' + "number9.gif";
pc["icon10"] = strImgsvrUrl + 'images/' + "number10.gif";
var pb = new Array();
pb["icon1"] = strImgsvrUrl + 'images/' + "number1-2.gif";
pb["icon2"] = strImgsvrUrl + 'images/' + "number2-2.gif";
pb["icon3"] = strImgsvrUrl + 'images/' + "number3-2.gif";
pb["icon4"] = strImgsvrUrl + 'images/' + "number4-2.gif";
pb["icon5"] = strImgsvrUrl + 'images/' + "number5-2.gif";
pb["icon6"] = strImgsvrUrl + 'images/' + "number6-2.gif";
pb["icon7"] = strImgsvrUrl + 'images/' + "number7-2.gif";
pb["icon8"] = strImgsvrUrl + 'images/' + "number8-2.gif";
pb["icon9"] = strImgsvrUrl + 'images/' + "number9-2.gif";
pb["icon10"] = strImgsvrUrl + 'images/' + "number10-2.gif";

function Oi58(uy) {
    if (typeof uy == "undefined" || !uy) return false;
    return uy.constructor.toString().indexOf("Array") != -1
};

function x5ft(lT) {
    var bBam4 = 0,
        h2195 = 0;
    if (typeof lT == "string" && lT) lT = document.getElementById(lT);
    if (typeof lT == "object" && lT) {
        do {
            bBam4 += lT.offsetTop || 0;
            h2195 += lT.offsetLeft || 0;
            if (lT.offsetParent == document.body) if (lT.style.position == 'absolute') break;
            lT = lT.offsetParent
        } while (lT)
    }
    return [h2195, bBam4]
};

function K_ER(e5_, KqGW0) {
    var r = null;
    if (typeof e5_ == "string" && e5_) e5_ = aa(e5_);
    if (typeof e5_ == "object" && e5_) {
        do {
            r = e5_.getAttribute(KqGW0);
            if (r || e5_.parentNode == maplet.map) break;
            e5_ = e5_.parentNode
        } while (e5_)
    }
    return r
};
var i3c4$ = function (dom, KqGW0, value, C2j89) {
    var _4W = function (d, a, v) {
        if (typeof d.setAttribute != "undefined") d.setAttribute(a, v)
    };
    var t2h6 = function (d, a, v, nc) {
        if (typeof d == "object" && d && typeof d.childNodes != "undefined") {
            var CQe = d.childNodes;
            for (var i = 0; i < CQe.length; i++) {
                var c = CQe[i];
                if (c.childNodes.length > 0) {
                    t2h6(c, a, v, nc)
                } else if (typeof c.tagName == "string" && !nc[c.tagName.toLowerCase()]) {
                    _4W(c, a, v)
                }
            }
            _4W(d, a, v)
        }
    };
    if (Oi58(C2j89)) {
        for (var i = 0; i < C2j89.length; i++) C2j89[C2j89[i].toLowerCase()] = 1
    } else {
        C2j89 = []
    }
    t2h6(dom, KqGW0, value, C2j89)
};
var b3Fi = function (dom, KqGW0) {
    var _4W = function (d, a) {
        if (typeof d.removeAttribute != "undefined") d.removeAttribute(a)
    };
    var t2h6 = function (d, a) {
        if (typeof d == "object" && d && typeof d.childNodes != "undefined") {
            var CQe = d.childNodes;
            for (var i = 0; i < CQe.length; i++) {
                var c = CQe[i];
                if (c.childNodes.length > 0) {
                    t2h6(c, a)
                } else if (typeof c.tagName == "string") {
                    _4W(c, a)
                }
            }
            _4W(d, a)
        }
    };
    t2h6(dom, KqGW0)
};

function _getStyle(e5_, SiCa, $q_9g) {
    var x = null;
    if (typeof e5_ == "string" && e5_) x = document.getElementById(e5_);
    else x = e5_;
    if (typeof x != "object" || !x) return "";
    if (!SiCa && !$q_9g) return "";
    if (SiCa && !$q_9g) $q_9g = SiCa;
    if (!SiCa && $q_9g) SiCa = $q_9g;
    var y = "";
    if (x.currentStyle) {
        y = x.currentStyle[SiCa]
    } else if (document.defaultView && document.defaultView.getComputedStyle) {
        var hAU = document.defaultView.getComputedStyle(x, null);
        if (t4E0 || $x2) {
            y = hAU ? hAU.getPropertyValue(SiCa) : ""
        } else {
            y = hAU ? hAU.getPropertyValue($q_9g) : ""
        }
    }
    return y
};

function VS8w8(s, d) {
    if (isNaN(parseInt(s))) return (typeof d != "number" ? 0 : d);
    else return parseInt(s)
};

function _isInsidePolygon(pt, kr12) {
    for (var c = false, i = -1, l = kr12.length, qC = l - 1; ++i < l; qC = i) {
        if (((kr12[i].y <= pt.y && pt.y < kr12[qC].y) || (kr12[qC].y <= pt.y && pt.y < kr12[i].y)) && (pt.x < (kr12[qC].x - kr12[i].x) * (pt.y - kr12[i].y) / (kr12[qC].y - kr12[i].y) + kr12[i].x)) c = !c
    }
    return c
};

function _isInsideRect(pt, rect) {
    if (rect.max.x > pt.x && rect.min.x <= pt.x && rect.max.y > pt.y && rect.min.y <= pt.y) return true;
    return false
};

function _isRectint(J8L, rR4) {
    return Math.abs((J8L.min.x + J8L.max.x) / 2 - (rR4.min.x + rR4.max.x) / 2) < ((J8L.max.x + rR4.max.x - J8L.min.x - rR4.min.x) / 2) && Math.abs((J8L.min.y + J8L.max.y) / 2 - (rR4.min.y + rR4.max.y) / 2) < ((J8L.max.y + rR4.max.y - J8L.min.y - rR4.min.y) / 2)
};

function _IsIntersect(_Ma8, gPi47) {
    var d = (_Ma8.end.y - _Ma8.start.y) * (gPi47.end.x - gPi47.start.x) - (gPi47.end.y - gPi47.start.y) * (_Ma8.end.x - _Ma8.start.x);
    if (d == 0) {
        return false
    } else {
        var x0 = ((_Ma8.end.x - _Ma8.start.x) * (gPi47.end.x - gPi47.start.x) * (gPi47.start.y - _Ma8.start.y) + (_Ma8.end.y - _Ma8.start.y) * (gPi47.end.x - gPi47.start.x) * _Ma8.start.x - (gPi47.end.y - gPi47.start.y) * (_Ma8.end.x - _Ma8.start.x) * gPi47.start.x) / d;
        var As = ((_Ma8.end.y - _Ma8.start.y) * (gPi47.end.y - gPi47.start.y) * (gPi47.start.x - _Ma8.start.x) + (_Ma8.end.x - _Ma8.start.x) * (gPi47.end.y - gPi47.start.y) * _Ma8.start.y - (gPi47.end.x - gPi47.start.x) * (_Ma8.end.y - _Ma8.start.y) * gPi47.start.y) / (-d);
        if ((x0 - _Ma8.start.x) * (x0 - _Ma8.end.x) <= 0 && (x0 - gPi47.start.x) * (x0 - gPi47.end.x) <= 0 && (As - _Ma8.start.y) * (As - _Ma8.end.y) <= 0 && (As - gPi47.start.y) * (As - gPi47.end.y) <= 0) {
            return true
        }
    }
    return false
};
var I6O1 = function (uV4) {
    if (window.event) {
        return window.event
    } else {
        while (uV4.caller) uV4 = uV4.caller;
        if (typeof uV4.arguments != "undefined" && uV4.arguments && uV4.arguments.length > 0) {
            if (uV4.arguments[0].constructor.toString().indexOf("Event")) return uV4.arguments[0]
        }
    }
    return null
};
var B982 = function (lM) {
    if (typeof lM == "undefined") return;
    if (window.event) {
        window.event.returnValue = false;
        window.event.cancelBubble = true
    } else {
        lM.preventDefault();
        lM.stopPropagation()
    }
};

function aa(lT) {
    if (typeof lT == 'string') {
        return document.getElementById(lT)
    } else {
        return null
    }
};
_removeNode = document.all ?
function () {
    var d;
    return function (n) {
        if (n && n.tagName != 'BODY') {
            d = d || document.createElement('div');
            d.appendChild(n);
            d.innerHTML = ''
        }
    }
}() : function (n) {
    if (n && n.parentNode && n.tagName != 'BODY') {
        n.parentNode.removeChild(n)
    }
};
l7WuP = function (s) {
    var r = new RegExp("<.*?>|\r|\n", "gi");
    return function (s) {
        return s.replace(r, "")
    }
}();
var foy21 = function (URL, WS16q, $54Wt, AKe87, N35g1, $P0$8, aB) {
    this.URL = URL;
    this.WS16q = WS16q;
    this.D6f9E = N35g1;
    this.uj7u = $P0$8;
    this.aB = aB;
    this.$54Wt = $54Wt;
    this.AKe87 = AKe87
};
foy21.prototype.f7c0 = function () {
    var Dwc9 = document.getElementById("scriptTemp");
    if (Dwc9) {
        _removeNode(Dwc9)
    }
    var s = document.createElement("script");
    s.language = "javascript";
    s.type = "text/javascript";
    s.id = (this.AKe87 && this.AKe87 == true) ? "Temp" + Math.random() : "scriptTemp";
    s.src = (this.$54Wt && this.$54Wt == true) ? this.URL + "?" + Math.random() : this.URL;
    var Ii6 = this.WS16q ? (this.WS16q) : parseInt;
    var v00 = this.D6f9E;
    var qV33 = this.uj7u;
    var aB = typeof this.aB == "undefined" || !this.aB ? [] : this.aB;
    s.onload = s.onreadystatechange = function () {
        if (typeof ActiveXObject != "undefined") {
            if (s.readyState == "loaded" || s.readyState == "complete") {
                if (typeof Ii6 == "function") {
                    aB.push(s.id);
                    Ii6.apply(v00, aB)
                }
                s.onerror = null;
                s.onload = null;
                s.onreadystatechange = null
            }
        } else {
            if (typeof Ii6 == "function") {
                aB.push(s.id);
                Ii6.apply(v00, aB)
            }
            s.onerror = null;
            s.onload = null;
            s.onreadystatechange = null
        }
    };
    s.onerror = function () {
        if (s && s.parentNode) s.parentNode.removeChild(s);
        if (typeof qV33 == "function") {
            aB.push(s.id);
            qV33.apply(v00, aB)
        }
        s.onerror = null;
        s.onload = null;
        s.onreadystatechange = null
    };
    document.body.insertBefore(s, document.body.firstChild)
};
var $1f = function () {
    if (document.body) return document.documentElement.scrollTop;
    else return document.body.scrollTop
};
var mm685 = function () {
    if (document.body) return document.documentElement.scrollLeft;
    else return document.body.scrollLeft
};
var sC = function (x, y, xu) {
    document.getElementById("myalert").style.top = (parseInt(y) - 60 + $1f()) + "px";
    document.getElementById("myalert").style.left = (parseInt(x) - 100 + mm685()) + "px";
    var xs = (en == 1) ? "Close" : tX("%u5175%uE760");
    document.getElementById("myalert").innerHTML = '<table width="196px" border="0" cellpadding="0" cellspacing="0" style="border:2px solid #0E347F;"><tr><td height="100px" align="center" valign="middle" bgcolor="#FFFFFF"><table width="167px" height="79px" border="0" cellpadding="0" cellspacing="0"><tr><td height="55px" align="center" valign="middle" style="font-size: 12px;color: #0065AD;">' + xu + '</td></tr><tr><td height="24px" align="center" valign="middle"><input type="button" value="' + xs + '" onClick="document.getElementById(\'myalert\').style.visibility = \'hidden\'"onMouseOver="style.background=\'#DEE7EF\';style.cursor=\'hand\';style.cursor=\'pointer\'"onMouseOut="this.style.background=\'FDFAF3\'" style="font-size: 9pt; border: 1px solid #4A799C;background-color: #FDFAF3"></td></tr></table></td></tr></table>';
    document.getElementById("myalert").style.visibility = "visible"
};
var gP = function (xu) {
    if (gQ) sC(300, 100, xu)
};
var hy3 = new RegExp("<(?:!(?:--[\\s\\S]*?--\\s*)?(>)\\s*|(?:script|style|SCRIPT|STYLE)[\\s\\S]*?<\\/(?:script|style|SCRIPT|STYLE)>)", "gi");
var f62B8 = new RegExp("[\\r\\n]", "gi");
var J8H7F = function (html, S$8T3) {
    if (typeof S$8T3 != "boolean") S$8T3 = false;
    if (typeof html == "string" && html) {
        var s = html.replace(hy3, "");
        if (S$8T3) s = s.replace(f62B8, "");
        return s
    } else {
        return html
    }
};
var f$N = null;
var D69D = function (s) {
    var size = {
        w309r: 0,
        Uu_4: 0,
        Vcbeh: 0,
        ch: 0
    };
    if (typeof s == "string" && s && maplet && maplet.panel) {
        if (!f$N) {
            f$N = document.createElement("DIV");
            with(f$N.style) {
                position = "absolute";
                left = -Number.MAX_VALUE + "px";
                top = -Number.MAX_VALUE + "px"
            }
            maplet.sF.div.appendChild(f$N)
        }
        f$N.innerHTML = s;
        size.w309r = f$N.offsetWidth;
        size.Uu_4 = f$N.offsetHeight;
        size.Vcbeh = f$N.clientWidth;
        size.ch = f$N.clientHeight;
        f$N.innerHTML = ""
    }
    return size
};
var cq = {
    pu: {},
    vp: function (li) {
        return this.pu[li] ||
        function (pu, xT) {
            var v6;
            if (xT.indexOf(",") == -1) {
                var pk = -1;
                var fE = 0;
                var ub = '';
                var fH = '';
                if (xT != null && parseInt(xT.charAt(0), 36) >= 33) {
                    fH = xT.charAt(0);
                    xT = xT.substring(1)
                }
                for (var i = 0; i < (xT.length - (c75 ? 1 : 0)); i++) {
                    var n8 = parseInt(xT.charAt(i), 36) - 10;
                    if (n8 >= 17) n8 = n8 - 7;
                    ub += (n8).toString(36);
                    if (n8 > fE) {
                        pk = i;
                        fE = n8
                    }
                }
                var n9 = parseInt(ub.substring(0, pk), 16);
                var n0 = parseInt(ub.substring(pk + 1), 16);
                if ("X" == fH) {
                    n9 = -n9
                }
                if ("Y" == fH) {
                    n0 = -n0
                }
                v6 = new Array();
                v6[0] = (n9 + n0 - parseInt(strLicenseKey)) / 2;
                v6[1] = (n0 - v6[0]) / 100000.0;
                v6[0] /= 100000.0;
                if (v6[0] > 180) v6[0] -= 360;
                pu[xT] = v6;
                return v6
            } else {
                v6 = f21(xT);
                pu[xT] = v6;
                return v6
            }
        }(this.pu, li)
    },
    zn: function (li, lf, jP566) {
        if (typeof jP566 != "boolean") jP566 = false;
        if (typeof li != "undefined" && typeof lf != "undefined") {
            this.lf = parseFloat(lf);
            this.li = parseFloat(li)
        }
        if (apiType == 1 && !jP566) {
            return q1l(this.li + "," + this.lf).join(",")
        } else {
            var v6 = '';
            var uh = parseInt(parseFloat(Math.max(-90, Math.min(90, this.lf))) * 100000);
            var uj = parseInt(parseFloat((this.li < 0) ? (this.li + 360) : this.li) * 100000);
            var pl = uj - uh + parseInt(strLicenseKey);
            var pm = uj + uh;
            if (pl < 0) {
                v6 = 'X';
                pl = -pl
            }
            if (pm < 0) {
                v6 = 'Y';
                pm = -pm
            }
            var ph = (pl).toString(16);
            var pi = (pm).toString(16);
            for (var i = 0; i < ph.length; i++) {
                var qv = parseInt(ph.charAt(i), 16);
                v6 += (((qv >= 10) ? (qv + 7) : qv) + 10).toString(36)
            }
            v6 += 'z';
            for (var qC = 0; qC < pi.length; qC++) {
                var Jo41 = parseInt(pi.charAt(qC), 16);
                v6 += (((Jo41 >= 10) ? (Jo41 + 7) : Jo41) + 10).toString(36)
            }
            if (c75) {
                v6 += v6.charAt(c75)
            }
            return v6.toUpperCase()
        }
    }
};
var xE = function (xj) {
    var c = '';
    for (var i = 0; i < xj.length; i++) {
        var zh = xj.charCodeAt(i).toString(36).toUpperCase();
        if (zh.length <= 1) {
            zh = "0" + zh
        }
        c += zh
    }
    return c
};
var sdc = function (xj) {
    var c = '';
    for (var i = 0; i < xj.length; i += 2) {
        var zh = xj.substring(i, i + 2);
        c += String.fromCharCode(parseInt(zh, 36))
    }
    return c
};
var tX = function (xj) {
    xj = unescape(xj);
    var c = String.fromCharCode(xj.charCodeAt(0) - xj.length);
    for (var i = 1; i < xj.length; i++) {
        c += String.fromCharCode(xj.charCodeAt(i) - c.charCodeAt(i - 1))
    }
    return c
};

function q1l(o91NG) {
    var b8q0 = o91NG.split(",");
    var x = parseFloat(b8q0[0]) * 100000 % 36000000;
    var y = parseFloat(b8q0[1]) * 100000 % 36000000;
    var M$682 = parseInt(k6A5f(x, y) + x);
    var $38c = parseInt(gid(x, y) + y);
    return [M$682 / 100000.0, $38c / 100000.0]
};

function f21(o91NG) {
    var b8q0 = o91NG.split(",");
    var x = parseFloat(b8q0[0]) * 100000 % 36000000;
    var y = parseFloat(b8q0[1]) * 100000 % 36000000;
    var o51_4 = parseInt(-_a7(x, y) + x);
    var NmG5 = parseInt(-WqDmW(x, y) + y);
    o51_4 = parseInt(-_a7(o51_4, NmG5) + x + ((x > 0) ? 1 : -1));
    NmG5 = parseInt(-WqDmW(o51_4, NmG5) + y + ((y > 0) ? 1 : -1));
    return [o51_4 / 100000.0, NmG5 / 100000.0]
};

function k6A5f(x, y) {
    return Pwo45(x, y)
};

function gid(x, y) {
    return pCs9(x, y)
};

function _a7(x, y) {
    return Pwo45(x, y)
};

function WqDmW(x, y) {
    return pCs9(x, y)
};

function Pwo45(x, y) {
    return pQe6(v2JT9(gM57_(y, x), k9T(x, y)), v2JT9(j182(x, y), YG9(y, x)))
};

function pCs9(x, y) {
    return pQe6(v2JT9(j182(y, x), k9T(x, y)), v2JT9(gM57_(x, y), YG9(y, x)))
};

function v2JT9(x, y) {
    return x * y
};

function pQe6(x, y) {
    return x + y
};

function gM57_(x, y) {
    return Math.cos(x / 100000)
};

function j182(x, y) {
    return Math.sin(x / 100000)
};

function YG9(x, y) {
    return x / 9000
};

function k9T(x, y) {
    return x / 18000
};
var fD = function (name, left, top, width, height, visible, zindex, content, container) {
    this.n7 = content;
    this.container = container;
    this.name = name;
    this.qe = 1;
    this.hide = function () {
        this.style.visibility = "hidden"
    };
    this.show = function () {
        this.style.visibility = "visible"
    };
    this.setVisible = function (visible) {
        if (this.style.display != (visible ? "" : "none")) this.style.display = visible ? "" : "none"
    };
    this.moveTo = function (x, y) {
        eval(document.body.scrollTop);
        this.style.left = parseInt(x) + "px";
        this.style.top = parseInt(y) + "px"
    };
    this.resize = function (w, h) {
        if (parseInt(w) >= 0 && parseInt(h) >= 0) {
            this.style.width = parseInt(w) + "px";
            this.style.height = parseInt(h) + "px"
        }
    };
    this.nz = function () {
        return parseInt(this.style.height)
    };
    this.nH = function () {
        return parseInt(this.style.width)
    };
    this.qn = function (x, y) {
        return (x > parseInt(this.style.left) && x < (parseInt(this.style.left) + parseInt(this.style.width)) && y > parseInt(this.style.top) && y < (parseInt(this.style.top) + parseInt(this.style.height)))
    };
    this.appendChild = function (fK) {
        try {
            this.div.appendChild(fK)
        } catch (lM) {}
    };
    this.removeChild = function (fK) {
        try {
            _removeNode(fK)
        } catch (lM) {}
    };
    this.clear = function () {
        this.div.innerHTML = ""
    };
    this.clean = this.clear;
    this.getName = function () {
        return this.name
    };
    try {
        this.div = gq(this.name, left, top, width, height, visible, zindex, content);
        this.div.unselectable = "on";
        if (this.container) this.container.appendChild(this.div);
        this.style = this.div.style;
        this.graphics = (px) ? new sN() : new jsGraphics(this.name)
    } catch (lM) {}
};
var MBound = function (tj, tl, s4, s6, tp, s0) {
    this.s4 = s4;
    this.tj = tj;
    this.s6 = s6;
    this.tl = tl;
    this.s0 = (typeof s0 == "undefined") ? sY : parseInt(s0);
    this.tp = (typeof tp == "undefined") ? te : parseInt(tp);
    this.qn = function (lat, lon) {
        if (this.s4 < lat || this.tj > lat) return false;
        var g2 = (lon - this.tl) % 360;
        if (g2 < 0) g2 += 360;
        return ((this.s6 - this.tl) >= g2)
    }
};
var MBrush = function (xt, x5, x6, cr, xn, yc, xo, fh) {
    this.color = (typeof xt == "undefined") ? "#FF0000" : xt;
    this.stroke = (typeof x5 == "undefined") ? 5 : parseInt(x5);
    this.style = (typeof x6 == "undefined") ? 0 : parseInt(x6);
    this.fill = (typeof cr == "undefined") ? false : cr;
    this.bgcolor = (typeof xn == "undefined") ? this.color : xn;
    this.transparency = (typeof yc == "undefined") ? transparencyLevel : parseInt(yc);
    this.bgtransparency = (typeof xo == "undefined") ? transparencyLevel / 2 : parseInt(xo);
    this.arrow = (typeof fh == "undefined") ? bArrow : fh;
    this.overlap = {
        enable: false,
        stroke: null,
        color: "white",
        transparency: transparencyLevel
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MBrush'
    }
};
var MPoint = function (xQ, Iu6, encrypt, levelGroup) {
    this.pid = null;
    this.lat = null;
    this.lon = null;
    this.maplet = null;
    var w36 = null;
    var I6jT3 = null;
    this.mapX = null;
    this.mapY = null;
    this.q1C = null;
    this.encrypt = (typeof encrypt == "boolean" ? encrypt : true);
    this.levelGroup = (typeof levelGroup == "number" && levelGroup >= 0 && levelGroup <= 3 ? levelGroup : 3);
    if (typeof xQ != "undefined" || typeof Iu6 != "undefined") {
        if (Oi58(xQ)) xQ = xQ.join(",");
        if (typeof xQ == "string" && xQ.indexOf(",") != -1) {
            if (this.encrypt) {
                this.pid = xQ;
                this.lon = parseFloat(xQ.split(",")[0]);
                this.lat = parseFloat(xQ.split(",")[1])
            } else {
                I6jT3 = parseFloat(xQ.split(",")[0]);
                w36 = parseFloat(xQ.split(",")[1])
            }
        } else if (!isNaN(parseFloat(xQ)) && !isNaN(parseFloat(Iu6))) {
            if (this.encrypt) {
                this.pid = xQ + "," + Iu6;
                this.lon = parseFloat(xQ);
                this.lat = parseFloat(Iu6)
            } else {
                I6jT3 = xQ;
                w36 = Iu6
            }
        } else {
            this.pid = (typeof getPid == "undefined") ? xQ : getPid(xQ);
            if (apiType == 1) {
                var o7u = cq.vp(this.pid);
                I6jT3 = o7u[0];
                w36 = o7u[1];
                this.lon = parseFloat(this.pid.split(",")[0]);
                this.lat = parseFloat(this.pid.split(",")[1])
            }
        }
        if (this.encrypt && I6jT3 == null && w36 == null) {
            var r = cq.vp(this.pid);
            I6jT3 = r[0];
            w36 = r[1]
        }
    };
    this.inLevelRange = function (ce5) {
        if (ce5 >= 0 && ce5 <= 3 && this.levelGroup == 3) return true;
        else if (ce5 >= 4 && ce5 <= 7 && this.levelGroup >= 2) return true;
        else if (ce5 >= 8 && ce5 <= 11 && this.levelGroup >= 1) return true;
        else if (ce5 >= 12 && ce5 <= 18 && this.levelGroup >= 0) return true;
        else return false
    };
    this.getPid = function () {
        if (!this.encrypt && !this.pid) {
            this.setMapCoords(this.mapX, this.mapY)
        }
        return this.pid
    };
    this.setMapCoords = function (x, y) {
        this.mapX = x;
        this.mapY = y;
        I6jT3 = this.maplet.zp(x, y);
        w36 = this.maplet.zo(x, y);
        this.pid = cq.zn(I6jT3, w36);
        if (apiType == 1) {
            this.lon = this.pid.split(",")[0];
            this.lat = this.pid.split(",")[1]
        } else if (this.lon != null) {
            var r = q1l(I6jT3 + "," + w36);
            this.lon = r[0];
            this.lat = r[1]
        }
    };
    this.k9d = function () {
        this.mapX = this.maplet.zl(I6jT3, w36);
        this.mapY = this.maplet.zm(w36, I6jT3)
    };
    this.initialize = function (maplet) {
        this.maplet = maplet;
        this.k9d()
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MPoint'
    }
};
var lQ = {
    nh: function (id, uO, uM, lG, callback) {
        uO = parseInt(uO);
        uM = parseInt(uM);
        lG = parseInt(lG);
        if (uO == uM) {
            lQ.fF(uO, id, uM, callback);
            return
        }
        this.fF(uO, id);
        var yN = Math.max(100, Math.round(lG / Math.abs(uM - uO)));
        var lo = Math.max(1, Math.abs((uM - uO) / (lG / yN)));
        var uN = uO + lo;
        if (uO > uM) {
            uN = uO - lo
        }
        setTimeout("lQ.nh('" + id + "'," + uN + "," + uM + "," + (lG - yN) + ",'" + callback + "')", (yN))
    },
    ni: function (id, lG) {
        if (typeof lG == "undefined") {
            lG = 1000
        }
        this.nh(id, 0, 100, lG)
    },
    nj: function (id, lG) {
        if (typeof lG == "undefined") {
            lG = 1000
        }
        this.nh(id, 100, 0, lG)
    },
    fF: function (opacity, id, l2, callback) {
        var ai = document.getElementById(id).style;
        ai.opacity = (opacity / 100);
        ai.MozOpacity = (opacity / 100);
        ai.qK = (opacity / 100);
        ai.filter = "alpha(opacity=" + opacity + ")";
        if (opacity == l2 && callback != null) {
            eval(callback)
        }
    },
    qH: function (id, nJ, nK) {
        document.getElementById(id).style.left = parseInt(nJ) + "px";
        document.getElementById(id).style.top = parseInt(nK) + "px"
    },
    move: function (id, xa, xb, nJ, nK, lG, callback) {
        this.qH(id, xa, xb);
        this.panTo(id, nJ, nK, lG, callback)
    },
    panTo: function (id, nJ, nK, lG, callback) {
        nJ = parseInt(nJ);
        nK = parseInt(nK);
        var xa = parseInt(document.getElementById(id).style.left);
        var xb = parseInt(document.getElementById(id).style.top);
        lG = parseInt(lG);
        var g4 = nJ - xa;
        var g5 = nK - xb;
        if (g4 == 0 && g5 == 0) {
            if (callback != null) {
                eval(callback)
            }
            return
        }
        var g3 = Math.abs(g4) + Math.abs(g5);
        var xd = Math.max(5, g3 / (lG / 100));
        var yN = Math.max(100, Math.round(lG / (g3 / xd)));
        var xh = g4 * xd / g3;
        var xi = g5 * xd / g3;
        var uf = xa + xh;
        var ug = xb + xi;
        if (g3 < xd) {
            uf = nJ;
            ug = nK
        }
        this.qH(id, uf, ug);
        setTimeout("lQ.panTo('" + id + "'," + nJ + "," + nK + "," + (lG - yN) + ",'" + callback + "')", (yN))
    }
};
var f1 = {
    fx: [],
    uo: 100,
    nk: function (img, src, w, h) {
        if (typeof img != "object" || !img) return;
        this.fx[this.fx.length] = new Image();
        var pn = this.fx.length - 1;
        this.fx[pn].q9 = img;
        img.style.filter = "alpha(opacity=" + this.uo + ");";
        img.style.MozOpacity = (this.uo / 100.0);
        img.style.opacity = (this.uo / 100.0);
        img.style.qK = (this.uo / 100);
        if (typeof w != "undefined") {
            img.width = parseInt(w) + "px";
            this.fx[pn].width = parseInt(w) + "px"
        }
        if (typeof h != "undefined") {
            img.height = parseInt(h) + "px";
            this.fx[pn].height = parseInt(h) + "px"
        }
        this.fx[pn].container = this;
        this.fx[pn].pn = pn;
        this.fx[pn].ln = "0";
        this.fx[pn].onload = function () {
            if (typeof w != "undefined") {
                this.width = parseInt(w) + "px"
            }
            if (typeof h != "undefined") {
                this.height = parseInt(h) + "px"
            }
            this.q9.src = this.src;
            this.q9.style.filter = null;
            this.q9.style.MozOpacity = 1;
            this.q9.style.opacity = 1;
            this.q9.style.qK = 1;
            if (typeof w != "undefined" && !rs) {
                this.q9.width = parseInt(w) + "px";
                this.q9.style.width = parseInt(w) + "px"
            }
            if (typeof h != "undefined" && !rs) {
                this.q9.height = parseInt(h) + "px";
                this.q9.style.height = parseInt(h) + "px"
            }
            this.q9.setAttribute("done", "1");
            this.ln = "1";
            this.container[this.pn] = null;
            this.container.clearCache();
            this.container = null;
            this.q9 = null;
            this.onload = null;
            this.onerror = null
        };
        this.fx[pn].onerror = function () {
            if (rs) return false;
            if (typeof w != "undefined") {
                this.width = parseInt(w) + "px"
            }
            if (typeof h != "undefined") {
                this.height = parseInt(h) + "px"
            }
            this.q9.style.filter = null;
            if (typeof w != "undefined" && !rs) {
                this.q9.width = parseInt(w) + "px"
            }
            if (typeof h != "undefined" && !rs) {
                this.q9.height = parseInt(h) + "px"
            }
            this.ln = "1";
            this.q9.width = "300";
            this.q9.height = "300";
            this.q9.style.width = "300";
            this.q9.style.height = "300";
            this.q9.src = sX;
            this.q9.style.backgroundColor = "#ebeae8";
            this.q9.setAttribute("done", "1");
            this.container[this.pn] = null;
            this.container.clearCache();
            this.container = null;
            this.q9 = null;
            this.onload = null;
            this.onerror = null
        };
        showLoading();
        this.fx[pn].src = src
    },
    clearCache: function () {
        hideLoading();
        var cp = 1;
        for (var i = 0; i < this.fx.length; i++) {
            if (this.fx[i] != null && this.fx[i].ln == "0") {
                cp = 0
            } else if (this.fx[i] != null) {
                this.fx[i].q9 = null;
                this.fx[i].container = null;
                this.fx[i].onload = null;
                this.fx[i].onerror = null;
                delete(this.fx[i])
            }
        }
        if (cp) {
            for (var qC = 0; i < this.fx.length; qC++) {
                if (this.fx[qC] != null) {
                    this.fx[qC].q9 = null;
                    this.fx[qC].container = null;
                    this.fx[qC].onload = null;
                    this.fx[qC].onerror = null;
                    delete(this.fx[qC])
                }
            }
            this.fx.length = 0;
            MEvent.trigger(this, "clean")
        }
    }
};
var gb = function (options) {
    this.initialize = function (maplet) {
        this.maplet = maplet;
        var content = [];
        O74f(content, "ctrlPan", 0, 0, 50, 49, -25, 0, "_pan_map");
        O74f(content, "ctrlZoomOut", 14, 54, 24, 24, 0, 0, "_zo_map");
        var j3V = K2t5P();
        O74f(content, "ctrlRuler", 14, 78, 24, j3V, 0, -24);
        O74f(content, "ctrlZoomIn", 14, 77 + j3V, 24, 27, 0, -181, "_zi_map");
        O74f(content, "ctrlSlider", 0, 0, 17, 7, -25, -51);
        content.push("<map name=\"_pan_map\" id=\"_pan_map\">");
        content.push("<area id=\"_fb_n_ctrl_imap\" shape=\"poly\" title=\"" + xN[1] + "\" coords=\"35,6,39,3,42,2,47,1,51,1,56,2,61,4,63,6,63,7,55,15,50,13,48,13,43,15,35,7\" onFocus=\"this.blur()\" onclick=\"PerformControl(event, this,2);\"/>");
        content.push("<area id=\"_fb_s_ctrl_imap\" shape=\"poly\" title=\"" + xN[3] + "\" coords=\"64,38,55,29,50,31,48,31,43,29,34,38,34,39,37,42,42,44,47,45,51,45,56,44,61,42,64,39\" onFocus=\"this.blur()\" onclick=\"PerformControl(event, this,4);\"/>");
        content.push("<area id=\"_fb_w_ctrl_imap\" shape=\"poly\" title=\"" + xN[0] + "\" coords=\"34,8,42,16,40,21,40,23,42,28,33,37,32,37,30,35,28,30,27,25,27,21,28,16,30,11,33,8\" onFocus=\"this.blur()\" onclick=\"PerformControl(event, this,1);\"/>");
        content.push("<area id=\"_fb_e_ctrl_imap\" shape=\"poly\" title=\"" + xN[2] + "\" coords=\"64,8,56,16,58,21,58,23,56,28,65,37,66,37,68,35,70,30,71,25,71,21,70,16,68,11,65,8\" onFocus=\"this.blur()\" onclick=\"PerformControl(event, this,3);\" />");
        content.push("<area id=\"_fb_m_ctrl_imap\" shape=\"circle\" title=\"" + xN[4] + "\" coords=\"48,22,8\" onclick=\"PerformControl(event, this,7);\" onFocus=\"this.blur()\" />");
        content.push("</map>");
        content.push("<map name=\"_zo_map\" id=\"_zo_map\">");
        content.push("<area id=\"_fb_zo_ctrl_imap\" shape=\"poly\" title=\"" + xN[6] + "\" coords=\"8,0,5,1,1,5,0,8,0,21,20,21,20,8,19,5,15,1,12,0\" onFocus=\"this.blur()\" onclick=\"PerformControl(event, this,5);\" />");
        content.push("</map>");
        content.push("<map name=\"_zi_map\" id=\"_zi_map\">");
        content.push("<area id=\"_fb_zi_ctrl_imap\" shape=\"poly\" title=\"" + xN[7] + "\" coords=\"0,183,0,196,1,199,5,203,8,204,12,204,15,203,19,199,20,196,20,183\" onFocus=\"this.blur()\" onclick=\"PerformControl(event, this,6);\" />");
        content.push("</map>");
        content.push("<div id=\"_fb_ctrl_leveltip\" style=\"position:absolute;left:0px;top:0px;width:" + gb.P669H + "px;height:121px;display:none;\">");
        m74(content, "_fb_ctrl_lt_s", gb.Y4Nf[0], 0, 0, gb.P669H, gb.eP34, -26, -65, 13);
        m74(content, "_fb_ctrl_lt_c", gb.Y4Nf[1], 0, 40, gb.P669H, gb.eP34, -26, -65, 8);
        m74(content, "_fb_ctrl_lt_p", gb.Y4Nf[2], 0, 72, gb.P669H, gb.eP34, -26, -65, 4);
        m74(content, "_fb_ctrl_lt_cr", gb.Y4Nf[3], 0, 104, gb.P669H, gb.eP34, -26, -65, 0);
        content.push("</div>");
        this.dom = new fD("LayerControl", h1C2, r2pe, 0, 0, true, 3, content.join(""), this.maplet.panel);
        v76K3 = aa("ctrlPan");
        v059 = aa("ctrlZoomOut");
        Tc6 = aa("ctrlZoomIn");
        F$Xu = aa("ctrlRuler");
        t30 = aa("ctrlSlider");
        K7L = aa("_fb_ctrl_leveltip");
        E$d = aa("_fb_ctrl_lt_s");
        r36L = aa("_fb_ctrl_lt_c");
        g2ja = aa("_fb_ctrl_lt_p");
        _qV = aa("_fb_ctrl_lt_cr");
        t30.firstChild.id = "ctrlSliderImg";
        aa("_pan_map").q9 = this.maplet;
        aa("_zo_map").q9 = this.maplet;
        aa("_zi_map").q9 = this.maplet;
        usV["mousedown"] = MEvent.bindDom(t30, "mousedown", this, Y6_u);
        usV["mousemove"] = MEvent.bindDom(document, "mousemove", this, M82w);
        usV["mouseup"] = MEvent.bindDom(document, "mouseup", this, oU5wL);
        usV["click"] = MEvent.bindDom(F$Xu, "click", this, oDv);
        usV["mouseover"] = MEvent.bindDom(F$Xu, "mouseover", this, r39);
        usV["mouseout"] = MEvent.bindDom(F$Xu, "mouseout", this, x3s7P);
        usV["mouseout"] = MEvent.bindDom(F$Xu, "mousedown", this, b8xY4);
        usV["mouseout"] = MEvent.bindDom(F$Xu, "mouseup", this, N671);
        usV["mouseover"] = MEvent.bindDom(aa("_zo_map"), "mouseover", this, r39);
        usV["mouseout"] = MEvent.bindDom(aa("_zo_map"), "mouseout", this, x3s7P);
        usV["mouseover"] = MEvent.bindDom(aa("_zi_map"), "mouseover", this, r39);
        usV["mouseout"] = MEvent.bindDom(aa("_zi_map"), "mouseout", this, x3s7P);
        usV["mouseover"] = MEvent.bindDom(t30, "mouseover", this, r39);
        usV["mouseout"] = MEvent.bindDom(t30, "mouseout", this, x3s7P);
        usV["click"] = MEvent.bindDom(E$d, "click", this, v2277);
        usV["click"] = MEvent.bindDom(r36L, "click", this, v2277);
        usV["click"] = MEvent.bindDom(g2ja, "click", this, v2277);
        usV["click"] = MEvent.bindDom(_qV, "click", this, v2277);
        usV["mouseup"] = MEvent.bindDom(E$d, "mouseup", this, c6_);
        usV["mouseup"] = MEvent.bindDom(r36L, "mouseup", this, c6_);
        usV["mouseup"] = MEvent.bindDom(g2ja, "mouseup", this, c6_);
        usV["mouseup"] = MEvent.bindDom(_qV, "mouseup", this, c6_);
        usV["mousedown"] = MEvent.bindDom(E$d, "mousedown", this, kF$);
        usV["mousedown"] = MEvent.bindDom(r36L, "mousedown", this, kF$);
        usV["mousedown"] = MEvent.bindDom(g2ja, "mousedown", this, kF$);
        usV["mousedown"] = MEvent.bindDom(_qV, "mousedown", this, kF$);
        usV["mouseup"] = MEvent.bindDom(aa("_zo_map"), "mouseup", this, c6_);
        usV["mouseup"] = MEvent.bindDom(aa("_zi_map"), "mouseup", this, c6_);
        usV["mouseup"] = MEvent.bindDom(aa("_fb_n_ctrl_imap"), "mouseup", this, c6_);
        usV["mouseup"] = MEvent.bindDom(aa("_fb_s_ctrl_imap"), "mouseup", this, c6_);
        usV["mouseup"] = MEvent.bindDom(aa("_fb_w_ctrl_imap"), "mouseup", this, c6_);
        usV["mouseup"] = MEvent.bindDom(aa("_fb_e_ctrl_imap"), "mouseup", this, c6_);
        usV["mouseup"] = MEvent.bindDom(aa("_fb_m_ctrl_imap"), "mouseup", this, c6_);
        UV61m.apply(this)
    };
    var O74f = function (content, x$H, vP0, QfKep, __3j, A0_J, p1, p3, _70) {
        content.push("<div id=\"" + x$H + "\" style=\"position:absolute;left:" + vP0 + "px;top:" + QfKep + "px;width:" + __3j + "px;height:" + A0_J + "px;overflow:hidden;\" onmousedown=\"return false;\">");
        if (Nfy) {
            content.push("<img id=\"" + x$H + "_img\" src=\"" + sX + "\" style=\"position:absolute;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + CTLIMG_RESOURCE[0].url + ",sizingMethod=scale);width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;left:" + p1 + "px;top:" + p3 + "px;border:0px;cursor:pointer;\"  onmousedown=\"return false;\" unselectable=\"on\" " + (typeof _70 == "string" && _70 ? "usemap=\"#" + _70 + "\"" : "") + " galleryimg=\"no\" />")
        } else {
            content.push("<img id=\"" + x$H + "_img\" src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:" + p1 + "px;top:" + p3 + "px;width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;border:0px;cursor:pointer;\" onmousedown=\"return false;\" unselectable=\"on\" " + (typeof _70 == "string" && _70 ? "usemap=\"#" + _70 + "\"" : "") + " galleryimg=\"no\"/>")
        }
        content.push("</div>")
    };
    var m74 = function (content, x$H, text, vP0, QfKep, __3j, A0_J, p1, p3, ce5) {
        content.push("<div id=\"" + x$H + "\" style=\"position:absolute;left:" + vP0 + "px;top:" + QfKep + "px;width:" + __3j + "px;height:" + A0_J + "px;overflow:hidden;\" onmousedown=\"return false;\">");
        content.push("<div id=\"" + x$H + "_text\" style=\"position:absolute;padding-left:16px;padding-top:1px;color:white;z-index:1;width:35px;text-align:center;font-size:12px;cursor:pointer;background-image:url('" + sX + "');\" _ml=\"" + ce5 + "\">" + text + "</div>");
        if (Nfy) {
            content.push("<img src=\"" + sX + "\" style=\"position:absolute;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + CTLIMG_RESOURCE[0].url + ",sizingMethod=scale);width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;left:" + p1 + "px;top:" + p3 + "px;border:0px;cursor:pointer;\"  onmousedown=\"return false;\" unselectable=\"on\" galleryimg=\"no\" />")
        } else {
            content.push("<img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:" + p1 + "px;top:" + p3 + "px;width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;border:0px;cursor:pointer;\" onmousedown=\"return false;\" unselectable=\"on\" galleryimg=\"no\" />")
        }
        content.push("</div>")
    };
    var K2t5P = function () {
        var Q3856 = sY - te + 1;
        return Q3856 * gb.n5tt + Q3856 * gb.H2Pk + gb.n5tt - 1
    };
    var g169 = function (AB) {
        AB = sY - AB;
        return AB * gb.n5tt + AB * gb.H2Pk + o9b1().max.y + 3
    };
    var YV6 = function () {
        var r = {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: 0,
                y: 0
            },
            width: 0,
            height: 0
        };
        if (v76K3) {
            r.width = VS8w8(v76K3.style.width, 0);
            r.height = VS8w8(v76K3.style.height, 0);
            r.min.x = VS8w8(v76K3.style.left, 0);
            r.min.y = VS8w8(v76K3.style.top, 0);
            r.max.x = r.min.x + r.width;
            r.max.y = r.min.y + r.height
        }
        return r
    };
    var o9b1 = function () {
        var r = {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: 0,
                y: 0
            },
            width: 0,
            height: 0
        };
        if (v059) {
            r.width = VS8w8(v059.style.width, 0);
            r.height = VS8w8(v059.style.height, 0);
            r.min.x = VS8w8(v059.style.left, 0);
            r.min.y = VS8w8(v059.style.top, 0);
            r.max.x = r.min.x + r.width;
            r.max.y = r.min.y + r.height
        }
        return r
    };
    var et45 = function () {
        var r = {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: 0,
                y: 0
            },
            width: 0,
            height: 0
        };
        if (F$Xu) {
            r.width = VS8w8(F$Xu.style.width, 0);
            r.height = VS8w8(F$Xu.style.height, 0);
            r.min.x = VS8w8(F$Xu.style.left, 0);
            r.min.y = VS8w8(F$Xu.style.top, 0);
            r.max.x = r.min.x + r.width;
            r.max.y = r.min.y + r.height
        }
        return r
    };
    var uH2$ = function () {
        var r = {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: 0,
                y: 0
            },
            width: 0,
            height: 0
        };
        if (Tc6) {
            r.width = VS8w8(Tc6.style.width, 0);
            r.height = VS8w8(Tc6.style.height, 0);
            r.min.x = VS8w8(Tc6.style.left, 0);
            r.min.y = VS8w8(Tc6.style.top, 0);
            r.max.x = r.min.x + r.width;
            r.max.y = r.min.y + r.height
        }
        return r
    };
    var n200l = function () {
        var r = {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: 0,
                y: 0
            },
            width: 0,
            height: 0
        };
        if (K7L) {
            r.width = VS8w8(K7L.style.width, 0);
            r.height = VS8w8(K7L.style.height, 0);
            r.min.x = VS8w8(K7L.style.left, 0) + h1C2;
            r.min.y = VS8w8(K7L.style.top, 0) + r2pe;
            r.max.x = r.min.x + r.width;
            r.max.y = r.min.y + r.height
        }
        return r
    };
    var Q76P = function () {
        var Ga30 = et45();
        O27.min = Ga30.min.y + gb.n5tt;
        O27.max = Ga30.max.y - 1 - gb.n5tt;
        Lk1cK.min = Ga30.min.x;
        Lk1cK.max = Ga30.max.x - 3
    };
    var A9VR = function () {
        with(this.options.location) {
            var rect = this.getRect();
            var g280e = et45();
            if (type == Maplet.LEFT_TOP) {
                h1C2 = marginx;
                r2pe = marginy;
                _713 = g280e.max.x + 5
            } else {
                if (type == Maplet.LEFT_BOTTOM) {
                    h1C2 = marginx;
                    r2pe = this.maplet.height - marginy - rect.height;
                    _713 = g280e.max.x + 5
                } else if (type == Maplet.RIGHT_TOP) {
                    h1C2 = this.maplet.width - marginx - rect.width;
                    r2pe = marginy;
                    _713 = g280e.min.x - gb.P669H - 5
                } else if (type == Maplet.RIGHT_BOTTOM) {
                    h1C2 = this.maplet.width - marginx - rect.width;
                    r2pe = this.maplet.height - marginy - rect.height;
                    _713 = g280e.min.x - gb.P669H - 5
                }
            }
        }
        Uy_ = et45().min.y - 2
    };
    this.setLocation = function (location, s2859) {
        location = location || {};
        if (typeof location.type != "number" && !(location.type == Maplet.LEFT_TOP || location.type == Maplet.LEFT_BOTTOM || location.type == Maplet.RIGHT_TOP || location.type == Maplet.LEFT_BOTTOM)) location.type = Maplet.LEFT_TOP;
        if (typeof location.R$xyo != "number") location.marginx = 10;
        if (typeof location.w1B9 != "number") location.marginy = 10;
        this.options.location = location;
        if (typeof s2859 != "boolean") s2859 = true;
        if (s2859) w1e3A.apply(this)
    };
    this.setView = function (view, s2859) {
        view = view || {};
        if (typeof view.pan != "boolean") view.pan = true;
        if (typeof view.zoomout != "boolean") view.zoomout = true;
        if (typeof view.ruler != "boolean") view.ruler = true;
        if (typeof view.zoomin != "boolean") view.zoomin = true;
        this.options.view = view;
        if (typeof s2859 != "boolean") s2859 = true;
        if (s2859) UV61m.apply(this, [s2859])
    };
    var Y6_u = function (lM) {
        B982(lM);
        if (!SLD && (lM.target == t30 || lM.target == t30.firstChild)) {
            Q76P.apply(this);
            SLD = true;
            this.maplet.KY4("move", t30)
        } else {
            SLD = false
        }
        return SLD
    };
    var M82w = function (lM) {
        if (SLD) {
            var currTop = lM.clientY - this.maplet.offsetY - this.maplet.top - r2pe;
            if (currTop >= O27.min && currTop <= O27.max) {
                t30.style.top = (currTop - 3) + "px";
                if (ZOOM_TRANSITION && (!ContentInfo || !ContentInfo.isVisible())) {
                    var h = (this.isVisible(v76K3) ? 0 : 49 + 10) + (this.isVisible(v059) ? 0 : 24);
                    var AB = sY - ((currTop + h) / (gb.n5tt + gb.H2Pk) - 10);
                    this.maplet.AN(AB)
                }
                this.maplet.KY4("move", document.body)
            }
        }
        return SLD
    };
    var oU5wL = function (lM) {
        B982(lM);
        if (SLD) {
            var y = lM.clientY - this.maplet.offsetY - this.maplet.top - r2pe;
            y = y < O27.min ? O27.min : y;
            y = y > O27.max ? O27.max : y;
            var h = (this.isVisible(v76K3) ? 0 : 49 + 10) + (this.isVisible(v059) ? 0 : 24);
            var AB = Math.ceil(sY - ((y + h - (px ? 3 : 1)) / (gb.n5tt + gb.H2Pk) - 10));
            if (this.maplet.AG == AB) {
                this.maplet.G94$(true);
                this.maplet.lA.setVisible(true);
                if (this.maplet._$296) this.maplet._$296.setVisible(true);
                this.update(AB)
            } else {
                this.maplet.setZoomLevel(parseInt(AB))
            }
            SLD = false;
            return true
        }
        this.maplet.KY4("default", document.body);
        this.maplet.KY4("default", t30);
        return false
    };
    var oDv = function (lM) {
        B982(lM);
        Q76P.apply(this);
        var lM = lM || window.event;
        var y = lM.clientY - r2pe - this.maplet.offsetY - this.maplet.top;
        y = y < O27.min ? O27.min : y;
        y = y > O27.max ? O27.max : y;
        var h = (this.isVisible(v76K3) ? 0 : 49 + 10) + (this.isVisible(v059) ? 0 : 24);
        var AB = Math.ceil(sY - ((y + h - (px ? 3 : 1)) / (gb.n5tt + gb.H2Pk) - 10));
        if (this.maplet.AG != AB) this.maplet.setZoomLevel(parseInt(AB))
    };
    var b8xY4 = function (lM) {
        B982(lM)
    };
    var N671 = function (lM) {
        this.maplet.a6(lM);
        oU5wL.apply(this, [lM]);
        if (this.maplet.sS != ts._Q5y4 && this.maplet.sS != ts.tz && this.maplet.sS != ts.tA && this.maplet.sS != ts.tv) B982(lM)
    };
    var r39 = function (lM) {
        B982(lM);
        if (!this.isVisible(F$Xu)) return;
        y4c = false;
        if (!this.isVisible(K7L)) {
            this.VW73N(true)
        }
    };
    var x3s7P = function (lM) {
        B982(lM);
        y4c = true;
        getTimeout(this, Jdi8, 700)
    };
    var v2277 = function (lM) {
        B982(lM);
        var ce5 = lM.target.getAttribute("_ml");
        if (ce5) {
            this.maplet.setZoomLevel(VS8w8(ce5))
        }
    };
    var c6_ = function (lM) {
        this.maplet.a6(lM);
        this.maplet.overview.l1(lM);
        oU5wL.apply(this, [lM]);
        B982(lM)
    };
    var kF$ = function (lM) {
        B982(lM)
    };
    var Jdi8 = function () {
        if (!y4c) return;
        var loop = false;
        if (this.isVisible(K7L)) {
            var r = n200l();
            var pt = {
                x: this.maplet.tR,
                y: this.maplet.tS
            };
            var h6I9 = {
                min: {
                    x: r.min.x,
                    y: r.min.y
                },
                max: {
                    x: r.max.x,
                    y: r.max.y
                }
            };
            if (_isInsideRect(pt, h6I9)) loop = true
        }
        if (SLD) loop = true;
        if (loop) {
            getTimeout(this, Jdi8, 700);
            return
        }
        this.VW73N(false)
    };
    this.update = function (AB) {
        if (this.options && this.options.location) {
            A9VR.apply(this);
            this.dom.style.left = h1C2 + "px";
            this.dom.style.top = r2pe + "px"
        }
        if (t30 && F$Xu && this.isVisible(t30) && this.isVisible(F$Xu)) {
            with(t30.style) {
                left = VS8w8(F$Xu.style.left, 0) + 2 + "px";
                top = g169(AB) + "px"
            }
        }
    };
    this.showCtlPan = function (visible, s2859, P93v6) {
        if (!v76K3) return;
        if (typeof visible != "boolean") visible = true;
        if (this.isVisible(v76K3) != visible) {
            if (visible) {
                v76K3.style.height = "49px";
                v059.style.left = "14px";
                F$Xu.style.left = "14px";
                Tc6.style.left = "14px"
            } else {
                v76K3.style.height = "0px";
                v059.style.left = "0px";
                F$Xu.style.left = "0px";
                Tc6.style.left = "0px"
            }
            setVisible.apply(this, [v76K3, visible]);
            if (typeof P93v6 != "boolean") P93v6 = true;
            if (P93v6) this.options.view.pan = visible;
            if (typeof s2859 != "boolean") s2859 = true;
            if (s2859) w1e3A.apply(this)
        }
    };
    this.showZOButton = function (visible, s2859, P93v6) {
        if (!v059) return;
        if (typeof visible != "boolean") visible = true;
        if (this.isVisible(v059) != visible) {
            if (visible) {
                if (!this.isVisible(F$Xu)) {
                    v059.style.height = "23px"
                } else {
                    v059.style.height = "24px"
                }
            } else {
                v059.style.height = "0px"
            }
            setVisible.apply(this, [v059, visible]);
            if (typeof P93v6 != "boolean") P93v6 = true;
            if (P93v6) this.options.view.zoomout = visible;
            if (typeof s2859 != "boolean") s2859 = true;
            if (s2859) w1e3A.apply(this)
        }
    };
    this.showCtlRuler = function (visible, s2859, P93v6) {
        if (!F$Xu) return;
        if (typeof visible != "boolean") visible = true;
        if (this.isVisible(F$Xu) != visible) {
            if (visible) {
                F$Xu.style.height = K2t5P() + "px";
                v059.style.height = (VS8w8(v059.style.height, 0) + 1) + "px";
                Tc6.style.height = (VS8w8(Tc6.style.height, 0) + 1) + "px";
                Tc6.firstChild.style.top = (VS8w8(Tc6.firstChild.style.top, 0) + 2) + "px"
            } else {
                F$Xu.style.height = "0px";
                v059.style.height = Math.max((VS8w8(v059.style.height, 0) - 1), 0) + "px";
                Tc6.style.height = Math.max((VS8w8(Tc6.style.height, 0) - 1), 0) + "px";
                Tc6.firstChild.style.top = (VS8w8(Tc6.firstChild.style.top, 0) - 2) + "px"
            }
            setVisible.apply(this, [t30, visible]);
            setVisible.apply(this, [F$Xu, visible]);
            if (typeof P93v6 != "boolean") P93v6 = true;
            if (P93v6) this.options.view.ruler = visible;
            if (typeof s2859 != "boolean") s2859 = true;
            if (s2859) w1e3A.apply(this)
        }
    };
    this.showZIButton = function (visible, s2859, P93v6) {
        if (!Tc6) return;
        if (typeof visible != "boolean") visible = true;
        if (this.isVisible(Tc6) != visible) {
            if (visible) Tc6.style.height = "24px";
            else Tc6.style.height = "0px";
            setVisible.apply(this, [Tc6, visible]);
            if (typeof P93v6 != "boolean") P93v6 = true;
            if (P93v6) this.options.view.zoomin = visible;
            if (typeof s2859 != "boolean") s2859 = true;
            if (s2859) w1e3A.apply(this)
        }
    };
    this.VW73N = function (visible) {
        if (!K7L) return;
        if (typeof visible != "boolean") visible = true;
        if (this.isVisible(K7L) != visible) {
            if (visible) {
                K7L.style.left = _713 + "px";
                K7L.style.top = Uy_ + "px";
                if (this.options.location.type == Maplet.LEFT_TOP || this.options.location.type == Maplet.LEFT_BOTTOM) {
                    E$d.childNodes[1].style.top = r36L.childNodes[1].style.top = g2ja.childNodes[1].style.top = _qV.childNodes[1].style.top = "-65px";
                    E$d.childNodes[0].style.paddingLeft = r36L.childNodes[0].style.paddingLeft = g2ja.childNodes[0].style.paddingLeft = _qV.childNodes[0].style.paddingLeft = "16px";
                    E$d.childNodes[0].style.paddingRight = r36L.childNodes[0].style.paddingRight = g2ja.childNodes[0].style.paddingRight = _qV.childNodes[0].style.paddingRight = "0px"
                } else {
                    E$d.childNodes[1].style.top = r36L.childNodes[1].style.top = g2ja.childNodes[1].style.top = _qV.childNodes[1].style.top = "-84px";
                    E$d.childNodes[0].style.paddingLeft = r36L.childNodes[0].style.paddingLeft = g2ja.childNodes[0].style.paddingLeft = _qV.childNodes[0].style.paddingLeft = "0px";
                    E$d.childNodes[0].style.paddingRight = r36L.childNodes[0].style.paddingRight = g2ja.childNodes[0].style.paddingRight = _qV.childNodes[0].style.paddingRight = "16px"
                }
                setVisible.apply(this, [_qV, te <= 0]);
                setVisible.apply(this, [g2ja, (4 >= te && 4 <= sY)]);
                setVisible.apply(this, [r36L, (8 >= te && 8 <= sY)]);
                setVisible.apply(this, [E$d, sY >= 13]);
                if (!this.isVisible(E$d)) {
                    var c = 13 - sY;
                    K7L.style.top = Uy_ - (c * gb.n5tt + c * gb.H2Pk) + "px"
                } else if (sY > 13) {
                    var c = sY - 13;
                    K7L.style.top = Uy_ + (c * gb.n5tt + c * gb.H2Pk) + "px"
                }
            }
            setVisible.apply(this, [K7L, visible])
        }
    };
    var UV61m = function (_6s4) {
        if (typeof _6s4 != "boolean") _6s4 = true;
        with(this.options.view) {
            this.showCtlPan(pan, false);
            this.showZOButton(zoomout, false);
            this.showCtlRuler(ruler, false);
            this.showZIButton(zoomin, false)
        }
        if (_6s4) w1e3A.apply(this)
    };
    var w1e3A = function () {
        this.VW73N(false);
        v059.style.top = (YV6().max.y + (this.isVisible(v76K3) ? 5 : -5)) + "px";
        F$Xu.style.top = o9b1().max.y + "px";
        Tc6.style.top = et45().max.y + "px";
        this.maplet.Ko8();
        this.maplet.VgxX4();
        this.update(this.maplet.AG)
    };
    this.hide = function () {
        setVisible.apply(this, [this.dom, false])
    };
    this.show = function () {
        setVisible.apply(this, [this.dom, true])
    };
    var setVisible = function (A17v, visible) {
        if (!this.dom || typeof A17v != "object" || !A17v) return;
        if (A17v.style.display != (visible ? "" : "none")) A17v.style.display = visible ? "" : "none"
    };
    this.isVisible = function (A17v) {
        if (typeof A17v != "object" || !A17v) A17v = this.dom;
        if (!A17v) return false;
        return A17v.style.display == ""
    };
    this.g1 = function () {
        if (this.dom) _removeNode(this.dom);
        if (aa("_pan_map")) aa("_pan_map").q9 = null;
        if (aa("_zo_map")) aa("_zo_map").q9 = this.maplet;
        if (aa("_zi_map")) aa("_zi_map").q9 = this.maplet
    };
    this.getRect = function () {
        var r = {
            min: {
                x: null,
                y: null
            },
            max: {
                x: null,
                y: null
            },
            rdO: {
                x: null,
                y: null
            },
            Q1u_: {
                x: null,
                y: null
            },
            width: null,
            height: null
        };
        if (this.isVisible(this.dom)) {
            if (this.isVisible(v76K3)) {
                r = YV6();
                r.rdO = {
                    x: null,
                    y: null
                };
                r.Q1u_ = {
                    x: null,
                    y: null
                }
            }
            if (this.isVisible(v059)) {
                var v = o9b1();
                if (r.min.x == null) r.min.x = v.min.x;
                if (r.min.y == null) r.min.y = v.min.y;
                if (r.max.x == null) r.max.x = v.max.x;
                r.max.y = v.max.y
            }
            if (this.isVisible(F$Xu)) {
                var v = et45();
                if (r.min.x == null) r.min.x = v.min.x;
                if (r.min.y == null) r.min.y = v.min.y;
                if (r.max.x == null) r.max.x = v.max.x;
                r.max.y = v.max.y
            }
            if (this.isVisible(Tc6)) {
                var v = uH2$();
                if (r.min.x == null) r.min.x = v.min.x;
                if (r.min.y == null) r.min.y = v.min.y;
                if (r.max.x == null) r.max.x = v.max.x;
                r.max.y = v.max.y
            }
            r.rdO.x = r.min.x + h1C2;
            r.rdO.y = r.min.x + r2pe;
            r.Q1u_.x = r.max.x + h1C2;
            r.Q1u_.y = r.max.y + r2pe;
            r.width = r.max.x - r.min.x;
            r.height = r.max.y - r.min.y
        }
        return r
    };
    var v76K3 = null;
    var v059 = null;
    var Tc6 = null;
    var F$Xu = null;
    var t30 = null;
    var K7L = null;
    var E$d = null;
    var r36L = null;
    var g2ja = null;
    var _qV = null;
    var usV = [];
    var SLD = false;
    var O27 = {
        min: 0,
        max: 0
    };
    var Lk1cK = {
        min: 0,
        max: 0
    };
    var h1C2 = -Number.MAX_VALUE;
    var r2pe = -Number.MAX_VALUE;
    var _713 = -Number.MAX_VALUE;
    var Uy_ = -Number.MAX_VALUE;
    var y4c = true;
    this.maplet = null;
    this.dom = null;
    this.options = options || {};
    with(this.options) {
        this.setLocation(typeof location != "object" ? undefined : location, false);
        this.setView(typeof view != "object" ? undefined : view, false)
    };
    this.controlCanvas = {};
    this.controlCanvas.div = {};
    this.controlCanvas.div.update = function () {};
    this.onmousedown = Y6_u;
    this.onmousemove = M82w;
    this.onmouseup = oU5wL;
    this.onmouseout = function () {}
};
gb.n5tt = 6;
gb.H2Pk = 2;
gb.P669H = 52;
gb.eP34 = 18;
gb.Y4Nf = ["\u8857\u9053", "\u57ce\u5e02", "\u7701", "\u56fd\u5bb6"];

function ny(lM) {
    if (!lM) {
        lM = window.event
    }
    if (lM && !lM.target) {
        lM.target = lM.srcElement
    }
    if (lM && typeof lM.button == "undefined") {
        lM.button = lM.which
    }
    return lM
};

function getTimeout(uy, q0, yI) {
    return window.setTimeout(function () {
        q0.apply(uy)
    }, yI)
};

function nB(uy, q0, yI) {
    return window.setInterval(function () {
        q0.apply(uy)
    }, yI)
};
var MEvent = {
    nD: function (l7) {
        return "_e__" + l7
    },
    addListener: function (uy, l7, q0) {
        var l8 = this.nD(l7);
        if (uy[l8]) {
            var cZ = true;
            for (var i = 0; i < uy[l8].length; i++) {
                var h = uy[l8][i];
                if (h == q0) {
                    cZ = false;
                    break
                }
            }
            if (cZ) uy[l8].push(q0)
        } else {
            uy[l8] = [q0]
        }
        return {
            qg: uy,
            propertyName: l8,
            q0: q0
        }
    },
    removeListener: function (q9) {
        var uy = q9.qg[q9.propertyName];
        for (var c = 0; c < uy.length; c++) {
            if (uy[c] == q9.q0) {
                uy.splice(c, 1);
                return
            }
        }
    },
    contains: function (uy, l7) {
        var l8 = this.nD(l7);
        if (typeof uy[l8] != "undefined") return uy[l8].length;
        else return 0
    },
    clearListeners: function (uy, l7) {
        var l8 = this.nD(l7);
        uy[l8] = null
    },
    trigger: function (uy, l8) {
        var l9 = this.nD(l8);
        var lS = uy[l9];
        if (lS && lS.length > 0) {
            var vn = [];
            for (var YK7 = 2; YK7 < arguments.length; YK7++) {
                vn.push(arguments[YK7])
            }
            for (var i = 0; i < lS.length; i++) {
                var h = lS[i];
                if (h) {
                    try {
                        h.apply(uy, vn)
                    } catch (lM) {}
                }
            }
        }
    },
    addBuiltInListener: function (uy, l8, q0) {
        if (uy.addEventListener) {
            uy.addEventListener(l8, q0, false)
        } else if (uy.attachEvent) {
            uy.attachEvent("on" + l8, q0)
        } else {
            uy["on" + l8] = q0
        }
        return q0
    },
    removeBuiltInListener: function (uy, l8, q0) {
        if (uy.removeEventListener) {
            uy.removeEventListener(l8, q0, false)
        } else if (uy.detachEvent) {
            uy.detachEvent("on" + l8, q0)
        } else {
            uy["on" + l8] = null
        }
    },
    bind: function (uy, l8, fU, q0) {
        return this.addListener(uy, l8, function () {
            q0.apply(fU, arguments)
        })
    },
    bindDom: function (uy, l8, fU, q0) {
        var an = this.gm(fU, q0);
        return this.addBuiltInListener(uy, l8, an)
    },
    gm: function (uy, l8) {
        return function (lM) {
            lM = ny(lM);
            l8.call(uy, lM)
        }
    },
    callback: function (q0, uy) {
        return function () {
            return uy.apply(q0, arguments)
        }
    }
};
var MIcon = function (imgUrl, width, height, anchorX, anchorY, c19) {
    this.ao = new Array();
    this.GxA2 = 1;
    this.div = document.createElement("div");
    this.div.unselectable = "on";
    this.div.style.zIndex = this.GxA2;
    this.div.style.position = "absolute";
    width = (typeof width == "undefined") ? 16 : width;
    height = (typeof height == "undefined") ? 16 : height;
    this.img = document.createElement("div");
    this.img.unselectable = "on";
    this.img.style.MozUserSelect = "none";
    this.img.style.zIndex = this.GxA2;
    this.img.style.position = "absolute";
    this.img.style.top = "0px";
    this.img.style.left = "0px";
    this.imgUrl = imgUrl;
    this.left = 0;
    this.top = 0;
    this.d2o = this.left;
    this.j9P4r = this.top;
    this.wz = function (id) {
        this.div.id = "OverlayBg" + id;
        this.img.id = id
    };
    this.initialize = function (sW) {
        if (px) this.img.ondragstart = function () {
            return false
        };
        this.sW = sW;
        i3c4$(this.img.firstChild, "oid", this.sW.id);
        this.ao["mouseover"] = MEvent.bindDom(this.img.firstChild, "mouseover", this.sW, this.sW.hiliteIcon);
        this.ao["mouseout"] = MEvent.bindDom(this.img.firstChild, "mouseout", this.sW, this.sW.v4)
    };
    this.setContextMenu = function (menu) {};
    this.getImgUrl = function () {
        var $IY = "";
        var pC = this.img;
        if (pC.innerHTML.indexOf(Maplet.MICON_IMGSRC_FLAG) != -1) {
            var b2k2 = new RegExp(Maplet.MICON_IMGSRC_FLAG + "=\"?([^\"\t ]*)", "gi");
            var OB74 = b2k2.exec(pC.innerHTML);
            if (OB74 != null) $IY = OB74[1]
        } else if (pC.firstChild && pC.firstChild.tagName.toUpperCase() == "IMG") {
            $IY = pC.firstChild.src
        } else {
            $IY = this.imgUrl
        }
        return $IY
    };
    this.enableDragMap = function (enable) {
        if (!this.img || !this.img.firstChild) return;
        if (enable) i3c4$(this.img.firstChild, NH6, "true");
        else b3Fi(this.img.firstChild, NH6)
    };
    this.updateImage = function (w7, Aj, nV) {
        if (this.img.firstChild && this.imgUrl == w7) return;
        this.imgUrl = w7;
        if (this.imgUrl != null && this.imgUrl.indexOf("<") >= 0) {
            this.img.innerHTML = this.imgUrl
        } else {
            this.img.innerHTML = "<img src=" + this.imgUrl + " width=" + (typeof Aj == "undefined" ? width : Aj) + " height=" + (typeof Aj == "undefined" ? height : nV) + ">";
            if (this.sW) {
                if (this.sW.label && typeof Aj != "undefined") {
                    this.sW.label.xoffset += Aj - width;
                    width = Aj
                }
                if (this.sW.maplet) {
                    this.sW.initialize(this.sW.maplet)
                }
            }
        }
        this.img.firstChild.onmousedown = function (lM) {
            return false
        };
        i3c4$(this.img.firstChild, b4W, "marker");
        this.enableDragMap(this.sW ? !this.sW.bEditable : true)
    };
    this.updateImage(imgUrl);
    this.width = (typeof width == "undefined") ? parseInt(this.img.width) : parseInt(width);
    this.height = (typeof height == "undefined") ? parseInt(this.img.height) : parseInt(height);
    this.div.style.width = this.width + "px";
    this.div.style.height = this.height + "px";
    this.c19 = (typeof c19 == "undefined") ? imgUrl : c19;
    this.anchorX = (typeof anchorX == "undefined") ? this.width / 2 : parseInt(anchorX);
    this.anchorY = (typeof anchorY == "undefined") ? this.height / 2 : parseInt(anchorY);
    this.div.appendChild(this.img);
    this.update = function (maplet, left, top) {
        var zB = parseInt(left) - parseInt(this.anchorX);
        var zF = parseInt(top) - parseInt(this.anchorY);
        if (this.sW.autoHide && !this.sW.ls && (zB > maplet.width || zB < -this.width || zF > maplet.height || zF < -this.height)) {
            if (this.div.parentNode) {
                this.div.style.top = zF + "px";
                this.div.style.left = zB + "px";
                this.div.parentNode.removeChild(this.div);
                if (this.sW.label) this.sW.label.remove();
                this.fu = false
            }
        } else {
            if (this.div.parentNode != maplet.lA.div && !this.sW.ls) {
                maplet.lA.appendChild(this.div);
                this.div.style.width = this.width + "px";
                this.div.style.height = this.height + "px";
                this.img.width = this.width + "px";
                this.img.height = this.height + "px";
                this.fu = true
            }
            this.div.style.top = zF + "px";
            this.div.style.left = zB + "px";
            this.d2o = this.left;
            this.j9P4r = this.top;
            this.left = zB;
            this.top = zF;
            left = zB;
            top = zF;
            if (this.sW.label) this.sW.label.update(this.sW.maplet, left, top)
        }
    };
    this.isVisible = function () {
        return (this.fu)
    };
    this.zq = function () {
        return (this.img.firstChild.src) + "," + this.width + "," + this.height
    };
    this.hilite = function () {
        if (this.sW) {
            this.sW.hiliteIcon({
                target: this.img
            })
        }
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (finalize) {
        if (typeof finalize != "boolean") finalize = false;
        if (this.img.firstChild) {
            if (px) this.img.ondragstart = null;
            this.img.firstChild.onmousedown = null;
            for (var l8 in this.ao) {
                MEvent.removeBuiltInListener(this.img.firstChild, l8, this.ao[l8]);
                this.ao[l8] = null;
                if (finalize) delete this.ao[l8]
            }
        }
        if (finalize) this.ao = null;
        if (this.div) {
            if (!finalize) {
                if (this.div.parentNode) this.div.parentNode.removeChild(this.div)
            } else {
                _removeNode(this.div);
                this.div = null
            }
        }
        if (finalize) this.sW = null
    };
    this.setZIndex = function ($t3m) {
        if (this.div && this.div.parentNode && $t3m != this.div.style.zIndex) {
            this.GxA2 = this.div.style.zIndex;
            this.div.style.zIndex = $t3m
        }
    };
    this.YS8 = function () {
        if (!this.div) return;
        if (this.GxA2 != this.div.style.zIndex) {
            this.setZIndex(this.GxA2)
        }
    };
    this.getRect = function () {
        var r = {
            min: {
                x: this.div.offsetLeft,
                y: this.div.offsetTop
            },
            max: {
                x: 0,
                y: 0
            }
        };
        r.max.x = r.min.x + this.div.offsetWidth;
        r.max.y = r.min.y + this.div.offsetHeight;
        return r
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MIcon'
    }
};
var MMarker = function (pt, icon, info, label, shadow) {
    this.id = new Date().getTime() + "" + parseInt(Math.random() * 10000);
    this.pt = pt;
    this.icon = (typeof icon == "undefined") ? null : icon;
    if (this.icon && this.icon.wz) {
        this.icon.wz(this.id)
    }
    this.shadow = typeof shadow == "undefined" ? null : shadow;
    if (this.shadow && this.shadow.wz) this.shadow.wz(this.id);
    this.label = (typeof label == "undefined") ? null : label;
    if (this.label && this.label.wz) {
        this.label.wz(this.id)
    }
    this.info = null;
    if (typeof info != "undefined" && info) {
        this.info = info;
        this.info.setOverlay(this)
    }
    this.lw = 0;
    this.ls = false;
    this.bEditable = false;
    this.rotation = 0;
    this.ao = new Array();
    this.contextmenu = null;
    this.autoHide = true;
    this.dragAnimation = true;
    this.setContextMenu = function (menu) {
        this.contextmenu = menu;
        if (menu && typeof this.maplet == "object" && this.maplet) {
            if (!this.contextmenu.maplet) this.contextmenu.initialize(this.maplet);
            if (!this.contextmenu.containsOverlay(this)) this.contextmenu.addOverlay(this)
        } else if (!menu) {
            this.removeContextMenu()
        }
    };
    this.getContextMenu = function (dom) {
        return this.contextmenu
    };
    this.wz = function (id) {
        this.id = id;
        if (this.icon && this.icon.wz) {
            this.icon.wz(id)
        }
        if (this.shadow && this.shadow.wz) this.shadow.wz(id)
    };
    this.setEditable = function (cs) {
        this.bEditable = (typeof cs == "undefined") ? false : cs;
        if (REFRESH_MK_INDEX) this.refreshZIndex();
        if (this.icon) this.icon.enableDragMap(!this.bEditable)
    };
    this.refreshZIndex = function (AK5) {
        if (!this.icon) return;
        if (typeof AK5 != "boolean") AK5 = true;
        if (this.maplet) {
            var $5l = this.maplet.getMarkerPolygons(this);
            if ($5l.length > 0) {
                var b = false;
                for (var i = 0; i < $5l.length; i++) {
                    if ($5l[i].bEditable) {
                        b = true;
                        break
                    }
                }
                if (this.bEditable || !b) {
                    if (this.icon.div.style.zIndex < 0) this.YS8()
                } else {
                    if (this.icon.div.style.zIndex >= 0) this.setZIndex(-1)
                }
                if (AK5) {
                    for (var i = 0; i < $5l.length; i++) {
                        $5l[i].$C50(this)
                    }
                }
            }
        }
    };
    this.initialize = function (maplet) {
        this.maplet = maplet;
        this.dragAnimation = this.maplet.markerDragAnimation && this.dragAnimation;
        if (typeof this.contextmenu == "object" && this.contextmenu) {
            if (!this.contextmenu.maplet) this.contextmenu.initialize(this.maplet);
            if (!this.contextmenu.containsOverlay(this)) this.contextmenu.addOverlay(this)
        }
        this.ao["mousedown"] = MEvent.bindDom(this.maplet.map, "mousedown", this, this.w0);
        if (this.icon != null) {
            this.icon.initialize(this)
        }
        if (this.label != null) {
            this.label.initialize(this)
        }
        if (this.shadow != null) {
            this.shadow.initialize(this)
        } {
            if (this.info != null) {
                this.ao["info_" + this.info.yd] = MEvent.bindDom(this.maplet.map, this.info.yd, this, this.openInfoWindow)
            } else {
                this.ao["click"] = MEvent.bindDom(this.maplet.map, "click", this, this.openInfoWindow)
            }
        }
        if (typeof this.maplet.lA != "undefined") {
            this.paint()
        }
        if (REFRESH_MK_INDEX) this.refreshZIndex()
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MMarker'
    };
    this.paint = function () {
        if (!this.maplet) return;
        if (!this.pt.maplet) this.pt.initialize(this.maplet);
        if (this.maplet.Or5V$) {
            if (this.maplet.q1C != this.pt.q1C) {
                this.pt.mapX += this.maplet.ug59;
                this.pt.mapY += this.maplet.mx4;
                this.pt.q1C = this.maplet.q1C
            }
        } else {
            this.pt.k9d()
        }
        if (this.icon) {
            if (!this.icon.sW) this.icon.initialize(this);
            this.icon.update(this.maplet, this.pt.mapX, this.pt.mapY)
        }
        if (this.shadow) {
            if (!this.shadow.sW) this.shadow.initialize(this);
            this.shadow.update(this.maplet, this.pt.mapX, this.pt.mapY)
        }
    };
    this.zq = function () {
        return (this.icon.isVisible()) ? "1" + "," + this.pt.getPid() + "," + this.icon.zq() : ""
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (finalize) {
        if (typeof finalize != "boolean") finalize = false;
        if (this.maplet && this.maplet.markerDragAnimation) this.maplet.t929(false);
        if (finalize) this.removeContextMenu();
        if (this.icon) {
            this.icon.remove(finalize)
        }
        if (this.label) {
            this.label.remove(finalize)
        }
        if (this.shadow) {
            this.shadow.remove(finalize)
        }
        if (this.maplet) {
            for (var l8 in this.ao) {
                var l9 = l8.substring(0, 5) == "info_" ? l8.substring(5) : l8;
                MEvent.removeBuiltInListener(this.maplet.map, l9, this.ao[l8]);
                this.ao[l8] = null;
                if (finalize) delete this.ao[l8]
            }
            if (this.maplet.u5[this.id]) {
                this.maplet.u5[this.id] = null;
                delete this.maplet.u5[this.id]
            }
        }
        if (finalize) this.ao = null;
        this.maplet = null
    };
    this.removeContextMenu = function () {
        if (typeof this.contextmenu == "object" && this.contextmenu) {
            this.contextmenu.removeOverlay(this);
            this.contextmenu = null
        }
    };
    this.openInfoWindow = function (lM) {
        if (this.openInfoWindow.caller == null) {}
        if (this.maplet != null) {
            if ((new Date().getTime() - this.lw) < 200) return;
            if (this.maplet.y$pP_ && typeof lM == "object" && ((this.icon && fJ(lM.target, this.icon.img)) || (this.label && fJ(lM.target, this.label.div)))) {
                this.maplet.y$pP_ = false;
                if (this.maplet.h96 || (ContentInfo && ContentInfo.isVisible() && avBubble.overlay == this)) return
            }
            var x = this.pt.mapX;
            var y = this.pt.mapY;
            if (typeof lM == "undefined" || (typeof lM == "object" && this.icon && fJ(lM.target, this.icon.img)) || (typeof lM == "object" && this.label && fJ(lM.target, this.label.div))) {
                if (typeof lM == "object" && this.maplet.sS != ts.ty && this.maplet.sS != ts.tu) {
                    return
                }
                if (!this.icon.isVisible()) {
                    if (x >= this.maplet.width * 1.5 || x <= -(this.maplet.width / 2) || y <= -(this.maplet.height / 2) || y >= this.maplet.height * 1.5) {
                        this.maplet.setCenter(this.pt.getPid());
                        x = this.maplet.width / 2;
                        y = this.maplet.height / 2
                    }
                }
                this.x = x;
                this.y = y;
                if (this.openInfoWindow.caller && this.openInfoWindow.caller.toString().indexOf(".call(") != -1) {
                    avBubble.$X$8 = false;
                    MEvent.trigger(this, "click", this)
                }
                if (!this.maplet) return;
                if (!this.info) {
                    return
                } else if (!this.info.getOverlay()) {
                    this.info.setOverlay(this)
                }
                if (iToolTipStyle != 2) {
                    this.hiliteIcon({
                        target: {
                            id: this.id
                        }
                    });
                    this.maplet.wN(x, y, this.info, "", "", true)
                }
            } else if (typeof lM == "boolean" && lM || lM == "true") {
                if (!this.info) {
                    return
                } else if (!this.info.getOverlay()) {
                    this.info.setOverlay(this)
                }
                if (x > this.maplet.width * 2 || x < -this.maplet.width || y < -this.maplet.height || y > this.maplet.height * 2) {
                    this.maplet.setCenter(this.pt.getPid());
                    x = this.maplet.width / 2;
                    y = this.maplet.height / 2
                }
                this.maplet.wN(x, y, this.info, true)
            }
        }
    };
    this.w0 = function (lM) {
        if (this.icon != null && this.maplet && (this.bEditable || this.maplet.sS == ts.tu) && fJ(lM.target, this.icon.img) && lM.button != 2) {
            this.qo = true;
            this.fd = false;
            this.l6 = this.id;
            this.l0 = parseInt(lM.clientX - this.maplet.offsetX - this.maplet.left) - parseInt(this.icon.div.style.left);
            this.na = parseInt(lM.clientY - this.maplet.offsetY - this.maplet.top) - parseInt(this.icon.div.style.top);
            if (this.rotation == 1) {
                var lb = this.l0 - this.icon.width / 2;
                var lc = this.na - this.icon.height / 2;
                var la = Math.sqrt(lb * lb + lc * lc);
                if (la > (this.icon.width / 4 - 5)) {
                    this.fd = true;
                    this.downX = lM.clientX;
                    this.downY = lM.clientY
                }
            }
            this.ao["mousemove"] = MEvent.bindDom(document, "mousemove", this, this.f9);
            this.ao["mouseup"] = MEvent.bindDom(document, "mouseup", this, this.l1);
            if (px) this.ao["losecapture"] = MEvent.bindDom(document.body, "losecapture", this, this.l1);
            else this.ao["blur"] = MEvent.bindDom(window, "blur", this, this.l1)
        }
    };
    this.f9 = function (lM) {
        if (this.icon != null && this.maplet && (this.bEditable || this.maplet.sS == ts.tu) && (fJ(lM.target, this.icon.img) || this.l6 == this.id)) {
            if (this.qo) {
                if (avBubble.overlay && avBubble.overlay.id == this.id) this.maplet.hideBubble();
                if (!this.fd) {
                    var x = lM.clientX - this.maplet.offsetX - this.maplet.left - this.l0;
                    var y = lM.clientY - this.maplet.offsetY - this.maplet.top - this.na;
                    var iNNr9 = this.maplet.f7T;
                    var E4K = 0,
                        xp43 = 0;
                    if (this.icon.div.parentNode == this.maplet.lA.div) {
                        this.maplet.panel.appendChild(this.icon.div);
                        if (this.label) this.maplet.panel.appendChild(this.label.div);
                        if (this.shadow) this.maplet.panel.appendChild(this.shadow.div);
                        this.setZIndex(pF);
                        if (px) document.body.setCapture();
                        if (this.maplet.markerDragAnimation) {
                            E4K = iNNr9.ibg;
                            xp43 = iNNr9.X66R5
                        }
                    }
                    if (!$4r) $4r = nB(this, x46B, 100);
                    if (this.dragAnimation) {
                        y = y + this.icon.anchorY - iNNr9.height / 2;
                        this.maplet.t929(true, x + this.icon.anchorX - iNNr9.width / 2, y);
                        y = y - iNNr9.offsetY - this.icon.height
                    }
                    this.x = x;
                    this.y = y;
                    this.lw = new Date().getTime();
                    this.ls = true;
                    this.icon.update(this.maplet, x + this.icon.anchorX, y + this.icon.anchorY);
                    if (this.shadow) {
                        var g4 = this.icon.left - this.icon.d2o;
                        var g5 = this.icon.top - this.icon.j9P4r;
                        this.shadow.update(this.maplet, this.shadow.left + g4 + this.shadow.anchorX + E4K, this.shadow.top + g5 + this.shadow.anchorY + xp43)
                    }
                    if (MEvent.contains(this, "draging")) {
                        var pt = null;
                        if (this.dragAnimation) pt = new MPoint(this.maplet.toMapCoordinate(VS8w8(iNNr9.fC.div.style.left) + iNNr9.width / 2, VS8w8(iNNr9.fC.div.style.top) + iNNr9.height / 2));
                        else pt = new MPoint(this.maplet.toMapCoordinate(this.x + this.icon.anchorX, this.y + this.icon.anchorY));
                        pt.initialize(this.maplet);
                        MEvent.trigger(this, "draging", this, pt)
                    }
                } else {
                    var wc = parseInt(lM.clientX - this.maplet.offsetX - this.maplet.left) - parseInt(this.icon.div.style.left);
                    var wd = parseInt(lM.clientY - this.maplet.offsetY - this.maplet.top) - parseInt(this.icon.div.style.top);
                    var wa = Math.atan2((wd - this.icon.height / 2), wc - this.icon.width / 2);
                    var wb = ((90 + wa * 180 / Math.PI) + 360) % 360;
                    MEvent.trigger(this, "rotate", wb)
                }
            }
        }
    };
    this.l1 = function (lM) {
        if (this.icon != null && this.maplet && (this.bEditable || this.maplet.sS == ts.tu) && this.qo && this.ls) {
            if (this.maplet.fa) this.maplet.finishupPan();
            MEvent.removeBuiltInListener(document, "mousemove", this.ao["mousemove"]);
            this.ao["mousemove"] = null;
            MEvent.removeBuiltInListener(document, "mouseup", this.ao["mouseup"]);
            this.ao["mouseup"] = null;
            if (px) {
                MEvent.removeBuiltInListener(document.body, "losecapture", this.ao["losecapture"]);
                this.ao["losecapture"] = null
            } else {
                MEvent.removeBuiltInListener(window, "blur", this.ao["blur"]);
                this.ao["blur"] = null
            }
            if (!this.fd) {
                var x = lM.clientX - this.maplet.offsetX - this.maplet.left - this.l0;
                var y = lM.clientY - this.maplet.offsetY - this.maplet.top - this.na;
                if (isNaN(x)) x = this.x;
                if (isNaN(y)) y = this.y;
                if (this.icon.div.parentNode != this.maplet.lA.div) {
                    this.maplet.lA.appendChild(this.icon.div);
                    if (this.label) this.maplet.lA.appendChild(this.label.div);
                    if (this.shadow) {
                        this.maplet.lA.appendChild(this.shadow.div);
                        this.shadow.YS8()
                    }
                    with(this.maplet.f7T.fC) {
                        if (div.parentNode != this.maplet.lA.div) {
                            this.maplet.lA.div.appendChild(div);
                            div.style.zIndex = this.icon.div.style.zIndex - 1
                        }
                    }
                    if (px) document.body.releaseCapture()
                }
                if (this.dragAnimation) {
                    y = parseInt(this.maplet.f7T.fC.style.top) + this.maplet.f7T.height / 2 - this.icon.anchorY
                }
                this.pt.setMapCoords(x + this.icon.anchorX, y + this.icon.anchorY);
                this.x = x;
                this.y = y;
                if (this.dragAnimation) F3X.apply(this)
            } else {}
            MEvent.trigger(this, "drag", this);
            MEvent.trigger(this.maplet, "edit", this);
            if (this.ls) {
                this.lw = new Date().getTime();
                this.ls = false
            }
            if (this.maplet.sS == ts.tb || this.maplet.sS == ts.ta || this.maplet.sS == ts.lz || this.maplet.sS == ts.ly) this.maplet.XHl = false
        }
        if (this.l6 == this.id) {
            this.l6 = null
        }
        this.qo = false
    };
    this.hiliteIcon = function (lM) {
        if (this.icon != null && fJ(lM.target, this.id)) {
            if (this.maplet.sS == ts.tz || this.maplet.sS == ts.tA || this.maplet.sS == ts._Q5y4) {
                this.maplet.KY4("no-drop", this.icon.img)
            } else if (this.info || MEvent.contains(this, "click") > 0) {
                this.maplet.KY4("pointer", this.icon.img)
            }
            if (this.icon.div.style.zIndex < pF) {
                pF++
            }
            this.icon.setZIndex(pF);
            if (this.label) this.label.setZIndex(pF);
            var zh = cq.vp(this.pt.getPid());
            var x = this.maplet.zl(zh[0], zh[1]);
            var y = this.maplet.zm(zh[1], zh[0]);
            this.x = x;
            this.y = y;
            if (typeof lM.button != "undefined") {
                MEvent.trigger(this, "mouseover", this)
            }
        }
    };
    this.v4 = function (lM) {
        this.maplet.KY4("default", this.icon.img);
        if (this.icon != null && fJ(lM.target, this.id)) {
            var zh = cq.vp(this.pt.pid);
            var x = this.maplet.zl(zh[0], zh[1]);
            var y = this.maplet.zm(zh[1], zh[0]);
            this.x = x;
            this.y = y;
            MEvent.trigger(this, "mouseout", this)
        }
    };
    this.setZIndex = function ($t3m) {
        if (this.icon) this.icon.setZIndex($t3m);
        if (this.label) this.label.setZIndex($t3m);
        if (this.shadow) this.shadow.setZIndex($t3m)
    };
    this.YS8 = function () {
        if (this.icon) this.icon.YS8();
        if (this.label) this.label.YS8();
        if (this.shadow) this.shadow.YS8()
    };
    this.setIcon = function (sk1, I4I24) {
        if (typeof I4I24 != "boolean") I4I24 = true;
        if (this.icon) {
            this.icon.remove();
            this.icon = null
        }
        if (sk1) {
            this.icon = sk1;
            this.icon.wz(this.id);
            this.icon.initialize(this);
            this.icon.enableDragMap(!this.bEditable);
            if (I4I24) this.paint()
        }
    };
    this.setLabel = function (eN1A, I4I24) {
        if (typeof I4I24 != "boolean") I4I24 = true;
        if (this.label) {
            this.label.remove();
            this.label = null
        }
        if (eN1A) {
            this.label = eN1A;
            this.label.wz(this.id);
            this.label.initialize(this);
            if (I4I24) this.paint()
        }
    };
    this.setShadow = function (cI1p_, I4I24) {
        if (typeof I4I24 != "boolean") I4I24 = true;
        if (this.shadow) {
            this.shadow.remove();
            this.shadow = null
        }
        if (cI1p_) {
            this.shadow = cI1p_;
            this.shadow.wz(this.id);
            this.shadow.initialize(this);
            if (I4I24) this.paint()
        }
    };
    this.setInfoWindow = function (d$P) {
        if (this.info) {
            if (avBubble.overlay && avBubble.overlay.id == this.id && ContentInfo && ContentInfo.isVisible()) this.maplet.hideBubble();
            this.info = null
        }
        if (d$P) {
            this.info = d$P;
            this.info.setOverlay(this)
        }
    };
    this.setPoint = function (QD08, I4I24) {
        if (typeof I4I24 != "boolean") I4I24 = true;
        this.pt = QD08;
        if (I4I24) this.paint()
    };
    var $4r = null;
    var x46B = function () {
        if (this.ls) {
            var mTHo = this.maplet.Lp0m1;
            var rt = this.icon.getRect();
            var vj = 0,
                vk = 0;
            if (rt.min.x < mTHo) vj = 50;
            if (rt.min.y < mTHo) vk = 50;
            if (rt.max.x > this.maplet.width - mTHo) vj = -50;
            if (rt.max.y + (this.dragAnimation ? (this.maplet.f7T.height + this.maplet.f7T.offsetY) : 0) + 2 > this.maplet.height - mTHo) vk = -50;
            if ((vj != 0 || vk != 0)) {
                this.maplet.panTo(vj, vk);
                if (MEvent.contains(this, "draging")) {
                    var pt = null;
                    if (this.dragAnimation) {
                        var iNNr9 = this.maplet.f7T;
                        pt = new MPoint(this.maplet.toMapCoordinate(VS8w8(iNNr9.fC.div.style.left) + iNNr9.width / 2, VS8w8(iNNr9.fC.div.style.top) + iNNr9.height / 2))
                    } else pt = new MPoint(this.maplet.toMapCoordinate(this.x + this.icon.anchorX, this.y + this.icon.anchorY));
                    pt.initialize(this.maplet);
                    MEvent.trigger(this, "draging", this, pt)
                }
                return
            }
        }
        window.clearInterval($4r);
        $4r = null
    };
    OE3O = null;
    var F3X = function () {
        window.clearTimeout(OE3O);
        this.maplet.f7T.overlay = this;
        var yw = 0,
            d = 50;
        var E1hG = {
            b: parseInt(this.icon.div.style.top),
            c: 0
        };
        E1hG.c = this.pt.mapY - this.icon.anchorY - E1hG.b;
        var J599 = null,
            _U49 = null;
        if (this.shadow) {
            var J599 = {
                b: parseInt(this.shadow.div.style.left),
                c: 0
            };
            J599.c = this.pt.mapX - this.shadow.anchorX - J599.b;
            var _U49 = {
                b: parseInt(this.shadow.div.style.top),
                c: 0
            };
            _U49.c = this.pt.mapY - this.shadow.anchorY - _U49.b
        }
        function h8425() {
            if (yw < d) {
                yw++;
                this.icon.update(this.maplet, this.pt.mapX, Math.ceil(WaA23(yw, E1hG.b, E1hG.c, d)) + this.icon.anchorY);
                if (this.shadow) this.shadow.update(this.maplet, Math.ceil(WaA23(yw, J599.b, J599.c, d)) + this.shadow.anchorX, Math.ceil(WaA23(yw, _U49.b, _U49.c, d)) + this.shadow.anchorY);
                OE3O = getTimeout(this, h8425, 10)
            } else {
                this.maplet.t929(false)
            }
        };
        h8425.apply(this)
    };
    this.fL5n = function () {
        if (OE3O) {
            window.clearTimeout(OE3O);
            OE3O = null
        }
        this.paint()
    };
    var WaA23 = function (yw, b, c, d) {
        if ((yw /= d) < (1 / 2.75)) {
            return c * (7.5625 * yw * yw) + b
        } else if (yw < (2 / 2.75)) {
            return c * (7.5625 * (yw -= (1.5 / 2.75)) * yw + .75) + b
        } else if (yw < (2.5 / 2.75)) {
            return c * (7.5625 * (yw -= (2.25 / 2.75)) * yw + .9375) + b
        } else {
            return c * (7.5625 * (yw -= (2.625 / 2.75)) * yw + .984375) + b
        }
    }
};
var MPolyline = function (pts, brush, info, label, options) {
    this.options = options || {};
    if (typeof this.options.editHilite != "boolean") this.options.editHilite = true;
    this.id = new Date().getTime() + "" + parseInt(Math.random() * 10000) + "MPolyline";
    this.pts = pts;
    this.brush = (typeof brush == "undefined") ? new MBrush() : brush;
    this.info = null;
    if (typeof info != "undefined" && info) {
        this.info = info;
        this.info.setOverlay(this)
    }
    this.label = (typeof label == "undefined") ? null : label;
    this.qo = false;
    this.wk = null;
    this.z9 = null;
    this.um = new MContextMenu();
    this.un = new MContextMenuItem('\u5220\u9664\u8282\u70B9');
    this.um.addItem(this.un);
    this.contextmenu = null;
    this.pathNodeMenu = null;
    this.ao = new Array();
    this.s107 = new Object();
    this.isRefreshMkIndex = REFRESH_MK_INDEX;
    this.tn = Number.MAX_VALUE;
    this.to = this.tn;
    this.s4063 = -Number.MAX_VALUE;
    this.r3m74 = this.s4063;
    this.maplet = null;
    this.bEditable = false;
    this.eg0G = false;
    this.Y37 = false;
    this.u$2V = true;
    this.LoQ4F = null;
    var O7RaE = {
        yN: null,
        L898: {
            x: null,
            y: null
        },
        g0705: {
            x: null,
            y: null
        },
        p7318: {
            x: null,
            y: null
        }
    };
    this.setEditable = function (enable) {
        this.bEditable = (typeof enable != "boolean") ? false : enable;
        if (!this.bEditable && this.z9) this.C69S();
        if (this.maplet != null) this.update()
    };
    this.setEditMode = function (mode, f1kX0) {
        if (typeof f1kX0 != "boolean") f1kX0 = true;
        var Q83S2 = false;
        if (mode == "path") {
            Q83S2 = !this.traffic;
            this.traffic = true
        } else if (mode == "default") {
            Q83S2 = this.traffic;
            this.traffic = false
        }
        if (Q83S2 && this.maplet) this.Wk8();
        if (f1kX0 && !this.bEditable) this.setEditable(true)
    };
    this.Wk8 = function () {
        if (!this.maplet) return;
        if (this.contextmenu) this.contextmenu.hide();
        if (this.pathNodeMenu) this.pathNodeMenu.hide();
        if (this.um) this.um.hide();
        MEvent.removeBuiltInListener(this.maplet.map, "mousedown", this.ao["mousedown"]);
        this.ao["mousedown"] = null;
        MEvent.removeBuiltInListener(this.maplet.map, "mouseup", this.ao["mouseup"]);
        this.ao["mouseup"] = null;
        this.update();
        if (!this.traffic) {
            MEvent.removeBuiltInListener(this.maplet.map, "mousemove", this.ao["mousemove"][0]);
            MEvent.removeBuiltInListener(this.maplet.map, "mousemove", this.ao["mousemove"][1]);
            this.ao["mousemove"] = null;
            this.ao["mousemove"] = MEvent.bindDom(this.maplet.map, "mousemove", this, this.f9);
            this.ao["mousedown"] = MEvent.bindDom(this.maplet.map, "mousedown", this, this.w0);
            this.ao["mouseup"] = MEvent.bindDom(this.maplet.map, "mouseup", this, this.l1);
            if (this.z9) {
                this.z9.style.overflow = "";
                this.z9.style.width = "";
                this.z9.style.height = "";
                this.z9.style.left = "";
                this.z9.style.top = ""
            }
        } else {
            MEvent.removeBuiltInListener(this.maplet.map, "mousemove", this.ao["mousemove"]);
            this.ao["mousemove"] = null;
            this.ao["mousedown"] = MEvent.bindDom(this.maplet.map, "mousedown", this, this.QBm20);
            this.ao["mouseup"] = MEvent.bindDom(this.maplet.map, "mouseup", this, this.l2k3);
            this.ao["mousemove"] = [];
            this.ao["mousemove"][0] = MEvent.bindDom(this.maplet.map, "mousemove", this, this.uG);
            this.ao["mousemove"][1] = MEvent.bindDom(this.maplet.map, "mousemove", this, this.N8xro);
            if (this.z9) this.z9.style.overflow = "hidden"
        }
    };
    this.initialize = function (maplet) {
        this.maplet = maplet;
        if (typeof this.contextmenu == "object" && this.contextmenu) {
            if (!this.contextmenu.maplet) this.contextmenu.initialize(this.maplet);
            if (!this.contextmenu.containsOverlay(this)) this.contextmenu.addOverlay(this)
        }
        if (this.pathNodeMenu) {
            if (!this.pathNodeMenu.maplet) this.pathNodeMenu.initialize(this.maplet);
            if (!this.pathNodeMenu.containsOverlay(this)) this.pathNodeMenu.addOverlay(this)
        }
        this.um.initialize(this.maplet);
        this.ao["click"] = MEvent.bindDom(this.maplet.map, "click", this, this.openInfoWindow);
        if (this.traffic) {
            this.ao["mouseover"] = MEvent.bindDom(this.maplet.map, "mouseover", this, this.uG);
            this.ao["mousedown"] = MEvent.bindDom(this.maplet.map, "mousedown", this, this.QBm20);
            this.ao["mouseup"] = MEvent.bindDom(this.maplet.map, "mouseup", this, this.l2k3);
            this.ao["mousemove"] = [];
            this.ao["mousemove"][0] = MEvent.bindDom(this.maplet.map, "mousemove", this, this.uG);
            this.ao["mousemove"][1] = MEvent.bindDom(this.maplet.map, "mousemove", this, this.N8xro)
        } else {
            this.ao["mouseover"] = MEvent.bindDom(this.maplet.map, "mouseover", this, this.uG);
            this.ao["mousemove"] = MEvent.bindDom(this.maplet.map, "mousemove", this, this.f9);
            this.ao["mousedown"] = MEvent.bindDom(this.maplet.map, "mousedown", this, this.w0);
            this.ao["mouseup"] = MEvent.bindDom(this.maplet.map, "mouseup", this, this.l1)
        }
        if (this.brush.fill && this.pts[0].getPid() != this.pts[this.pts.length - 1].getPid()) {
            this.pts.push(this.pts[0])
        }
        if (typeof this.maplet.lA != "undefined") {
            this.paint()
        }
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MPolyline'
    };
    this.zq = function () {
        return ""
    };
    this.zn = function () {
        if (apiType == 1) return {
            brush: this.brush,
            points: this.pts
        };
        else {
            var xU = this.brush.filled ? "2" : "0";
            var xT = this.brush.stroke + "," + xU + "," + this.brush.color + ":";
            for (var i = 0; i < this.pts.length; i++) xT += this.pts[i].getPid() + ",";
            return xT
        }
    };
    this.paint = function () {
        this.zX = this.maplet.vU9jf();
        if (px) {
            if (!this.z0) {
                this.z0 = document.createElement("v:shape");
                this.z0.style.width = "1px";
                this.z0.style.height = "1px";
                this.z0.coordsize = "1,1";
                this.z0.unselectable = "on";
                this.z0.id = this.id;
                this.z0.setAttribute("MStrName", this.toString());
                this.z0.strokecolor = this.brush.color;
                this.z0.strokeweight = this.brush.stroke + 'px';
                this.z0.fill = this.brush.fill;
                this.z0.filled = this.brush.fill;
                this.z0.style.position = "absolute";
                this.z0.contextmenu = this.contextmenu;
                i3c4$(this.z0, NH6, "true");
                i3c4$(this.z0, b4W, "polyline");
                i3c4$(this.z0, "oid", this.id);
                this.Ad = document.createElement("v:stroke");
                this.Ad.opacity = parseInt(this.brush.stroke) == 0 ? 0 : this.brush.transparency / 100.0;
                this.Ad.joinstyle = "round";
                this.Ad.endcap = "round";
                this.Ad.fill = this.brush.fill;
                this.Ad.endarrow = this.brush.arrow ? "classic" : "";
                this.Ad.dashstyle = parseInt(this.brush.style) ? "dash" : "";
                this.zY = document.createElement("v:fill");
                this.zY.opacity = ((this.brush.bgtransparency) / 100);
                this.zY.color = this.brush.bgcolor;
                this.z0.appendChild(this.zY);
                this.z0.appendChild(this.Ad);
                this.zX.appendChild(this.z0);
                if (!this.brush.fill && this.brush.overlap.enable) {
                    var DA0a2 = this.brush.overlap;
                    this.LoQ4F = document.createElement("v:shape");
                    this.LoQ4F.style.width = "1px";
                    this.LoQ4F.style.height = "1px";
                    this.LoQ4F.coordsize = "1,1";
                    this.LoQ4F.unselectable = "on";
                    this.LoQ4F.strokecolor = DA0a2.color;
                    this.LoQ4F.strokeweight = (DA0a2.stroke && !isNaN(DA0a2.stroke) ? DA0a2.stroke : this.brush.stroke - 2) + "px";
                    this.LoQ4F.fill = false;
                    this.LoQ4F.filled = false;
                    this.LoQ4F.style.position = "absolute";
                    i3c4$(this.LoQ4F, NH6, "true");
                    i3c4$(this.LoQ4F, b4W, "polyline");
                    i3c4$(this.LoQ4F, "oid", this.id);
                    var s = document.createElement("v:stroke");
                    s.opacity = DA0a2.transparency / 100.0;
                    s.joinstyle = "round";
                    s.endcap = "round";
                    s.fill = false;
                    s.endarrow = this.brush.arrow ? "classic" : "";
                    s.dashstyle = parseInt(this.brush.style) ? "dash" : "";
                    this.LoQ4F.appendChild(s);
                    this.zX.appendChild(this.LoQ4F)
                }
                this.z0.onmouseover = MEvent.gm(this, qG7);
                this.z0.onmouseout = MEvent.gm(this, Gl$r);
                this.z0.onmousedown = MEvent.gm(this, _6262);
                this.z0.onmouseup = MEvent.gm(this, U4N);
                if (this.LoQ4F) {
                    this.LoQ4F.onmouseover = MEvent.gm(this, qG7);
                    this.LoQ4F.onmouseout = MEvent.gm(this, Gl$r);
                    this.LoQ4F.onmousedown = MEvent.gm(this, _6262);
                    this.LoQ4F.onmouseup = MEvent.gm(this, U4N)
                }
            }
        } else {
            this.z0 = this.zX.firstChild;
            if (!this.Ad) {
                this.Ad = document.createElementNS("http://www.w3.org/2000/svg", "path");
                this.Ad.setAttribute("id", this.id);
                this.Ad.setAttribute("MStrName", this.toString());
                this.Ad.setAttribute("stroke-linejoin", "round");
                this.Ad.setAttribute("stroke-linecap", "round");
                this.Ad.setAttribute("marker-end", this.brush.arrow ? "url(#svgArrow)" : "");
                this.Ad.setAttribute("stroke", this.brush.color);
                this.Ad.setAttribute("stroke-width", this.brush.stroke + "px");
                this.Ad.setAttribute("stroke-opacity", this.brush.transparency / 100);
                this.Ad.setAttribute("style", parseInt(this.brush.style) ? "stroke-dasharray:3,15" : "");
                this.Ad.setAttribute("fill-opacity", this.brush.bgtransparency / 100);
                this.Ad.setAttribute("fill", (this.brush.fill) ? this.brush.bgcolor : "none");
                i3c4$(this.Ad, NH6, "true");
                i3c4$(this.Ad, b4W, "polyline");
                i3c4$(this.Ad, "oid", this.id);
                if (!this.brush.fill && this.brush.overlap.enable) {
                    var DA0a2 = this.brush.overlap;
                    this.LoQ4F = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    this.LoQ4F.setAttribute("stroke-linejoin", "round");
                    this.LoQ4F.setAttribute("stroke-linecap", "round");
                    this.LoQ4F.setAttribute("marker-end", this.brush.arrow ? "url(#svgArrow)" : "");
                    this.LoQ4F.setAttribute("stroke", DA0a2.color);
                    this.LoQ4F.setAttribute("stroke-width", (DA0a2.stroke && !isNaN(DA0a2.stroke) ? DA0a2.stroke : this.brush.stroke - 2) + "px");
                    this.LoQ4F.setAttribute("stroke-opacity", DA0a2.transparency / 100);
                    this.LoQ4F.setAttribute("style", parseInt(this.brush.style) ? "stroke-dasharray:3,15" : "");
                    this.LoQ4F.setAttribute("fill", "none");
                    i3c4$(this.LoQ4F, NH6, "true");
                    i3c4$(this.LoQ4F, b4W, "polyline");
                    i3c4$(this.LoQ4F, "oid", this.id)
                }
                this.ao["vstroke_mouseover"] = MEvent.bindDom(this.Ad, "mouseover", this, qG7);
                this.ao["vstroke_mouseout"] = MEvent.bindDom(this.Ad, "mouseout", this, Gl$r);
                this.ao["vstroke_mousedown"] = MEvent.bindDom(this.Ad, "mousedown", this, _6262);
                this.ao["vstroke_mouseup"] = MEvent.bindDom(this.Ad, "mouseup", this, U4N);
                this.ao["vstroke_mousemove"] = MEvent.bindDom(this.Ad, "mousemove", this, kF8);
                if (this.LoQ4F) {
                    this.ao["overlapLine_mouseover"] = MEvent.bindDom(this.LoQ4F, "mouseover", this, qG7);
                    this.ao["overlapLine_mouseout"] = MEvent.bindDom(this.LoQ4F, "mouseout", this, Gl$r);
                    this.ao["overlapLine_mousedown"] = MEvent.bindDom(this.LoQ4F, "mousedown", this, _6262);
                    this.ao["overlapLine_mouseup"] = MEvent.bindDom(this.LoQ4F, "mouseup", this, U4N);
                    this.ao["overlapLine_mousemove"] = MEvent.bindDom(this.LoQ4F, "mousemove", this, kF8)
                }
                if (typeof this.contextmenu == "object" && this.contextmenu) {
                    this.Ad.contextmenu = this.contextmenu
                }
                this.z0.appendChild(this.Ad);
                if (this.LoQ4F) this.z0.appendChild(this.LoQ4F)
            }
        }
        this.update()
    };
    var qG7 = function (lM) {
        var DA0a2 = lM.target;
        if (this.maplet.sS == ts.tz || this.maplet.sS == ts.tA || this.maplet.sS == ts._Q5y4) this.maplet.KY4("crosshair", DA0a2);
        else if (this.info || MEvent.contains(this, "click")) this.maplet.KY4("pointer", DA0a2);
        else this.maplet.KY4("default", DA0a2);
        if (lM.type == "mouseover") MEvent.trigger(this, "mouseover", this)
    };
    var Gl$r = function (lM) {
        if (this.maplet.sS != ts.tz && this.maplet.sS != ts.tA && this.maplet.sS != ts._Q5y4) this.maplet.KY4("default", lM.target);
        MEvent.trigger(this, "mouseout", this)
    };
    var _6262 = function (lM) {
        if (!px) {
            this.eg0G = true;
            this.Y37 = false
        }
        if (this.maplet.sS != ts.tz && this.maplet.sS != ts.tA && this.maplet.sS != ts._Q5y4) this.maplet.KY4("move", lM.target)
    };
    var U4N = function (lM) {
        if (!px) this.eg0G = false;
        qG7.apply(this, [lM])
    };
    var kF8 = function (lM) {
        if (this.eg0G && !this.Y37) this.Y37 = true
    };
    this.setContextMenu = function (menu) {
        this.contextmenu = menu;
        if (menu && typeof this.maplet == "object" && this.maplet) {
            if (!this.contextmenu.maplet) this.contextmenu.initialize(this.maplet);
            if (!this.contextmenu.containsOverlay(this)) this.contextmenu.addOverlay(this)
        } else if (!menu) {
            this.removeContextMenu()
        }
    };
    this.getContextMenu = function (dom) {
        if (!dom) return null;
        if (typeof dom.id == "string" && dom.id.indexOf("traffic") != -1 && this.traffic) return this.pathNodeMenu;
        else return this.contextmenu
    };
    this.setPathNodeMenu = function (menu) {
        this.pathNodeMenu = menu;
        if (menu && typeof this.maplet == "object" && this.maplet) {
            if (!this.pathNodeMenu.maplet) this.pathNodeMenu.initialize(this.maplet);
            if (!this.pathNodeMenu.containsOverlay(this)) this.pathNodeMenu.addOverlay(this)
        } else if (!menu) {
            this.removePathNodeMenu()
        }
    };
    this.removePathNodeMenu = function () {
        if (this.pathNodeMenu) {
            this.pathNodeMenu.removeOverlay(this);
            this.pathNodeMenu = null
        }
    };
    this.setBrush = function (hCn68) {
        if (!(hCn68 instanceof MBrush)) return;
        this.brush = hCn68;
        if (px) {
            if (this.z0 && this.Ad && this.zY) {
                this.z0.strokecolor = this.brush.color;
                this.z0.strokeweight = this.brush.stroke + 'px';
                this.Ad.opacity = parseInt(this.brush.stroke) == 0 ? 0 : this.brush.transparency / 100.0;
                this.Ad.fill = this.brush.fill;
                this.Ad.endarrow = this.brush.arrow ? "classic" : "none";
                this.Ad.dashstyle = parseInt(this.brush.style) ? "dash" : "";
                this.zY.opacity = ((this.brush.bgtransparency) / 100);
                this.zY.color = this.brush.bgcolor
            }
        } else {
            if (this.arrow) {
                this.arrow.setAttribute("fill", this.brush.color);
                this.arrow.setAttribute("fill-opacity", this.brush.bgtransparency / 100 + 0.3)
            }
            if (this.Ad) {
                this.Ad.setAttribute("marker-end", this.brush.arrow ? "url(#svgArrow)" : "");
                this.Ad.setAttribute("stroke", this.brush.color);
                this.Ad.setAttribute("stroke-width", this.brush.stroke + "px");
                this.Ad.setAttribute("stroke-opacity", this.brush.transparency / 100);
                this.Ad.setAttribute("style", parseInt(this.brush.style) ? "stroke-dasharray:10,15" : "");
                this.Ad.setAttribute("fill-opacity", this.brush.bgtransparency / 100);
                this.Ad.setAttribute("fill", (this.brush.fill) ? this.brush.bgcolor : "none")
            }
        }
    };
    this.setInfoWindow = function (d$P) {
        if (this.info) {
            if (avBubble.overlay && avBubble.overlay.id == this.id && ContentInfo && ContentInfo.isVisible()) this.maplet.hideBubble();
            this.info = null
        }
        if (d$P) {
            this.info = d$P;
            this.info.setOverlay(this)
        }
    };
    this.setPoints = function (pts) {
        this.pts = pts;
        if (this.maplet) this.update()
    };
    this.kaa5d = function (pt) {
        if (typeof pt != "object" || !pt) return false;
        return (pt.mapX > -this.maplet.width / 3 && pt.mapX < this.maplet.width * 1.33) && (pt.mapY > -this.maplet.height / 3 && pt.mapY < this.maplet.height * 1.33)
    };
    this.update = function () {
        this.z9 = document.getElementById(this.id + "vNodeLayer");
        if (this.bEditable || this.maplet.sS == ts.tu) {
            if (!this.z9) {
                this.z9 = document.createElement("div");
                this.z9.id = this.id + "vNodeLayer";
                this.z9.style.position = "absolute";
                this.z9.style.display = "none";
                this.z9.unselectable = "on";
                this.z9.style.zIndex = 1;
                this.zX.appendChild(this.z9)
            }
            if (!this.traffic || (this.traffic && !this.qo)) this.z9.innerHTML = "";
            if (this.traffic) {
                var $Ka33 = document.getElementById(this.id + "_node_traffic");
                if ($Ka33 == null) {
                    $Ka33 = document.createElement("IMG");
                    $Ka33.style.width = CTLIMG_RESOURCE[0].w + "px";
                    $Ka33.style.height = CTLIMG_RESOURCE[0].h + "px";
                    if (Nfy) {
                        $Ka33.src = sX;
                        $Ka33.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + CTLIMG_RESOURCE[0].url + ",sizingMethod=scale);"
                    } else {
                        $Ka33.src = CTLIMG_RESOURCE[0].url
                    }
                    $Ka33.id = this.id + "_node_traffic";
                    $Ka33.style.position = "absolute";
                    $Ka33.unselectable = "on";
                    $Ka33.alt = lt;
                    $Ka33.title = lt;
                    $Ka33.style.left = "-65px";
                    $Ka33.style.top = "-112px";
                    $Ka33.ohT15 = "no";
                    $Ka33.style.cursor = "pointer";
                    $Ka33.onmousedown = function () {
                        return false
                    };
                    i3c4$($Ka33, "oid", this.id);
                    this.z9.style.width = "11px";
                    this.z9.style.height = "11px";
                    this.z9.style.overflow = "hidden";
                    this.z9.appendChild($Ka33)
                }
                if (!this.qo) this.z9.style.display = "none"
            }
        }
        this.pu = new Array();
        this.aP = new Array();
        this.aR = new Array();
        var pg = 0;
        var us = 10;
        if (this.pts == null || this.pts.length < 2) {
            return
        }
        var cY = false;
        var tn = this.maplet.width;
        var to = this.maplet.height;
        this.tn = Number.MAX_VALUE;
        this.to = this.tn;
        this.s4063 = -Number.MAX_VALUE;
        this.r3m74 = this.s4063;
        for (var qC = 0; qC < this.pts.length; qC++) {
            if (!this.pts[qC].inLevelRange(this.maplet.AG)) continue;
            if (!this.pts[qC].maplet) {
                this.pts[qC].initialize(this.maplet)
            }
            if (this.maplet.Or5V$) {
                if (this.maplet.q1C != this.pts[qC].q1C) {
                    this.pts[qC].mapX += this.maplet.ug59;
                    this.pts[qC].mapY += this.maplet.mx4;
                    this.pts[qC].q1C = this.maplet.q1C
                }
            } else {
                this.pts[qC].k9d()
            }
            this.tn = Math.min(this.tn, this.pts[qC].mapX);
            this.to = Math.min(this.to, this.pts[qC].mapY);
            this.s4063 = Math.max(this.s4063, this.pts[qC].mapX);
            this.r3m74 = Math.max(this.r3m74, this.pts[qC].mapY);
            if (this.bEditable && !this.kaa5d(this.pts[qC]) && !this.kaa5d(this.pts[qC + 1]) && !this.kaa5d(this.pts[qC - 1])) {
                continue
            }
            if (this.pts[qC].mapX && this.pts[qC].mapY) {
                this.aR[pg] = VS8w8(this.pts[qC].mapY);
                this.aP[pg] = VS8w8(this.pts[qC].mapX);
                this.pu[pg] = qC;
                if (tn > this.aP[pg]) tn = this.aP[pg];
                if (to > this.aR[pg]) to = this.aR[pg];
                if (!cY && (this.aR[pg] < 0 || this.aR[pg] > this.maplet.height || this.aP[pg] < 0 || this.aP[pg] > this.maplet.width)) {
                    cY = true
                }
                if (pg > 0 && (Math.abs(this.aP[pg] - this.aP[pg - 1]) + Math.abs(this.aR[pg] - this.aR[pg - 1])) > us) {
                    pg++
                }
                if (pg == 0) pg++
            }
        }
        if (!(this.bEditable || this.maplet.sS == ts.tu) && cY) {
            var aQ = new Array();
            var aS = new Array();
            var pv = new Array();
            pg = 0;
            for (var YK7 = 1; YK7 < this.aP.length; YK7++) {
                if ((this.aR[YK7] < -this.maplet.height && this.aR[YK7 - 1] < -this.maplet.height) || (this.aR[YK7] > this.maplet.height * 2 && this.aR[YK7 - 1] > this.maplet.height * 2) || (this.aP[YK7] > this.maplet.width * 2 && this.aP[YK7 - 1] > this.maplet.width * 2) || (this.aP[YK7] < -this.maplet.width && this.aP[YK7 - 1] < -this.maplet.width)) {
                    continue
                }
                if (aQ.length == 0 || (aQ[pg] != this.aP[YK7 - 1] && aS[pg] != this.aR[YK7 - 1])) {
                    aQ[pg] = this.aP[YK7 - 1];
                    aS[pg] = this.aR[YK7 - 1];
                    pv[pg] = this.pu[YK7 - 1];
                    pg++
                }
                aQ[pg] = this.aP[YK7];
                aS[pg] = this.aR[YK7];
                pv[pg] = this.pu[YK7];
                pg++
            }
            this.aP = aQ;
            this.aR = aS;
            this.pu = pv;
            aQ = null;
            aS = null;
            pv = null
        }
        var Aa = [];
        this.Aa = [];
        var _i2 = false;
        for (var i = 0; i < this.aP.length; i++) {
            if (i == 0) {
                Aa.push("M" + this.aP[i] + "," + this.aR[i])
            } else if (!_i2 && px) {
                Aa[0] += " L" + this.aP[i] + "," + this.aR[i];
                _i2 = true
            } else {
                if (px) Aa.push(this.aP[i] + "," + this.aR[i]);
                else Aa.push("L" + this.aP[i] + "," + this.aR[i])
            }
            this.Aa.push(this.aP[i] + ',' + this.aR[i]);
            if ((this.bEditable || this.maplet.sS == ts.tu) && !this.traffic) {
                var z7 = document.getElementById(this.id + "_node_" + this.pu[i]);
                if (z7 == null) {
                    z7 = new Image();
                    z7.id = this.id + "_node_" + this.pu[i];
                    z7.qf = i;
                    z7.qk = this.pu[i];
                    z7.src = ul;
                    z7.unselectable = "on";
                    z7.alt = lt;
                    z7.title = lt;
                    z7.style.position = "absolute";
                    z7.style.filter = "alpha(opacity=80);";
                    z7.style.MozOpacity = 0.8;
                    z7.style.opacity = 0.8;
                    z7.onmousedown = function () {
                        return false
                    };
                    z7.contextmenu = this.um
                }
                z7.style.left = (parseInt(this.aP[i]) - 5) + "px";
                z7.style.top = (parseInt(this.aR[i]) - 5) + "px";
                this.z9.appendChild(z7);
                if (i > 0) {
                    var z8 = document.getElementById(this.id + "_midnode_" + this.pu[i]);
                    if (z8 == null) {
                        z8 = new Image();
                        z8.id = this.id + "_midnode_" + this.pu[i];
                        z8.qf = i;
                        z8.qk = this.pu[i];
                        z8.unselectable = "on";
                        z8.src = ul;
                        z8.alt = lt;
                        z8.title = lt;
                        z8.style.position = "absolute";
                        z8.style.filter = "alpha(opacity=60);";
                        z8.style.MozOpacity = 0.6;
                        z8.style.opacity = 0.6;
                        z8.onmousedown = function () {
                            return false
                        };
                        z8.contextmenu = this.um
                    }
                    z8.style.left = ((parseInt(this.aP[i]) + parseInt(this.aP[i - 1])) / 2 - 5) + "px";
                    z8.style.top = ((parseInt(this.aR[i]) + parseInt(this.aR[i - 1])) / 2 - 5) + "px";
                    this.z9.appendChild(z8)
                }
            }
        }
        if (bmc) {
            this.z0.style.left = parseInt(tn) + "px";
            this.z0.style.top = parseInt(to) + "px"
        }
        if (this.z0) {
            if (px) {
                var Dwc9 = document.getElementById("fix_id");
                if (Dwc9) {
                    Dwc9.parentNode.removeChild(Dwc9)
                }
                var s = document.createElement("script");
                s.id = "fix_id";
                document.body.insertBefore(s, document.body.firstChild);
                this.z0.style.display = "none";
                this.z0.path = Aa.join(",") + " e";
                this.z0.style.display = "";
                if (this.LoQ4F) {
                    this.LoQ4F.style.display = "none";
                    this.LoQ4F.path = Aa.join(",") + " e";
                    this.LoQ4F.style.display = ""
                }
            } else {
                this.Ad.setAttribute("d", Aa.join(""));
                if (this.LoQ4F) this.LoQ4F.setAttribute("d", Aa.join(""))
            }
        }
        if (this.isRefreshMkIndex && !(this.maplet.sS == ts.tb || this.maplet.sS == ts.ta || this.maplet.sS == ts.lz || this.maplet.sS == ts.ly)) this.refreshMarkerZIndex()
    };
    this.refreshMarkerZIndex = function () {
        if (!this.hHTG3() || !this.maplet) return;
        var skY = this.maplet.getMarkersInPolygon(this);
        var x$T = new Object();
        if (skY.length > 0) {
            for (var i = 0; i < skY.length; i++) {
                if (this.bEditable && !skY[i].bEditable) {
                    skY[i].setZIndex(-1)
                } else if (skY[i].icon && skY[i].icon.div.style.zIndex < 0) {
                    skY[i].YS8()
                }
                x$T[skY[i].id] = skY[i]
            }
        }
        for (var qC in this.s107) {
            if (!x$T[this.s107[qC].id]) {
                if (typeof this.s107[qC].YS8 == "function") {
                    this.s107[qC].YS8()
                }
            }
        }
        this.s107 = x$T
    };
    this.hHTG3 = function () {
        if (!this.Ad) return false;
        return this.Ad.getAttribute("fill") != "none" || this.Ad.getAttribute("fill") == eval(true)
    };
    this.$C50 = function (X_4) {
        if (!this.s107[X_4.id]) this.s107[X_4.id] = X_4
    };
    this.C69S = function () {
        if (this.z9) {
            var Xil09 = this.z9.childNodes;
            for (var i = 0; i < Xil09.length; i++) {
                Xil09[i].onmousedown = null;
                Xil09[i].contextmenu = null
            }
            this.z9.contextmenu = null;
            _removeNode(this.z9);
            this.z9 = null
        }
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (finalize) {
        if (typeof finalize != "boolean") finalize = false;
        if (this.hHTG3() && this.bEditable) {
            this.bEditable = false;
            this.refreshMarkerZIndex();
            if (!finalize) this.bEditable = true
        }
        if (px) {
            if (this.z0) {
                this.z0.onmouseover = null;
                this.z0.onmouseout = null;
                this.z0.onmousedown = null;
                this.z0.onmouseup = null
            }
            if (this.LoQ4F) {
                this.LoQ4F.onmouseover = null;
                this.LoQ4F.onmouseout = null;
                this.LoQ4F.onmousedown = null;
                this.LoQ4F.onmouseup = null
            }
        }
        for (var l8 in this.ao) {
            if (l8.substring(0, 8) == "vstroke_") {
                if (this.Ad) MEvent.removeBuiltInListener(this.Ad, l8.substring(8), this.ao[l8])
            } else if (l8.substring(0, 10) == "vpolyline_") {
                if (this.z0) MEvent.removeBuiltInListener(this.z0, l8.substring(10), this.ao[l8])
            } else if (l8.substring(0, 12) == "overlapLine_") {
                if (this.LoQ4F) MEvent.removeBuiltInListener(this.LoQ4F, l8.substring(12), this.ao[l8])
            } else {
                if (this.maplet) {
                    var t26V4 = this.ao[l8];
                    if (Oi58(t26V4)) {
                        for (var i = 0; i < t26V4.length; i++) MEvent.removeBuiltInListener(this.maplet.map, l8, t26V4[i])
                    } else {
                        MEvent.removeBuiltInListener(this.maplet.map, l8, t26V4)
                    }
                }
            }
            this.ao[l8] = null;
            if (finalize) delete this.ao[l8]
        }
        if (finalize) {
            this.ao = null;
            this.removeContextMenu();
            this.um.remove(true);
            this.um = null
        }
        if (typeof this.LoQ4F == "object" && this.LoQ4F) {
            _removeNode(this.LoQ4F);
            this.LoQ4F = null
        }
        if (px) {
            if (typeof this.z0 == "object" && this.z0) {
                _removeNode(this.z0);
                this.z0 = null
            }
        } else {
            if (typeof this.Ad == "object" && this.Ad) {
                _removeNode(this.Ad);
                this.Ad = null
            }
        }
        if (this.maplet) {
            if (this.maplet.u5[this.id]) {
                this.maplet.u5[this.id] = null;
                delete this.maplet.u5[this.id]
            }
        }
        this.C69S();
        if (finalize) this.maplet = null
    };
    this.removeContextMenu = function () {
        if (typeof this.contextmenu == "object" && this.contextmenu) {
            this.contextmenu.removeOverlay(this);
            this.contextmenu = null
        }
    };
    this.getCenterXY = function () {
        var _48 = 0;
        var BB217 = 0;
        if (this.brush.fill) {
            _48 = this.tn + (this.s4063 - this.tn) / 2;
            BB217 = this.to + (this.r3m74 - this.to) / 2
        } else {
            var pn = Math.ceil(this.pts.length / 2) - (this.pts.length % 2);
            if (pn < this.pts.length) {
                _48 = this.pts[pn].mapX;
                BB217 = this.pts[pn].mapY
            }
        }
        return {
            x: _48,
            y: BB217
        }
    };
    this.getCenterPt = function () {
        if (this.tn != Number.MAX_VALUE && this.maplet) {
            var B331 = this.getCenterXY();
            var pt = new MPoint(this.maplet.toMapCoordinate(B331.x, B331.y));
            pt.initialize(this.maplet);
            return pt
        } else {
            return null
        }
    };
    this.openInfoWindow = function (lM) {
        if (this.maplet) {
            if (typeof lM != "undefined" && (lM.target.id == this.id || lM.target == this.LoQ4F) && this.maplet.H6$0) {
                this.maplet.H6$0 = false;
                if (this.maplet.h96 || (ContentInfo && ContentInfo.isVisible() && avBubble.overlay == this)) return
            }
            if (this.maplet.sS != ts.ty && this.maplet.sS != ts.tu) return;
            if (this.info && !this.info.getOverlay()) this.info.setOverlay(this);
            if (typeof lM == "undefined") {
                if (this.info != null && this.pts.length >= 2) {
                    var Iess = this.getCenterXY();
                    var _48 = Iess.x;
                    var BB217 = Iess.y;
                    if (_48 >= this.maplet.width * 1.5 || _48 <= -(this.maplet.width / 2) || BB217 <= -(this.maplet.height / 2) || BB217 >= this.maplet.height * 1.5) {
                        this.maplet.setCenter(new MPoint(this.maplet.toMapCoordinate(_48, BB217)));
                        _48 = this.maplet.width / 2;
                        BB217 = this.maplet.height / 2
                    }
                    if (iToolTipStyle == 2) {
                        this.x = _48;
                        this.y = BB217;
                        MEvent.trigger(this, "click", this)
                    } else {
                        this.maplet.wN(_48, BB217, this.info, "", "", true)
                    }
                }
            } else if ((lM.target.id == this.id || lM.target == this.LoQ4F) && !this.maplet.H6$0) {
                var x = lM.clientX - this.maplet.offsetX - this.maplet.left - (px ? 3 : 1);
                var y = lM.clientY - this.maplet.offsetY - this.maplet.top - (px ? 3 : 1);
                if (iToolTipStyle == 2) {
                    this.x = x;
                    this.y = y;
                    MEvent.trigger(this, "click", this)
                } else {
                    MEvent.trigger(this, "click", this);
                    if (this.info) {
                        if (!this.info.getOverlay()) this.info.setOverlay(this);
                        this.maplet.wN(x, y, this.info, false);
                        avBubble._23 = true
                    }
                }
            }
        }
    };
    this.wQ = function (fg) {
        if (this.z9 != null) {
            if (fg) {
                this.z9.style.display = "block";
                this.z9.style.zIndex = 10
            } else {
                this.z9.style.display = "none";
                this.z9.style.zIndex = 0
            }
        }
    };
    this.uG = function (lM) {
        if (!this.maplet) return;
        if (this.maplet.sS == ts.tb || this.maplet.sS == ts.ta || this.maplet.sS == ts.lz || this.maplet.sS == ts.ly) return;
        if (this.traffic) {
            if ((this.bEditable || this.maplet.sS == ts.tu) && !this.qo) {
                if (this.ls) return;
                var XK45Y = this.F7x5([lM.clientX - this.maplet.offsetX, lM.clientY - this.maplet.offsetY], this.Aa);
                if (this.zX != null && this.maplet && XK45Y != null || fJ(lM.target, this.z9)) {
                    this.wQ(true);
                    var dhN = [-10, -10];
                    if (XK45Y != null && this.maplet) {
                        dhN = this.XG8(XK45Y[0], XK45Y[1], [lM.clientX - this.maplet.offsetX, lM.clientY - this.maplet.offsetY]);
                        this.XK45Y = XK45Y;
                        if (px) this.z0.style.cursor = "pointer";
                        else this.Ad.style.cursor = "pointer"
                    } else {
                        if (px) this.z0.style.cursor = "default";
                        else this.Ad.style.cursor = "default"
                    }
                    this.i150j = true;
                    clearTimeout(this.PAA2);
                    this.PAA2 = null;
                    var frP = [0, 0];
                    switch (this.qls) {
                    case 1:
                        frP = [0, 1];
                        break;
                    case 2:
                        frP = [1, 0];
                        break;
                    case 3:
                        frP = [1, 1];
                        break;
                    case 4:
                        frP = [0, 0];
                        break;
                    default:
                        frP = [0, 0];
                        break
                    }
                    this.z9.style.left = (parseInt(dhN[0]) - (px ? (5 + frP[0]) : 5)) + "px";
                    this.z9.style.top = (parseInt(dhN[1]) - (px ? (5 + frP[1]) : 5)) + "px"
                } else {
                    if (px) this.z0.style.cursor = "default";
                    else this.Ad.style.cursor = "default";
                    if (this.z9 != null && this.z9.style.display == "none") return;
                    if (this.PAA2 != null) return;
                    this.i150j = false;
                    this.PAA2 = getTimeout(this, function () {
                        if (this.i150j) return;
                        if (this.z9 != null && this.z9.style.display == "none") return;
                        this.wQ(false);
                        clearTimeout(this.PAA2);
                        this.PAA2 = null
                    }, 500)
                }
            } else if (this.qo) {
                this.N8xro(lM)
            }
        } else {
            if (this.bEditable || this.maplet.sS == ts.tu) {
                if (this.ls || this.zX != null && this.maplet && fJ(lM.target, px ? this.z0 : this.Ad) || fJ(lM.target, this.z9) || fJ(lM.target, this.LoQ4F)) {
                    if (this.options.editHilite) {
                        if (px) {
                            this.Ad.opacity = parseInt(this.brush.stroke) == 0 ? 0 : 1
                        } else {
                            this.Ad.setAttribute("stroke-opacity", 1)
                        }
                    }
                    this.wQ(true)
                } else {
                    if (this.options.editHilite) {
                        if (px) {
                            this.Ad.opacity = parseInt(this.brush.stroke) == 0 ? 0 : this.brush.transparency / 100.0
                        } else {
                            this.Ad.setAttribute("stroke-opacity", this.brush.transparency / 100.0)
                        }
                    }
                    this.wQ(false)
                }
            }
        }
    };
    this.w0 = function (lM) {
        if (this.zX != null && this.maplet && (px && lM.button == 1 || !px && lM.button == 0) && (this.bEditable || this.maplet.sS == ts.tu) && (fJ(lM.target, px ? this.z9 : this.Ad) || !px && fJ(lM.target, this.z9)) && lM.target.id.indexOf("node") != -1) {
            this.qo = true;
            this.maplet.l6 = lM.target.id;
            this.l0 = px ? lM.offsetX : lM.layerX;
            this.na = px ? lM.offsetY : lM.layerY;
            _s12L = lM.target;
            if (this.wk == null) {
                if (px) {
                    this.wk = document.createElement("v:polyline");
                    this.wk.unselectable = "on";
                    this.wk.id = this.id;
                    this.wk.strokecolor = this.brush.color;
                    this.wk.strokeweight = this.brush.stroke + 'px';
                    this.wk.fill = this.brush.fill;
                    this.wk.filled = this.brush.fill;
                    this.wk.style.position = "absolute";
                    this.Ac = document.createElement("v:stroke");
                    this.Ac.opacity = parseInt(this.brush.stroke) == 0 ? 0 : 1;
                    this.Ac.joinstyle = "round";
                    this.Ac.endcap = "round";
                    this.Ac.fill = this.brush.fill;
                    this.Ac.dashstyle = "dash";
                    var Ab = document.createElement("v:fill");
                    Ab.opacity = ((this.brush.bgtransparency) / 100);
                    Ab.color = this.brush.bgcolor;
                    this.wk.appendChild(Ab)
                } else {
                    this.wk = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                    this.wk.setAttribute("version", "1.1");
                    this.wk.setAttribute("overflow", "visible");
                    this.wk.setAttribute("viewBox", "0 0 " + this.maplet.width + " " + this.maplet.height);
                    this.wk.setAttribute("height", this.maplet.height + "px");
                    this.wk.setAttribute("width", this.maplet.width + "px");
                    this.wk.setAttribute("unselectable", "on");
                    this.Ac = document.createElementNS("http://www.w3.org/2000/svg", "path");
                    this.Ac.setAttribute("MStrName", this.toString());
                    this.Ac.setAttribute("stroke-linejoin", "round");
                    this.Ac.setAttribute("stroke-linecap", "round");
                    this.Ac.setAttribute("stroke", this.brush.color);
                    this.Ac.setAttribute("stroke-width", this.brush.stroke + "px");
                    this.Ac.setAttribute("stroke-opacity", 1);
                    this.Ac.setAttribute("style", "stroke-dasharray:10,15");
                    this.Ac.setAttribute("fill-opacity", this.brush.bgtransparency / 100);
                    this.Ac.setAttribute("fill", (this.brush.fill) ? this.brush.bgcolor : "none");
                    if (this.brush.arrow) {
                        this.arrow = document.createElementNS("http://www.w3.org/2000/svg", "path");
                        this.arrow.setAttribute("d", "M 0 0 L 10 5 L 0 10 L 4 5 z");
                        this.arrow.setAttribute("fill", this.brush.color);
                        this.arrow.setAttribute("fill-opacity", this.brush.bgtransparency / 100 + 0.3);
                        this.zY = document.createElementNS("http://www.w3.org/2000/svg", "marker");
                        this.zY.setAttribute("id", "arrow" + this.id);
                        this.zY.setAttribute("viewBox", "0 0 10 10");
                        this.zY.setAttribute("refX", "6");
                        this.zY.setAttribute("refY", "5");
                        this.zY.setAttribute("markerUnits", "strokeWidth");
                        this.zY.setAttribute("orient", "auto");
                        this.zY.appendChild(this.arrow);
                        this.zY.appendChild(this.arrow);
                        this.wk.appendChild(this.zY)
                    }
                }
            }
            this.wk.appendChild(this.Ac);
            this.zX.appendChild(this.wk)
        }
    };
    this.f9 = function (lM) {
        if (_s12L != null && (this.bEditable || this.maplet.sS == ts.tu) && _s12L.id.indexOf("node") > 0 && this.qo) {
            if (_s12L != null) {
                if (avBubble.overlay && avBubble.overlay.id == this.id) this.maplet.hideBubble();
                var x = lM.clientX - this.maplet.offsetX - this.maplet.left - this.l0;
                var y = lM.clientY - this.maplet.offsetY - this.maplet.top - this.na;
                _s12L.style.left = (parseInt(x)) + "px";
                _s12L.style.top = (parseInt(y)) + "px";
                this.lw = new Date().getTime();
                this.ls = true;
                var ps = parseInt(_s12L.qf);
                var Aa = new String(px ? "" : "M");
                if (_s12L.id.indexOf("_midnode_") > 0) {
                    Aa += this.aP[ps - 1] + ',' + this.aR[ps - 1];
                    Aa += (px ? "," : "L") + (x + 5) + ',' + (y + 5);
                    Aa += (px ? "," : "L") + this.aP[ps] + ',' + this.aR[ps]
                } else {
                    if (ps > 0) {
                        Aa += this.aP[ps - 1] + ',' + this.aR[ps - 1] + (px ? "," : "")
                    }
                    Aa += ((ps > 0 && !px) ? "L" : "") + (x + 5) + ',' + (y + 5);
                    if (ps < this.aP.length - 1) {
                        Aa += (px ? "," : "L") + this.aP[ps + 1] + ',' + this.aR[ps + 1]
                    }
                }
                if (this.wk != null) {
                    if (this.wk.points) {
                        this.wk.points.value = Aa
                    } else if (px) {
                        this.wk.value = Aa
                    } else {
                        this.Ac.setAttribute("d", Aa)
                    }
                }
            }
        }
    };
    this.l1 = function (lM) {
        if (this.zX != null && this.maplet && (this.bEditable || this.maplet.sS == ts.tu) && this.qo) {
            if (_s12L != null && this.ls) {
                var x = parseInt(lM.clientX) - parseInt(this.maplet.offsetX) - parseInt(this.maplet.left) - this.l0;
                var y = parseInt(lM.clientY) - parseInt(this.maplet.offsetY) - parseInt(this.maplet.top) - this.na;
                var ps = parseInt(_s12L.qk);
                var ud = this.maplet.toMapCoordinate(x + 5, y + 5);
                if (_s12L.id.indexOf("_midnode_") > 0) {
                    this.pts.splice(ps, 0, new MPoint(ud))
                } else {
                    this.pts.splice(ps, 1, new MPoint(ud))
                }
                this.lw = new Date().getTime();
                this.ls = false;
                _s12L = null;
                this.update();
                MEvent.trigger(this, "drag", this);
                MEvent.trigger(this.maplet, "edit", this)
            }
            this.qo = false;
            if (this.wk.parentNode != null) {
                _removeNode(this.wk);
                this.wk = null
            }
        }
        if (this.maplet && this.maplet.l6 == this.id) {
            this.maplet.l6 = null
        }
    };
    this.removeNode = function (e60, menu, overlay) {
        var qf = menu.f43c9;
        if (typeof qf != "undefined") {
            if (qf.toString().indexOf(this.id) >= 0 && qf.toString().lastIndexOf("_") >= 0) {
                qf = qf.toString().substring(qf.toString().lastIndexOf("_") + 1)
            }
            qf = parseInt(qf);
            if (!isNaN(qf) && qf < this.pts.length) {
                this.pts.splice(qf, 1);
                MEvent.trigger(this, "edit", this);
                MEvent.trigger(this.maplet, "edit", this);
                if (this.wk != null && this.wk.parentNode != null) {
                    _removeNode(this.wk);
                    this.wk = null
                }
                this.update()
            }
        }
    };
    MEvent.bind(this.un, "select", this, this.removeNode);
    this.V3W = function (x00J, O11, nc, y6x) {
        this._cv6_ = function (L81) {
            var G16 = Math.atan2(O11 - L81.Ivy6, x00J - L81.y8AH) - L81.L4b7;
            var x3l48 = Math.atan2(y6x - L81.Ivy6, nc - L81.y8AH) - L81.L4b7;
            while (G16 < 0) G16 += 2 * Math.PI;
            while (x3l48 < 0) x3l48 += 2 * Math.PI;
            while (G16 > 2 * Math.PI) G16 -= 2 * Math.PI;
            while (x3l48 > 2 * Math.PI) x3l48 -= 2 * Math.PI;
            return (G16 - Math.PI) * (x3l48 - Math.PI) < 0 && (G16 > Math.PI ? 2 * Math.PI - G16 : G16) + (x3l48 > Math.PI ? 2 * Math.PI - x3l48 : x3l48) < Math.PI
        }
    };
    this.HIdee = function (y8AH, Ivy6, L4b7) {
        this.y8AH = y8AH;
        this.Ivy6 = Ivy6;
        this.L4b7 = L4b7
    };
    this.vrL16 = function (fTr) {
        var v6 = null;
        fTr = fTr.toString().split(",");
        var o96U2 = parseInt(fTr[0]);
        var F17B = parseInt(fTr[1]);
        var a6Gi = parseInt(fTr[2]);
        var J57S8 = parseInt(fTr[3]);
        var lI3 = Math.abs(o96U2 - a6Gi);
        var WH9 = Math.abs(F17B - J57S8);
        var Ct90M = parseInt(this.brush.stroke);
        var g4 = Ct90M * WH9 / Math.sqrt(Math.pow(lI3, 2) + Math.pow(WH9, 2));
        var g5 = g4 * lI3 / WH9;
        var lx232 = 4;
        this.qls = 0;
        if (o96U2 == a6Gi) {
            this.qls = 1;
            v6 = [
                [o96U2 - Ct90M - lx232, F17B],
                [o96U2 + Ct90M + lx232, F17B],
                [a6Gi + Ct90M + lx232, J57S8],
                [a6Gi - Ct90M - lx232, J57S8]
            ]
        } else if (F17B == J57S8) {
            this.qls = 2;
            v6 = [
                [o96U2, F17B + Ct90M + lx232],
                [a6Gi, J57S8 + Ct90M + lx232],
                [a6Gi, J57S8 - Ct90M - lx232],
                [o96U2, F17B - Ct90M - lx232]
            ]
        } else if (F17B < J57S8 && o96U2 < a6Gi) {
            this.qls = 3;
            v6 = [
                [parseInt(o96U2 - g4 - lx232), parseInt(F17B + g5 + lx232)],
                [parseInt(a6Gi - g4 - lx232), parseInt(J57S8 + g5 + lx232)],
                [parseInt(a6Gi + g4 + lx232), parseInt(J57S8 - g5 - lx232)],
                [parseInt(o96U2 + g4 + lx232), parseInt(F17B - g5 - lx232)]
            ]
        } else if (F17B > J57S8 && o96U2 < a6Gi) {
            this.qls = 4;
            v6 = [
                [parseInt(o96U2 - g4 - lx232), parseInt(F17B - g5 - lx232)],
                [parseInt(a6Gi - g4 - lx232), parseInt(J57S8 - g5 - lx232)],
                [parseInt(a6Gi + g4 + lx232), parseInt(J57S8 + g5 + lx232)],
                [parseInt(o96U2 + g4 + lx232), parseInt(F17B + g5 + lx232)]
            ]
        } else if (F17B > J57S8 && o96U2 > a6Gi) {
            this.qls = 3;
            v6 = [
                [parseInt(o96U2 - g4 - lx232), parseInt(F17B + g5 + lx232)],
                [parseInt(o96U2 + g4 + lx232), parseInt(F17B - g5 - lx232)],
                [parseInt(a6Gi + g4 + lx232), parseInt(J57S8 - g5 - lx232)],
                [parseInt(a6Gi - g4 - lx232), parseInt(J57S8 + g5 + lx232)]
            ]
        } else if (F17B < J57S8 && o96U2 > a6Gi) {
            this.qls = 4;
            v6 = [
                [parseInt(o96U2 - g4 - lx232), parseInt(F17B - g5 - lx232)],
                [parseInt(o96U2 + g4 + lx232), parseInt(F17B + g5 + lx232)],
                [parseInt(a6Gi + g4 + lx232), parseInt(J57S8 + g5 + lx232)],
                [parseInt(a6Gi - g4 - lx232), parseInt(J57S8 - g5 - lx232)]
            ]
        }
        return v6
    };
    this.k$X = [];
    this.X3fi = function (F22U, fTr) {
        var ub = this.vrL16(fTr);
        for (var i = 0; i < ub.length; i++) {
            this.k$X.push(new this.V3W(ub[i][0], ub[i][1], ub[(i + 1) % ub.length][0], ub[(i + 1) % ub.length][1]))
        }
        var $69Y = new this.HIdee(F22U[0], F22U[1], parseFloat("0.523112313123"));
        var MAT0 = 0;
        for (var qC = 0; qC < this.k$X.length; qC++) {
            if (this.k$X[qC]._cv6_($69Y)) MAT0++
        }
        this.k$X = [];
        return MAT0 % 2 != 0
    };
    this.F7x5 = function (coords, j7W86) {
        for (var i = 0; i < j7W86.length - 1; i++) {
            if (this.X3fi(coords, [j7W86[i],
                [j7W86[i + 1]]
            ])) {
                return [j7W86[i], [j7W86[i + 1]]]
            }
        }
        return null
    };
    this.XG8 = function (K$c, Ee58_, xvd3) {
        K$c = K$c.toString().split(",");
        Ee58_ = Ee58_.toString().split(",");
        var T8pP6 = [parseInt(Ee58_[0]) - parseInt(K$c[0]), parseInt(Ee58_[1]) - parseInt(K$c[1])];
        var VA96 = [parseInt(xvd3[0]) - parseInt(K$c[0]), parseInt(xvd3[1]) - parseInt(K$c[1])];
        var sf2 = VA96[0] * T8pP6[0] + VA96[1] * T8pP6[1];
        if (sf2 <= 0) return K$c;
        var l16F0 = T8pP6[0] * T8pP6[0] + T8pP6[1] * T8pP6[1];
        if (l16F0 <= sf2) return Ee58_;
        return [parseInt(K$c[0]) + T8pP6[0] * sf2 / l16F0, parseInt(K$c[1]) + T8pP6[1] * sf2 / l16F0]
    };
    this.QBm20 = function (lM) {
        if (this.zX != null && this.maplet && (px && lM.button == 1 || !px && lM.button == 0) && (this.bEditable || this.maplet.sS == ts.tu) && fJ(lM.target, this.z9)) {
            this.qo = true;
            this.maplet.l6 = lM.target.id;
            var t942H = parseInt(lM.target.style.left) + (px ? 1 : 0);
            var Wp99U = parseInt(lM.target.style.top) + (px ? 1 : 0);
            this.l0 = (px ? lM.offsetX : lM.layerX) + t942H;
            this.na = (px ? lM.offsetY : lM.layerY) + Wp99U;
            _s12L = lM.target
        } else {
            this.ls = true
        }
    };
    this.l2k3 = function (lM) {
        if (this.zX != null && this.maplet && (this.bEditable || this.maplet.sS == ts.tu) && this.qo) {
            this.qo = false;
            var x = parseInt(lM.clientX) - parseInt(this.maplet.offsetX) - parseInt(this.maplet.left) - this.l0;
            var y = parseInt(lM.clientY) - parseInt(this.maplet.offsetY) - parseInt(this.maplet.top) - this.na;
            if (x > 0 && y > 0) {
                MEvent.trigger(this, "nodedrag", this, new MMarker(new MPoint(this.maplet.toMapCoordinate(x + 5, y + 5))), (this.$81F(this, this.XK45Y)).slice(0, 2))
            }
            this.wQ(false);
            this.i150j = false;
            clearTimeout(this.PAA2);
            this.PAA2 = null
        }
        this.ls = false;
        if (this.maplet && this.maplet.l6 == this.id) {
            this.maplet.l6 = null
        }
    };
    this.$81F = function (oFh9, HDi9) {
        var v6 = [];
        var pts = oFh9.pts;
        for (var i = 0; i < pts.length; i++) {
            if (pts[i].mapX + "," + pts[i].mapY == HDi9[0].toString() || pts[i].mapX + "," + pts[i].mapY == HDi9[1].toString()) {
                v6.push(i)
            }
        }
        return v6
    };
    this.N8xro = function (lM) {
        if (_s12L != null && (this.bEditable || this.maplet.sS == ts.tu) && this.qo) {
            if (_s12L != null) {
                var x = lM.clientX - this.maplet.offsetX - this.maplet.left - this.l0;
                var y = lM.clientY - this.maplet.offsetY - this.maplet.top - this.na;
                this.z9.style.left = (parseInt(x)) + "px";
                this.z9.style.top = (parseInt(y)) + "px";
                MEvent.trigger(this, "nodedrag_move", this, new MMarker(new MPoint(this.maplet.toMapCoordinate(x + 5, y + 5))), (this.$81F(this, this.XK45Y)).slice(0, 2));
                this.lw = new Date().getTime();
                this.ls = true;
                with(O7RaE) {
                    g0705.x = x;
                    g0705.y = y;
                    if (!yN) {
                        L898.x = x;
                        L898.y = y;
                        p7318.x = x;
                        p7318.y = y;
                        yN = nB(this, rn5, LPN_HOVERING_TIME)
                    }
                }
            }
        }
    };
    var rn5 = function () {
        with(O7RaE) {
            if (!this.qo && yN) {
                clearInterval(yN);
                yN = null;
                return
            }
            if (L898.x == g0705.x && L898.y == g0705.y && (g0705.x != p7318.x || g0705.y != p7318.y)) {
                p7318.x = g0705.x;
                p7318.y = g0705.y;
                MEvent.trigger(this, "drag_hovering", this, new MMarker(new MPoint(this.maplet.toMapCoordinate(g0705.x + 5, g0705.y + 5))), (this.$81F(this, this.XK45Y)).slice(0, 2))
            } else {
                L898.x = g0705.x;
                L898.y = g0705.y
            }
        }
    };
    this.appendPoint = function (QD08, I4I24) {
        if (typeof QD08 != "object" || !(QD08 instanceof MPoint) || !QD08) throw new Error("para new_pt is not a valid MPoint object.");
        this.pts.push(QD08);
        if (!this.pts[this.pts.length - 1].maplet) this.pts[this.pts.length - 1].initialize(this.maplet);
        if (typeof I4I24 != "boolean") I4I24 = true;
        if (I4I24) this.update()
    }
};
var MEllipse = function (gC, Dw9u, wnJ$, brush, info) {
    this.id = new Date().getTime() + "" + parseInt(Math.random() * 10000) + "Ellipse";
    this.gC = gC;
    this.Dw9u = typeof Dw9u != "undefined" && !isNaN(Dw9u) ? parseInt(Dw9u) : 300;
    this.wnJ$ = typeof wnJ$ != "undefined" && !isNaN(wnJ$) ? parseInt(wnJ$) : null;
    this.brush = (typeof brush == "undefined") ? new MBrush() : brush;
    this.info = (typeof info == "undefined") ? null : info;
    this.ao = new Array();
    this.zX = null;
    this.fu878 = null;
    this.u$2V = true;
    this.data = {
        qx: 0,
        qz: 0,
        N33: 0,
        oBsQ5: 0,
        Dw9u: 0,
        wnJ$: 0
    };
    this.eg0G = false;
    this.Y37 = false;
    this.initialize = function (maplet) {
        this.maplet = maplet;
        if (this.info) {
            this.ao["click"] = MEvent.bindDom(this.maplet.map, "click", this, this.openInfoWindow)
        }
        this.paint()
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MEllipse'
    };
    this.paint = function () {
        if (!this.fu878) {
            this.zX = this.maplet.vU9jf();
            if (px) {
                this.fu878 = document.createElement("v:oval");
                this.fu878.strokecolor = this.brush.color;
                this.fu878.strokeweight = this.brush.stroke + 'px';
                this.fu878.filled = this.brush.fill;
                var Ad = document.createElement("v:stroke");
                Ad.opacity = (this.brush.transparency / 100.0);
                var zY = document.createElement("v:fill");
                zY.opacity = ((this.brush.bgtransparency) / 100);
                zY.color = this.brush.bgcolor;
                this.fu878.appendChild(Ad);
                this.fu878.appendChild(zY);
                this.zX.appendChild(this.fu878)
            } else {
                this.fu878 = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
                this.fu878.setAttribute("stroke", this.brush.color);
                this.fu878.setAttribute("fill", this.brush.bgcolor);
                this.fu878.setAttribute("stroke-width", this.brush.stroke);
                this.fu878.setAttribute("stroke-opacity", this.brush.transparency / 100);
                this.fu878.setAttribute("fill-opacity", this.brush.bgtransparency / 100);
                this.zX.firstChild.appendChild(this.fu878)
            }
            this.fu878.id = this.id;
            this.fu878.style.position = "absolute";
            this.fu878.unselectable = "on";
            this.fu878.setAttribute(NH6, "true");
            this.fu878.setAttribute(b4W, "true");
            this.ao["ellipse_mouseover"] = MEvent.bindDom(this.fu878, "mouseover", this, function () {
                if (this.maplet.sS == ts.tz || this.maplet.sS == ts.tA || this.maplet.sS == ts._Q5y4) this.maplet.KY4("crosshair", this.fu878);
                else if (this.info || MEvent.contains(this, "click")) this.maplet.KY4("pointer", this.fu878);
                else this.maplet.KY4("default", this.fu878)
            });
            this.ao["ellipse_mouseout"] = MEvent.bindDom(this.fu878, "mouseout", this, function () {
                if (this.maplet.sS != ts.tz && this.maplet.sS != ts.tA && this.maplet.sS != ts._Q5y4) this.maplet.KY4("default", this.fu878)
            });
            this.ao["ellipse_mousedown"] = MEvent.bindDom(this.fu878, "mousedown", this, function () {
                this.eg0G = true;
                this.Y37 = false;
                if (this.maplet.sS != ts.tz && this.maplet.sS != ts.tA && this.maplet.sS != ts._Q5y4) this.maplet.KY4("move", this.fu878)
            });
            this.ao["ellipse_mouseup"] = MEvent.bindDom(this.fu878, "mouseup", this, function (lM) {
                this.eg0G = false;
                this.ao["ellipse_mouseover"](lM)
            });
            this.ao["ellipse_mousemove"] = MEvent.bindDom(this.fu878, "mousemove", this, function () {
                if (this.eg0G && !this.Y37) this.Y37 = true
            })
        }
        this.update()
    };
    this.update = function () {
        if (this.fu878) {
            if (!this.gC.maplet) this.gC.initialize(this.maplet);
            if (this.maplet.Or5V$) {
                if (this.maplet.q1C != this.gC.q1C) {
                    this.gC.mapX += this.maplet.ug59;
                    this.gC.mapY += this.maplet.mx4;
                    this.gC.q1C = this.maplet.q1C
                }
            } else {
                this.gC.k9d()
            }
            var _48 = this.gC.mapX;
            var BB217 = this.gC.mapY;
            var T08k = parseInt(this.Dw9u / 111111.0 / this.maplet.xg * this.maplet.imgWidth / 0.8);
            var $phc = T08k;
            if (this.wnJ$) $phc = parseInt(this.wnJ$ / 111111.0 / this.maplet.xf * this.maplet.imgHeight);
            this.data.qx = _48 - T08k;
            this.data.qz = BB217 - $phc;
            this.data.N33 = _48 + T08k;
            this.data.oBsQ5 = BB217 + $phc;
            this.data.Dw9u = T08k;
            this.data.wnJ$ = $phc;
            if (px) {
                this.fu878.style.left = this.data.qx + "px";
                this.fu878.style.top = this.data.qz + "px";
                this.fu878.style.width = T08k * 2 + "px";
                this.fu878.style.height = $phc * 2 + "px"
            } else {
                this.fu878.setAttribute("cx", _48 + "px");
                this.fu878.setAttribute("cy", BB217 + "px");
                this.fu878.setAttribute("rx", T08k + "px");
                this.fu878.setAttribute("ry", $phc + "px")
            }
        }
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (finalize) {
        for (var l8 in this.ao) {
            if (l8.substring(0, 8) == "ellipse_") {
                if (this.fu878) MEvent.removeBuiltInListener(this.fu878, l8.substring(8), this.ao[l8])
            } else {
                if (this.maplet) MEvent.removeBuiltInListener(this.maplet.map, l8, this.ao[l8])
            }
            this.ao[l8] = null;
            delete this.ao[l8]
        }
        if (typeof this.fu878 == "object" && this.fu878 && this.fu878.parentNode) {
            _removeNode(this.fu878);
            this.fu878 = null
        }
        this.zX = null;
        if (this.maplet) {
            if (this.maplet.u5[this.id]) {
                this.maplet.u5[this.id] = null;
                delete this.maplet.u5[this.id]
            }
        }
        if (finalize) {
            this.ao = null;
            this.maplet = null
        }
    };
    this.openInfoWindow = function (lM) {
        if (this.maplet != null) {
            if (this.Y37) {
                if (lM.target.id == this.id && this.maplet.H6$0) {
                    this.maplet.H6$0 = false
                }
                if (this.maplet.h96 || (ContentInfo && ContentInfo.isVisible() && avBubble.overlay == this)) return
            }
            if (!this.info || (this.maplet.sS != ts.ty && this.maplet.sS != ts.tu)) return;
            var x = this.gC.mapX;
            var y = this.gC.mapY;
            if (!this.info.getOverlay()) this.info.setOverlay(this);
            var fg = true;
            if (typeof lM == "undefined") {} else if (lM.target.id == this.id && !this.maplet.H6$0) {
                MEvent.trigger(this, "click", this);
                x = lM.clientX - this.maplet.offsetX - this.maplet.left - (px ? 3 : 1);
                y = lM.clientY - this.maplet.offsetY - this.maplet.top - (px ? 3 : 1)
            } else if (lM.target.id == this.id && this.maplet.H6$0) {
                this.maplet.H6$0 = false;
                fg = false
            } else {
                fg = false
            }
            if (fg) this.maplet.wN(x, y, this.info)
        }
    }
};
var MRoundRect = function (RD_O7, C4oL, arcsize, brush, info) {
    this.id = new Date().getTime() + "" + parseInt(Math.random() * 10000) + "RRect";
    this.RD_O7 = RD_O7;
    this.C4oL = C4oL;
    this.arcsize = typeof arcsize == "number" ? arcsize : 0.1;
    this.width = 0;
    this.height = 0;
    this.brush = (typeof brush == "undefined") ? new MBrush() : brush;
    this.info = (typeof info == "undefined") ? null : info;
    this.ao = new Array();
    this.zX = null;
    this.rect = null;
    this.u$2V = true;
    this.eg0G = false;
    this.Y37 = false;
    this.initialize = function (maplet) {
        this.maplet = maplet;
        if (this.info) {
            this.ao["click"] = MEvent.bindDom(this.maplet.map, "click", this, this.openInfoWindow)
        }
        this.paint()
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MRoundRect'
    };
    this.paint = function () {
        if (!this.rect) {
            this.zX = this.maplet.vU9jf();
            if (px) {
                this.rect = document.createElement("v:roundrect");
                this.rect.strokecolor = this.brush.color;
                this.rect.strokeweight = this.brush.stroke + 'px';
                this.rect.filled = this.brush.fill;
                this.rect.arcsize = this.arcsize;
                var Ad = document.createElement("v:stroke");
                Ad.opacity = (this.brush.transparency / 100.0);
                var zY = document.createElement("v:fill");
                zY.opacity = ((this.brush.bgtransparency) / 100);
                zY.color = this.brush.bgcolor;
                this.rect.appendChild(Ad);
                this.rect.appendChild(zY);
                this.zX.appendChild(this.rect)
            } else {
                this.rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                this.rect.setAttribute("stroke", this.brush.color);
                this.rect.setAttribute("fill", this.brush.bgcolor);
                this.rect.setAttribute("stroke-width", this.brush.stroke);
                this.rect.setAttribute("stroke-opacity", this.brush.transparency / 100);
                this.rect.setAttribute("fill-opacity", this.brush.bgtransparency / 100);
                this.zX.firstChild.appendChild(this.rect)
            }
            this.rect.id = this.id;
            this.rect.style.position = "absolute";
            this.rect.unselectable = "on";
            this.rect.setAttribute(NH6, "true");
            this.ao["rect_mouseover"] = MEvent.bindDom(this.rect, "mouseover", this, function () {
                if (this.maplet.sS == ts.tz || this.maplet.sS == ts.tA || this.maplet.sS == ts._Q5y4) this.maplet.KY4("crosshair", this.rect);
                else if (this.info || MEvent.contains(this, "click")) this.maplet.KY4("pointer", this.rect);
                else this.maplet.KY4("default", this.rect)
            });
            this.ao["rect_mouseout"] = MEvent.bindDom(this.rect, "mouseout", this, function () {
                if (this.maplet.sS != ts.tz && this.maplet.sS != ts.tA && this.maplet.sS != ts._Q5y4) this.maplet.KY4("default", this.rect)
            });
            this.ao["rect_mousedown"] = MEvent.bindDom(this.rect, "mousedown", this, function () {
                this.eg0G = true;
                this.Y37 = false;
                if (this.maplet.sS != ts.tz && this.maplet.sS != ts.tA && this.maplet.sS != ts._Q5y4) this.maplet.KY4("move", this.rect)
            });
            this.ao["rect_mouseup"] = MEvent.bindDom(this.rect, "mouseup", this, function (lM) {
                this.eg0G = false;
                this.ao["rect_mouseover"](lM)
            });
            this.ao["rect_mousemove"] = MEvent.bindDom(this.rect, "mousemove", this, function () {
                if (this.eg0G && !this.Y37) this.Y37 = true
            })
        }
        this.update()
    };
    this.update = function () {
        if (this.rect) {
            if (!this.RD_O7.maplet) this.RD_O7.initialize(this.maplet);
            if (!this.C4oL.maplet) this.C4oL.initialize(this.maplet);
            if (this.maplet.Or5V$) {
                if (this.maplet.q1C != this.RD_O7.q1C) {
                    this.RD_O7.mapX += this.maplet.ug59;
                    this.RD_O7.mapY += this.maplet.mx4;
                    this.RD_O7.q1C = this.maplet.q1C
                }
                if (this.maplet.q1C != this.C4oL.q1C) {
                    this.C4oL.mapX += this.maplet.ug59;
                    this.C4oL.mapY += this.maplet.mx4;
                    this.C4oL.q1C = this.maplet.q1C
                }
            } else {
                this.RD_O7.k9d();
                this.C4oL.k9d()
            }
            var x = this.RD_O7.mapX;
            var y = this.RD_O7.mapY;
            this.width = Math.abs(this.C4oL.mapX - x);
            this.height = Math.abs(this.C4oL.mapY - y);
            if (px) {
                this.rect.style.left = x + "px";
                this.rect.style.top = y + "px";
                this.rect.style.width = this.width + "px";
                this.rect.style.height = this.height + "px"
            } else {
                this.rect.setAttribute("x", x + "px");
                this.rect.setAttribute("y", y + "px");
                this.rect.setAttribute("width", this.width + "px");
                this.rect.setAttribute("height", this.height + "px");
                this.rect.setAttribute("rx", this.width * this.arcsize);
                this.rect.setAttribute("ry", this.height * this.arcsize)
            }
        }
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (finalize) {
        for (var l8 in this.ao) {
            if (l8.substring(0, 5) == "rect_") {
                if (this.rect) MEvent.removeBuiltInListener(this.rect, l8.substring(5), this.ao[l8])
            } else {
                if (this.maplet) MEvent.removeBuiltInListener(this.maplet.map, l8, this.ao[l8])
            }
            this.ao[l8] = null;
            delete this.ao[l8]
        }
        if (typeof this.rect == "object" && this.rect && this.rect.parentNode) {
            _removeNode(this.rect);
            this.rect = null
        }
        this.zX = null;
        if (this.maplet) {
            if (this.maplet.u5[this.id]) {
                this.maplet.u5[this.id] = null;
                delete this.maplet.u5[this.id]
            }
        }
        if (finalize) {
            this.ao = null;
            this.maplet = null
        }
    };
    this.openInfoWindow = function (lM) {
        if (this.maplet != null) {
            if (this.Y37) {
                if (lM.target.id == this.id && this.maplet.H6$0) {
                    this.maplet.H6$0 = false
                }
                if (this.maplet.h96 || (ContentInfo && ContentInfo.isVisible() && avBubble.overlay == this)) return
            }
            if (!this.info || (this.maplet.sS != ts.ty && this.maplet.sS != ts.tu)) return;
            var x = 0;
            var y = 0;
            if (!this.info.getOverlay()) this.info.setOverlay(this);
            var fg = true;
            if (typeof lM == "undefined") {
                x = this.RD_O7.mapX + this.width / 2;
                y = this.RD_O7.mapY + this.height / 2
            } else if (lM.target.id == this.id && !this.maplet.H6$0) {
                MEvent.trigger(this, "click", this);
                x = lM.clientX - this.maplet.offsetX - this.maplet.left - (px ? 3 : 1);
                y = lM.clientY - this.maplet.offsetY - this.maplet.top - (px ? 3 : 1)
            } else if (lM.target.id == this.id && this.maplet.H6$0) {
                this.maplet.H6$0 = false;
                fg = false
            } else {
                fg = false
            }
            if (fg) this.maplet.wN(x, y, this.info)
        }
    };
    this.getCenterXY = function () {
        var _48 = this.RD_O7.mapX + this.width / 2;
        var BB217 = this.RD_O7.mapY + this.height / 2;
        return {
            x: _48,
            y: BB217
        }
    }
};
var MLabel = function (xP, xoffset, yoffset, opacity, options) {
    this.label = xP;
    if (typeof xoffset == "object" && xoffset) options = xoffset;
    if (typeof options != "object" || !options) options = {};
    if (typeof xoffset == "object" && xoffset) {
        if ("number,string".indexOf(typeof options.xoffset) == -1) options.xoffset = undefined;
        if ("number,string".indexOf(typeof options.yoffset) == -1) options.yoffset = undefined;
        if ("number,string".indexOf(typeof options.opacity) == -1) options.opacity = undefined
    } else {
        options.xoffset = xoffset;
        options.yoffset = yoffset;
        options.opacity = opacity
    }
    if (typeof options.enableStyle != "boolean") options.enableStyle = true;
    if (typeof options.visible != "boolean") options.visible = true;
    var Iay7 = false;
    this.visible = options.visible;
    this.xoffset = (typeof options.xoffset == "undefined") ? null : parseInt(options.xoffset);
    this.yoffset = (typeof options.yoffset == "undefined") ? null : parseInt(options.yoffset);
    this.opacity = typeof options.opacity != "undefined";
    this.div = document.createElement("div");
    if (options.enableStyle) this.div.className = "tiplabel";
    this.div.style.left = "-1000px";
    this.div.style.top = "-1000px";
    this.div.unselectable = "on";
    this.div.style.zIndex = 10;
    this.div.style.position = "absolute";
    if (px && typeof options.opacity != "undefined") {
        this.div.style.filter = "alpha( opacity = " + parseInt(options.opacity) + " )"
    } else if (!px && typeof options.opacity != "undefined") {
        this.div.style.MozOpacity = parseInt(options.opacity) / 100
    }
    this.sW = null;
    this.wz = function (id) {
        this.div.id = "mk_label_" + id
    };
    this.setContextMenu = function (menu) {};
    this.initialize = function (sW) {
        this.sW = sW
    };
    this.update = function (maplet, left, top) {
        if (this.div.parentNode != maplet.lA.div && !this.sW.ls) {
            this.div.innerHTML = this.label;
            maplet.lA.appendChild(this.div)
        }
        if (this.xoffset == null) this.xoffset = this.sW.icon.width;
        if (this.yoffset == null) this.yoffset = this.sW.icon.height / 2 - this.div.offsetHeight / 2;
        if (!Iay7) {
            this.div.style.display = this.visible ? "" : "none";
            Iay7 = true
        }
        this.div.style.left = (parseInt(left) + this.xoffset) + "px";
        this.div.style.top = (parseInt(top) + this.yoffset) + "px"
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (finalize) {
        if (typeof finalize != "boolean") finalize = false;
        if (this.div) {
            if (!finalize) {
                if (this.div.parentNode) this.div.parentNode.removeChild(this.div)
            } else {
                _removeNode(this.div);
                this.div = null
            }
        }
        if (finalize) this.sW = null
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MLabel'
    };
    this.GxA2 = this.div.style.zIndex;
    this.setZIndex = function ($t3m) {
        if (this.div && this.div.parentNode && $t3m != this.div.style.zIndex) {
            this.GxA2 = this.div.style.zIndex;
            this.div.style.zIndex = $t3m
        }
    };
    this.YS8 = function () {
        if (!this.div) return;
        if (this.GxA2 != this.div.style.zIndex) this.setZIndex(this.GxA2)
    };
    this.setVisible = function (visible) {
        if (visible != (this.div.style.display == "none" ? false : true)) {
            this.div.style.display = visible ? "" : "none";
            this.visible = visible
        }
    };
    this.resetLabel = function (options) {
        if (typeof options != "object" || !options) return;
        var left = parseInt(this.div.style.left);
        var top = parseInt(this.div.style.top);
        if (typeof options.content == "string") {
            this.label = options.content;
            this.div.innerHTML = this.label
        }
        if (typeof options.enableStyle == "boolean") {
            this.div.className = options.enableStyle ? "tiplabel" : ""
        }
        if ("number,string".indexOf(typeof options.xoffset) != -1) this.xoffset = parseInt(options.xoffset);
        else if (typeof options.xoffset == "object" && options.xoffset == null) this.xoffset = null;
        if ("number,string".indexOf(typeof options.yoffset) != -1) this.yoffset = parseInt(options.yoffset);
        else if (typeof options.yoffset == "object" && options.yoffset == null) this.yoffset = null;
        if ("number,string".indexOf(typeof options.opacity) != -1) {
            if (px && typeof options.opacity != "undefined") {
                this.div.style.filter = "alpha( opacity = " + parseInt(options.opacity) + " )"
            } else if (!px && typeof options.opacity != "undefined") {
                this.div.style.MozOpacity = parseInt(options.opacity) / 100
            }
        }
        this.update(this.sW.maplet, this.sW.icon.left, this.sW.icon.top)
    };
    this.getText = function () {
        var $IY = "";
        if (this.label.indexOf(Maplet.MLABEL_TEXT_FLAG) != -1) {
            var b2k2 = new RegExp(Maplet.MLABEL_TEXT_FLAG + "=\"?([^\"\t ]*)", "gi");
            var OB74 = b2k2.exec(this.label);
            if (OB74 != null) $IY = OB74[1]
        } else if (this.label != "") {
            $IY = l7WuP(this.label)
        } else {
            $IY = this.label
        }
        return $IY
    }
};
var MInfoWindow = function (ya, xv, yd, b22) {
    this.title = ya;
    this.content = J8H7F(xv, true);
    this.yd = (typeof yd != "undefined" && "mouseover" == yd.toLowerCase()) ? "mouseover" : "click";
    this.E9H = {
        RHb: false,
        width: 0,
        height: 0
    };
    this.gv = function (x, y) {
        MEvent.trigger(this.getOverlay(), "iw_beforeopen", this.getOverlay(), x, y);
        if (this.getOverlay().maplet.customInfoWindow) return null;
        avBubble.overlay = this.getOverlay();
        var b = gp(this.title, x, y, this.content, b22);
        this.setTabs(uq_m);
        return b
    };
    var _52Q5 = null;
    this.setOverlay = function (overlay) {
        _52Q5 = overlay
    };
    this.getOverlay = function () {
        return _52Q5
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MInfoWindow'
    };
    this.setTitle = function (yw, UV61m, oOi) {
        this.title = yw;
        if (ContentInfo) {
            ContentInfo.setTitle(yw);
            this.E9H.RHb = false;
            if (typeof UV61m != "boolean") UV61m = true;
            if (typeof oOi != "boolean") oOi = false;
            if (UV61m) c_07(oOi)
        }
    };
    this.setContent = function (c, UV61m, oOi) {
        this.content = J8H7F(c, true);
        if (ContentInfo) {
            ContentInfo.setContent(c);
            this.E9H.RHb = false;
            if (typeof UV61m != "boolean") UV61m = true;
            if (typeof oOi != "boolean") oOi = true;
            if (UV61m) c_07(oOi)
        }
    };
    this.zoomTo = function (type, w, h) {
        if (type == "zoomin") this.zoomIn(w, h);
        else if (type == "zoomout") this.zoomOut(w, h)
    };
    this.zoomOut = function (w, h) {
        if (ContentInfo && typeof ContentInfo.onZoomOut == "function") {
            ContentInfo.onZoomOut(w, h)
        }
    };
    this.zoomIn = function (w, h) {
        if (ContentInfo && typeof ContentInfo.onZoomIn == "function") {
            ContentInfo.onZoomIn(w, h)
        }
    };
    this.getBodySize = function () {
        var size = {
            width: 0,
            height: 0
        };
        if (ContentInfo) {
            return ContentInfo.Bx7()
        }
        return size
    };
    this.setZMBtnVisible = function (visible) {
        if (ContentInfo) {
            ContentInfo.setZMBtnVisible(visible)
        } else {
            avBubble.O108 = visible
        }
    };
    this.getZMBtnVisible = function () {
        return ContentInfo && ContentInfo.E78N()
    };
    var uq_m = [];
    this.setTabs = function (Q37) {
        if (Oi58(Q37)) uq_m = Q37;
        if (ContentInfo && ContentInfo.isVisible() && (_52Q5 && avBubble.overlay.id == _52Q5.id) && uq_m.length > 0) {
            for (var i = 0; i < Q37.length; i++) {
                ContentInfo.D_6q(Q37[i].clone())
            }
            this.E9H.RHb = false;
            c_07()
        }
    };
    this.getTabs = function () {
        return uq_m
    };
    this.clearTabs = function () {
        uq_m = [];
        if (ContentInfo && ContentInfo.isVisible()) {
            ContentInfo.N4y();
            if (_52Q5 && avBubble.overlay.id == _52Q5.id) {
                this.E9H.RHb = false;
                c_07()
            }
        }
    };
    this.setCurrentTab = function (RR5R) {
        if (ContentInfo) {
            ContentInfo.setCurrentTab(RR5R)
        }
    };
    this.getCurrentTab = function () {
        if (ContentInfo && ContentInfo.tabIndex != -1) {
            return ContentInfo.E2b[ContentInfo.tabIndex]
        } else {
            return null
        }
    }
};
var ContentInfo = null;
var gp = function (title, left, top, f5) {
    hideBubble(maplet);
    avBubble.calcLatLon();
    if (ContentInfo == null) {
        ContentInfo = new kl3w(maplet);
        ContentInfo.initialize();
        ContentInfo.onClosed = function () {
            avBubble.pw8 = false;
            avBubble.WnOK = false;
            avBubble.C62d = false;
            MEvent.trigger(maplet, "iw_hide", avBubble.overlay);
            maplet.viewOverlay(avBubble.overlay, 50, 50)
        };
        ContentInfo.onZoomOut = function (w, h) {
            MEvent.trigger(avBubble.overlay, "bubble_zoomout", avBubble.overlay);
            var size = {
                width: avBubble.width,
                height: avBubble.height
            };
            if (avBubble.overlay.info && avBubble.overlay.info.E9H.width > 0) size = avBubble.overlay.info.E9H;
            if (w) {
                if (w < avBubble.minWidth) w = avBubble.minWidth;
                size.width = w
            }
            if (h) {
                if (h < avBubble.minHeight) h = avBubble.minHeight;
                size.height = h
            }
            ContentInfo.width = size.width;
            ContentInfo.height = size.height;
            ContentInfo.Qa31D("zoomin");
            avBubble.EcjTX = true;
            var M3i = maplet.viewOverlay(avBubble.overlay, 50, 50);
            if (M3i.s0_3 == 0 && M3i.cnA == 0) maplet.refresh();
            avBubble.C62d = false;
            avBubble.$2L = "out"
        };
        ContentInfo.onZoomIn = function (w, h) {
            var overlay = avBubble.overlay;
            MEvent.trigger(overlay, "bubble_zoomin", avBubble.overlay);
            w = VS8w8(w, null);
            h = VS8w8(h, null);
            var c7 = maplet.I$mt();
            if (w && w < c7.width) c7.width = w;
            if (h && h < c7.height) c7.height = h;
            var T2V8 = 0;
            var NM0 = 0;
            if (typeof overlay == "object" && overlay) {
                if (overlay.toString().indexOf("MMarker") != -1) {
                    if (overlay.icon) {
                        T2V8 = overlay.icon.height;
                        NM0 = overlay.icon.width;
                        c7.height -= T2V8;
                        c7.width -= NM0
                    }
                } else {
                    T2V8 = 50;
                    c7.height -= T2V8
                }
            }
            var B331 = maplet.toScreenCoordinate(avBubble._Tov1);
            var Ew1Ou = ContentInfo.Ud3D(B331[0], B331[1], c7.width, c7.height, "top", true, true, overlay);
            avBubble.C7pDD = Ew1Ou.$5Oc;
            avBubble.left = Ew1Ou.L551;
            avBubble.top = Ew1Ou.X29;
            avBubble.EcjTX = true;
            ContentInfo.show(Ew1Ou, null);
            ContentInfo.Qa31D("zoomout");
            var qx = Ew1Ou.L551;
            var qz = Ew1Ou.X29;
            var N33 = qx + Ew1Ou.width;
            var oBsQ5 = qz + Ew1Ou.height;
            with(Ew1Ou.arrow) {
                if (dir == "left") {
                    qx = qx - NM0 - Ew1Ou.arrow.width
                } else if (dir == "right") {
                    N33 = N33 + NM0 + Ew1Ou.arrow.width
                } else if (dir == "top") {
                    qz = qz - T2V8 - Ew1Ou.arrow.height
                } else if (dir == "bottom") {
                    oBsQ5 = oBsQ5 + T2V8 + Ew1Ou.arrow.height
                }
            }
            maplet.OaB({
                RE6: qx,
                I6036: qz,
                Ch9Y4: N33,
                fU4U3: oBsQ5,
                jfS6F: 10,
                t0aW: 10
            }, {
                G192: true,
                O9U: true,
                rF3: false
            });
            avBubble.C62d = true;
            avBubble.$2L = "in"
        }
    } else {}
    avBubble.pw8 = false;
    avBubble.WnOK = false;
    ContentInfo.N4y();
    var size = {
        width: 0,
        height: 0
    };
    if (avBubble.overlay.info.E9H.RHb) {
        size.width = avBubble.overlay.info.E9H.width;
        size.height = avBubble.overlay.info.E9H.height;
        ContentInfo.setTitle(title);
        ContentInfo.setContent(f5)
    } else {
        size = ContentInfo.S52E7(title, f5);
        if (size.width == 0) {
            size = {
                width: avBubble.width,
                height: avBubble.height
            }
        } else {
            if (size.width < avBubble.minWidth) size.width = avBubble.minWidth;
            if (size.height < avBubble.minHeight) size.height = avBubble.minHeight;
            var XEYH = maplet.I$mt();
            if (size.width > XEYH.width) size.width = XEYH.width;
            if (size.height > XEYH.height) size.height = XEYH.height
        }
        avBubble.overlay.info.E9H.width = size.width;
        avBubble.overlay.info.E9H.height = size.height;
        avBubble.overlay.info.E9H.RHb = true
    }
    var Ew1Ou = ContentInfo.Ud3D(left, top, size.width, size.height, avBubble.tipInitPlace, avBubble.pw8, avBubble.WnOK, avBubble.overlay);
    avBubble.C7pDD = Ew1Ou.$5Oc;
    avBubble.left = Ew1Ou.L551;
    avBubble.top = Ew1Ou.X29;
    avBubble.head = title;
    avBubble.body = f5;
    ContentInfo.show(Ew1Ou, avBubble.O108, true);
    if (maplet.fa) {
        ContentInfo.setVisible(false);
        avBubble.s2DA = true
    }
    var NM0 = 0;
    var T2V8 = 0;
    if (Ew1Ou.Ps2) {
        avBubble._Tov1 = avBubble.overlay.pt.getPid();
        if (avBubble.overlay.icon) {
            NM0 = avBubble.overlay.icon.width;
            T2V8 = avBubble.overlay.icon.height
        }
    } else {
        avBubble._Tov1 = maplet.toMapCoordinate(left, top)
    }
    if (avBubble.O108 != null) avBubble.O108 = null;
    var qx = Ew1Ou.L551;
    var qz = Ew1Ou.X29;
    var N33 = qx + Ew1Ou.width;
    var oBsQ5 = qz + Ew1Ou.height;
    with(Ew1Ou.arrow) {
        if (dir == "left") {
            qx = qx - NM0 - Ew1Ou.arrow.width
        } else if (dir == "right") {
            N33 = N33 + NM0 + Ew1Ou.arrow.width
        } else if (dir == "top") {
            qz = qz - T2V8 - Ew1Ou.arrow.height
        } else if (dir == "bottom") {
            oBsQ5 = oBsQ5 + T2V8 + Ew1Ou.arrow.height
        }
    }
    maplet.OaB({
        RE6: qx,
        I6036: qz,
        Ch9Y4: N33,
        fU4U3: oBsQ5,
        jfS6F: 10,
        t0aW: 10
    });
    MEvent.trigger(avBubble.overlay, "iw_afteropen", avBubble.overlay);
    return ContentInfo.dom
};

function c_07(oOi) {
    if (!ContentInfo || !ContentInfo.isVisible()) return;
    if (typeof oOi != "boolean") oOi = false;
    var B331 = maplet.toScreenCoordinate(avBubble._Tov1);
    var r = ContentInfo.getRect(false, false);
    if (oOi) {
        var size = ContentInfo.S52E7(avBubble.overlay.info.title, avBubble.overlay.info.content);
        if (size.width == 0) {
            size = {
                width: r.width,
                height: r.height
            }
        } else {
            if (size.width < avBubble.minWidth) size.width = avBubble.minWidth;
            if (size.height < avBubble.minHeight) size.height = avBubble.minHeight;
            var XEYH = maplet.I$mt();
            if (size.width > XEYH.width) size.width = XEYH.width;
            if (size.height > XEYH.height) size.height = XEYH.height
        }
        avBubble.overlay.info.E9H.width = size.width;
        avBubble.overlay.info.E9H.height = size.height;
        r.width = size.width;
        r.height = size.height
    }
    var Ew1Ou = ContentInfo.Ud3D(B331[0], B331[1], r.width, r.height, avBubble.C7pDD, avBubble.pw8, avBubble.WnOK, avBubble.overlay);
    ContentInfo.show(Ew1Ou, avBubble.O108, true);
    r = ContentInfo.getRect();
    if (!avBubble.C62d) {
        avBubble.overlay.info.E9H.width = r.width;
        avBubble.overlay.info.E9H.height = r.height
    }
    var NM0 = 0;
    var T2V8 = 0;
    if (Ew1Ou.Ps2 && avBubble.overlay.icon) {
        NM0 = avBubble.overlay.icon.width;
        T2V8 = avBubble.overlay.icon.height
    }
    var qx = r.min.x;
    var qz = r.min.y;
    var N33 = r.max.x;
    var oBsQ5 = r.max.y;
    with(Ew1Ou.arrow) {
        if (dir == "left") {
            qx = qx - NM0
        } else if (dir == "right") {
            N33 = N33 + NM0
        } else if (dir == "top") {
            qz = qz - T2V8
        } else if (dir == "bottom") {
            oBsQ5 = oBsQ5 + T2V8
        }
    }
    maplet.fa = false;
    maplet.OaB({
        RE6: qx,
        I6036: qz,
        Ch9Y4: N33,
        fU4U3: oBsQ5,
        jfS6F: 10,
        t0aW: 10
    })
};

function hideBubble(maplet) {
    if (!ContentInfo) return;
    if (ContentInfo.isVisible()) {
        ContentInfo.setVisible(false);
        MEvent.trigger(maplet, "iw_hide", avBubble.overlay)
    }
    if (typeof maplet != "undefined" && maplet.Rb93W != null) {
        maplet.Rb93W = null;
        maplet.refresh()
    } else if (document["mapbar-maplet"] != "undefined" && document["mapbar-maplet"].Rb93W != null) {
        document["mapbar-maplet"].Rb93W = null;
        document["mapbar-maplet"].refresh()
    }
    ContentInfo.Qa31D("zoomin")
};
var Bubble = function () {
    this.xR = "";
    this.O108 = false;
    this.left = 0;
    this.top = 0;
    this.head = new String();
    this.body = new String();
    this.width = 260;
    this.height = 240;
    this.overlay = null;
    this.arrow_tip_xoffset = 27;
    this.arrow_tip_yoffset = 3;
    this.xoffset = 0;
    this._Tov1 = "";
    this.tipInitPlace = "top";
    this.C7pDD = "auto";
    this.pw8 = false;
    this.WnOK = false;
    this.$49 = true;
    this.s2DA = false;
    this.$AHEx = "";
    this.KL9ut = "";
    this.EcjTX = false;
    this.$2L = "";
    this.minWidth = 100;
    this.minHeight = 60;
    this.e32nn = true;
    this.C62d = false;
    this.lE8xX = function (head) {
        this.head = head
    };
    this.U4X4 = function (body) {
        this.body = body
    };
    this.gl = function () {};
    this.calcLatLon = function () {
        this.xR = maplet.toMapCoordinate(this.left, this.top)
    };
    this.syncContentInfoPosition = function () {
        if (ContentInfo) {
            this.left = ContentInfo.q3;
            this.top = ContentInfo.zt
        }
    };
    this.HB1Q3 = function () {
        if (ContentInfo) {
            if (!px) ContentInfo.un908(false);
            if (this._Tov1 && (this.s2DA || ContentInfo.isVisible())) {
                if (this.s2DA) this.s2DA = false;
                if (this.$49) {
                    var B331 = maplet.toScreenCoordinate(this._Tov1);
                    avBubble.pw8 = true;
                    var Ew1Ou = ContentInfo.Ud3D(B331[0], B331[1], ContentInfo.width, ContentInfo.height, avBubble.C7pDD, avBubble.pw8, this.WnOK, avBubble.overlay, false, false);
                    this.C7pDD = Ew1Ou.$5Oc;
                    ContentInfo.show(Ew1Ou, null, this.EcjTX);
                    if (this.EcjTX) this.EcjTX = false;
                    if (this.$2L != "" && this.overlay) {
                        MEvent.trigger(this.overlay, "bubble_zoomend", this.$2L == "in" ? "out" : "in");
                        if (this.overlay.info) MEvent.trigger(maplet, "iw_zoomend", this.overlay.info, this.$2L == "in" ? "zoomin" : "zoomout");
                        if (this.$2L == "in") {
                            this.pw8 = true;
                            this.WnOK = true
                        } else {
                            this.pw8 = false;
                            this.WnOK = false
                        }
                        this.$2L = ""
                    }
                } else {
                    this.$49 = true
                }
            }
        }
    }
};
var avBubble = new Bubble();
var MInfoWindowTab = function (label, content, focus) {
    var bv4 = label;
    var YkT92 = content;
    var K28 = null;
    var YaaSB = 0;
    var X13 = true;
    this.vVsNL = typeof focus != "boolean" ? false : focus;
    this.s_2A = -1;
    this.$a4f = [];
    this.setVisible = function (visible) {
        X13 = visible
    };
    this.AR774 = function () {
        return X13
    };
    this.aFI0 = function (index) {
        YaaSB = index
    };
    this.getIndex = function () {
        return YaaSB
    };
    this.setLabel = function (label) {
        bv4 = label
    };
    this.getLabel = function () {
        return bv4
    };
    this.setContent = function (content) {
        YkT92 = content
    };
    this.getContent = function () {
        return YkT92
    };
    this.toString = function () {
        return "com.mapbar.maplet.MInfoWindowTab"
    };
    this.M6k = function (dom) {
        K28 = dom
    };
    this.q400j = function () {
        return K28
    };
    this.clone = function () {
        return new MInfoWindowTab(this.getLabel(), this.getContent(), this.vVsNL)
    };
    this.scHo9 = function () {
        K28 = null;
        X13 = false;
        s_2A = -1
    }
};
MInfoWindowTab.HoGK4 = function (uy) {
    return typeof uy == "object" && uy && typeof uy.toString == "function" && uy.toString().indexOf("MInfoWindowTab") != -1
};
var kl3w = function (maplet) {
    var MuXr = maplet;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
    this.content = "";
    this.dom = null;
    this.uN7 = null;
    this.oPOY = null;
    this.Y0n81 = null;
    this.qso02 = null;
    this.Dycj = null;
    this.l2E = null;
    this.F24 = null;
    this.sy0 = null;
    this.wj85R = null;
    this.scF = [];
    this.G5yO = null;
    this.I6R = null;
    this.xN2 = "";
    this.E2b = [];
    this.tabIndex = -1;
    this.$Oe = 0;
    this.h4S68 = 0;
    this._88 = 0;
    this.B9s = 0;
    this.L6f$ = 0;
    this.tr9l = null;
    this.onZoomOut = null;
    this.onZoomIn = null;
    this.onClosed = null;
    this.Y9X = null;
    this.Q$V1 = null;
    this.F1323 = null;
    this.YlD1_ = {
        type: "zoomin",
        q9: null
    };
    this.initialize = function () {
        this.dom = document.createElement("TABLE");
        this.dom.cellSpacing = 0;
        this.dom.cellPadding = 0;
        this.dom.border = 0;
        this.dom.style.cssText = this.X86C6("TIP_TABLE");
        this.dom.setAttribute(B8577, true);
        var vNy0 = this.dom.insertRow(-1);
        var n5P8 = vNy0.insertCell(-1);
        n5P8.vAlign = "top";
        n5P8.style.cssText = this.X86C6("TITLE_CONTAINER_TD");
        this.uN7 = this.xw5Q();
        n5P8.appendChild(this.uN7);
        n5P8 = this.dom.insertRow(-1).insertCell(-1);
        n5P8.style.cssText = this.X86C6("TAB_TD");
        this.Dycj = this.LsW4();
        this.Dycj.style.cssText = this.X86C6("TAB_CONTAINER");
        n5P8.appendChild(this.Dycj);
        this.Dycj.style.display = "none";
        this.dom.rows[1].style.display = "none";
        vNy0 = this.dom.insertRow(-1);
        n5P8 = vNy0.insertCell(-1);
        n5P8.vAlign = "top";
        n5P8.style.cssText = this.X86C6("CONTENT_TD");
        this.wj85R = this.i0DRL();
        n5P8.appendChild(this.wj85R);
        this.Iv9();
        var parentNode = MuXr ? MuXr.sF : document.body;
        parentNode.appendChild(this.dom);
        parentNode.appendChild(this.u_b0());
        for (var i = 0; i < this.scF.length; i++) {
            parentNode.appendChild(this.scF[i])
        }
        parentNode.appendChild(this.WA4())
    };
    this.WA4 = function () {
        this.I6R = document.createElement("DIV");
        this.I6R.style.cssText = this.X86C6("TIP_BORDER");
        return this.I6R
    };
    this.u_b0 = function () {
        this.G5yO = document.createElement("DIV");
        this.G5yO.style.cssText = this.X86C6("ARROW_DIV");
        return this.G5yO
    };
    this.i0DRL = function () {
        var dom = document.createElement("DIV");
        dom.style.cssText = this.X86C6("CONTENT_DIV");
        return dom
    };
    this.Iv9 = function () {
        if (this.dom) {
            var A5_ = this.X86C6("SHADOW_AMOUNT");
            for (var i = 0; i < A5_; i++) {
                var shadow = document.createElement("DIV");
                shadow.id = "_iw_shadow_" + i;
                shadow.style.cssText = this.X86C6("SHADOW_DIV");
                shadow.setAttribute(NH6, "true");
                if (window.attachEvent) shadow.style.filter = "alpha(opacity=" + (this.X86C6("SHADOW_OPACITY")[i] * 100) + ");";
                else shadow.style.opacity = this.X86C6("SHADOW_OPACITY")[i];
                shadow.style.zIndex = this.X86C6("TIP_DEFAULT_INFO").zIndex - (i + 1);
                shadow.onmousedown = function () {
                    return false
                };
                this.scF.push(shadow)
            }
        }
    };
    this.LsW4 = function () {
        var ul = document.createElement("UL");
        this.F24 = document.createElement("LI");
        this.F24.style.cssText = this.X86C6("TAB_NAV_L");
        this.l2E = document.createElement("LI");
        this.l2E.style.cssText = this.X86C6("TAB_SPACER");
        this.sy0 = document.createElement("LI");
        this.sy0.style.cssText = this.X86C6("TAB_NAV_R");
        ul.appendChild(this.F24);
        ul.appendChild(this.l2E);
        ul.appendChild(this.sy0);
        return ul
    };
    this.xw5Q = function () {
        var G7M = this.X86C6("TITLE_INFO");
        var mJ_4 = document.createElement("TABLE");
        mJ_4.width = "100%";
        mJ_4.cellSpacing = 0;
        mJ_4.cellPadding = 0;
        mJ_4.border = 0;
        mJ_4.style.cssText = this.X86C6("TITLE_TABLE");
        var vNy0 = mJ_4.insertRow(-1);
        this.oPOY = vNy0.insertCell(-1);
        this.oPOY.vAlign = "top";
        this.oPOY.style.cssText = this.X86C6("TITLE_TD");
        var n5P8 = vNy0.insertCell(-1);
        n5P8.style.cssText = this.X86C6("TITLE_SPACER");
        n5P8.innerHTML = "&nbsp;";
        this.Y0n81 = vNy0.insertCell(-1);
        this.Y0n81.vAlign = "top";
        this.Y0n81.style.cssText = this.X86C6("RT_BTN_TD");
        this.Y0n81.innerHTML = this.X86C6("ZOOMIN_IMG");
        this.Y0n81.style.width = "0px";
        this.xI6m();
        this.qso02 = vNy0.insertCell(-1);
        this.qso02.vAlign = "top";
        this.qso02.style.cssText = this.X86C6("RT_BTN_TD");
        this.qso02.innerHTML = this.X86C6("CLOSE_IMG");
        this.Y9X = MEvent.bindDom(this.qso02, "click", this, this.apmd8);
        return mJ_4
    };
    this.Bx7 = function () {
        return {
            width: this.I6R.offsetWidth,
            height: this.I6R.offsetHeight
        }
    };
    this.getRect = function (rd8, bArrow) {
        if (typeof rd8 != "boolean") rd8 = true;
        if (typeof bArrow != "boolean") bArrow = true;
        var dom = rd8 ? this.I6R : this.dom;
        var qx = VS8w8(this.dom.style.left);
        var qz = VS8w8(this.dom.style.top);
        var N33 = qx + this.dom.offsetWidth;
        var oBsQ5 = qz + this.dom.offsetHeight;
        if (bArrow) {
            if (this.xN2 == "LEFT") {
                qx = VS8w8(this.G5yO.style.left)
            } else if (this.xN2 == "RIGHT") {
                N33 += this.G5yO.offsetWidth
            } else if (this.xN2 == "TOP") {
                qz = VS8w8(this.G5yO.style.top)
            } else if (this.xN2 == "BOTTOM") {
                oBsQ5 += this.G5yO.offsetHeight
            }
        }
        return {
            min: {
                x: qx,
                y: qz
            },
            max: {
                x: N33,
                y: oBsQ5
            },
            width: N33 - qx,
            height: oBsQ5 - qz
        }
    };
    this.S52E7 = function (title, content) {
        if (!this.dom) this.initialize();
        var Xm650 = -100000;
        var Ew1Ou = {
            L551: Xm650,
            X29: Xm650,
            O8f: Xm650,
            h1S: Xm650,
            width: avBubble.minWidth,
            height: avBubble.minHeight,
            arrow: {
                dir: "left"
            }
        };
        this.show(Ew1Ou, null, false);
        this.setTitle(title);
        this.setContent(content);
        var h = 0;
        var w = 0;
        var c = this.wj85R.firstChild;
        if (c && c.offsetWidth && this.wj85R.childNodes.length == 1 && (_getStyle(c, "width") != "auto" || c.tagName == "IMG")) {
            w = c.offsetWidth + VS8w8(_getStyle(c, "marginLeft", "margin-left")) + VS8w8(_getStyle(c, "marginRight", "margin-right"));
            h = c.offsetHeight + VS8w8(_getStyle(c, "marginTop", "margin-top")) + VS8w8(_getStyle(c, "marginBottom", "margin-bottom"));
            if (px) {
                if (!yvR3$) {
                    w = w + VS8w8(_getStyle(this.wj85R, "paddingLeft", "padding-left")) * 2;
                    h = h + VS8w8(_getStyle(this.wj85R, "paddingTop", "padding-top")) * 2
                } else {
                    h += 1
                }
            }
            this.wj85R.style.width = w + "px";
            this.wj85R.style.height = h + "px";
            this.dom.style.width = this.wj85R.offsetWidth + VS8w8(this.dom.style.borderWidth) * 2 + "px";
            h = this.dom.offsetHeight;
            w = this.dom.offsetWidth
        }
        this.setVisible(false);
        return {
            width: w,
            height: h
        }
    };
    this.Ud3D = function (x, y, width, height, $5Oc, GKW, QFT04, overlay, O9U, G192) {
        if (typeof width != "number") width = this.X86C6("TIP_DEFAULT_INFO").width;
        if (typeof height != "number") height = this.X86C6("TIP_DEFAULT_INFO").height;
        if (typeof $5Oc != "string") $5Oc = "auto";
        if (typeof GKW != "boolean") GKW = false;
        if (typeof QFT04 != "boolean") QFT04 = false;
        if (typeof O9U != "boolean") O9U = true;
        if (typeof G192 != "boolean") G192 = true;
        var L551 = 0;
        var X29 = 0;
        var O8f = 0;
        var h1S = 0;
        var direction = "right";
        var L10l = 0;
        var _16Ep = 0;
        var Ps2 = false;
        var q7472 = false;
        if (MuXr) {
            var sT = MuXr.width;
            var e9pg = MuXr.height;
            var L1N9f = this.X86C6("ARROW_INFO");
            var U55J = width + L1N9f.wa3;
            var mn2 = height + L1N9f.D36a;
            var y07 = width / 2;
            var cuT77 = height / 2;
            var offsetX = 0;
            var offsetY = 0;
            if (typeof overlay == "object" && overlay) {
                var s = overlay.toString();
                Ps2 = s.indexOf("MMarker") != -1;
                q7472 = s.indexOf("MPolyline") != -1
            }
            if (Ps2 && overlay.icon) {
                offsetX = overlay.icon.width / 2;
                offsetY = overlay.icon.height / 2;
                x = x - overlay.icon.anchorX + offsetX;
                y = y - overlay.icon.anchorY + offsetY
            }
            if (QFT04) {
                X29 = y - cuT77;
                L551 = x - y07
            } else {
                if (y - cuT77 <= 0) X29 = 5;
                else if (y + cuT77 > e9pg) X29 = e9pg - height - 5;
                else X29 = y - cuT77;
                if (x - y07 <= 0) L551 = 5;
                else if (x + y07 > sT) L551 = sT - width - 5;
                else L551 = x - y07
            }
            var R6F = false;
            var p4R = false;
            var Wny = false;
            var m_Q$ = false;
            var h_k3A = {
                min: {
                    x: 0,
                    y: 0
                },
                max: {
                    x: 0,
                    y: 0
                }
            };
            var b_1 = MuXr.U28x1();
            var p14 = MuXr.L7n();
            var $7fi4 = x >= U55J && y >= L1N9f.qlJ && y + L1N9f.qlJ <= e9pg;
            if ($7fi4) {
                var N33 = x - offsetX - L1N9f.wa3;
                var zB = N33 - width;
                if (!isNaN(parseInt(this.dom.style.borderRightWidth))) zB += parseInt(this.dom.style.borderRightWidth);
                h_k3A = {
                    min: {
                        x: zB,
                        y: X29
                    },
                    max: {
                        x: zB + U55J,
                        y: X29 + mn2
                    }
                };
                if (O9U) $7fi4 = !_isRectint(h_k3A, b_1);
                if (G192 && $7fi4) $7fi4 = !_isRectint(h_k3A, p14)
            }
            var j7CAw = y >= mn2 && x >= L1N9f.xy028 && x <= sT - L1N9f.xy028;
            if (j7CAw) {
                var oBsQ5 = y - offsetY - L1N9f.D36a;
                var zF = oBsQ5 - height;
                if (!isNaN(parseInt(this.dom.style.borderBottomWidth))) zF += parseInt(this.dom.style.borderBottomWidth);
                h_k3A = {
                    min: {
                        x: L551,
                        y: zF
                    },
                    max: {
                        x: L551 + U55J,
                        y: zF + mn2
                    }
                };
                if (O9U) j7CAw = !_isRectint(h_k3A, b_1);
                if (G192 && j7CAw) j7CAw = !_isRectint(h_k3A, p14)
            }
            var DgPi = sT - x >= U55J && y >= L1N9f.qlJ && y + L1N9f.qlJ <= e9pg;
            if (DgPi) {
                var N33 = x + offsetX;
                var zB = N33 + L1N9f.wa3;
                if (!isNaN(parseInt(this.dom.style.borderLeftWidth))) zB -= parseInt(this.dom.style.borderLeftWidth);
                h_k3A = {
                    min: {
                        x: zB,
                        y: X29
                    },
                    max: {
                        x: zB + U55J,
                        y: X29 + mn2
                    }
                };
                if (O9U) DgPi = !_isRectint(h_k3A, b_1);
                if (G192 && DgPi) DgPi = !_isRectint(h_k3A, p14)
            }
            var aCw = e9pg - y >= mn2 && x >= L1N9f.xy028 && x <= sT - L1N9f.xy028;
            if (aCw) {
                var oBsQ5 = y + offsetY;
                var zF = oBsQ5 + L1N9f.D36a;
                if (!isNaN(parseInt(this.dom.style.borderTopWidth))) zF -= parseInt(this.dom.style.borderTopWidth);
                h_k3A = {
                    min: {
                        x: L551,
                        y: zF
                    },
                    max: {
                        x: L551 + U55J,
                        y: zF + mn2
                    }
                };
                if (O9U) aCw = !_isRectint(h_k3A, b_1);
                if (G192 && aCw) aCw = !_isRectint(h_k3A, p14)
            }
            if ($5Oc != "auto") {
                if (GKW) {
                    if ($5Oc == "left") R6F = true;
                    else if ($5Oc == "top") p4R = true;
                    else if ($5Oc == "right") Wny = true;
                    else if ($5Oc == "bottom") m_Q$ = true
                } else {
                    if ($5Oc == "left" && $7fi4) R6F = true;
                    else if ($5Oc == "top" && j7CAw) p4R = true;
                    else if ($5Oc == "right" && DgPi) Wny = true;
                    else if ($5Oc == "bottom" && aCw) m_Q$ = true;
                    else $5Oc = "auto"
                }
            }
            if ($5Oc == "auto") {
                R6F = $7fi4;
                p4R = j7CAw;
                Wny = DgPi;
                m_Q$ = aCw
            }
            var je9O = "";
            if (R6F) {
                je9O = "left";
                O8f = x - offsetX - L1N9f.wa3;
                h1S = y - L1N9f.qlJ / 2;
                L551 = O8f - width;
                if (!isNaN(parseInt(this.dom.style.borderRightWidth))) L551 += parseInt(this.dom.style.borderRightWidth);
                if (h1S < X29 + 5) X29 = h1S - 5;
                else if (h1S + L1N9f.qlJ >= X29 + height - 5) X29 = h1S - height + L1N9f.qlJ + 5
            } else if (Wny) {
                je9O = "right";
                direction = "left";
                O8f = x + offsetX;
                h1S = y - L1N9f.qlJ / 2;
                L551 = O8f + L1N9f.wa3;
                if (!isNaN(parseInt(this.dom.style.borderLeftWidth))) L551 -= parseInt(this.dom.style.borderLeftWidth);
                if (h1S < X29 + 5) X29 = h1S - 5;
                else if (h1S + L1N9f.qlJ >= X29 + height - 5) X29 = h1S - height + L1N9f.qlJ + 5
            } else if (p4R || (!Wny && !p4R && !R6F && !m_Q$)) {
                je9O = "top";
                direction = "bottom";
                O8f = x - L1N9f.xy028 / 2;
                h1S = y - offsetY - L1N9f.D36a;
                X29 = h1S - height;
                if ((!Wny && !p4R && !R6F && !m_Q$)) {
                    if (L551 == 5 || (L551 == sT - width - 5)) {
                        L551 = x - y07
                    }
                }
                if (!isNaN(parseInt(this.dom.style.borderBottomWidth))) X29 += parseInt(this.dom.style.borderBottomWidth);
                if (O8f < L551 + 5) L551 = O8f - 5;
                else if (O8f + L1N9f.xy028 >= L551 + width - 5) L551 = O8f - width + L1N9f.xy028 + 5
            } else if (m_Q$) {
                je9O = "bottom";
                direction = "top";
                O8f = x - L1N9f.xy028 / 2;
                h1S = y + offsetY;
                X29 = h1S + L1N9f.D36a;
                if (!isNaN(parseInt(this.dom.style.borderTopWidth))) X29 -= parseInt(this.dom.style.borderTopWidth);
                if (O8f < L551 + 5) L551 = O8f - 5;
                else if (O8f + L1N9f.xy028 >= L551 + width - 5) L551 = O8f - width + L1N9f.xy028 + 5
            }
            if (je9O == "left" || je9O == "right") {
                L10l = L1N9f.wa3;
                _16Ep = L1N9f.qlJ
            } else {
                L10l = L1N9f.xy028;
                _16Ep = L1N9f.D36a
            }
        }
        return {
            L551: L551,
            X29: X29,
            O8f: O8f,
            h1S: h1S,
            width: width,
            height: height,
            $5Oc: je9O,
            arrow: {
                dir: direction,
                width: L10l,
                height: _16Ep
            },
            Ps2: Ps2,
            q7472: q7472
        }
    };
    this.show = function (Ew1Ou, k28T, KiF) {
        this.x = Ew1Ou.L551;
        this.y = Ew1Ou.X29;
        this.width = Ew1Ou.width;
        this.height = Ew1Ou.height;
        if (!this.dom) this.initialize();
        this.dom.style.left = this.x + "px";
        this.dom.style.top = this.y + "px";
        this.dom.style.width = this.width + "px";
        this.dom.style.height = this.height + "px";
        this.wj85R.style.width = "1px";
        this.wj85R.style.height = "1px";
        this.setVisible(true);
        if (typeof k28T == "boolean") this.setZMBtnVisible(k28T);
        this.L8_(Ew1Ou.O8f, Ew1Ou.h1S, Ew1Ou.arrow.dir);
        this.w1e3A(KiF)
    };
    this.L8_ = function (x, y, direction) {
        direction = direction.toUpperCase();
        this.xN2 = direction;
        var Mq24 = "";
        var L1N9f = this.X86C6("ARROW_INFO");
        Mq24 = this.X86C6("ARROW_" + direction + "_CHILD");
        var width = L1N9f.wa3;
        var height = L1N9f.qlJ;
        if (direction == "TOP" || direction == "BOTTOM") {
            width = L1N9f.xy028;
            height = L1N9f.D36a
        }
        this.G5yO.innerHTML = Mq24;
        this.G5yO.style.left = x + "px";
        this.G5yO.style.top = y + "px";
        this.G5yO.style.width = width + "px";
        this.G5yO.style.height = height + "px";
        this.G5yO.style.display = ""
    };
    this.q05 = function () {
        this.G5yO.style.display = "none"
    };
    this.w1e3A = function (KiF) {
        if (!this.isVisible()) return;
        var th = this.uN7.offsetHeight;
        if (!isNaN(parseInt(this.uN7.style.marginTop))) th += parseInt(this.uN7.style.marginTop);
        if (!isNaN(parseInt(this.uN7.style.marginBottom))) th += parseInt(this.uN7.style.marginBottom);
        var h = this.dom.offsetHeight - th - this.$Oe;
        if (yvR3$ || j7751 || t4E0 || $x2) {
            if (!isNaN(parseInt(this.wj85R.style.paddingTop))) h -= VS8w8(this.wj85R.style.paddingTop);
            if (!isNaN(parseInt(this.wj85R.style.paddingBottom))) h -= VS8w8(this.wj85R.style.paddingBottom)
        }
        if (!isNaN(parseInt(this.dom.style.borderTopWidth))) h -= parseInt(this.dom.style.borderTopWidth);
        if (!isNaN(parseInt(this.dom.style.borderBottomWidth))) h -= parseInt(this.dom.style.borderBottomWidth);
        var w = this.dom.offsetWidth;
        if (yvR3$ || t4E0 || $x2 || j7751) {
            if (!isNaN(parseInt(this.wj85R.style.paddingLeft))) w -= parseInt(this.wj85R.style.paddingLeft);
            if (!isNaN(parseInt(this.wj85R.style.paddingRight))) w -= parseInt(this.wj85R.style.paddingRight)
        }
        w = w - VS8w8(this.dom.style.borderWidth) * 2;
        if (px) {
            this.wj85R.style.overflow = "hidden";
            this.wj85R.style.overflow = "auto"
        }
        this.wj85R.style.height = h + "px";
        this.wj85R.style.width = w + "px";
        if (this.wj85R.scrollWidth > this.wj85R.offsetWidth) {
            if (!isNaN(parseInt(this.dom.style.borderLeftWidth))) w -= parseInt(this.dom.style.borderLeftWidth);
            if (!isNaN(parseInt(this.dom.style.borderRightWidth))) w -= parseInt(this.dom.style.borderRightWidth);
            this.wj85R.style.width = w + "px"
        }
        if (typeof KiF != "boolean") KiF = true;
        if (this.E2b.length > 0 && KiF) {
            this.k16rm();
            this.w35();
            var C815 = this.tabIndex;
            this.tabIndex = -1;
            if (C815 != -1) {
                if (!this.E2b[C815].AR774()) this.setCurrentTab(0);
                else this.setCurrentTab(C815)
            }
        }
        for (var i = 0; i < this.scF.length; i++) {
            var shadow = this.scF[i];
            shadow.style.left = (this.x + 3 + ((i) * 3)) + "px";
            shadow.style.top = (this.y + 3 + ((i) * 3)) + "px";
            shadow.style.width = this.width + "px";
            shadow.style.height = this.height + "px";
            shadow.style.display = ""
        }
        this.I6R.style.width = this.width + 2 + "px";
        this.I6R.style.height = this.height + 2 + "px";
        this.I6R.style.left = this.x - 1 + "px";
        this.I6R.style.top = this.y - 1 + "px"
    };
    this.v15 = function () {
        return this.dom
    };
    this.D_6q = function (X0U9) {
        if (!this.v15()) return;
        if (this.E2b.length >= this.X86C6("TAB_AMOUNT")) return false;
        if (MInfoWindowTab.HoGK4(X0U9)) {
            if (this.E2b.length == 0) {
                var Q37 = [];
                if (this.content != "") {
                    Q37.push(new MInfoWindowTab(this.X86C6("TAB_DEFAULT_LABEL"), this.content, !X0U9.vVsNL));
                    this.wj85R.innerHTML = ""
                }
                if (Q37.length == 0 && !X0U9.vVsNL) X0U9.vVsNL = true;
                Q37.push(X0U9);
                this.x8oS(Q37)
            } else {
                this.V5S0(X0U9, -1)
            }
        }
    };
    this.N4y = function () {
        if (!this.v15()) return;
        if (this.E2b.length > 0) {
            var Q37 = this.E2b;
            for (var i = Q37.length - 1; i >= 0; i--) {
                this.u_34(i, false)
            }
            this.E2b = []
        }
    };
    this.JSAi = function () {
        this.tabIndex = -1;
        this.L6f$ = 0;
        this.tr9l = null
    };
    this.u_34 = function (index, Tu5) {
        if (!this.v15()) return;
        if (this.Dycj && this.E2b.length > index) {
            if (typeof Tu5 != "boolean") Tu5 = true;
            var mP_ = [];
            var u_34 = null;
            var TKv5 = this.tabIndex;
            this.tabIndex = -1;
            var kXf9 = 0;
            for (var i = 0; i < this.E2b.length; i++) {
                if (i != index) {
                    var _O3 = this.E2b[i];
                    var C815 = _O3.getIndex();
                    mP_.push(_O3);
                    _O3.aFI0(mP_.length - 1);
                    var dom = _O3.q400j();
                    if (dom) dom.setAttribute("tabIndex", _O3.getIndex());
                    if (C815 == TKv5) kXf9 = _O3.getIndex()
                } else {
                    u_34 = this.E2b[i]
                }
            }
            if (u_34) {
                this.E2b = mP_;
                var Ch34E = u_34.q400j();
                if (u_34.$a4f.length > 0) {
                    for (var i = 0; i < u_34.$a4f.length; i++) {
                        var item = u_34.$a4f[i];
                        MEvent.removeBuiltInListener(Ch34E, item.event, item.q9)
                    }
                }
                if (Ch34E) {
                    this.Dycj.removeChild(Ch34E)
                }
            }
            this.k16rm();
            this.w35();
            if (this.E2b.length > kXf9 && !this.E2b[kXf9].AR774()) kXf9 = 0;
            if (Tu5) this.setCurrentTab(kXf9);
            if (this.E2b.length == 0) {
                this.r1X6()
            }
        }
    };
    this.r1X6 = function () {
        this.$Oe = 0;
        this.dom.rows[1].style.display = "none";
        this.JSAi();
        if (this.content) this.setContent(this.content);
        this.w1e3A()
    };
    this.V5S0 = function (s$79, g3ck) {
        if (!MInfoWindowTab.HoGK4(s$79)) {
            return false
        }
        var A5_ = this.E2b.length;
        var A58 = this.l2E;
        if (!MInfoWindowTab.HoGK4(g3ck) || !g3ck.q400j()) {
            g3ck = null
        }
        if (g3ck) {
            A58 = g3ck.q400j();
            var kcCc = this.tabIndex == g3ck.getIndex();
            var $9tx = [];
            for (var i = 0; i < this.E2b.length; i++) {
                var item = this.E2b[i];
                if (item == g3ck) {
                    $9tx.push(s$79);
                    s$79.aFI0($9tx.length - 1)
                }
                $9tx.push(item);
                item.aFI0($9tx.length - 1);
                var Ch34E = item.q400j();
                if (Ch34E) Ch34E.setAttribute("tabIndex", item.getIndex())
            }
            if (kcCc) this.tabIndex = g3ck.getIndex();
            this.E2b = $9tx
        } else {
            this.E2b.push(s$79);
            s$79.aFI0(this.E2b.length - 1)
        }
        var Ch34E = this.HL8(s$79, A58);
        if (isNaN(parseInt(this.Dycj.style.height))) {
            this.Dycj.style.height = parseInt(this.Dycj.parentNode.clientHeight) + "px"
        }
        if (s$79.vVsNL) this.setCurrentTab(s$79.getIndex());
        this.w35()
    };
    this.HL8 = function (X0U9, A58) {
        var Ch34E = document.createElement("LI");
        Ch34E.innerHTML = X0U9.getLabel();
        Ch34E.style.cssText = this.X86C6("TAB_TEXT_BLUR");
        Ch34E.setAttribute("tabIndex", X0U9.getIndex());
        X0U9.M6k(Ch34E);
        this.Dycj.insertBefore(Ch34E, A58);
        X0U9.$a4f.push({
            event: "click",
            q9: MEvent.bindDom(Ch34E, "click", this, this.LP5)
        });
        if (this.E2b.length == 1) {
            if (this.h4S68 == 0) {
                this.h4S68 = Ch34E.clientHeight;
                if (parseInt(Ch34E.style.paddingTop)) this.h4S68 -= parseInt(Ch34E.style.paddingTop);
                if (parseInt(Ch34E.style.paddingBottom)) this.h4S68 -= parseInt(Ch34E.style.paddingBottom)
            }
            if (this._88 == 0) {
                this._88 = Ch34E.clientHeight
            }
        }
        return Ch34E
    };
    this.w35 = function () {
        var Q37 = this.E2b;
        this.Fwm(true);
        this.Ro5(true);
        var L$4 = this.F24.firstChild.offsetWidth;
        var Y49K = this.sy0.firstChild.offsetWidth;
        var TsC5 = null;
        var X0U9 = null;
        for (var i = Q37.length - 1; i >= 0; i--) {
            X0U9 = Q37[i];
            if (X0U9.AR774()) {
                var Ch34E = X0U9.q400j();
                if (Ch34E) {
                    var OClC = Ch34E.clientWidth;
                    if (Ch34E.offsetTop >= Ch34E.offsetHeight * 2 - 5) {
                        LF_0q = 0
                    } else {
                        var LF_0q = this.o$495(true);
                        if (Ch34E.offsetTop == 0) LF_0q += OClC;
                        else if (Ch34E.offsetLeft != 0) LF_0q = 0
                    }
                    if (OClC >= LF_0q) {
                        if (LF_0q <= 20) {
                            this.$y4A(X0U9, false);
                            LF_0q = 0
                        } else {
                            LF_0q = LF_0q - parseInt(Ch34E.style.paddingLeft) - parseInt(Ch34E.style.paddingRight);
                            Ch34E.style.width = LF_0q + "px";
                            TsC5 = X0U9
                        }
                    } else {
                        TsC5 = X0U9
                    }
                    if (LF_0q != 0) break
                }
            }
        }
        this.Fwm(false);
        this.Ro5(false);
        if (Q37.length > 0) {
            this.Fwm(!Q37[0].AR774());
            this.Ro5(!Q37[Q37.length - 1].AR774())
        }
        if (TsC5 && TsC5.q400j()) {
            this.tr9l = TsC5;
            var dom = TsC5.q400j();
            var width = dom.clientWidth;
            if (!isNaN(parseInt(dom.style.paddingLeft))) width -= parseInt(dom.style.paddingLeft);
            if (!isNaN(parseInt(dom.style.paddingRight))) width -= parseInt(dom.style.paddingRight);
            if (!this._Ei5Y()) {
                width += L$4
            }
            if (!this.B31V1()) {
                width += Y49K
            }
            if (this.tabIndex == TsC5.getIndex()) width -= 2;
            dom.style.width = width + "px"
        }
        for (var i = 0; i < Q37.length; i++) {
            X0U9 = Q37[i];
            if (X0U9.AR774()) {
                X0U9.s_2A = this.L6f$;
                if (X0U9.q400j()) {
                    X0U9.q400j().style.height = this.h4S68 + "px"
                }
            }
        }
        this.yqj()
    };
    this.$y4A = function (X0U9, visible) {
        var Ch34E = X0U9.q400j();
        if (Ch34E) {
            if (visible) {
                Ch34E.style.cssText = this.X86C6("TAB_TEXT_BLUR")
            } else {
                Ch34E.style.width = "0px";
                Ch34E.style.padding = "0px"
            }
            X0U9.setVisible(visible)
        }
    };
    this.k16rm = function () {
        var Q37 = this.E2b;
        for (var i = 0; i < Q37.length; i++) {
            this.$y4A(Q37[i], true)
        }
    };
    this.Ro5 = function (visible) {
        if (!this.F1323) this.F1323 = MEvent.bindDom(this.sy0, "click", this, this.l6wJW);
        if (visible) {
            this.sy0.innerHTML = this.X86C6("TAB_NAV_R_CHILD");
            this.sy0.style.cursor = "pointer";
            this.sy0.style.width = this.X86C6("TAB_NAV_INFO").width + "px"
        } else {
            this.sy0.innerHTML = "";
            this.sy0.style.cursor = "";
            this.sy0.style.width = "0px"
        }
    };
    this.Fwm = function (visible) {
        if (!this.Q$V1) this.Q$V1 = MEvent.bindDom(this.F24, "click", this, this.x9FG);
        if (visible) {
            this.F24.innerHTML = this.X86C6("TAB_NAV_L_CHILD");
            this.F24.style.cursor = "pointer";
            this.F24.style.width = this.X86C6("TAB_NAV_INFO").width + "px"
        } else {
            this.F24.innerHTML = "";
            this.F24.style.cursor = "";
            this.F24.style.width = "0px"
        }
    };
    this.yqj = function () {
        var LF_0q = this.o$495(false);
        if (LF_0q < 0) LF_0q = 0;
        this.l2E.style.width = LF_0q + "px";
        this.l2E.style.height = this._88 + "px"
    };
    this._Ei5Y = function () {
        if (this.F24.firstChild) return this.F24.firstChild.offsetWidth > 0;
        else return false
    };
    this.B31V1 = function () {
        if (this.sy0.firstChild) return this.sy0.firstChild.offsetWidth > 0;
        else return false
    };
    this.o$495 = function () {
        var width = 0;
        if (this.Dycj) {
            if (this.E2b.length > 0) {
                var Q37 = this.E2b;
                var X0U9 = null;
                var Ch34E = null;
                for (var i = Q37.length - 1; i >= 0; i--) {
                    X0U9 = Q37[i];
                    Ch34E = X0U9.q400j();
                    if (Ch34E && Ch34E.offsetTop == this.F24.offsetTop) {
                        break
                    }
                }
                if (Ch34E) {
                    if (X0U9.getIndex() == 0 && Ch34E.offsetTop != this.F24.offsetTop) Ch34E = this.F24;
                    width = this.Dycj.parentNode.offsetWidth - Ch34E.offsetLeft - Ch34E.offsetWidth - this.sy0.offsetWidth
                }
            }
        }
        return width
    };
    this.x8oS = function (Q37) {
        if (this.Dycj && Q37.length > 0) {
            if (this.dom.rows[1].style.display == "none") {
                this.dom.rows[1].style.display = ""
            }
            if (this.Dycj.style.display == "none") {
                this.Dycj.style.display = ""
            }
            for (var i = 0; i < Q37.length; i++) {
                this.V5S0(Q37[i])
            }
            this.vO71v();
            var height = this.dom.rows[1].clientHeight;
            if (!isNaN(parseInt(this.dom.rows[1].style.paddingTop))) height -= parseInt(this.dom.rows[1].style.paddingTop);
            if (!isNaN(parseInt(this.dom.rows[1].style.paddingBottom))) height -= parseInt(this.dom.rows[1].style.paddingBottom);
            this.dom.rows[1].style.height = height + "px";
            this.$Oe = height;
            this.w1e3A()
        }
    };
    this.vO71v = function () {
        if (this.B9s == 0) {
            var Ch34E = this.E2b[0].q400j();
            var borderWidth = this.tabIndex == 0 ? parseInt(Ch34E.style.borderTopWidth) : parseInt(Ch34E.style.borderBottomWidth);
            if (isNaN(borderWidth)) borderWidth = 0;
            this.B9s = Ch34E.offsetHeight - parseInt(Ch34E.style.paddingTop) - borderWidth
        }
        this.F24.style.height = this.B9s + "px";
        this.F24.style.lineHeight = this.B9s + "px";
        this.sy0.style.height = this.B9s + "px";
        this.sy0.style.lineHeight = this.B9s + "px"
    };
    this.Ba0 = function (X0U9) {
        if (!X0U9.AR774()) return;
        var dom = X0U9.q400j();
        if (dom) {
            var arC4 = {
                width: dom.style.width,
                height: dom.style.height
            };
            dom.style.cssText = this.X86C6("TAB_TEXT_BLUR");
            dom.style.width = arC4.width;
            dom.style.height = arC4.height;
            this.tabIndex = -1
        }
    };
    this.v5bQl = function (X0U9) {
        var dom = X0U9.q400j();
        if (dom) {
            var arC4 = {
                width: dom.style.width,
                height: dom.style.height
            };
            dom.style.cssText = this.X86C6("TAB_TEXT_FOCUS");
            dom.style.width = arC4.width;
            dom.style.height = arC4.height;
            this.tabIndex = X0U9.getIndex();
            var content = X0U9.getContent();
            if (typeof content == "string") {
                this.wj85R.innerHTML = content
            } else if (typeof content == "object" && typeof content.tagName != "undefined") {
                this.wj85R.innerHTML = "";
                this.wj85R.appendChild(content)
            }
        }
    };
    this.setCurrentTab = function (index) {
        var Q37 = this.E2b;
        if (this.tabIndex == index || Q37.length <= 0 || index < 0 || index >= Q37.length) return;
        if (this.tabIndex != -1) this.Ba0(this.E2b[this.tabIndex]);
        var d10 = Q37[index];
        if (!d10.AR774()) {
            if (d10.s_2A != -1) {
                this.L6f$ = d10.s_2A;
                for (var i = 0; i < Q37.length; i++) {
                    var X0U9 = Q37[i];
                    if (X0U9.s_2A == d10.s_2A) {
                        this.$y4A(X0U9, true)
                    } else {
                        this.$y4A(X0U9, false)
                    }
                }
                this.w35()
            } else {
                while (!d10.AR774()) {
                    this.l6wJW(null)
                }
            }
        }
        if (d10.AR774()) {
            this.v5bQl(d10)
        }
    };
    this.x9FG = function (lM) {
        if (!this._Ei5Y()) return;
        this.L6f$--;
        var Q37 = this.E2b;
        var d10 = null;
        if (this.tabIndex != -1) this.Ba0(this.E2b[this.tabIndex]);
        for (var i = Q37.length - 1; i >= 0; i--) {
            var X0U9 = Q37[i];
            if (X0U9.s_2A == this.L6f$) {
                this.$y4A(X0U9, true);
                d10 = X0U9
            } else {
                this.$y4A(X0U9, false)
            }
        }
        this.w35();
        this.setCurrentTab(d10.getIndex())
    };
    this.l6wJW = function (lM) {
        if (!this.B31V1()) return;
        this.L6f$++;
        var Q37 = this.E2b;
        var d10 = null;
        if (this.tabIndex != -1) this.Ba0(this.E2b[this.tabIndex]);
        for (var i = 0; i < Q37.length; i++) {
            var X0U9 = Q37[i];
            if (X0U9.getIndex() <= this.tr9l.getIndex()) {
                if (X0U9.AR774()) this.$y4A(X0U9, false)
            } else {
                if (!X0U9.AR774()) {
                    if (!d10) d10 = X0U9;
                    this.$y4A(X0U9, true)
                }
            }
        }
        this.w35();
        if (d10) this.setCurrentTab(d10.getIndex())
    };
    this.apmd8 = function (lM) {
        lM = ny(lM);
        if (lM.target.tagName == "IMG") {
            this.setVisible(false);
            if (this.onClosed) this.onClosed()
        }
    };
    this.setVisible = function (visible) {
        if (!this.dom) return;
        if (this.isVisible() == visible) return;
        this.dom.style.display = visible ? "" : "none";
        for (var i = 0; i < this.scF.length; i++) {
            this.scF[i].style.display = visible ? "" : "none"
        }
        if (!visible) this.q05();
        this.I6R.style.display = visible ? "" : "none"
    };
    this.isVisible = function () {
        return this.dom && this.dom.style.display != "none"
    };
    this.setZMBtnVisible = function (visible) {
        if (this.E78N() == visible) return;
        if (visible) this.Y0n81.style.width = this.X86C6("RT_BTN_TD_INFO").width + "px";
        else this.Y0n81.style.width = "0px"
    };
    this.E78N = function () {
        return this.Y0n81 && parseInt(this.Y0n81.style.width) != 0
    };
    this.LP5 = function (lM) {
        var index = lM.target.getAttribute("tabIndex");
        if (index != null) this.setCurrentTab(parseInt(index))
    };
    this.Qa31D = function (type) {
        if (this.Y0n81 && this.YlD1_.type != type) {
            this.YlD1_.type = type;
            if (this.YlD1_.type == "zoomin") {
                this.Y0n81.innerHTML = this.X86C6("ZOOMIN_IMG")
            } else {
                this.Y0n81.innerHTML = this.X86C6("ZOOMOUT_IMG")
            }
            this.xI6m()
        }
    };
    this.xI6m = function () {
        if (this.YlD1_.q9) MEvent.removeBuiltInListener(this.Y0n81, "click", this.YlD1_.q9);
        if (this.YlD1_.type == "zoomin") {
            this.YlD1_.q9 = MEvent.bindDom(this.Y0n81, "click", this, this.p30)
        } else if (this.YlD1_.type == "zoomout") {
            this.YlD1_.q9 = MEvent.bindDom(this.Y0n81, "click", this, this.K705)
        }
    };
    this.p30 = function (lM) {
        lM = ny(lM);
        if (lM.target.tagName == "IMG") {
            if (this.onZoomIn) this.onZoomIn()
        }
    };
    this.K705 = function (lM) {
        lM = ny(lM);
        if (lM.target.tagName == "IMG") {
            if (this.onZoomOut) this.onZoomOut()
        }
    };
    this.setTitle = function (title) {
        if (this.oPOY) {
            this.oPOY.innerHTML = title
        }
    };
    this.setContent = function (content) {
        this.content = content;
        if (this.wj85R) {
            if (typeof content == "string") this.wj85R.innerHTML = content;
            else if (typeof content == "object" && typeof content.tagName != "undefined") {
                this.wj85R.innerHTML = "";
                this.wj85R.appendChild(content)
            }
            if (this.E2b.length > 0) this.E2b[0].setContent(content)
        }
    };
    this.g70S$ = function (w, h) {
        if (!this.v15()) return;
        this.width = w;
        this.height = h;
        if (this.dom) {
            this.dom.style.width = w + "px";
            this.dom.style.height = h + "px";
            this.w1e3A()
        }
    };
    this.moveTo = function (x, y) {
        if (!this.v15()) return;
        this.x = x;
        this.y = y;
        this.dom.style.left = x + "px";
        this.dom.style.top = y + "px";
        for (var i = 0; i < this.scF.length; i++) {
            var shadow = this.scF[i];
            shadow.style.left = (this.x + 3 + ((i) * 3)) + "px";
            shadow.style.top = (this.y + 3 + ((i) * 3)) + "px"
        }
    };
    this.un908 = function (_5VD) {
        if (this.isVisible()) {
            if ((this.wj85R.style.overflow == "hidden" ? true : false) != _5VD) {
                this.wj85R.style.overflow = _5VD ? "hidden" : "auto"
            }
        }
    };
    this.X86C6 = function (name) {
        return kl3w._c4.Gk5(name)
    };
    this.C0g = function (name, value) {
        kl3w._c4.$6c(name, value)
    };
    this.finalize = function () {
        if (this.Q$V1) MEvent.removeBuiltInListener(this.F24, "click", this.Q$V1);
        if (this.F1323) MEvent.removeBuiltInListener(this.sy0, "click", this.F1323);
        if (this.Y9X) MEvent.removeBuiltInListener(this.qso02, "click", this.Y9X)
    }
};
kl3w._c4 = new
function () {
    var k33BU = [];
    var Nfy = navigator.userAgent.split("(").toString().split(";")[1].indexOf("6") > 0;
    k33BU["TIP_DEFAULT_INFO"] = {
        width: 300,
        height: 300,
        B8$g0: false,
        zIndex: 100
    };
    k33BU["COLOR"] = "#81807f";
    k33BU["TIP_TABLE_BORDER_COLOR"] = "#0e347f";
    k33BU["IMAGE_RESOURCE"] = CTLIMG_RESOURCE[0].url;
    k33BU["IMAGE_RESOURCE_INFO"] = {
        width: CTLIMG_RESOURCE[0].w,
        height: CTLIMG_RESOURCE[0].h
    };
    k33BU["BLANK_IMG_SRC"] = strImgsvrUrl + "images/newbubbleimg/mbblank.gif";
    k33BU["TIP_TABLE"] = "position:absolute;border:2px solid " + k33BU["TIP_TABLE_BORDER_COLOR"] + ";background-color:#FFFFFF;display:none;spacing:10px;table-layout:fixed;overflow:hidden;z-index:" + k33BU["TIP_DEFAULT_INFO"].zIndex + ";";
    k33BU["TIP_BORDER"] = "position:absolute;background:white;z-index:99;";
    k33BU["TITLE_CONTAINER_TD"] = "";
    k33BU["TITLE_TABLE"] = "table-layout:fixed;margin-bottom:5px;margin-top:4px;/*background-color:green;*/";
    k33BU["TITLE_TD"] = "white-space:nowrap;overflow:hidden;padding-left:4px;padding-top:2px;font-weight:bold;font-size:14px;";
    k33BU["TITLE_SPACER"] = "width:10px;-moz-user-select:none;-moz-user-focus:none;";
    var S74 = function (w, h, x, y, hAU) {
        if (typeof hAU != "string") hAU = "";
        var s = "<div style=\"position:absolute;width:" + w + "px;height:" + h + "px;overflow:hidden;-moz-user-select:none;-moz-user-focus:none;" + hAU + "\">";
        if (Nfy) {
            s += "<img src=\"" + k33BU["BLANK_IMG_SRC"] + "\" style=\"position:absolute;left:" + x + "px;top:" + y + "px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + k33BU["IMAGE_RESOURCE"] + ",sizingMethod=scale);width:" + k33BU["IMAGE_RESOURCE_INFO"].width + "px;height:" + k33BU["IMAGE_RESOURCE_INFO"].height + "px;\">"
        } else {
            s += "<img src=\"" + k33BU["IMAGE_RESOURCE"] + "\" style=\"position:absolute;left:" + x + "px;top:" + y + "px;\">"
        }
        s += "</div>";
        return s
    };
    k33BU["RT_BTN_TD_INFO"] = {
        width: 18
    };
    k33BU["RT_BTN_TD"] = "width:" + k33BU["RT_BTN_TD_INFO"].width + "px";
    k33BU["RT_BTN_IMG_INFO"] = {
        width: 12,
        height: 12
    };
    k33BU["CLOSE_IMG"] = S74(k33BU["RT_BTN_IMG_INFO"].width, k33BU["RT_BTN_IMG_INFO"].height, -64, -51, "cursor:pointer;");
    k33BU["ZOOMIN_IMG"] = S74(k33BU["RT_BTN_IMG_INFO"].width, k33BU["RT_BTN_IMG_INFO"].height, -42, -51, "cursor:pointer;");
    k33BU["ZOOMOUT_IMG"] = S74(k33BU["RT_BTN_IMG_INFO"].width, k33BU["RT_BTN_IMG_INFO"].height, -53, -51, "cursor:pointer;");
    k33BU["SHADOW_COLOR"] = k33BU["COLOR"];
    k33BU["SHADOW_AMOUNT"] = 2;
    k33BU["SHADOW_OPACITY"] = [0.5, 0.3];
    k33BU["SHADOW_DIV"] = "position:absolute;background-color:" + k33BU["SHADOW_COLOR"] + ";display:none;";
    k33BU["TAB_AMOUNT"] = 5;
    k33BU["TAB_DEFAULT_LABEL"] = "\u4e3b\u8981";
    k33BU["TAB_TD"] = "-moz-user-select:none;-moz-user-focus:none;";
    k33BU["TAB_CONTAINER"] = "list-style-type:none;margin:0px;padding:0px;overflow:hidden;";
    k33BU["TAB_LINE"] = "1px solid " + k33BU["COLOR"] + ";";
    k33BU["TAB_TEXT_COMMON"] = "float:left;cursor:pointer;white-space:nowrap;overflow:hidden;outline:none;font-size:12px;padding-bottom:4px;";
    k33BU["TAB_TEXT_FOCUS"] = k33BU["TAB_TEXT_COMMON"] + "border-top:" + k33BU["TAB_LINE"] + ";border-left:" + k33BU["TAB_LINE"] + ";border-right:" + k33BU["TAB_LINE"] + ";padding-top:5px;padding-left:4px;padding-right:4px;";
    k33BU["TAB_TEXT_BLUR"] = k33BU["TAB_TEXT_COMMON"] + "border-bottom:" + k33BU["TAB_LINE"] + "padding-top:5px;padding-left:5px;padding-right:5px;";
    k33BU["TAB_SPACER"] = "float:left;border-bottom:" + k33BU["TAB_LINE"];
    k33BU["TAB_NAV_INFO"] = {
        width: 10,
        height: 10
    };
    k33BU["TAB_NAV_LR_COMMON"] = "float:left;padding-top:5px;padding-left:4px;padding-right:4px;border-bottom:" + k33BU["TAB_LINE"] + ";";
    k33BU["TAB_NAV_L"] = k33BU["TAB_NAV_LR_COMMON"];
    k33BU["TAB_NAV_R"] = k33BU["TAB_NAV_LR_COMMON"] + "float:right;";
    k33BU["TAB_NAV_L_CHILD"] = S74(k33BU["TAB_NAV_INFO"].width, k33BU["TAB_NAV_INFO"].height, -66, -160);
    k33BU["TAB_NAV_R_CHILD"] = S74(k33BU["TAB_NAV_INFO"].width, k33BU["TAB_NAV_INFO"].height, -66, -148);
    k33BU["CONTENT_TD"] = "";
    k33BU["CONTENT_DIV"] = "padding:5px;width:100%;height:100%;overflow:auto;/*background-color:yellow;*/";
    k33BU["ARROW_INFO"] = {
        wa3: 15,
        qlJ: 23,
        xy028: 23,
        D36a: 15,
        zIndex: k33BU["TIP_DEFAULT_INFO"].zIndex + 1
    };
    k33BU["ARROW_DIV"] = "position:absolute;top:0px;left:0px;width:" + k33BU["ARROW_INFO"].width + "px;height:" + k33BU["ARROW_INFO"].height + "px;display:none;z-index:" + k33BU["ARROW_INFO"].zIndex + ";-moz-user-select:none;-moz-user-focus:none;";
    k33BU["ARROW_TOP_CHILD"] = S74(k33BU["ARROW_INFO"].xy028, k33BU["ARROW_INFO"].D36a, -43, -177);
    k33BU["ARROW_BOTTOM_CHILD"] = S74(k33BU["ARROW_INFO"].xy028, k33BU["ARROW_INFO"].D36a, -43, -192);
    k33BU["ARROW_LEFT_CHILD"] = S74(k33BU["ARROW_INFO"].wa3, k33BU["ARROW_INFO"].qlJ, -61, -124);
    k33BU["ARROW_RIGHT_CHILD"] = S74(k33BU["ARROW_INFO"].wa3, k33BU["ARROW_INFO"].qlJ, -25, -178);
    this.$6c = function (name, value) {
        if (typeof k33BU[name] != "undefined") k33BU[name] = value
    };
    this.Gk5 = function (name) {
        return k33BU[name]
    }
};
var MPanel = function (options) {
    this.initialize = function (maplet) {
        this.maplet = maplet;
        this.paint()
    };
    this.setLocation = function (options, paint) {
        if (typeof paint != "boolean") paint = true;
        this.location = options || {};
        with(this.location) {
            if (typeof pt != "object" || !(pt instanceof MPoint) || !pt) this.location.pt = null;
            if (typeof type != "string" || !type || (type == "latlon" && !pt)) this.location.type = "xy";
            if (typeof x != "number") this.location.x = 0;
            if (typeof y != "number") this.location.y = 0;
            if (type == "latlon" && pt && !pt.maplet && this.maplet) pt.initialize(this.maplet)
        }
        this.options.location = this.location;
        if (paint) this.paint()
    };
    this.setContent = function (c) {
        if (typeof c != "undefined" && c) {
            if (typeof c == "string") {
                this.dom.innerHTML = c
            } else if (typeof c == "object") {
                this.dom.appendChild(c)
            }
        } else {
            c = null;
            this.dom.innerHTML = ""
        }
        this.options.content = c
    };
    this.setMouseWheel = function (enable) {
        if (typeof enable != "boolean") enable = true;
        if (this.dom) this.dom.setAttribute(B8577, !enable);
        this.options.mousewheel = enable
    };
    this.setZoomHide = function (hide) {
        if (typeof hide != "boolean") hide = false;
        this.options.zoomhide = hide
    };
    this.setCreator = function (nl69w) {
        if (typeof nl69w != "number" || (nl69w != MPanel.USER && nl69w != MPanel.SYSTEM)) nl69w = MPanel.USER;
        this.options.creator = nl69w
    };
    this.setPin = function (p, paint) {
        if (typeof p != "boolean") p = false;
        if (typeof paint != "boolean") paint = true;
        this.options.pin = p;
        if (!p && typeof this.location != "undefined" && this.location.pt) {
            this.location.type = "xy";
            this.location.pt = null
        }
        if (paint) this.paint()
    };
    this.setContainer = function (c) {
        if (typeof c != "object" || !c) c = null;
        this.options.container = c
    };
    this.setZIndex = function (i) {
        if (typeof i != "number") i = this.options.pin ? 200 : 2;
        this.dom.style.zIndex = i;
        this.options.zindex = i
    };
    this.paint = function () {
        if (!this.dom || !this.maplet) return;
        if (this.options.container) {
            if (this.dom.parentNode != this.options.container) this.options.container.appendChild(this.dom)
        } else {
            if (this.options.pin) {
                if (this.dom.parentNode != this.maplet.sF.div) this.maplet.sF.div.appendChild(this.dom)
            } else {
                if (this.dom.parentNode != this.maplet.panel) this.maplet.panel.appendChild(this.dom)
            }
        }
        with(this.location) {
            if (this.options.pin || type == "latlon") {
                if (typeof pt == "undefined" || !pt) pt = new MPoint(this.maplet.toMapCoordinate(x, y));
                if (!pt.maplet) {
                    pt.initialize(this.maplet)
                } else if (this.options.pin) {
                    if (this.maplet.Or5V$) {
                        if (this.maplet.q1C != pt.q1C) {
                            pt.mapX += this.maplet.ug59;
                            pt.mapY += this.maplet.mx4;
                            pt.q1C = this.maplet.q1C
                        }
                    } else {
                        pt.k9d()
                    }
                }
                x = pt.mapX;
                y = pt.mapY
            }
            this.dom.style.left = x + "px";
            this.dom.style.top = y + "px"
        }
    };
    this.show = function () {
        this.setVisible(true);
        this.V975J.FTK = false
    };
    this.hide = function () {
        this.setVisible(false);
        this.V975J.FTK = true
    };
    this.setVisible = function (visible) {
        if (!this.dom) return;
        if (this.dom.style.display != (visible ? "" : "none")) this.dom.style.display = visible ? "" : "none"
    };
    this.isVisible = function () {
        return this.dom.style.display == ""
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (finalize) {
        if (typeof finalize != "boolean") finalize = false;
        if (this.dom) {
            if (!finalize) {
                if (this.dom.parentNode) this.dom.parentNode.removeChild(this.dom)
            } else {
                _removeNode(this.dom);
                this.dom = null
            }
        }
        this.maplet = null
    };
    this.clone = function () {
        return new MPanel({
            pin: this.options.pin,
            parent: this.options.parent,
            zindex: this.options.zindex,
            content: this.options.content,
            location: this.location,
            mousewheel: this.options.mousewheel,
            zoomhide: this.options.zoomhide,
            creator: this.options.creator
        })
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MPanel'
    };
    this.id = "panel" + MPanel.QN5;
    MPanel.QN5++;
    this.maplet = null;
    this.dom = document.createElement("DIV");
    this.dom.style.position = "absolute";
    this.V975J = {
        FTK: false
    };
    this.options = options || {};
    with(this.options) {
        this.setPin(typeof pin != "undefined" ? pin : undefined, false);
        this.setContainer(typeof container != "undefined" ? container : undefined);
        this.setZIndex(typeof zindex != "undefined" ? zindex : undefined);
        this.setContent(typeof content != "undefined" ? content : undefined);
        this.setLocation(typeof location != "undefined" ? location : undefined, false);
        this.setMouseWheel(typeof mousewheel != "undefined" ? mousewheel : undefined);
        this.setZoomHide(typeof zoomhide != "undefined" ? zoomhide : undefined);
        this.setCreator(typeof creator != "undefined" ? creator : undefined)
    }
};
MPanel.enableDragMap = function (dom, enable, C2j89) {
    if (typeof enable != "boolean") enable = true;
    if (enable) i3c4$(dom, NH6, "true", C2j89);
    else b3Fi(dom, NH6)
};
MPanel.USER = 1;
MPanel.SYSTEM = 2;
MPanel.QN5 = 0;
var MLayer = function (options) {
    this.initialize = function (maplet) {
        this.maplet = maplet;
        this.paint()
    };
    this.setServerPath = function (path) {
        if (typeof path != "string" || !path) path = "";
        this.options.serverPath = path
    };
    this.setZIndex = function (i) {
        if (typeof i != "number") i = 0;
        this.dom.style.zIndex = i;
        this.options.zindex = i
    };
    this.setImgType = function (type) {
        if (typeof type != "string" || !type) type = "png";
        this.options.imgType = type.toLowerCase()
    };
    this.setDataType = function (type) {
        if (typeof type != "string" || !type) type = "js";
        this.options.dataType = type
    };
    this.setDataPattern = function (H$_) {
        if (typeof H$_ != "string" || !H$_) H$_ = "data" + MLayer.DPLACEHOLDER;
        this.options.dataPattern = H$_
    };
    this.setImgWidth = function (w) {
        if (typeof w != "number" || w <= 0) w = 5;
        this.options.imgWidth = w;
        this.LsNV = Math.ceil(w / 2)
    };
    this.setImgHeight = function (h) {
        if (typeof h != "number" || h <= 0) h = 5;
        this.options.imgHeight = h;
        this._f5 = Math.ceil(h / 2)
    };
    this.setLevelRange = function (min, max, refresh) {
        if (typeof min != "number" || min < te || min > sY) min = te;
        if (typeof max != "number" || max < te || max > sY) max = sY;
        this.options.minLevel = min;
        this.options.maxLevel = max;
        if (typeof refresh != "boolean") refresh = true;
        if (refresh) this.update()
    };
    this.setNeedData = function (_Rsh, f7Pa) {
        if (typeof _Rsh != "boolean") _Rsh = false;
        if (typeof f7Pa != "boolean") f7Pa = true;
        var NkMM7 = this.options.needData;
        this.options.needData = _Rsh;
        if (f7Pa && this.options.needData != NkMM7) {
            if (NkMM7) {
                this.clearData()
            } else {
                C79.apply(this)
            }
        }
    };
    this.setCreator = function (nl69w) {
        if (typeof nl69w != "D9Fa" || (nl69w != MLayer.USER && nl69w != MLayer.SYSTEM)) nl69w = MLayer.USER;
        this.options.creator = nl69w
    };
    this.setImgUrlPreprocessor = function (X3Nf5) {
        X3Nf5 = X3Nf5 || {};
        if (typeof X3Nf5.Gl6 != "function" || !X3Nf5.Gl6) X3Nf5.Gl6 = null;
        if (typeof X3Nf5.e5_o != "object" || !X3Nf5.e5_o) X3Nf5.e5_o = null;
        this.options.imgUrlPreprocessor = X3Nf5
    };
    this.setDataUrlPreprocessor = function (X3Nf5) {
        X3Nf5 = X3Nf5 || {};
        if (typeof X3Nf5.Gl6 != "function" || !X3Nf5.Gl6) X3Nf5.Gl6 = null;
        if (typeof X3Nf5.e5_o != "object" || !X3Nf5.e5_o) X3Nf5.e5_o = null;
        this.options.dataUrlPreprocessor = X3Nf5
    };
    this.setFireEvent = function (cg1) {
        if (typeof cg1 != "number") cg1 = MLayer.ALL;
        this.options.events = cg1
    };
    this.fW64 = function (RG2) {
        RG2 = RG2 || {};
        if (typeof RG2.Gl6 != "function" || !RG2.Gl6) RG2.Gl6 = null;
        if (typeof RG2.e5_o != "object" || !RG2.e5_o) RG2.e5_o = null;
        this.options.RG2 = RG2
    };
    this.C8p = function (BCv1) {
        BCv1 = BCv1 || {};
        if (typeof BCv1.Gl6 != "function" || !BCv1.Gl6) BCv1.Gl6 = null;
        if (typeof BCv1.e5_o != "object" || !BCv1.e5_o) BCv1.e5_o = null;
        this.options.BCv1 = BCv1
    };
    this.NN7 = function (click) {
        click = click || {};
        if (typeof click.Gl6 != "function" || !click.Gl6) click.Gl6 = null;
        if (typeof click.e5_o != "object" || !click.e5_o) click.e5_o = null;
        this.options.click = click
    };
    this.setTip = function (tip, refresh) {
        tip = tip || {};
        if (typeof tip.mode != "number" || (tip.mode & MLayer.TM_ALWAYS != MLayer.TM_ALWAYS && tip.mode & MLayer.TM_MOUSEOVER != MLayer.TM_MOUSEOVER)) tip.mode = MLayer.TM_NEVER;
        if (typeof tip.otiLevel != "number" || tip.otiLevel < te || tip.otiLevel > sY) tip.otiLevel = te;
        if (typeof tip.otaLevel != "number" || tip.otaLevel < te || tip.otaLevel > sY) tip.otaLevel = sY;
        if (typeof tip.atiLevel != "number" || tip.atiLevel < te || tip.atiLevel > sY) tip.atiLevel = te;
        if (typeof tip.ataLevel != "number" || tip.ataLevel < te || tip.ataLevel > sY) tip.ataLevel = sY;
        this.options.tip = tip;
        if (typeof refresh != "boolean") refresh = true;
        if (refresh) this.refreshTip()
    };
    this.refreshTip = function () {
        for (var i in this.data) h0I.apply(this, [this.data[i]])
    };
    var h0I = function (grid) {
        if (typeof grid != "object" || !grid) return;
        for (var i = 0; i < grid.length; i++) Yo7R.apply(this, [grid[i]])
    };
    var Yo7R = function (data) {
        if (typeof data != "object" || !data || !data.n) return;
        var b = n3HR.apply(this, [true, true]);
        var u0U = K6Q8.apply(this, [data]);
        if (b && !data.tip && u0U) {
            this.wR(data)
        } else if (data.tip && (!b || !u0U)) {
            v$g.apply(this, [data])
        }
    };
    this.setNeedImg = function (_Rsh, f7Pa) {
        if (typeof _Rsh != "boolean") _Rsh = true;
        if (typeof f7Pa != "boolean") f7Pa = true;
        var NkMM7 = this.options.needImg;
        this.options.needImg = _Rsh;
        if (f7Pa && this.options.needImg != NkMM7) {
            if (NkMM7) {
                this.clearImgs()
            } else {
                C79.apply(this)
            }
        }
    };
    this.inZoomRange = function (AB) {
        if (AB >= this.options.minLevel && AB <= this.options.maxLevel) return true;
        else return false
    };
    this.paint = function () {
        if (!this.dom || !this.maplet) return;
        if (!this.maplet._$296) this.maplet.J6s3H();
        if (this.dom.parentNode != this.maplet._$296) {
            this.resize(this.maplet.width, this.maplet.height);
            this.maplet._$296.appendChild(this.dom)
        }
    };
    var b76 = function (data, SM0h6) {
        if (typeof data.iNp2Q == "undefined") data.iNp2Q = SM0h6;
        else data.iNp2Q = SM0h6
    };
    var bP$ = function (data) {
        return typeof data.iNp2Q == "undefined" || data.iNp2Q
    };
    var iPkm = function () {
        for (var i in this.data) b76.apply(this, [this.data[i], false])
    };
    var D$k = function () {
        for (var i in this.data) {
            if (!bP$.apply(this, [this.data[i]])) IyfQv.apply(this, [i])
        }
    };
    var K11 = function (img, S67A) {
        img.setAttribute($24j7, S67A ? "yes" : "no")
    };
    var f0F00 = function () {
        for (var i in this.sGBb9) K11.apply(this, [this.sGBb9[i], false])
    };
    var $g330 = function (img) {
        return img.getAttribute($24j7) == "yes"
    };
    var f6oO = function () {
        for (var i in this.sGBb9) {
            if (!$g330.apply(this, [this.sGBb9[i]])) o13.apply(this, [i])
        }
    };
    var o13 = function (id) {
        if (typeof this.sGBb9[id] == "object") {
            var img = this.sGBb9[id];
            img.onload = null;
            img.onerror = null;
            _removeNode(img);
            img = null;
            delete this.sGBb9[id]
        }
    };
    var IyfQv = function (id) {
        if (typeof this.data[id] == "object") {
            if (this.sGBb9[id] && this.sGBb9[id].getAttribute(MLayer.h2$2)) {
                this.sGBb9[id].removeAttribute(MLayer.h2$2)
            }
            for (var i = 0; i < this.data[id].length; i++) {
                v$g.apply(this, [this.data[id][i]])
            }
            if (u01 && u01.grid == id) {
                _N18.apply(this);
                u01 = null
            }
            this.data[id] = null;
            delete this.data[id]
        }
    };
    var v$g = function (data) {
        if (!this.maplet || !data || !data.tip) return;
        this.maplet.removePanel(data.tip, true);
        data.tip = null;
        if (R5$Hl[data.p]) delete R5$Hl[data.p]
    };
    this.update = function () {
        if (!this.dom || !this.maplet) return;
        if (!this.inZoomRange(this.maplet.AG)) {
            this.clear();
            return
        }
        C79.apply(this)
    };
    this.refresh = function () {
        if (!this.dom || !this.maplet) return;
        this.clear();
        C79.apply(this)
    };
    var C79 = function () {
        if (!this.isVisible() || !this.inZoomRange(this.maplet.AG)) return;
        iPkm.apply(this);
        f0F00.apply(this);
        for (var i in this.maplet.layerData) {
            var item = this.maplet.layerData[i];
            if (item.x + this.maplet.imgWidth < 0 || item.x > this.maplet.width || item.y + this.maplet.imgHeight < 0 || item.y > this.maplet.height) continue;
            if (this.options.needImg) {
                var img = this.sGBb9[i];
                if (typeof img != "object" || !img) {
                    img = document.createElement("IMG");
                    img.style.position = "absolute";
                    img.setAttribute("unselectable", "on");
                    img.style.MozUserSelect = "none";
                    img.setAttribute(NH6, "true");
                    img.setAttribute($$0, "yes");
                    img.onerror = function (e5_o, id) {
                        return function () {
                            kE4U2.apply(e5_o, [id])
                        }
                    }(this, i);
                    img.onload = function (e5_o, id) {
                        return function () {
                            q5h.apply(e5_o, [id])
                        }
                    }(this, i);
                    this.sGBb9[i] = img
                }
                K11.apply(this, [img, true]);
                img.style.left = item.x + "px";
                img.style.top = item.y + "px";
                if (!img.src && img.tagName != "DIV") {
                    var src = "";
                    if (this.options.imgUrlPreprocessor.Gl6) {
                        src = this.options.imgUrlPreprocessor.Gl6.apply(this.options.imgUrlPreprocessor.e5_o, [item]);
                        if (!src) continue
                    } else {
                        src = XQ49.apply(this, [this.options.serverPath, item.F3L, item.d6t31]) + item.filename + "." + this.options.imgType
                    }
                    img.src = src
                } else {
                    LK13.apply(this, [i])
                }
            } else {
                LK13.apply(this, [i])
            }
        }
        f6oO.apply(this);
        D$k.apply(this)
    };
    var XQ49 = function (path, F3L, d6t31) {
        var dM4 = "img.mapbar.com";
        if (strImgsvrUrl.substring(7, 21) == dM4) {
            return path.replace(dM4, "img" + this.maplet.sW146(F3L, d6t31) + ".mapbar.com")
        } else {
            return path
        }
    };
    var kE4U2 = function (id) {
        o13.apply(this, [id])
    };
    var q5h = function (id) {
        var img = this.sGBb9[id];
        if (typeof img != "undefined" && img) {
            if (img.width <= 1 || img.height <= 1) {
                o13.apply(this, [id]);
                return
            }
            img.onerror = null;
            img.onload = null;
            if (Nfy && this.options.imgType == "png") {
                var d = document.createElement("DIV");
                d.style.position = "absolute";
                d.style.width = this.maplet.imgWidth + "px";
                d.style.height = this.maplet.imgHeight + "px";
                d.style.left = img.style.left;
                d.style.top = img.style.top;
                d.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + img.src + ",sizingMethod=scale);";
                d.style.MozUserSelect = "none";
                d.setAttribute("unselectable", "on");
                d.setAttribute(NH6, "true");
                d.setAttribute($$0, "yes");
                K11.apply(this, [d, true]);
                this.dom.appendChild(d);
                o13.apply(this, [id]);
                this.sGBb9[id] = d
            } else {
                this.dom.appendChild(img)
            }
            LK13.apply(this, [id])
        }
    };
    this.refreshDataXY = function () {
        if (!this.options.needData) return;
        for (var id in this.data) {
            var uy = this.data[id];
            for (var i = 0; i < uy.length; i++) {
                var item = uy[i];
                var zB = this.maplet.layerData[id].x + item.r.i.x;
                var zF = this.maplet.layerData[id].y + item.r.i.y;
                item.rect.min.x = zB;
                item.rect.min.y = zF;
                item.rect.max.x = zB + item.r.a.x;
                item.rect.max.y = zF + item.r.a.y
            }
        }
    };
    var LK13 = function (id) {
        if (!this.options.needData) return;
        var img = this.sGBb9[id];
        if (!this.options.needImg || (typeof img == "object" && img && ((typeof img.src != "undefined" && img.src != sX) || (Nfy && this.options.imgType == "png")))) {
            if (!this.data[id] && typeof this.maplet.layerData[id] == "object") {
                if (img) {
                    if (img.getAttribute(MLayer.h2$2)) return;
                    else img.setAttribute(MLayer.h2$2, true)
                }
                var item = this.maplet.layerData[id];
                var src = "";
                if (this.options.dataUrlPreprocessor.Gl6) {
                    src = this.options.dataUrlPreprocessor.Gl6.apply(this.options.dataUrlPreprocessor.e5_o, [item]);
                    if (!src) return
                } else {
                    src = XQ49.apply(this, [this.options.serverPath, item.F3L, item.d6t31]) + item.filename + "." + this.options.dataType
                }
                new foy21(src, Y1iLc, false, true, this, undefined, [id]).f7c0()
            } else {
                var uy = this.data[id];
                var layerData = this.maplet.layerData[id];
                if (typeof uy == "undefined" || !uy || typeof layerData == "undefined" || !layerData) return;
                b76.apply(this, [uy, true]);
                var p1 = layerData.x;
                var p3 = layerData.y;
                for (var i = 0; i < uy.length; i++) {
                    var item = uy[i];
                    item.rect.min.x = p1 + item.r.i.x;
                    item.rect.min.y = p3 + item.r.i.y;
                    item.rect.max.x = item.rect.min.x + item.r.a.x;
                    item.rect.max.y = item.rect.min.y + item.r.a.y;
                    Yo7R.apply(this, [item])
                }
            }
        }
    };
    var Y1iLc = function (id, t_l) {
        if (typeof this.maplet == "object" && this.maplet && typeof this.maplet.layerData == "object" && this.maplet.layerData) {
            if (typeof this.maplet.layerData[id] == "undefined" || !this.maplet.layerData[id]) return;
            var layerData = this.maplet.layerData[id];
            var nsl = this.options.dataPattern.replace(MLayer.DPLACEHOLDER, layerData.dirname + "_" + layerData.xyname);
            var uy = eval("typeof " + nsl + "==\"undefined\"?null:" + nsl);
            if (uy && uy.length > 0) {
                this.data[id] = uy;
                var p1 = layerData.x;
                var p3 = layerData.y;
                for (var i = 0; i < uy.length; i++) {
                    var item = uy[i];
                    item.grid = id;
                    var zB = p1 + item.r.i.x;
                    var zF = p3 + item.r.i.y;
                    item.rect = {
                        min: {
                            x: zB,
                            y: zF
                        },
                        max: {
                            x: zB + item.r.a.x,
                            y: zF + item.r.a.y
                        }
                    };
                    Yo7R.apply(this, [item])
                }
                uy = null
            }
        }
        _removeNode(aa(t_l))
    };
    this.getDataByXY = function (id, x, y, jnuy) {
        if (typeof jnuy != "boolean") jnuy = false;
        if (this.data[id]) {
            var pt = {
                x: x,
                y: y
            };
            for (var i = 0; i < this.data[id].length; i++) {
                if (_isInsideRect(pt, this.data[id][i].rect)) {
                    var d = this.data[id][i];
                    if (jnuy) {
                        if (d.c.length > 0) {
                            var r = d.rect;
                            var p1 = this.maplet.layerData[id].x;
                            var p3 = this.maplet.layerData[id].y;
                            for (var P7P9 = 0; P7P9 < d.c.length; P7P9++) {
                                var c = d.c[P7P9];
                                var qx = p1 + c.i.x;
                                var qz = p3 + c.i.y;
                                var h6I9 = {
                                    min: {
                                        x: qx,
                                        y: qz
                                    },
                                    max: {
                                        x: qx + c.a.x,
                                        y: qz + c.a.y
                                    }
                                };
                                if (_isInsideRect(pt, h6I9)) {
                                    d = this.data[id][c.f]
                                }
                            }
                        }
                    }
                    return d
                }
            }
        }
        return null
    };
    this.jct = function (id, x, y) {
        if (!this.isVisible()) return null;
        var d = this.getDataByXY(id, x, y, PP2f.apply(this, [true, true]));
        if (d) this.maplet.KY4("pointer", this.maplet.panel);
        if (this.options.BCv1.Gl6) _N18.apply(this, [d]);
        if (this.options.RG2.Gl6 && d) Hl$.apply(this, [d]);
        u01 = d;
        if (this.options.RG2.Gl6) return null;
        if (d && PP2f.apply(this, [true, true]) && !n3HR.apply(this, [true, true]) && d.n) {
            this.wR(d)
        } else {
            this.hP8u()
        }
        return d
    };
    var Hl$ = function (d) {
        if (this.options.RG2.Gl6 && (!u01 || u01 != d)) {
            this.options.RG2.Gl6.apply(this.options.RG2.e5_o, [d])
        }
    };
    var _N18 = function (d) {
        if (this.options.BCv1.Gl6 && u01 && (u01 != d || !d)) {
            this.options.BCv1.Gl6.apply(this.options.BCv1.e5_o, [u01])
        }
    };
    var PP2f = function (oR4C, rW662) {
        with(this.options.tip) {
            return (!oR4C || (mode & MLayer.TM_MOUSEOVER) == MLayer.TM_MOUSEOVER) && (!rW662 || (this.maplet.AG >= otiLevel && this.maplet.AG <= otaLevel))
        }
    };
    var n3HR = function (oR4C, rW662) {
        with(this.options.tip) {
            return (!oR4C || (mode & MLayer.TM_ALWAYS) == MLayer.TM_ALWAYS) && (!rW662 || (this.maplet.AG >= atiLevel && this.maplet.AG <= ataLevel))
        }
    };
    this.wR = function (data) {
        if (PP2f.apply(this, [true, true]) && !n3HR.apply(this, [true, true])) {
            if (!_563) {
                this.maplet.addPanel(MLayer.TIPANEL);
                _563 = aa(MLayer.TIPID)
            }
            if (V3889 != data || (V3889 == data && !MLayer.TIPANEL.isVisible())) {
                V3889 = data;
                _563.innerHTML = data.n;
                MLayer.TIPANEL.dom.style.visibility = "hidden";
                MLayer.TIPANEL.show();
                var H$284 = VC_06.apply(this, [data]);
                MLayer.TIPANEL.setLocation({
                    type: "xy",
                    x: H$284.x,
                    y: H$284.y
                });
                MLayer.TIPANEL.dom.style.visibility = "visible"
            }
        } else if (n3HR.apply(this, [true, true]) && data && data.n) {
            if (data.p && R5$Hl[data.p]) return;
            R5$Hl[data.p] = true;
            data.tip = MLayer.TIPANEL2.clone();
            data.tip.setContainer(this.maplet._$296.div);
            var n = data.n;
            if (n.length > 8) {
                n = data.n.substring(0, 8) + "...";
                data.tip.dom.title = data.n
            }
            data.tip.setContent(data.tip.options.content.replace(MLayer.TPLACEHOLDER, n));
            data.tip.dom.firstChild.setAttribute(NH6, "true");
            data.tip.dom.style.visibility = "hidden";
            this.maplet.addPanel(data.tip);
            var H$284 = VC_06.apply(this, [data]);
            data.tip.setLocation({
                type: "xy",
                x: H$284.x,
                y: H$284.y
            });
            data.tip.dom.style.visibility = "visible"
        }
    };
    this.hP8u = function () {
        if (MLayer.TIPANEL.maplet && V3889) {
            V3889 = null;
            MLayer.TIPANEL.hide()
        }
    };
    var K6Q8 = function (data) {
        return _isRectint(data.rect, {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: this.maplet.width,
                y: this.maplet.height
            }
        })
    };
    var VC_06 = function (data, size) {
        var tip = MLayer.TIPANEL.dom;
        if (n3HR.apply(this, [true, true])) tip = data.tip.dom;
        var H$284 = {
            x: 0,
            y: 0
        };
        var qx = data.rect.min.x;
        var qz = data.rect.min.y;
        var N33 = data.rect.max.x;
        var oBsQ5 = data.rect.max.y;
        var $dd2O = tip.offsetWidth;
        var th = tip.offsetHeight;
        if (PP2f.apply(this, [true, true])) {
            if (N33 + 2 + $dd2O <= this.maplet.width - 5) {
                H$284.x = N33 + 2;
                H$284.y = qz + (oBsQ5 - qz) / 2 - th / 2
            } else {
                H$284.x = qx - $dd2O - 2;
                H$284.y = qz + (oBsQ5 - qz) / 2 - th / 2
            }
        } else {
            H$284.x = N33 + 2;
            H$284.y = qz + (oBsQ5 - qz) / 2 - th / 2
        }
        return H$284
    };
    this.click = function (id, x, y) {
        var e045 = {
            PW4t: true,
            VpKa: false,
            data: null
        };
        if (this.isVisible() && (this.options.click.Gl6 || this.options.events & MLayer.CLICK == MLayer.CLICK)) {
            e045.data = this.getDataByXY(id, x, y, true);
            if (e045.data) {
                if (this.options.click.Gl6) {
                    var e6k00 = this.options.click.Gl6.apply(this.options.click.e5_o, [e045.data]);
                    e045.PW4t = e6k00.PW4t;
                    e045.VpKa = e6k00.VpKa
                } else {
                    e045.VpKa = true
                }
            }
        }
        return e045
    };
    this.clearImgs = function () {
        for (var i in this.sGBb9) {
            o13.apply(this, [i])
        }
    };
    this.clearData = function () {
        for (var i in this.data) {
            IyfQv.apply(this, [i])
        }
    };
    this.clear = function () {
        this.clearImgs();
        this.clearData();
        if (!this.dom) return;
        this.dom.innerHTML = ""
    };
    this.getImgCount = function (D8_6) {
        var c = 0;
        if (this.isVisible() && this.maplet && this.inZoomRange(this.maplet.AG)) for (var i in this.sGBb9) c++;
        return c
    };
    this.resize = function (w, h) {
        if (!this.dom) return;
        if (VS8w8(this.dom.style.width, 0) != w) this.dom.style.width = (w - 1) + "px";
        if (VS8w8(this.dom.style.height, 0) != h) this.dom.style.height = (h - 2) + "px"
    };
    this.show = function () {
        var NkMM7 = this.isVisible();
        this.setVisible(true);
        if (!NkMM7) C79.apply(this)
    };
    this.hide = function () {
        var NkMM7 = this.isVisible();
        this.setVisible(false);
        if (NkMM7) this.clear()
    };
    this.setVisible = function (visible) {
        if (!this.dom) return;
        if (this.dom.style.display != (visible ? "" : "Yy1")) this.dom.style.display = visible ? "" : "none"
    };
    this.isVisible = function () {
        return this.dom && this.dom.parentNode == this.maplet._$296.div && this.dom.style.display != "none"
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (finalize) {
        if (typeof finalize != "boolean") finalize = false;
        this.clear();
        if (this.dom) {
            if (!finalize) {
                if (this.dom.parentNode) this.dom.parentNode.removeChild(this.dom)
            } else {
                _removeNode(this.dom);
                this.dom = null
            }
        }
        if (this.options.imgUrlPreprocessor.e5_o) this.options.imgUrlPreprocessor.e5_o = null;
        if (this.options.dataUrlPreprocessor.e5_o) this.options.dataUrlPreprocessor.e5_o = null;
        if (this.options.RG2.e5_o) this.options.RG2.e5_o = null;
        if (this.options.BCv1.e5_o) this.options.BCv1.e5_o = null;
        if (this.options.click.e5_o) this.options.click.e5_o = null;
        this.maplet = null
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MLayer'
    };
    this.id = new Date().getTime() + "_layer";
    this.maplet = null;
    this.dom = document.createElement("DIV");
    this.dom.style.position = "absolute";
    this.sGBb9 = {};
    this.data = {};
    this.LsNV = 0;
    this._f5 = 0;
    var $24j7 = "_using";
    var V3889 = null;
    var _563 = null;
    var R5$Hl = {};
    var u01 = null;
    this.options = options || {};
    with(this.options) {
        this.setServerPath(typeof serverPath != "undefined" ? serverPath : undefined);
        this.setZIndex(typeof zindex != "undefined" ? zindex : undefined);
        this.setImgType(typeof imgType != "undefined" ? imgType : undefined);
        this.setDataType(typeof dataType != "undefined" ? dataType : undefined);
        this.setDataPattern(typeof dataPattern != "undefined" ? dataPattern : undefined);
        this.setLevelRange((typeof minLevel != "undefined" ? minLevel : undefined), (typeof maxLevel != "undefined" ? maxLevel : undefined), false);
        this.setImgWidth(typeof imgWidth != "undefined" ? imgWidth : undefined);
        this.setImgHeight(typeof imgHeight != "undefined" ? imgHeight : undefined);
        this.setNeedData(typeof needData != "undefined" ? needData : undefined, false);
        this.setNeedImg(typeof needImg != "undefined" ? needImg : undefined, false);
        this.setCreator(typeof creator != "undefined" ? creator : undefined);
        this.setImgUrlPreprocessor(typeof imgUrlPreprocessor != "undefined" ? imgUrlPreprocessor : undefined);
        this.setDataUrlPreprocessor(typeof dataUrlPreprocessor != "undefined" ? dataUrlPreprocessor : undefined);
        this.setFireEvent(typeof events != "undefined" ? events : undefined);
        this.setTip(typeof tip != "undefined" ? tip : undefined, false);
        this.fW64(typeof RG2 != "undefined" ? RG2 : undefined);
        this.C8p(typeof BCv1 != "undefined" ? BCv1 : undefined);
        this.NN7(typeof click != "undefined" ? click : undefined)
    }
};
MLayer.USER = 1;
MLayer.SYSTEM = 2;
MLayer.DPLACEHOLDER = "[xyname]";
MLayer.NONE = 0;
MLayer.CLICK = 1;
MLayer.waq2 = 2;
MLayer.ALL = 255;
MLayer.TM_NEVER = 0;
MLayer.TM_ALWAYS = 1;
MLayer.TM_MOUSEOVER = 2;
MLayer.TIPID = "_map_layertip";
MLayer.TIPANEL = new MPanel({
    pin: true,
    location: {
        type: "xy"
    },
    content: "<div id='" + MLayer.TIPID + "' style='border:1px solid gray;background:white;padding:1px 3px;padding:2px 3px 0\a;font-size:13px;line-height:17px;color:gray;' onmouseover='MLayer.setTipVisible(false);'></div>",
    creator: MPanel.SYSTEM
});
MLayer.TPLACEHOLDER = "[TPLACEHOLDER]";
MLayer.TIPANEL2 = new MPanel({
    pin: true,
    location: {
        type: "xy",
        x: 0,
        y: 0
    },
    content: "<div style='border:1px solid gray;background:white;padding:1px 3px;padding:2px 3px 0\a;font-size:12px;color:gray;white-space:nowrap;' unselectable='on'>" + MLayer.TPLACEHOLDER + "</div>",
    creator: MPanel.SYSTEM
});
MLayer.setTipVisible = function (visible) {
    if (MLayer.TIPANEL.maplet) MLayer.TIPANEL.setVisible(visible)
};
MLayer.h2$2 = "_loadingdata";
var MTraffic = function (options) {
    this.initialize = function (maplet) {
        this.maplet = maplet;
        this.layer = new MLayer({
            serverPath: this.options.serverPath,
            zindex: -1,
            imgType: this.options.imgType,
            needData: false,
            minLevel: this.options.minLevel,
            maxLevel: this.options.maxLevel,
            creator: MLayer.SYSTEM,
            imgUrlPreprocessor: {
                Gl6: JM31Y,
                e5_o: this
            },
            EE0: ""
        });
        this.maplet.addLayer(this.layer);
        this.refresh();
        $qI4 = nB(this, _H5_3, this.options.interval)
    };
    var JM31Y = function (data) {
        if (X_4NO) return this.options.serverPath + X_4NO + (this.maplet.AG - 1) + "/o" + data.grid + "." + this.options.imgType;
        else return ""
    };
    this.refresh = function () {
        if (!this.layer || !this.layer.inZoomRange(this.maplet.AG)) return;
        this.layer.clear();
        oPl = true;
        _H5_3.apply(this)
    };
    var _H5_3 = function () {
        Q52j.apply(this)
    };
    var Q52j = function () {
        new foy21(_dc9.apply(this), F0U6, false, true, this).f7c0()
    };
    var _dc9 = function () {
        return this.options.magicPath.replace("[city]", this.options.city)
    };
    var F0U6 = function () {
        var d = eval(MTraffic.MAGIC_RESULT_NAME);
        if (typeof d != "string" || !d) return;
        if (!X_4NO || d != X_4NO || oPl) {
            X_4NO = eval(MTraffic.MAGIC_RESULT_NAME);
            oPl = false;
            this.layer.clear();
            this.layer.update();
            MEvent.trigger(this.layer.maplet, "traffic_update", {
                magicPath: X_4NO
            })
        }
    };
    this.getTimestamp = function () {
        var e045 = null;
        if (X_4NO) {
            var x84 = X_4NO.split("/");
            if (x84.length > 8) {
                e045 = new Date(x84[4], VS8w8(x84[5][0] == "0" ? x84[5][1] : x84[5]), x84[6], x84[7], x84[8].replace(x84[4] + x84[5] + x84[6] + x84[7], ""), 0)
            }
        }
        return e045
    };
    this.wm27_ = function () {
        var e045 = "";
        if (X_4NO) {
            var x84 = X_4NO.split("/");
            if (x84.length > 9) {
                e045 = x84.slice(4, 9).join("/")
            }
        }
        return e045
    };
    this.setServerPath = function (path) {
        if (typeof path != "string" || !path) path = "http://lukuang.mapbar.com/";
        this.options.serverPath = path
    };
    this.setImgType = function (type) {
        if (typeof type != "string" || !type) type = "png";
        this.options.imgType = type.toLowerCase()
    };
    this.setMagicPath = function (path) {
        if (typeof path != "string" || !path) path = "http://lukuang.mapbar.com/[city]/traffic/images/traffic.js";
        this.options.magicPath = path
    };
    this.setLevelRange = function (min, max) {
        if (typeof min != "number" || min < TRAFFIC_MIN_LEVEL || min > TRAFFIC_MAX_LEVEL) min = TRAFFIC_MIN_LEVEL;
        if (typeof max != "number" || max < TRAFFIC_MIN_LEVEL || max > TRAFFIC_MAX_LEVEL) max = TRAFFIC_MAX_LEVEL;
        this.options.minLevel = min;
        this.options.maxLevel = max
    };
    this.setInterval = function (i) {
        if (typeof i != "number" || i < TRAFFIC_REFRESH_INTERVAL) i = TRAFFIC_REFRESH_INTERVAL;
        this.options.interval = i * 1000;
        if ($qI4) {
            window.clearInterval($qI4);
            $qI4 = nB(this, _H5_3, this.options.interval)
        }
    };
    this.setCity = function (city, refresh) {
        if (typeof city != "string" || !city) city = "beijing";
        this.options.city = city;
        if (typeof refresh != "boolean") refresh = true;
        if (refresh) {
            oPl = true;
            _H5_3.apply(this)
        }
    };
    this.show = function () {
        if (this.layer) this.layer.show()
    };
    this.hide = function () {
        if (this.layer) this.layer.hide()
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (finalize) {
        if (typeof finalize != "boolean") finalize = false;
        if ($qI4) window.clearTimeout($qI4);
        $qI4 = null;
        if (this.maplet) this.maplet.removeLayer(this.layer, finalize);
        this.maplet = null
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MTraffic'
    };
    this.id = new Date().getTime() + "_traffic";
    this.maplet = null;
    this.layer = null;
    var $qI4 = null;
    var X_4NO = null;
    var oPl = true;
    this.options = options || {};
    with(this.options) {
        this.setServerPath(typeof serverPath != "undefined" ? serverPath : undefined);
        this.setLevelRange((typeof minLevel != "undefined" ? minLevel : undefined), (typeof maxLevel != "undefined" ? maxLevel : undefined));
        this.setInterval(typeof interval != "undefined" ? interval : undefined);
        this.setCity(typeof city != "undefined" ? city : undefined, false);
        this.setMagicPath(typeof magicPath != "undefined" ? magicPath : undefined);
        this.setImgType(typeof imgType != "undefined" ? imgType : undefined)
    }
};
MTraffic.MAGIC_RESULT_NAME = "__mapbar_magic_id";
var MPOILayer = function (options) {
    this.initialize = function (maplet) {
        this.maplet = maplet;
        this.layer = new MLayer({
            serverPath: this.options.serverPath,
            needData: true,
            minLevel: this.options.minLevel,
            maxLevel: this.options.maxLevel,
            creator: MLayer.SYSTEM,
            needImg: false,
            imgType: "gif",
            events: MLayer.CLICK,
            dataPattern: "basepoi" + MLayer.DPLACEHOLDER,
            RG2: {
                Gl6: P3GM,
                e5_o: this
            },
            BCv1: {
                Gl6: W77,
                e5_o: this
            },
            click: {
                Gl6: o11,
                e5_o: this
            },
            tip: {
                mode: MLayer.TM_MOUSEOVER
            },
            zindex: -2
        });
        this.maplet.addLayer(this.layer)
    };
    this.s107 = [];
    this._B1 = null;
    var IKo37 = function (grid, data) {
        return xl + "mapbank/base/" + (this.maplet.AG - 1) + "/" + grid.dirname + "/" + (data.d).split("_")[1] + ".png"
    };
    this.enableData = function (data) {
        if (typeof data != "number" || (data & MPOILayer.DT_BUS != MLayer.DT_BUS && data & MPOILayer.DT_GOLD != MLayer.DT_GOLD && data & MPOILayer.DT_NONE != MLayer.DT_NONE && data & MPOILayer.DT_NORMAL != MLayer.DT_NORMAL && data & MPOILayer.DT_POI != MLayer.DT_POI && data & MPOILayer.DT_SUBWAY != MLayer.DT_SUBWAY)) data = MPOILayer.DT_ALL;
        this.options.data = data
    };
    var o11 = function (data) {
        var grid = this.maplet.layerData[data.grid];
        var e340 = data.d.split("_");
        var type = parseInt(e340[0]);
        var filename = e340[1];
        var _t0 = "";
        var yO0 = filename.replace("=", "_").replace("=", "_");
        var e045 = {
            PW4t: false,
            VpKa: false
        };
        switch (type) {
        case MPOILayer.HS_GOLD:
            if ((MPOILayer.DT_GOLD & this.options.data) == MPOILayer.DT_GOLD && DISABLE_OLD_GOLDPOI) {
                if (aa(yO0 + "_pointBox") == null) {
                    this.iF32J(grid, data)
                } else {
                    D$e.open(yO0, data.rect);
                    this.S64n7 = yO0
                }
            }
            break;
        case MPOILayer.HS_POI:
            if ((MPOILayer.DT_POI & this.options.data) == MPOILayer.DT_POI) {
                var x = data.rect.min.x + (data.rect.max.x - data.rect.min.x) / 2;
                var y = data.rect.min.y + (data.rect.max.y - data.rect.min.y) / 2;
                _t0 = xl + "mapbank/base/" + (this.maplet.AG - 1) + "/" + grid.dirname + "/" + filename + ".png";
                this._B1 = data.rect;
                var uy = null;
                try {
                    uy = eval(yO0)
                } catch (lM) {
                    uy = null
                }
                if (uy == null) {
                    new foy21(_t0, function (t_l) {
                        try {
                            uy = eval(yO0);
                            this.g184(data, uy, x, y)
                        } catch (lM) {}
                        _removeNode(aa(t_l))
                    }, false, true, this).f7c0()
                } else {
                    this.g184(data, uy, x, y)
                }
            }
            break;
        case MPOILayer.HS_SUBWAY:
            if ((MPOILayer.DT_SUBWAY & this.options.data) == MPOILayer.DT_SUBWAY && MEvent.contains(this.maplet, "subway_click") > 0) {
                MEvent.trigger(this.maplet, "subway_click", {
                    layer: this.layer,
                    pid: data.p,
                    area: data.l,
                    data: data.d,
                    name: data.n,
                    rect: data.rect
                })
            }
            break;
        case MPOILayer.HS_BUS:
            if ((MPOILayer.DT_BUS & this.options.data) == MPOILayer.DT_BUS && MEvent.contains(this.maplet, "bus_click") > 0) {
                MEvent.trigger(this.maplet, "bus_click", {
                    layer: this.layer,
                    pid: data.p,
                    area: data.l,
                    data: data.d,
                    name: data.n,
                    rect: data.rect
                })
            }
            break;
        case MPOILayer.HS_NORMAL:
            break;
        default:
            break
        }
        return e045
    };
    this.g184 = function (data, uy, x, y) {
        if (typeof uy == "undefined") return;
        var point = new MPoint("");
        point.initialize(this.maplet);
        point.setMapCoords(x, y);
        var id = data.d.split("_")[1];
        if (this.s107[id]) {
            this.s107[id].openInfoWindow()
        } else {
            this.s107[id] = new MMarker(point, new MIcon(sX), new MInfoWindow(uy.title, uy.content));
            this.maplet.addOverlay(this.s107[id]);
            this.s107[id].openInfoWindow()
        }
    };
    this.M4X3 = [];
    this.X8q = [];
    this.S64n7 = null;
    this.wi1_ = [];
    var P3GM = function (data) {
        var grid = this.maplet.layerData[data.grid];
        this.wi1_["o" + data.grid] = true;
        var d = (data.d).split("_");
        var type = parseInt(d[0]);
        switch (type) {
        case MPOILayer.HS_GOLD:
            if ((MPOILayer.DT_GOLD & this.options.data) == MPOILayer.DT_GOLD && DISABLE_OLD_GOLDPOI) {
                var filename = d[1];
                var yO0 = filename.replace("=", "_").replace("=", "_");
                var uy = aa(yO0 + "_pointBox");
                if (uy == null) {
                    if (!aa(data.grid)) return;
                    if (aa(yO0 + "_pointBox") == null) {
                        if (!this.X8q[yO0]) {
                            this.X8q[yO0] = true;
                            new foy21(IKo37(grid, data), function (id) {
                                this.B08aw(data, id);
                                _removeNode(aa(id))
                            }, false, true, this).f7c0()
                        }
                    }
                } else {
                    if (parseInt(uy.getAttribute("transFormType")) == 0) {
                        this.B08aw(data)
                    }
                }
            }
            break;
        case MPOILayer.HS_POI:
            break;
        case MPOILayer.HS_SUBWAY:
            if ((MPOILayer.DT_SUBWAY & this.options.data) == MPOILayer.DT_SUBWAY && MEvent.contains(this.maplet, "subway_mouseover") > 0) {
                MEvent.trigger(this.maplet, "subway_mouseover", {
                    layer: this.layer,
                    pid: data.p,
                    area: data.l,
                    data: data.d,
                    name: data.n,
                    rect: data.rect
                })
            }
            break;
        case MPOILayer.HS_BUS:
            if ((MPOILayer.DT_BUS & this.options.data) == MPOILayer.DT_BUS && MEvent.contains(this.maplet, "bus_mouseover") > 0) {
                MEvent.trigger(this.maplet, "bus_mouseover", {
                    layer: this.layer,
                    pid: data.p,
                    area: data.l,
                    data: data.d,
                    name: data.n,
                    rect: data.rect
                })
            }
            break;
        case MPOILayer.HS_NORMAL:
            break;
        default:
            break
        }
    };
    var W77 = function (data) {
        this.wi1_["o" + data.grid] = false;
        if (this.S64n7 == null) return;
        var uy = aa(this.S64n7 + "_pointBox");
        if (uy != null) {
            uy.onmouseout();
            this.S64n7 = null
        }
        switch (parseInt((data.d).split("_")[0])) {
        case MPOILayer.HS_SUBWAY:
            if ((MPOILayer.DT_SUBWAY & this.options.data) == MPOILayer.DT_SUBWAY && MEvent.contains(this.maplet, "subway_mouseout") > 0) {
                MEvent.trigger(this.maplet, "subway_mouseout", {
                    layer: this.layer,
                    pid: data.p,
                    area: data.l,
                    data: data.d,
                    name: data.n,
                    rect: data.rect
                })
            }
            break;
        case MPOILayer.HS_BUS:
            if ((MPOILayer.DT_BUS & this.options.data) == MPOILayer.DT_BUS && MEvent.contains(this.maplet, "bus_mouseout") > 0) {
                MEvent.trigger(this.maplet, "bus_mouseout", {
                    layer: this.layer,
                    pid: data.p,
                    area: data.l,
                    data: data.d,
                    name: data.n,
                    rect: data.rect
                })
            }
            break;
        case MPOILayer.HS_NORMAL:
            break;
        default:
            break
        }
    };
    this.v6U$7 = null;
    this.iF32J = function (grid, data) {
        var d = (data.d).split("_");
        var filename = d[1];
        var yO0 = filename.replace("=", "_").replace("=", "_");
        new foy21(IKo37(grid, data), function (t_l) {
            var LUWC = eval(yO0);
            if (typeof LUWC == "undefined") return;
            var grid = aa(data.grid);
            if (grid == null) return;
            var left = (data.rect.max.x - data.rect.min.x) / 2 + data.rect.min.x - parseInt(grid.style.left);
            var top = (data.rect.max.y - data.rect.min.y) / 2 + data.rect.min.y - parseInt(grid.style.top);
            D$e.show(yO0, ("o" + data.grid), this.maplet, LUWC.BV9, LUWC.title, LUWC.content, left, top);
            D$e.$4$94((yO0), data.rect);
            this.S64n7 = yO0;
            _removeNode(aa(t_l))
        }, false, true).f7c0()
    };
    this.setServerPath = function (path) {
        if (typeof path != "string" || !path) path = strImgsvrUrl + "/mapbank/maplayer/basepoi/";
        this.options.serverPath = path
    };
    this.setLevelRange = function (min, max) {
        if (typeof min != "number" || min < BASEPOI_MIN_LEVEL || min > BASEPOI_MAX_LEVEL) min = BASEPOI_MIN_LEVEL;
        if (typeof max != "number" || max < BASEPOI_MIN_LEVEL || max > BASEPOI_MAX_LEVEL) max = BASEPOI_MAX_LEVEL;
        this.options.minLevel = min;
        this.options.maxLevel = max
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (finalize) {
        if (typeof finalize != "boolean") finalize = false;
        if (this.maplet) this.maplet.removeLayer(this.layer, finalize);
        for (var id in this.s107) {
            if (this.s107[id] instanceof MMarker) {
                this.s107[id].remove(true);
                this.s107[id] = null
            }
            delete this.s107[id]
        }
        this.maplet = null
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MPOILayer'
    };
    this.maplet = null;
    this.layer = null;
    this.options = options || {};
    with(this.options) {
        this.setServerPath(typeof serverPath != "undefined" ? serverPath : undefined);
        this.setLevelRange((typeof minLevel != "undefined" ? minLevel : undefined), (typeof maxLevel != "undefined" ? maxLevel : undefined));
        this.enableData(typeof data != "undefined" ? data : undefined)
    };
    this.B08aw = function (data, t_l) {
        if (this.v6U$7 == null) {
            this.v6U$7 = getTimeout(this, function () {
                if (typeof data.d == "undefined") return;
                var filename = (data.d).split("_")[1];
                var yO0 = filename.replace("=", "_").replace("=", "_");
                var LUWC = null;
                try {
                    LUWC = eval(yO0)
                } catch (lM) {
                    return
                }
                var uy = aa(yO0 + "_pointBox");
                if (this.wi1_["o" + data.grid]) {
                    if (uy == null) {
                        var grid = aa("o" + data.grid);
                        if (grid != null) {
                            var left = (data.rect.max.x - data.rect.min.x) / 2 + data.rect.min.x - parseInt(grid.style.left);
                            var top = (data.rect.max.y - data.rect.min.y) / 2 + data.rect.min.y - parseInt(grid.style.top);
                            D$e.show(yO0, ("o" + data.grid), this.maplet, LUWC.BV9, LUWC.title, LUWC.content, left, top);
                            D$e.$4$94((yO0), data.rect, true)
                        }
                        this.S64n7 = yO0;
                        _removeNode(aa(t_l))
                    } else {
                        D$e.open(yO0, data.rect, true);
                        this.S64n7 = yO0
                    }
                }
                if (this.X8q[yO0]) {
                    this.X8q[yO0] = null;
                    delete this.X8q[yO0]
                }
                clearTimeout(this.v6U$7);
                this.v6U$7 = null
            }, 1000)
        }
    }
};
MPOILayer.DT_NONE = 0;
MPOILayer.DT_NORMAL = 1;
MPOILayer.DT_POI = 2;
MPOILayer.DT_GOLD = 4;
MPOILayer.DT_SUBWAY = 8;
MPOILayer.DT_BUS = 16;
MPOILayer.DT_ALL = 255;
MPOILayer.HS_GOLD = 3;
MPOILayer.HS_POI = 2;
MPOILayer.HS_SUBWAY = 4;
MPOILayer.HS_BUS = 5;
MPOILayer.HS_NORMAL = 1;
var ON588 = "";
var t3O4 = "http://www.mapbar.com";
var uLQB = "http://bus.mapbar.com";
var w8WC = "http://nav.mapbar.com";
var $qs = "http://nb.mapbar.com";
var m68 = "http://my.mapbar.com/imap/map.jsp";
var w1591 = 3;
var vV$ = 3;
var H88T7 = new Array();
var W49R = 0;
var D$e = {
    ao: new Array(),
    show: function (filename, id, maplet, BV9, title, content, left, top) {
        this.id = filename;
        this.left = typeof left == "undefined" ? 0 : left;
        this.top = typeof top == "undefined" ? 0 : top;
        var j246 = typeof title == "undefined" ? "" : title;
        if (typeof BV9 != "undefined" && BV9 != null) {
            var OB74 = BV9.split(",");
            var position = parseInt(OB74[1]);
            var width = parseInt(OB74[3]);
            var height = parseInt(OB74[4]);
            var maxWidth = parseInt(OB74[5]);
            var maxHeight = parseInt(OB74[6]) + 75;
            var city = OB74[7];
            var $_60 = OB74[8];
            var $bDk = OB74[9];
            var pid = OB74[10];
            var p8FXl = OB74[11]
        }
        switch (position) {
        case 0:
        case "left":
            position = 0;
            break;
        case 1:
        case "right":
            position = 1;
            break;
        default:
            position = 1;
            break
        }
        var NAa42 = typeof content == "undefined" ? "" : content;
        var div = document.createElement("div");
        div.id = this.id + "_pointBox";
        div.className = position ? "pointBox rightThis" : "pointBox";
        div.unselectable = "on";
        div.style.left = this.left + "px";
        div.style.top = this.top + "px";
        div.style.width = maxWidth + "px";
        div.style.height = maxHeight + "px";
        div.setAttribute("maxW", maxWidth);
        div.setAttribute("maxH", maxHeight);
        div.setAttribute("linkUrl", p8FXl);
        var TJXho = this.Hr3(this.id, j246, NAa42, width, height, city, $_60, $bDk, pid);
        var arrow = document.createElement("div");
        arrow.id = this.id + "_arrow";
        arrow.unselectable = "on";
        arrow.style.left = "-13px";
        arrow.style.top = "";
        arrow.style.width = "15px";
        arrow.style.height = "23px";
        arrow.style.overflow = "hidden";
        arrow.style.position = "absolute";
        if (Nfy) {
            arrow.innerHTML = this.b7GT(position)
        } else {
            arrow.innerHTML = '<img style="position: absolute; left: ' + (position == 0 ? "-61" : "-25") + 'px; top:' + (position == 0 ? "-124" : "-178") + 'px;" src="' + CTLIMG_RESOURCE[0].url + '"/>'
        }
        var K8k$x = document.createElement("div");
        K8k$x.id = this.id + "_PMain";
        K8k$x.className = "PMain";
        K8k$x.unselectable = "on";
        K8k$x.style.padding = "5px";
        K8k$x.style.height = height + "px";
        var _3J_ = document.createElement("div");
        _3J_.id = this.id + "_BoxBg";
        _3J_.className = "BoxBg";
        _3J_.unselectable = "on";
        _3J_.style.height = K8k$x.style.height;
        _3J_.style.top = "5px";
        div.appendChild(K8k$x);
        div.appendChild(_3J_);
        div.appendChild(arrow);
        if (typeof maplet != "undefined" && maplet != null) {
            this.maplet = maplet
        }
        K8k$x.appendChild(TJXho);
        if (typeof this.maplet.lA != "undefined") {
            try {
                aa(id).appendChild(div)
            } catch (lM) {
                return
            }
        }
        var tt = aa(id).innerHTML;
        tt = tt.replace(new RegExp(this.id, "gm"), "tmpDiv");
        var hh3X5 = document.createElement("div");
        hh3X5.id = "tmpDiv";
        hh3X5.style.width = maxWidth + "px";
        hh3X5.innerHTML = tt;
        this.maplet.map.appendChild(hh3X5);
        aa("tmpDiv_pointBox").style.width = maxWidth + "px";
        aa("tmpDiv_pointBox").style.height = "1000px";
        aa("tmpDiv_layout").style.width = maxWidth - 10 + "px";
        aa("tmpDiv_layout").style.height = "1000px";
        aa("tmpDiv_title").style.width = (maxWidth - 10) + "px";
        aa("tmpDiv_content").style.display = "";
        aa("tmpDiv_title").style.display = "";
        aa("tmpDiv_line").style.height = "1px";
        div.setAttribute("maxH", aa("tmpDiv_layoutTable").offsetHeight);
        aa(id).innerHTML = aa("tmpDiv").innerHTML.replace(new RegExp("tmpDiv", "gm"), this.id);
        maxHeight = parseInt(div.getAttribute("maxH"));
        aa(this.id + "_layout").style.height = maxHeight + 10 + "px";
        aa(this.id + "_pointBox").style.height = maxHeight + 30 + "px";
        aa(this.id + "_PMain").style.height = maxHeight + 10 + "px";
        aa(this.id + "_PMain").style.width = parseInt(div.getAttribute("maxW")) - 10 + "px";
        aa(this.id + "_BoxBg").style.height = maxHeight + 20 + "px";
        this.maplet.map.removeChild(hh3X5);
        aa(this.id + "_pointBox").setAttribute("maxH", parseInt(aa(this.id + "_pointBox").style.height));
        aa(this.id + "_BoxBg").style.width = aa(this.id + "_BoxBg").offsetWidth + "px";
        aa(this.id + "_pointBox").style.top = (parseInt(aa(this.id + "_pointBox").style.top) - maxHeight / 2 - 10) + "px";
        aa(this.id + "_pointBox").setAttribute("initT", parseInt(aa(this.id + "_pointBox").style.top));
        if (position == 1) {
            aa(this.id + "_pointBox").style.left = parseInt(aa(this.id + "_pointBox").style.left) - parseInt(aa(this.id + "_pointBox").style.width) + "px";
            aa(this.id + "_arrow").style.left = parseInt(aa(this.id + "_pointBox").style.width) + (Nfy ? 3 : 1) + "px"
        }
        var lph = maxHeight + 24;
        aa(this.id + "_arrow").style.top = lph / 2 - 12 + "px";
        aa(this.id + "_pointBox").setAttribute("initAT", lph / 2 - 12);
        this.ao[this.id] = new Array();
        var R9257 = aa(this.id + "_pointBox");
        R9257.style.display = "none";
        R9257.setAttribute("transFormType", 0);
        R9257.setAttribute("position", position);
        aa(this.id + "_pushpin").setAttribute("stay", "false");
        aa(this.id + "_pointBox").onmouseout = function (lM) {
            D$e.J2T(px ? event : lM, this.id.replace("_pointBox", ""))
        };
        aa(this.id + "_pushpin").onclick = function () {
            D$e.pin(this.id.replace("_pushpin", ""))
        }
    },
    pin: function (id) {
        var QhI47 = typeof id == "undefined" ? this.id : id;
        var pin = aa(QhI47 + "_pushpin");
        var U1E6 = (pin.getAttribute("stay") == "false");
        if (U1E6) {
            this.y87(pin, 1);
            pin.setAttribute("stay", "true")
        } else {
            this.y87(pin, 0);
            pin.setAttribute("stay", "false");
            this.close(QhI47)
        }
    },
    y87: function (pin, type) {
        type = typeof type == "undefined" ? 0 : type;
        if (Nfy) {
            pin.innerHTML = this.S$228(type)
        } else {
            pin.firstChild.style.left = ((type == 0) ? "-89px" : "-103px")
        }
    },
    $4$94: function (id, rect, y322q) {
        var R9257 = aa(id + "_pointBox");
        if (R9257 == null) return;
        if (parseInt(R9257.getAttribute("position")) == 0) {
            R9257.style.left = parseInt(R9257.style.left) + ((rect.max.x - rect.min.x) + rect.min.x) + 13 + "px";
            R9257.setAttribute("rect", rect.max.x + "," + rect.max.y + "," + rect.min.x + "," + rect.min.y)
        }
        this.open(id, rect, y322q)
    },
    open: function (id, rect, y322q) {
        if (aa(id + "_pushpin") == null) {
            ON588 = id
        } else {
            if (parseInt(aa(id + "_pointBox").getAttribute("transFormType")) == 1) return;
            if (typeof rect != "undefined") {
                aa(id + "_pointBox").setAttribute("rect", rect.max.x + "," + rect.max.y + "," + rect.min.x + "," + rect.min.y)
            }
            try {
                this.vu(id, y322q)
            } catch (lM) {}
        }
    },
    b7GT: function (position) {
        return "<img src=\"" + strImgsvrUrl + "images/newbubbleimg/mbblank.gif" + "\" style=\"position:absolute;left: " + (position == 0 ? "-61" : "-25") + "px; top: " + (position == 0 ? "-124" : "-178") + "px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + CTLIMG_RESOURCE[0].url + ",sizingMethod=scale);width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;\">"
    },
    J2T: function (lM, id) {
        var QhI47 = id;
        var R9257 = aa(QhI47 + "_pointBox");
        if (R9257 == null) return;
        if (parseInt(R9257.getAttribute("transFormType")) == 1) {
            this.ao[QhI47]["transFormTimer"] = getTimeout(this, function () {
                if (R9257 == null) return;
                if (!_isInsideRect({
                    x: this.maplet.tR,
                    y: this.maplet.tS
                }, this.getRect(QhI47)) && !_isInsideRect({
                    x: this.maplet.tR,
                    y: this.maplet.tS
                }, this.qK2t(QhI47))) {
                    R9257.setAttribute("transFormType", 1);
                    this.vu(QhI47)
                }
                clearTimeout(this.ao[QhI47]["transFormTimer"]);
                delete this.ao[QhI47]["transFormTimer"]
            }, 1000)
        }
    },
    close: function (id) {
        var QhI47 = typeof id == "undefined" ? this.id : id;
        var R9257 = aa(QhI47 + "_pointBox");
        if (R9257 == null) return;
        var pin = aa(QhI47 + "_pushpin");
        this.y87(pin, 0);
        pin.setAttribute("stay", "false");
        R9257.setAttribute("transFormType", 0);
        R9257.style.display = "none"
    },
    vu: function (id, y322q) {
        var QhI47 = typeof id == "undefined" ? this.id : id;
        var R9257 = aa(QhI47 + "_pointBox");
        if (R9257 == null) return;
        if (parseInt(R9257.getAttribute("maxw")) > this.maplet.width || parseInt(R9257.getAttribute("maxh")) > this.maplet.height) {
            if (y322q) return;
            if (parseInt(R9257.getAttribute("transFormType")) == 1) return;
            var url = R9257.getAttribute("linkUrl");
            if (url != null && url != "") window.open(url);
            this.close(QhI47);
            return
        }
        var U1E6 = aa(QhI47 + "_pushpin").getAttribute("stay") == "true";
        if (parseInt(R9257.getAttribute("transFormType")) == 1) {
            if (!U1E6) {
                R9257.setAttribute("transFormType", 0);
                R9257.style.display = "none"
            }
        } else {
            if (!U1E6) {
                var rect = R9257.getAttribute("rect").split(",");
                for (var i = 0; i < rect.length; i++) {
                    rect[i] = parseInt(rect[i])
                }
                var arrow = aa(QhI47 + "_arrow");
                if ((this.maplet.width / 2) >= (parseInt(rect[2]) + (rect[0] - rect[2]) / 2)) {
                    R9257.setAttribute("position", 0);
                    R9257.className = "pointBox";
                    arrow.style.left = "-13px";
                    if (Nfy) {
                        arrow.innerHTML = this.b7GT(0)
                    } else {
                        arrow.firstChild.style.left = "-61px";
                        arrow.firstChild.style.top = "-124px"
                    }
                    R9257.style.left = rect[0] - parseInt(R9257.parentNode.style.left) + 13 - (rect[0] - rect[2]) / 2 + "px"
                } else {
                    R9257.setAttribute("position", 1);
                    R9257.className = "pointBox rightThis";
                    if (Nfy) {
                        arrow.innerHTML = this.b7GT(1)
                    } else {
                        arrow.firstChild.style.left = "-25px";
                        arrow.firstChild.style.top = "-178px"
                    }
                    arrow.style.left = parseInt(R9257.style.width) + (Nfy ? 10 : 2) + "px";
                    R9257.style.left = rect[2] - parseInt(R9257.parentNode.style.left) - parseInt(R9257.style.width) - 5 - 13 + (rect[0] - rect[2]) / 2 + "px"
                }
                var r5x2 = 0;
                if ((rect[3] + (rect[1] - rect[3]) / 2 - parseInt(R9257.style.height) / 2) <= 0) {
                    r5x2 = 0 - parseInt(R9257.parentNode.style.top);
                    if (rect[3] <= 0) {
                        arrow.style.top = "0px"
                    } else {
                        arrow.style.top = (rect[3] + (rect[1] - rect[3]) / 2 - 10) + "px"
                    }
                    R9257.style.top = r5x2 + "px"
                } else if ((rect[3] + (rect[1] - rect[3]) / 2 + parseInt(R9257.style.height) / 2) >= this.maplet.height) {
                    r5x2 = this.maplet.height - parseInt(R9257.style.height) - parseInt(R9257.parentNode.style.top);
                    if (rect[1] >= this.maplet.height) {
                        arrow.style.top = parseInt(R9257.style.height) - parseInt(arrow.style.height) - 6 + "px"
                    } else {
                        arrow.style.top = parseInt(R9257.style.height) - (this.maplet.height - (rect[3] + (rect[1] - rect[3]) / 2)) - 10 + "px"
                    }
                    R9257.style.top = r5x2 + "px"
                } else {
                    R9257.style.top = R9257.getAttribute("initT") + "px";
                    arrow.style.top = R9257.getAttribute("initAT") + "px"
                }
                R9257.setAttribute("transFormType", 1);
                R9257.style.display = ""
            }
        }
    },
    getRect: function (id) {
        var div = aa(id + "_pointBox");
        if (div == null) return {
            max: {
                x: 0,
                y: 0
            },
            min: {
                x: 0,
                y: 0
            }
        };
        var r = {
            min: {
                x: div.offsetLeft + div.parentNode.offsetLeft + 5,
                y: div.offsetTop + div.parentNode.offsetTop
            },
            max: {
                x: 0,
                y: 0
            }
        };
        var BA4 = aa(id + "_PMain");
        r.max.x = r.min.x + BA4.offsetWidth + parseInt(BA4.style.padding);
        r.max.y = r.min.y + BA4.offsetHeight + parseInt(BA4.style.padding);
        return r
    },
    qK2t: function (id) {
        var div = aa(id + "_pointBox");
        if (div == null) return {
            max: {
                x: 0,
                y: 0
            },
            min: {
                x: 0,
                y: 0
            }
        };
        var rect = div.getAttribute("rect").split(",");
        for (var i = 0; i < rect.length; i++) {
            rect[i] = parseInt(rect[i])
        }
        return {
            max: {
                x: rect[0],
                y: rect[1]
            },
            min: {
                x: rect[2],
                y: rect[3]
            }
        }
    },
    N37: function (url, y6) {
        var head = "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">\n" + "<html xmlns=\"http://www.w3.org/1999/xhtml\">\n" + "<head>\n" + "<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\"/>\n" + "<meta http-equiv=\"x-ua-compatible\" content=\"ie=7\" />\n" + "<title>\u6253\u5370\u9875\u9762</title>\n" + "<link href=\"style.css\" rel=\"stylesheet\" type=\"text/css\"/>\n";
        var style = "<style media=\"print\">\n" + ".Noprint {\n" + "DISPLAY: none \n" + "}\n" + ".PageNext{ \n" + "PAGE-BREAK-AFTER: always \n" + "}\n" + "</style>\n";
        var title = "<body>\n" + "<table class=\"Noprint\" width=\"300\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n" + "<tr>\n" + "<td>\n" + "<button onClick=\"window.print();\">\u6253\u5370</button></td>\n" + "<td><button onClick=\"window.close();return false;\">\u5173\u95ed</button></td>\n" + "<td id=\"title\">" + y6 + "</td>\n" + "</tr>\n" + "</table>\n";
        var m2bXI = "<script type=\"text/javascript\">\n" + "window.onerror = function(){\n" + "return true;\n" + "}\n" + "</script>\n" + "</body>\n" + "</html>";
        var xj = "<img src=\"" + url + "\">\n";
        var P89 = head + style + title + xj + m2bXI;
        var P1qH = window.open("./Print.html", "print");
        try {
            P1qH.document.write(P89);
            P1qH.document.close()
        } catch (lM) {
            P1qH.close()
        }
    },
    getText: function (target) {
        if (target.tagName == undefined) {
            return target.nodeValue.toString()
        } else {
            for (var qC = 0; qC < target.childNodes.length; qC++) {
                if (target.childNodes[qC].tagName != undefined) {
                    return this.getText(target.childNodes[qC])
                } else {
                    if (target.childNodes[0].nodeValue.toString().replace(" ", "").length > 1) return this.getText(target.childNodes[0])
                }
            }
        }
    },
    Hr3: function (id, j246, si9j, width, height, city, $_60, $bDk, pid, left, top) {
        var div = document.createElement("div");
        div.id = id + "_layout";
        var Aj = typeof width == "undefined" ? 84 : parseInt(width);
        var nV = typeof height == "undefined" ? 18 : parseInt(height);
        var q3 = typeof left == "undefined" ? 0 : parseInt(left);
        var zt = typeof top == "undefined" ? 0 : parseInt(top);
        div.style.width = Aj + "px";
        div.style.height = nV + "px";
        div.style.left = q3 + "px";
        div.style.top = zt + "px";
        div.style.position = "relative";
        div.style.overflow = "hidden";
        div.style.unselectable = "on";
        var dom = document.createElement("TABLE");
        dom.id = id + "_layoutTable";
        dom.cellSpacing = 0;
        dom.cellPadding = 0;
        dom.border = 0;
        var vNy0 = dom.insertRow(0);
        var title = vNy0.insertCell(0);
        title.AV60x = 2;
        title.id = id + "_title";
        var lg91 = vNy0.insertCell(1);
        var _ah0 = dom.insertRow(1);
        var content = dom.insertRow(2);
        var f4C79 = content.insertCell(0);
        var bottom = dom.insertRow(3);
        var _Q01d = _ah0.insertCell(0);
        _Q01d.er8y_ = 3;
        _Q01d.id = id + "_line";
        _Q01d.style.display = "";
        _Q01d.style.height = "1px";
        _Q01d.style.backgroundColor = "#ccc";
        var L44Q = bottom.insertCell(0);
        f4C79.id = id + "_content";
        f4C79.er8y_ = 3;
        f4C79.style.display = "";
        si9j = typeof si9j == "undefined" ? "" : si9j;
        f4C79.innerHTML = si9j;
        var h4C = document.createElement("div");
        h4C.id = this.id + "_pushpin";
        h4C.style.width = "12px";
        h4C.style.height = "12px";
        h4C.style.top = ((px) ? 0 : 4) + "px";
        h4C.style.cursor = "pointer";
        h4C.style.position = "absolute";
        h4C.style.overflow = "hidden";
        if (Nfy) {
            h4C.innerHTML = this.S$228(0)
        } else {
            h4C.innerHTML = '<img style="position: absolute; left: -89px; top:0px;" src="' + CTLIMG_RESOURCE[0].url + '"/>'
        }
        lg91.appendChild(h4C);
        title = typeof title == "undefined" ? "" : title;
        title.style.display = "";
        title.style.overflow = "hidden";
        title.innerHTML = "<div style=\"margin-left:5px;overflow:hidden;" + (px ? "height:14px;" : "") + "\" align=\"left\">" + j246 + "</div>";
        title.removeAttribute("bpdata");
        lg91.vAlign = "top";
        lg91.style.width = parseInt(h4C.style.width) + 4 + "px";
        L44Q.id = id + "_bottom";
        L44Q.style.display = "";
        L44Q.er8y_ = 3;
        L44Q.innerHTML = "<div id='tipdiv' style='font-size:12px;height:65px;color:#000;background:#E5ECF9;margin-top:0px;clear:both;'>\n" + "<div style=\"display:${obj.funsDisplay}\">\n" + "<table style=\"margin-top:10px;\">\n" + "<tr>\n" + "<td valign=middle><p style='margin:3px 0;'><a href='javascript:;' onclick='showTipDiv(\"tipneardiv\",\"tipdiv\");'>\u67e5\u627e\u5468\u8fb9</a></p>" + "<p style='margin:3px 0;'><a href='javascript:;' onclick='showTipDiv(\"tipfromDiv\",\"tipdiv\");'>\u4ece\u8fd9\u91cc\u51fa\u53d1</a> - <a href='javascript:;' onclick='showTipDiv(\"tiptoDiv\",\"tipdiv\");'>\u5230\u8fbe\u8fd9\u91cc</a></p></td>\n" + "</tr>\n" + "</table>\n" + "</div>\n" + "</div>\n" + "<div id='tipneardiv' style='display:none;font-size:12px;color:#000;background:#E5ECF9;margin-top:0px;padding:3px 0 0 3px;clear:both;' ><p style='margin:3px 0;'><a href='javascript:;' onclick='showTipDiv3(\"tipfromDiv\",\"tipdiv\",\"tipneardiv\");'>\u4ece\u8fd9\u91cc\u51fa\u53d1</a> - <a href='javascript:;' onclick='showTipDiv3(\"tiptoDiv\",\"tipdiv\",\"tipneardiv\");'>\u5230\u8fbe\u8fd9\u91cc</a> - \u67e5\u627e\u5468\u8fb9</p>\n" + "<form style=\"margin:0px;padding:0px;\" name=nearbyform onsubmit='inforwindowNearSubmit(\"\",\"\",\"" + city + "\",\"" + $_60 + "\",\"" + $bDk + "\",this.poitype.value,\"" + pid + "\");return false;'>\n" + "<input type='text' id='infoWindowPoitype' name='poitype'/>\n" + "<input name='submit1' type='submit' value='\u641c\u7d22' /> \u5982\uff1a<a href='javascript:void(0)' onclick='document.getElementById(\"infoWindowPoitype\").value=this.innerHTML;inforwindowNearSubmit(\"\",\"\",\"" + city + "\",\"" + $_60 + "\",\"" + $bDk + "\",this.innerHTML,\"" + pid + "\");'>\u94f6\u884c</a>,<a href='javascript:void(0)' onclick='document.getElementById(\"infoWindowPoitype\").value=this.innerHTML;inforwindowNearSubmit(\"\",\"\",\"" + city + "\",\"" + $_60 + "\",\"" + $bDk + "\",this.innerHTML,\"" + pid + "\");'>\u9910\u9986</a>\n" + "</form>\n" + "<a href='javascript:;' onclick='showTipDiv(\"tipdiv\",\"tipneardiv\")'>&laquo;&nbsp;\u4e0a\u4e00\u6b65</a>\n" + "</div>\n" + "<div id='tipfromDiv' style='display:none;font-size:12px;color:#000;background:#E5ECF9;margin-top:0px;padding:3px 0 0 3px;clear:both;'><p style='margin:3px 0;'>\u4ece\u8fd9\u91cc\u51fa\u53d1 - <a href='javascript:;' onclick='showTipDiv3(\"tiptoDiv\",\"tipfromDiv\",\"tipneardiv\");'>\u5230\u8fbe\u8fd9\u91cc</a> - <a href='javascript:;' onclick='showTipDiv3(\"tipneardiv\",\"tiptoDiv\",\"tipfromDiv\");'>\u67e5\u627e\u5468\u8fb9</a></p>\n" + "<form name=fromform style=\"margin:0px;padding:0px;\" onsubmit='return false;'>\n" + "<input type='text'id='inforwindowMudi' name='searchmudi'/>\n" + "<input name='button' type='button' value='\u67e5\u516c\u4ea4' onclick='inforwindowMudiFunBus(\"\",\"\",\"" + city + "\",\"" + $_60 + "\",\"" + $bDk + "\",this.form.elements[\"inforwindowMudi\"].value,\"" + pid + "\")' />\n" + "<input name='button' type='button' value='\u67e5\u9a7e\u8f66'onclick='inforwindowMudiFunDriver(\"\",\"\",\"" + city + "\",\"" + $_60 + "\",\"" + $bDk + "\",this.form.elements[\"inforwindowMudi\"].value,\"" + pid + "\")' /><br>\n" + "<a href='javascript:;' onclick='showTipDiv(\"tipdiv\",\"tipfromDiv\")'>&laquo;&nbsp;\u4e0a\u4e00\u6b65</a>\n" + "</form>\n" + "</div>\n" + "<div id='tiptoDiv' style='display:none;font-size:12px;color:#000;background:#E5ECF9;margin-top:0px;padding:3px 0 0 3px;clear:both;'><p style='margin:3px 0;'><a href='javascript:;' onclick='showTipDiv3(\"tipfromDiv\",\"tiptoDiv\",\"tipneardiv\");'>\u4ece\u8fd9\u91cc\u51fa\u53d1</a> - \u5230\u8fbe\u8fd9\u91cc - <a href='javascript:;' onclick='showTipDiv3(\"tipneardiv\",\"tiptoDiv\",\"tipfromDiv\");'>\u67e5\u627e\u5468\u8fb9</a></p>\n" + "<form name=toform style=\"margin:0px;padding:0px;\"onsubmit='return false;'>\n" + "<input type='text' id='inforwindowChuFa'/>\n" + "<input name='button' type='button' value='\u67e5\u516c\u4ea4'onclick='inforwindowChuFaFunBus(\"\",\"\",\"" + city + "\",\"" + $_60 + "\",\"" + $bDk + "\",this.form.elements[\"inforwindowChuFa\"].value,\"" + pid + "\")' />\n" + "<input name='button' type='button' value='\u67e5\u9a7e\u8f66'onclick='inforwindowChuFaFunDriver(\"\",\"\",\"" + city + "\",\"" + $_60 + "\",\"" + $bDk + "\",this.form.elements[\"inforwindowChuFa\"].value,\"" + pid + "\")' /><br>\n" + "<a href='javascript:;' onclick='showTipDiv(\"tipdiv\",\"tiptoDiv\")'>&laquo;&nbsp;\u4e0a\u4e00\u6b65 </a>\n" + "</form>\n" + "</div>\n" + "<div id=\"saveToMymapDiv\" style='display:none;font-size:12px;color:#000;background:#E5ECF9;margin-top:0px;padding:3px 0 0 3px;clear:both;'>\n" + "<table>\n" + "<tr><td colspan=\"2\">\u60a8\u60f3\u8981\u4fdd\u5b58\u5230\u54ea\u4e00\u4e2a\u5730\u56fe\u4e2d\uff1f</td></tr>\n" + "<tr><td id='maplist_s'></td><td><input type=\"button\" value=\" \u4fdd \u5b58 \" onclick=\"saveRsPoi('${obj.objId}','" + $bDk + "','${obj.description}')\"></td></tr>\n" + "</table>\n" + "</div>\n" + "<div id=\"saveInfo\" style='display:none;padding-top:3px;font-size:12px;color:#000;background:#E5ECF9;'></div>\n" + "<div id=\"prestep\" style='display:none;padding-top:3px;font-size:12px;color:#000;background:#E5ECF9;'><a href='javascript:void(0);' onclick='showTipDiv(\"tipdiv\",\"saveToMymapDiv\");showTipDiv(\"tipdiv\",\"saveInfo\");showTipDiv(\"tipdiv\",\"prestep\");'>&nbsp;&laquo;\u4e0a\u4e00\u6b65</a></div>\n";
        div.appendChild(dom);
        return div
    },
    S$228: function (type) {
        return "<img src=\"" + strImgsvrUrl + "images/newbubbleimg/mbblank.gif" + "\" style=\"position:absolute;left: " + (type == 0 ? "-89" : "-103") + "px; top: 0px;" + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + CTLIMG_RESOURCE[0].url + ",sizingMethod=scale);width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;\">"
    }
};
if (typeof SN_7 == "undefined") function SN_7(s_7, h4f) {
    if (s_7) document.getElementById(h4f).style.display = "none";
    if (h4f) document.getElementById(s_7).style.display = ""
};
if (typeof W7WF == "undefined") function W7WF(s_7, H2M, MI7m) {
    if (s_7) document.getElementById(s_7).style.display = "";
    if (H2M) document.getElementById(H2M).style.display = "none";
    if (MI7m) document.getElementById(MI7m).style.display = "none"
};
if (typeof C1dR6 == "undefined") function C1dR6(url, N6p, _E7qO, $_60, _36N, O42r3, pid) {
    if ($Llu.G2eW([O42r3])) c24("#ac=nb&poitype=" + lO4(O42r3) + "&city=" + lO4(_E7qO) + "&pid=" + lO4(_36N, 1), 'nb')
};
if (typeof Nryb == "undefined") function Nryb(url, N6p, _E7qO, $_60, name, KX1, pid) {
    if ($Llu.G2eW([KX1])) c24("#ac=bus&origName=" + lO4(name, 1) + "&destName=" + lO4(KX1, 1) + "&city=" + lO4(_E7qO), 'bus')
};
if (typeof y2YJ == "undefined") function y2YJ(url, N6p, _E7qO, $_60, name, KX1, pid) {
    if ($Llu.G2eW([KX1])) c24("#ac=nav&origName=" + lO4(name, 1) + "&destName=" + lO4(KX1, 1) + "&origCity=" + lO4(_E7qO) + "&destCity=" + lO4(_E7qO), 'nav')
};
if (typeof roW == "undefined") function roW(url, N6p, _E7qO, $_60, name, KX1, pid) {
    if ($Llu.G2eW([KX1])) c24("#ac=bus&destName=" + lO4(name, 1) + "&origName=" + lO4(KX1, 1) + "&city=" + lO4(_E7qO), 'bus')
};
if (typeof $41j == "undefined") function $41j(url, N6p, _E7qO, $_60, name, KX1, pid) {
    if ($Llu.G2eW([KX1])) c24("#ac=nav&destName=" + lO4(name, 1) + "&origName=" + lO4(KX1, 1) + "&origCity=" + lO4(_E7qO) + "&destCity=" + lO4(_E7qO), 'nav')
};
if (typeof $Y33_ == "undefined") function $Y33_(name, type, city) {
    mQo = k80v._DU62(city);
    var y2j = mQo.y2j || "";
    $n5(name, type, y2j)
};
if (typeof c24 == "undefined") function c24(url, type) {
    if (type == 'nb') url = $qs + "/mapview/index.jsp" + url;
    if (type == 'bus') url = uLQB + "/mapview/index.jsp" + url;
    if (type == 'nav') url = w8WC + "/mapview/index1.jsp" + url;
    window.open(url, "", "")
};
if (typeof $Llu == "undefined") var $Llu = {
    yo4AU: function (g82y, xj) {
        for (var i = 0; i < g82y.length; i++) {
            if (g82y[i].value.replace(new RegExp(" ", "gm"), "") == "") {
                g82y[i].focus();
                return false
            }
        }
        return true
    },
    G2eW: function (g82y, xj) {
        for (var i = 0; i < g82y.length; i++) {
            if (g82y[i].replace(new RegExp(" ", "gm"), "") == "") {
                return false
            }
        }
        return true
    }
};
if (typeof lO4 == "undefined") function lO4(uri, kn3_) {
    if (kn3_) {
        return cEC(SxHHV(uri))
    }
    return encodeURI(_01(uri))
};
if (typeof a114 == "undefined") function a114(uri, kn3_) {
    if (kn3_) {
        return SxHHV(SxHHV(uri))
    }
    return _01(_01(uri))
};
if (typeof _Fl == "undefined") function _Fl(x5T7, icon) {
    var uy = C5d(x5T7);
    var title = uy.name;
    var content = uy.getText("/localsearch/js/template/feedback.html?r=" + Vu3F());
    RKbL9(uy, title, content)
};

function JC3(maplet) {
    this.maplet = maplet;
    document["mapbar-overview"] = this;
    this.yl = "mapbar";
    var O7A07 = 0;
    var sC9 = 0;
    var oY67 = 0;
    var H29r = 0;
    this.c3 = oo;
    this.fg = true;
    this.panel = document.createElement("div");
    this.panel.unselectable = "on";
    this.panel.style.position = "absolute";
    this.panel.style.zIndex = 999;
    this.panel.style.backgroundColor = "white";
    this.panel.style.border = "1px solid #A6A5A1";
    this.panel.setAttribute(B8577, true);
    this.panel.style.overflow = "hidden";
    this.panel.style.display = "none";
    this.fC = document.createElement("div");
    this.fC.id = "mapbar-overview-canvas";
    this.fC.unselectable = "on";
    this.fC.style.position = "absolute";
    this.fC.style.visibility = "visible";
    this.fC.style.zIndex = 0;
    this.fC.style.top = (uU - 2) + "px";
    this.fC.style.left = (px) ? "5px" : "7px";
    this.fC.style.backgroundColor = MapBackgroundColor;
    this.fC.style.border = "2px solid #0E347F";
    this.fC.style.overflow = "hidden";
    this.fC.selected = false;
    this.panel.appendChild(this.fC);
    this.z3 = document.createElement("div");
    this.z3.id = "mapbar-overview-viewport";
    this.z3.unselectable = "on";
    this.fC.appendChild(this.z3);
    this.z1 = document.createElement("div");
    this.z1.id = "mapbar-overview-viewframe";
    this.z1.unselectable = "on";
    this.fC.appendChild(this.z1);
    this.z2 = document.createElement("div");
    this.z2.id = "mapbar-overview-viewpad_ctrl";
    this.z2.unselectable = "on";
    this.z2.style.MozUserSelect = "none";
    this.fC.appendChild(this.z2);
    this.z2.style.cursor = "move";
    this.z2.selected = false;
    this.ao = new Array();
    this.cW = 0;
    this.C5Y = [2, 4, 8, 6];
    this.shadow = document.createElement("div");
    this.shadow.unselectable = "on";
    this.shadow.style.position = "absolute";
    this.shadow.style.zIndex = 998;
    this.shadow.setAttribute(B8577, true);
    this.shadow.style.display = "none";
    var $4r = null;
    var F2813 = null;
    this.x18 = new fD("OvwImgs", 0, 0, 0, 0, true, 0, '', this.fC);
    this.show = function () {
        this.fg = true
    };
    this.hide = function () {
        this.fg = false
    };
    this.nF = function () {
        if (this.fg) {
            if (this.c3) return VS8w8(this.shadow.style.top);
            else return H29r
        } else {
            return 0
        }
    };
    this.GgeM = function () {
        if (this.fg) {
            if (this.c3) return VS8w8(this.shadow.style.left);
            else return oY67
        } else {
            return 0
        }
    };
    this.nz = function () {
        if (this.fg) {
            if (this.c3) return VS8w8(this.shadow.offsetHeight);
            else return VS8w8(this.img.offsetHeight)
        } else {
            return 0
        }
    };
    this.w0 = function (lM) {
        B982(lM);
        if (this.cW != 0) return;
        if (lM.target.id == this.z2.id || g760 == this.z2.id) {
            g760 = this.z2.id;
            this.z2.selected = true;
            this.downX = (px) ? event.clientX : lM.clientX;
            this.downY = (px) ? event.clientY : lM.clientY;
            this.xa = this.downX;
            this.xb = this.downY
        } else if (fJ(lM.target, this.fC) || g760 == this.fC.id) {
            g760 = this.fC.id;
            this.fC.selected = true;
            this.downX = (px) ? event.clientX : lM.clientX;
            this.downY = (px) ? event.clientY : lM.clientY;
            this.xa = this.downX;
            this.xb = this.downY
        }
        if (g760) {
            this.ao["doc_mousemove"] = MEvent.bindDom(document, "mousemove", this, this.f9);
            this.ao["doc_mouseup"] = MEvent.bindDom(document, "mouseup", this, this.l1);
            if (px) this.ao["losecapture"] = MEvent.bindDom(document.body, "losecapture", this, this.l1);
            else this.ao["blur"] = MEvent.bindDom(window, "blur", this, this.l1)
        }
    };
    this.f9 = function (lM) {
        if (g760 == this.z2.id && this.z2.selected) {
            this.tR = (px) ? event.clientX : lM.clientX;
            this.tS = (px) ? event.clientY : lM.clientY;
            var lI = (this.tR - this.downX);
            var lK = (this.tS - this.downY);
            this.downX = this.tR;
            this.downY = this.tS;
            if (this.z2.style.top) {
                this.z2.style.top = (parseInt(this.z2.style.top) + lK) + "px";
                this.z2.style.left = (parseInt(this.z2.style.left) + lI) + "px"
            }
        } else if (g760 == this.fC.id && this.fC.selected) {
            this.tR = (px) ? event.clientX : lM.clientX;
            this.tS = (px) ? event.clientY : lM.clientY;
            var lI = (this.tR - this.downX);
            var lK = (this.tS - this.downY);
            this.downX = this.tR;
            this.downY = this.tS;
            this.x18.style.top = (parseInt(this.x18.style.top) + lK) + "px";
            this.x18.style.left = (parseInt(this.x18.style.left) + lI) + "px";
            if (this.z3.style.top) {
                this.z3.style.top = (parseInt(this.z3.style.top) + lK) + "px";
                this.z3.style.left = (parseInt(this.z3.style.left) + lI) + "px";
                this.z1.style.top = (parseInt(this.z1.style.top) + lK) + "px";
                this.z1.style.left = (parseInt(this.z1.style.left) + lI) + "px"
            }
        }
        if (!$4r && this.z2.offsetWidth < this.fC.offsetWidth) {
            if (px) document.body.setCapture();
            $4r = nB(this, x46B, 100);
            F2813 = nB(this, zL, 100)
        }
    };
    this.l1 = function (lM) {
        if (this.maplet.sS != ts._Q5y4 && this.maplet.sS != ts.tz && this.maplet.sS != ts.tA && this.maplet.sS != ts.tv) B982(lM);
        if ($4r) {
            this.maplet.hideBubble();
            window.clearInterval($4r);
            $4r = null;
            window.clearInterval(F2813);
            F2813 = null;
            if (px) document.body.releaseCapture()
        }
        if (this.ao["doc_mousemove"]) {
            MEvent.removeBuiltInListener(document, "mousemove", this.ao["doc_mousemove"]);
            this.ao["doc_mousemove"] = null;
            MEvent.removeBuiltInListener(document, "mouseup", this.ao["doc_mouseup"]);
            this.ao["doc_mouseup"] = null;
            if (px) {
                MEvent.removeBuiltInListener(document.body, "losecapture", this.ao["losecapture"]);
                this.ao["losecapture"] = null
            } else {
                MEvent.removeBuiltInListener(window, "blur", this.ao["blur"]);
                this.ao["blur"] = null
            }
        }
        if (this.z2.selected) {
            g760 = null;
            this.z2.selected = false;
            var tR = (px) ? event.clientX : lM.clientX;
            var tS = (px) ? event.clientY : lM.clientY;
            if (typeof tR == "undefined") tR = this.tR;
            if (typeof tS == "undefined") tS = this.tS;
            var lI = (tR - this.xa - VS8w8(this.x18.style.left));
            var lK = (tS - this.xb - VS8w8(this.x18.style.top));
            var lf = -lK * this.xf / this.maplet.imgHeight;
            var li = lI * this.xg / this.maplet.imgWidth;
            this.gK = this.maplet.gx + lf;
            this.gL = this.maplet.gA + li;
            this.cW = 1;
            var l = VS8w8(this.z2.style.left);
            if (l < -this.z2.offsetWidth) l = -this.z2.offsetWidth;
            else if (l >= this.fC.offsetWidth) l = this.fC.offsetWidth;
            var yw = parseInt(this.z2.style.top);
            if (yw < -this.z2.offsetHeight) yw = -this.z2.offsetHeight;
            else if (yw >= this.fC.offsetHeight) yw = this.fC.offsetHeight;
            this.z2.style.left = l + "px";
            this.z2.style.top = yw + "px";
            this.vh = getTimeout(this, this.vO, 20)
        } else if (this.fC.selected) {
            g760 = null;
            this.fC.selected = false;
            var tR = (px) ? event.clientX : lM.clientX;
            var tS = (px) ? event.clientY : lM.clientY;
            var lI = -(tR - this.xa);
            var lK = -(tS - this.xb);
            var lf = -lK * this.xf / this.maplet.imgHeight;
            var li = lI * this.xg / this.maplet.imgWidth;
            this.gK = this.maplet.gx + lf;
            this.gL = this.maplet.gA + li;
            this.cW = 2;
            var l = VS8w8(this.z3.style.left);
            if (l < -this.z3.offsetWidth) l = -this.z3.offsetWidth;
            else if (l >= this.fC.offsetWidth) l = this.fC.offsetWidth;
            var yw = parseInt(this.z3.style.top);
            if (yw < -this.z3.offsetHeight) yw = -this.z3.offsetHeight;
            else if (yw >= this.fC.offsetHeight) yw = this.fC.offsetHeight;
            this.z3.style.left = l + "px";
            this.z3.style.top = yw + "px";
            this.z1.style.left = l + "px";
            this.z1.style.top = yw + "px";
            this.vh = getTimeout(this, this.vO, 20)
        }
    };
    var B06 = function (lM) {
        B982(lM)
    };
    this.vO = function () {
        if (this.vh) {
            clearTimeout(this.vh);
            this.vh = null
        }
        if (!this.z3.style.top || !this.z2.style.top) {
            this.maplet.setCenter(this.gK, this.gL, true);
            this.cW = 0;
            return
        }
        var lK = parseInt(this.z2.style.top) - parseInt(this.z3.style.top);
        var lI = parseInt(this.z2.style.left) - parseInt(this.z3.style.left);
        var gN = Math.round(lI);
        var gO = Math.round(lK);
        if ((Math.abs(lI) + Math.abs(lK)) >= 10) {
            var gN = Math.round(lI * 10.0 / (Math.abs(lI) + Math.abs(lK)));
            var gO = Math.round(lK * 10.0 / (Math.abs(lI) + Math.abs(lK)))
        }
        if (this.cW == 2) {
            if ((Math.abs(lI) + Math.abs(lK)) == 0) {
                this.maplet.setCenter(this.gK, this.gL, true);
                this.cW = 0
            } else {
                this.z3.style.top = (parseInt(this.z3.style.top) + gO) + "px";
                this.z3.style.left = (parseInt(this.z3.style.left) + gN) + "px";
                this.z1.style.top = (parseInt(this.z1.style.top) + gO) + "px";
                this.z1.style.left = (parseInt(this.z1.style.left) + gN) + "px";
                this.vh = getTimeout(this, this.vO, 20)
            }
        } else if (this.cW == 1) {
            gN = -gN;
            gO = -gO;
            if ((Math.abs(lI) + Math.abs(lK)) == 0) {
                this.maplet.setCenter(this.gK, this.gL, true);
                this.cW = 0
            } else {
                for (var i in this.pU) {
                    if (typeof this.pU[i] == "object" && (this.pU[i] != null)) {
                        this.pU[i].style.top = (parseInt(this.pU[i].style.top) + gO) + "px";
                        this.pU[i].style.left = (parseInt(this.pU[i].style.left) + gN) + "px"
                    }
                }
                this.z2.style.top = (parseInt(this.z2.style.top) + gO) + "px";
                this.z2.style.left = (parseInt(this.z2.style.left) + gN) + "px";
                this.vh = getTimeout(this, this.vO, 20)
            }
        }
    };
    this.pU = new Array();
    this.yN = null;
    this.c4 = false;
    this.cl = false;
    this.sa = new Array();
    this.nH = function () {
        if (this.fg && this.c3) return OVER_WIN_WIDTH;
        else return uS
    };
    this.addListener = function (uy) {
        this.sa[uy.id] = uy
    };
    this.removeListener = function (uy) {
        this.sa[uy.id] = null
    };
    this.uq = function () {
        for (var pf in this.sa) {
            if (this.sa[pf] && this.sa[pf].onresize) {
                this.sa[pf].onresize()
            }
        }
        this.maplet.onresize()
    };
    this.g1 = function () {
        for (var pf in this.sa) {
            if (this.sa[pf]) {
                this.sa[pf] = null
            }
            this.sa = null
        }
        this.clearImgs();
        this.pU = null;
        for (var l8 in this.ao) {
            try {
                if (this.ao[l8] != null) {
                    MEvent.removeBuiltInListener(this.fC, l8, this.ao[l8]);
                    this.ao[l8] = null
                }
            } catch (lM) {}
            this.ao = null
        }
        this.img.overview = null;
        this.img.onclick = null;
        this.img.onmousedown = null;
        this.img.onmouseup = null;
        this.img.ondblclick = null;
        this.z2.w0 = null;
        this.z2.f9 = null;
        if (this.panel.parentNode != null) {
            _removeNode(this.panel)
        }
        this.maplet = null
    };
    this.onresize = function () {
        this.w1e3A();
        this.uq()
    };
    this.close = function () {
        if (this.cl) return;
        if (typeof this.img == "undefined") {
            this.c3 = oo = false;
            return
        } else if (this.img.style.display == "none" && this.c3) {
            this.c3 = oo = false
        }
        H3h.apply(this);
        this.cl = true;
        this.yN = getTimeout(this, E446, 10);
        this.c4 = false;
        this.uq()
    };
    this.open = function () {
        if (typeof this.img == "undefined") {
            this.c3 = oo = true;
            return
        }
        if (this.c4) return;
        H3h.apply(this);
        this.c4 = true;
        this.yN = getTimeout(this, _eD$, 10);
        this.cl = false
    };
    this.qa = function (container) {
        var An = (px) ? 0 : 2;
        this.img = document.createElement("div");
        this.img.unselectable = "on";
        this.img.style.position = "absolute";
        this.img.style.zIndex = 1000;
        this.img.overview = this;
        this.img.style.cursor = (px) ? "hand" : "pointer";
        this.img.style.overflow = "hidden";
        this.img.style.display = "none";
        this.$90 = document.createElement("img");
        this.$90.unselectable = "on";
        this.$90.style.position = "absolute";
        this.$90.src = CTLIMG_RESOURCE[0].url;
        this.$90.style.width = CTLIMG_RESOURCE[0].w + "px";
        this.$90.style.height = CTLIMG_RESOURCE[0].h + "px";
        this.$90.ohT15 = "no";
        if (px) this.img.style.filter = "alpha(opacity=0)";
        else this.img.style.opacity = "0";
        this.img.onmousedown = function (lM) {
            B982(lM || window.event)
        };
        this.img.onmouseup = function (lM) {
            this.overview.l1(lM);
            B982(lM || window.event)
        };
        this.img.ondblclick = function (lM) {
            B982(lM || window.event)
        };
        this.img.onclick = function (lM) {
            B982(lM || window.event);
            if (this.overview.c3) {
                this.overview.close()
            } else {
                this.overview.open()
            }
        };
        container.appendChild(this.img);
        this.img.appendChild(this.$90);
        container.appendChild(this.panel);
        container.appendChild(this.shadow);
        this.ao["mousedown"] = MEvent.bindDom(this.fC, "mousedown", this, this.w0);
        this.ao["mouseup"] = MEvent.bindDom(this.fC, "dblclick", this, B06);
        this.onresize();
        if (!this.fg) return;
        if (oo) {
            this.open()
        } else {
            this.close()
        }
    };
    this.clearImgs = function () {
        for (var i in this.pU) o13.apply(this, [i])
    };
    var o13 = function (id) {
        try {
            if (this.pU[id] != null) {
                _removeNode(this.pU[id]);
                this.pU[id].onmousedown = null;
                this.pU[id].onerror = null;
                this.pU[id].onload = null;
                this.pU[id] = null;
                delete this.pU[id]
            }
        } catch (lM) {}
    };
    var f6oO = function () {
        for (var i in this.pU) {
            if (this.pU[i] && !this.pU[i].c2) o13.apply(this, [i])
        }
    };
    this.paint = function () {
        if (!this.c3 || !this.fg) return;
        this.width = OVER_WIN_WIDTH - 10;
        this.height = OVER_WIN_HEIGHT - 10;
        this.gx = this.maplet.gx;
        this.gA = this.maplet.gA;
        this.AG = Math.max(Math.max(0, te - 2), uW[this.maplet.AG]);
        this.imgWidth = this.maplet.imgWidth;
        this.imgHeight = this.maplet.imgHeight;
        this.xK = this.maplet.xK;
        if (this.yl != this.maplet.yl) {
            this.yl = this.maplet.yl;
            this.clearImgs()
        }
        var yk = this.yl;
        this.z4 = Math.ceil((this.width) / (this.imgWidth) / 2);
        this.z5 = Math.ceil((this.height) / (this.imgHeight) / 2);
        this.xg = sj[this.AG];
        this.xf = qP[this.AG];
        this.sR = sI[this.AG] + "/";
        this.gD = Math.floor((this.maplet.gA) / this.xg);
        this.gE = Math.floor((this.maplet.gx) / this.xf);
        if (this.gD < 0) this.gD += 1;
        this.mapX = this.width / 2 - Math.round(((this.gA * wp) % (this.xg * wp)) * this.imgWidth / (this.xg * wp));
        if (this.gx >= 0) {
            this.mapY = this.height / 2 - this.imgHeight + Math.round(((this.gx * wp) % (this.xf * wp)) * this.imgHeight / (this.xf * wp))
        } else {
            this.mapY = this.height / 2 + Math.round(((this.gx * wp) % (this.xf * wp)) * this.imgHeight / (this.xf * wp))
        }
        var nL = nM[this.AG];
        this.sZ = 0;
        this.s1 = 0;
        this.tf1 = this.width;
        this.tg = this.height;
        this.s2 = parseInt(this.gD);
        this.s3 = parseInt(this.gE);
        this.th = parseInt(this.gD);
        this.ti = parseInt(this.gE);
        var s8 = (360 / sj[this.AG]);
        this.gk = 1.0;
        this.wT = 0.0;
        for (var i in this.pU) {
            if (this.pU[i] != null) {
                this.pU[i].c2 = false
            }
        }
        for (qx = -this.z4 - 1; qx <= this.z4; qx++) {
            for (qz = -this.z5 - 1; qz <= this.z5; qz++) {
                try {
                    var pM = this.maplet.strImgUrl + "mapbank/" + yk + "/" + this.sR;
                    var qy = parseInt(this.gD + qx);
                    var qA = parseInt(this.gE + qz);
                    qy = (qy) % s8;
                    if (qy >= (s8 / 2)) qy -= s8;
                    if (qy < (-s8 / 2)) qy += s8;
                    var dirx = parseInt(Math.floor((qy) / nL));
                    var diry = parseInt(Math.floor((qA) / nL)); {
                        if (dirx < 0) dirx += 1;
                        if (diry < 0) diry += 1
                    }
                    var F3L = (qy) - dirx * nL;
                    var d6t31 = (qA) - diry * nL;
                    pM += dirx + "_" + diry + "/";
                    pM += F3L + "_" + d6t31 + "." + this.xK;
                    var p1 = (qx * this.imgWidth) + parseInt(this.mapX);
                    var p3 = (-(qz * this.imgHeight) + parseInt(this.mapY));
                    var p4 = p3;
                    if (this.yl != "aerial" && this.yl.indexOf("aerial") < 0) {
                        p3 = p3 + w8[this.AG]
                    }
                    if (p1 < -this.imgWidth || p1 > this.width || p3 > this.height || p3 < -this.imgHeight) continue;
                    if (this.sZ < (p1 + this.imgWidth)) {
                        this.sZ = (p1 + this.imgWidth);
                        this.s2 = parseInt(this.gD) + parseInt(qx)
                    }
                    if (this.s1 < (p3 + this.imgHeight)) {
                        this.s1 = (p3 + this.imgHeight);
                        this.ti = parseInt(this.gE) + parseInt(qz)
                    }
                    if (this.tf1 > p1) {
                        this.tf1 = p1;
                        this.th = parseInt(this.gD) + parseInt(qx)
                    }
                    if (this.tg > p3) {
                        this.tg = p3;
                        this.s3 = parseInt(this.gE) + parseInt(qz)
                    }
                    var xY = "__ov_ctrl_" + ((this.AG).toString(16) + (this.gD + qx).toString(16) + 'l' + (this.gE + qz).toString(16)).toLowerCase();
                    if (pM && pM.indexOf("NaN") < 0) {
                        if (this.pU[xY] == null) {
                            this.pU[xY] = new Image();
                            this.pU[xY].id = xY;
                            this.pU[xY].name = xY;
                            this.pU[xY].ntry = "0";
                            this.pU[xY].unselectable = "on";
                            this.pU[xY].style.position = "absolute";
                            this.pU[xY].onmousedown = function () {
                                return false
                            };
                            this.pU[xY].ohT15 = "no";
                            this.pU[xY].src = pM
                        }
                        var p2 = (p1 + this.imgWidth / 2 - this.width / 2) * this.gk - (p3 + this.imgHeight / 2 - this.height / 2) * this.wT + this.width / 2;
                        var p5 = (p1 + this.imgWidth / 2 - this.width / 2) * this.wT + (p3 + this.imgHeight / 2 - this.height / 2) * this.gk + this.height / 2;
                        this.pU[xY].style.top = parseInt(p5 - this.imgHeight / 2) + "px";
                        this.pU[xY].style.left = parseInt(p2 - this.imgWidth / 2) + "px";
                        this.pU[xY].c2 = true
                    }
                    pM = null;
                    xY = null
                } catch (lM) {}
            }
        }
        for (var i in this.pU) {
            var img = this.pU[i];
            if (img && img.c2 && img.parentNode != this.x18) this.x18.appendChild(img)
        }
        f6oO.apply(this);
        C38.apply(this);
        this.x18.style.top = this.x18.style.left = "0px"
    };
    var C38 = function () {
        var Ae = parseInt(this.maplet.width * this.maplet.xg / this.xg);
        var zZ = parseInt(this.maplet.height * this.maplet.xf / this.xf);
        if (Ae > this.width && zZ > this.height) {
            QlX.apply(this, [false])
        } else {
            this.z3.style.left = parseInt(this.width - Ae) / 2 + "px";
            this.z3.style.top = parseInt(this.height - zZ) / 2 + "px";
            this.z3.style.width = (Ae) + "px";
            this.z3.style.height = (zZ) + "px";
            this.z1.style.left = parseInt(this.width - Ae) / 2 + "px";
            this.z1.style.top = parseInt(this.height - zZ) / 2 + "px";
            this.z1.style.width = (Ae) + "px";
            this.z1.style.height = (zZ) + "px";
            this.z2.style.left = parseInt(this.width - Ae) / 2 + "px";
            this.z2.style.top = parseInt(this.height - zZ) / 2 + "px";
            this.z2.style.width = (Ae) + "px";
            this.z2.style.height = (zZ) + "px";
            QlX.apply(this, [true])
        }
    };
    var QlX = function (visible) {
        this.z3.style.visibility = visible ? "visible" : "hidden";
        this.z1.style.visibility = visible ? "visible" : "hidden";
        this.z2.style.visibility = visible ? "visible" : "hidden"
    };
    this.getRect = function () {
        var r = {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: 0,
                y: 0
            }
        };
        if (typeof this.img != "undefined") {
            var o5H7u = (this.panel.style.display != "none");
            var iD$3 = (this.img.style.display != "none");
            if (o5H7u || iD$3) {
                var d = this.c3 ? this.shadow : this.img;
                r = {
                    min: {
                        x: d.offsetLeft,
                        y: d.offsetTop
                    },
                    max: {
                        x: 0,
                        y: 0
                    }
                };
                r.max.x = r.min.x + d.offsetWidth;
                r.max.y = r.min.y + d.offsetHeight
            }
        }
        return r
    };
    var E446 = function () {
        var o5H7u = (this.panel.style.display != "none");
        if (this.fg) this.img.style.display = "";
        this.uq();
        H3h.apply(this);
        QlX.apply(this, [false]);
        this.shadow.style.display = "none";
        if (this.fg || o5H7u) {
            with(this.panel.style) {
                if (px) {
                    filter = "alpha(opacity=100)"
                } else {
                    opacity = "1"
                }
            }
        }
        if (this.fg) {
            with(this.$90.style) {
                left = "-26px";
                top = "-124px"
            }
        }
        with(this.img.style) {
            if (px) {
                filter = "alpha(opacity=0)"
            } else {
                opacity = "0"
            }
        }
        var yw = 0,
            d = 10;
        var p = {
            b: 0,
            c: 1
        };
        var xvd3 = {
            b: 0,
            c: 1
        };

        function h8425() {
            if (yw < d) {
                yw++;
                if (px) {
                    this.panel.style.filter = "alpha(opacity=" + (100 - hfIV7(yw, p.b, p.c, d) * 100) + ")";
                    if (this.fg) this.img.style.filter = "alpha(opacity=" + hfIV7(yw, xvd3.b, xvd3.c, d) * 100 + ")";
                    else this.img.style.filter = "alpha(opacity=" + (100 - hfIV7(yw, xvd3.b, xvd3.c, d) * 100) + ")"
                } else {
                    this.panel.style.opacity = 1 - hfIV7(yw, p.b, p.c, d);
                    if (this.fg) this.img.style.opacity = hfIV7(yw, xvd3.b, xvd3.c, d);
                    else this.img.style.opacity = 1 - hfIV7(yw, xvd3.b, xvd3.c, d)
                }
                this.yN = getTimeout(this, h8425, 100)
            } else {
                this.panel.style.display = "none";
                this.img.style.display = this.fg ? "" : "none";
                this.cl = false;
                this.c3 = false;
                this.uq()
            }
        };
        h8425.apply(this)
    };
    var _eD$ = function () {
        if (this.panel.style.display != "none") return;
        H3h.apply(this);
        QlX.apply(this, [false]);
        with(this.panel.style) {
            display = this.fg ? "" : "none";
            if (px) {
                filter = "alpha(opacity=0)"
            } else {
                opacity = "0"
            }
        }
        with(this.img.style) {
            display = this.fg ? "" : "none";
            if (px) {
                filter = "alpha(opacity=0)"
            } else {
                opacity = "0"
            }
        }
        with(this.$90.style) {
            top = "-125px";
            left = "-42px"
        }
        var yw = 0,
            d = 10;
        var p = {
            b: 0,
            c: 1
        };
        var xvd3 = {
            b: 0,
            c: 1
        };

        function h8425() {
            if (yw < d) {
                yw++;
                if (px) {
                    this.panel.style.filter = "alpha(opacity=" + hfIV7(yw, p.b, p.c, d) * 100 + ")";
                    this.img.style.filter = "alpha(opacity=" + hfIV7(yw, xvd3.b, xvd3.c, d) * 100 + ")"
                } else {
                    this.panel.style.opacity = hfIV7(yw, p.b, p.c, d);
                    this.img.style.opacity = hfIV7(yw, xvd3.b, xvd3.c, d)
                }
                this.yN = getTimeout(this, h8425, 100)
            } else {
                if (px) {
                    this.panel.style.filter = null
                } else {
                    this.shadow.style.opacity = 1
                }
                this.shadow.style.display = this.fg ? "" : "none";
                this.c4 = false;
                this.c3 = true;
                this.uq();
                this.paint()
            }
        };
        h8425.apply(this)
    };
    var H3h = function () {
        if (this.yN) {
            window.clearTimeout(this.yN);
            this.yN = null
        }
    };
    var hfIV7 = function (yw, b, c, d) {
        if (yw == 0) return b;
        if (yw == d) return b + c;
        if ((yw /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (yw - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --yw) + 2) + b
    };
    this.B25 = function (location) {
        location = location || {};
        if (typeof location.type != "number" && !(location.type == Maplet.LEFT_TOP || location.type == Maplet.LEFT_BOTTOM || location.type == Maplet.RIGHT_TOP || location.type == Maplet.LEFT_BOTTOM)) location.type = Maplet.RIGHT_BOTTOM;
        if (typeof location.marginx != "number") location.marginx = 6;
        if (typeof location.marginy != "number") location.marginy = 6;
        return location
    };
    this.setLocation = function (location) {
        this.location = this.B25(location);
        this.w1e3A()
    };
    this.resizeTo = function (w, h) {
        if (typeof w != "number") {
            w = 150
        } else {
            if (w < 100) w = 100;
            else if (w > 210) w = 210
        }
        if (typeof h != "number") {
            h = 140
        } else {
            if (h < 100) h = 100;
            else if (h > 210) h = 210
        }
        OVER_WIN_WIDTH = w;
        OVER_WIN_HEIGHT = h;
        this.onresize();
        this.paint()
    };
    var A9VR = function () {
        with(this.location) {
            if (type == Maplet.LEFT_TOP) {
                O7A07 = marginx;
                sC9 = marginy;
                oY67 = O7A07 + JC3.i8w3 + 4;
                H29r = sC9 + JC3.cNmc + 4
            } else if (type == Maplet.LEFT_BOTTOM) {
                O7A07 = marginx;
                sC9 = this.maplet.height - OVER_WIN_HEIGHT - marginy;
                oY67 = O7A07 + JC3.i8w3 + 4;
                H29r = sC9 + OVER_WIN_HEIGHT - uS - JC3.cNmc - 1
            } else if (type == Maplet.RIGHT_TOP) {
                O7A07 = this.maplet.width - OVER_WIN_WIDTH - marginx;
                sC9 = marginy;
                oY67 = O7A07 + OVER_WIN_WIDTH - uS - JC3.i8w3 - 2;
                H29r = sC9 + JC3.cNmc + 4
            } else if (type == Maplet.RIGHT_BOTTOM) {
                O7A07 = this.maplet.width - OVER_WIN_WIDTH - marginx;
                sC9 = this.maplet.height - OVER_WIN_HEIGHT - marginy;
                oY67 = O7A07 + OVER_WIN_WIDTH - uS - JC3.i8w3 - 2;
                H29r = sC9 + OVER_WIN_HEIGHT - uS - JC3.cNmc - 1
            }
        }
    };
    this.w1e3A = function () {
        A9VR.apply(this);
        with(this.panel.style) {
            width = OVER_WIN_WIDTH + "px";
            height = OVER_WIN_HEIGHT + "px";
            left = O7A07 + "px";
            top = sC9 + "px"
        }
        with(this.shadow.style) {
            width = OVER_WIN_WIDTH + JC3.sUp + "px";
            height = OVER_WIN_HEIGHT + JC3.sUp + "px";
            left = O7A07 - JC3.sUp / 2 + "px";
            top = sC9 - JC3.sUp / 2 + "px"
        }
        with(this.fC.style) {
            width = OVER_WIN_WIDTH - JC3.i8w3 * 2 - VS8w8(borderWidth) * 2 + "px";
            height = OVER_WIN_HEIGHT - JC3.cNmc * 2 - VS8w8(borderWidth) * 2 + "px";
            left = JC3.i8w3 + "px";
            top = JC3.cNmc + "px"
        }
        with(this.x18.style) {
            width = this.fC.style.width;
            height = this.fC.style.height;
            top = left = "0px"
        }
        with(this.img.style) {
            width = uS + "px";
            height = uS + "px";
            left = oY67 + "px";
            top = H29r + "px"
        }
        with(this.$90.style) {
            if (this.c3) {
                top = "-125px";
                left = "-42px"
            } else {
                left = "-26px";
                top = "-124px"
            }
        }
        this.shadow.innerHTML = "";
        if (Nfy) {
            for (var i = 0; i < this.C5Y.length; i++) {
                var N0M = document.createElement("div");
                N0M.unselectable = "on";
                N0M.style.position = "absolute";
                N0M.style.zIndex = i;
                N0M.style.backgroundColor = "black";
                N0M.setAttribute(B8577, true);
                N0M.style.left = i * 2 + "px";
                N0M.style.top = i * 2 + "px";
                N0M.style.width = (OVER_WIN_WIDTH + (this.C5Y.length - i) * 4 + 2) + "px";
                N0M.style.height = (OVER_WIN_HEIGHT + (this.C5Y.length - i) * 4 + 2) + "px";
                if (px) N0M.style.filter = "alpha(opacity=" + this.C5Y[i] + ")";
                else N0M.style.opacity = this.C5Y[i] / 100;
                this.shadow.appendChild(N0M)
            }
        } else {
            var x = JC3.sUp / 2 - JC3.rVM;
            var y = x;
            var w = JC3.a3$;
            var h = JC3.a3$;
            var s = ["<div style=\"position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:" + h + "px;overflow:hidden;\"><img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:-28px;top:-103px;\"></div>"];
            x += JC3.a3$;
            w = OVER_WIN_WIDTH - JC3.a3$ + 1;
            h = JC3.rVM;
            s.push("<div style=\"position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:" + h + "px;overflow:hidden;\"><img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:0px;top:-226px;\"></div>");
            x += w;
            w = JC3.a3$;
            h = w;
            s.push("<div style=\"position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:" + h + "px;overflow:hidden;\"><img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:-38px;top:-103px;\"></div>");
            x = OVER_WIN_WIDTH + JC3.a3$ + JC3.rVM;
            y += JC3.a3$;
            h = OVER_WIN_HEIGHT - JC3.a3$ + 1;
            s.push("<div style=\"position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:" + h + "px;overflow:hidden;\"><img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:-81px;top:0px;\"></div>");
            x = x - JC3.rVM - 1;
            y += h;
            w = JC3.a3$;
            h = w;
            s.push("<div style=\"position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:" + h + "px;overflow:hidden;\"><img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:-38px;top:-113px;\"></div>");
            x = JC3.sUp / 2 - JC3.rVM + JC3.a3$;
            y += JC3.rVM + 1;
            w = OVER_WIN_WIDTH - JC3.a3$ + 1;
            s.push("<div style=\"position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:" + h + "px;overflow:hidden;\"><img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:0px;top:-229px;\"></div>");
            x = JC3.sUp / 2 - JC3.rVM;
            y = y - JC3.rVM - 1;
            w = JC3.a3$;
            h = w;
            s.push("<div style=\"position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:" + h + "px;overflow:hidden;\"><img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:-28px;top:-113px;\"></div>");
            y = JC3.sUp / 2 - JC3.rVM + JC3.a3$;
            h = OVER_WIN_HEIGHT - JC3.a3$ + 1;
            w = JC3.rVM;
            s.push("<div style=\"position:absolute;left:" + x + "px;top:" + y + "px;width:" + w + "px;height:" + h + "px;overflow:hidden;\"><img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:-78px;top:0px;\"></div>");
            this.shadow.innerHTML = s.join("")
        }
    };
    var x46B = function () {
        var rt = yKw0S.apply(this);
        var vj = 0,
            vk = 0;
        if (rt.min.x < 0) vj = 5;
        if (rt.min.y < 0) vk = 5;
        if (rt.max.x > VS8w8(this.fC.style.width)) vj = -5;
        if (rt.max.y > VS8w8(this.fC.style.height)) vk = -5;
        if ((vj != 0 || vk != 0)) {
            this.panTo(vj, vk)
        }
    };
    var yKw0S = function () {
        var r = {
            min: {
                x: this.z2.offsetLeft,
                y: this.z2.offsetTop
            },
            max: {
                x: 0,
                y: 0
            }
        };
        r.max.x = r.min.x + this.z2.offsetWidth;
        r.max.y = r.min.y + this.z2.offsetHeight;
        return r
    };
    this.panTo = function (x, y) {
        this.x18.style.top = VS8w8(this.x18.style.top) + y + "px";
        this.x18.style.left = VS8w8(this.x18.style.left) + x + "px"
    };
    var zL = function () {
        if (this.fs || this.c0) return;
        var sP = parseInt(this.x18.style.left);
        var sQ = parseInt(this.x18.style.top);
        if ((sP + this.tf1) >= 0 || (sP + this.sZ - this.width) <= 0 || (sQ + this.tg) >= 0 || (sQ + this.s1 - this.height) <= 0) {
            this.fs = true;
            zA.apply(this)
        }
    };
    var zA = function () {
        if (this.fs == false) return;
        var sP = parseInt(this.x18.style.left);
        var sQ = parseInt(this.x18.style.top);
        if ((sP + this.tf1) >= 0 || (sP + this.sZ - this.width) <= 0) {
            if (this.c0 == true) return;
            this.c0 = true;
            var qy = 0;
            var p1 = 0;
            if ((sP + this.tf1) >= 0) {
                this.th--;
                this.tf1 -= parseInt(this.imgWidth);
                qy = this.th;
                p1 = this.tf1
            }
            if ((sP + this.sZ - this.width) <= 0) {
                this.s2++;
                p1 = this.sZ;
                this.sZ += parseInt(this.imgWidth);
                qy = this.s2
            }
            var qx = qy;
            var nL = nM[this.AG];
            var s8 = parseInt(360 / sj[this.AG]);
            qy = (qy) % s8;
            if (qy >= (s8 / 2)) qy -= s8;
            if (qy < (-s8 / 2)) qy += s8;
            var yk = this.yl;
            for (var qz = this.ti; qz <= this.s3; qz++) {
                var qA = qz;
                var p3 = (-(qz - this.ti + 1) * this.imgHeight) + this.s1;
                aA.apply(this, [p1, p3, qy, qA, qx, qz, yk])
            }
            this.c0 = false
        }
        if ((sQ + this.tg) >= 0 || (sQ + this.s1 - this.height) <= 0) {
            if (this.c0 == true) return;
            this.c0 = true;
            var qA = 0;
            var p3 = 0;
            if ((sQ + this.tg) >= 0) {
                this.s3++;
                this.tg -= parseInt(this.imgHeight);
                qA = this.s3;
                p3 = this.tg
            }
            if ((sQ + this.s1 - this.height) <= 0) {
                this.ti--;
                p3 = this.s1;
                this.s1 += parseInt(this.imgHeight);
                qA = this.ti
            }
            var qz = qA;
            var nL = nM[this.AG];
            var s8 = parseInt(360 / sj[this.AG]);
            var yk = this.yl;
            for (var qx = this.th; qx <= this.s2; qx++) {
                var qy = qx;
                qy = (qy) % s8;
                if (qy >= (s8 / 2)) qy -= s8;
                if (qy < (-s8 / 2)) qy += s8;
                var p1 = ((qx - this.th) * this.imgWidth) + this.tf1;
                aA.apply(this, [p1, p3, qy, qA, qx, qz, yk])
            }
            this.c0 = false
        }
        this.fs = false
    };
    var aA = function (p1, p3, qy, qA, qx, qz, yk) {
        var nL = nM[this.AG];
        var dirx = parseInt(Math.floor((qy) / nL));
        var diry = parseInt(Math.floor((qA) / nL));
        if (dirx < 0) dirx += 1;
        if (diry < 0) diry += 1;
        var F3L = (qy) - dirx * nL;
        var d6t31 = (qA) - diry * nL;
        var pM = this.maplet.strImgUrl.replace("img", "img" + this.maplet.sW146(F3L, d6t31)) + "mapbank/" + yk + "/" + this.sR;
        var xY = "__ov_ctrl_" + ((this.AG).toString(16) + qx.toString(16) + 'l' + qz.toString(16)).toLowerCase();
        pM += dirx + "_" + diry + "/";
        pM += F3L + "_" + d6t31 + "." + this.xK;
        if (pM && pM.indexOf("NaN") < 0) {
            if (this.pU[xY] == null) {
                this.pU[xY] = new Image();
                this.pU[xY].id = xY;
                this.pU[xY].name = xY;
                this.pU[xY].ntry = "0";
                this.pU[xY].unselectable = "on";
                this.pU[xY].style.position = "absolute";
                this.pU[xY].onmousedown = function () {
                    return false
                };
                this.pU[xY].ohT15 = "no";
                this.pU[xY].src = pM
            }
            var p2 = (p1 + this.imgWidth / 2 - this.width / 2) * this.gk - (p3 + this.imgHeight / 2 - this.height / 2) * this.wT + this.width / 2;
            var p5 = (p1 + this.imgWidth / 2 - this.width / 2) * this.wT + (p3 + this.imgHeight / 2 - this.height / 2) * this.gk + this.height / 2;
            this.pU[xY].style.top = parseInt(p5 - this.imgHeight / 2) + "px";
            this.pU[xY].style.left = parseInt(p2 - this.imgWidth / 2) + "px";
            this.pU[xY].c2 = true;
            this.x18.div.appendChild(this.pU[xY]);
            xY = null
        }
        pM = null
    };
    this.location = this.B25(OVER_LOCATION)
};
JC3.i8w3 = 2;
JC3.cNmc = 2;
JC3.rVM = 3;
JC3.sUp = 16;
JC3.a3$ = 7;

function MStandardControl(x6, left, top, fi) {
    this.x6 = (typeof x6 == "undefined") ? "mapbar" : x6;
    this.left = (typeof left == "undefined") ? 0 : parseInt(left);
    this.top = (typeof top == "undefined") ? 0 : parseInt(top);
    this.fi = (typeof fi == "undefined") ? 0 : parseInt(fi);
    this.id = new Date().getTime() + parseInt(Math.random() * 1000);
    this.nR = null;
    this.initialize = function (maplet) {
        this.maplet = maplet;
        if (this.maplet.gc[this.id] == null) {
            if (!this.fi && this.maplet.height < 300) {
                if (bsc) this.fi = 1
            }
            this.maplet.gc[this.id] = this;
            this.nR = new gb(typeof this.x6 != "object" ? null : this.x6);
            this.nR.initialize(this.maplet);
            if (this.maplet.controlCanvas == null) this.maplet.controlCanvas = this.nR
        }
    };
    this.remove = function () {
        this.maplet = null;
        if (this.nR) {
            if (this.nR == this.maplet.controlCanvas) this.maplet.controlCanvas = null;
            this.nR.g1();
            this.nR = null
        }
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MStandardControl'
    }
};

function MLookupControl(ya, left, top) {
    this.ya = (typeof ya == "undefined") ? tX("%u62CD%uCB0F%uD02B%uF3C7") : ya;
    this.left = (typeof left == "undefined") ? 0 : parseInt(left);
    this.top = (typeof top == "undefined") ? 0 : parseInt(top);
    this.id = new Date().getTime() + parseInt(Math.random() * 1000);
    this.onresize = function (maplet) {
        if (this.maplet.overview.nF() <= 37) {
            this.tY.style.left = (this.maplet.width - 132 + this.left - this.maplet.overview.nH()) + "px"
        } else {
            this.tY.style.left = (this.maplet.width - 132 + this.left) + "px"
        }
    };
    this.initialize = function (maplet) {
        this.maplet = maplet;
        if (this.maplet.gc[this.id] == null) {
            this.maplet.gc[this.id] = this;
            this.tY = document.createElement("div");
            this.tY.style.position = "absolute";
            this.onresize(this.maplet);
            this.tY.style.top = (10 + this.top) + "px";
            this.tY.style.zIndex = 10;
            this.tY.style.visibility = "visible";
            this.tU = document.createElement("img");
            this.tU.unselectable = "on";
            this.tU.src = strImgsvrUrl + "images/lookup.png";
            this.tU.alt = this.ya;
            this.tU.style.cursor = "hand";
            this.tU.style.cursor = "pointer";
            this.tU.panel = this;
            this.tU.maplet = this.maplet;
            this.tU.onclick = function () {
                this.maplet.setMode("lookup");
                MEvent.trigger(this.panel, "onclick")
            };
            this.tY.appendChild(this.tU);
            this.maplet.panel.appendChild(this.tY)
        }
    };
    this.remove = function () {
        this.maplet = null;
        if (this.tY != null && this.tY.parentNode != null) {
            this.tY.parentNode.removeChild(this.tY);
            this.tY = null;
            this.tU.maplet = null;
            this.tU.onclick = null;
            this.tU = null
        }
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MLookupControl'
    }
};
var MContextMenuItem = function (title, fy) {
    this.ao = [];
    this.title = title;
    this.callback = (typeof fy == "undefined") ? null : fy;
    this.t6 = document.createElement("tr");
    this.tW = document.createElement("td");
    this.tW.className = "contextmenuitem";
    this.tW.innerHTML = "&nbsp;" + title;
    this.t6.appendChild(this.tW);
    this.uK = function (lM) {
        this.panel.hide();
        if (typeof this.callback == "function" && this.callback) {
            this.callback.apply(null, [this, this.panel, this.panel.overlay])
        } else if (typeof this.callback == "string" && this.callback) {
            eval(this.callback)
        } else {
            MEvent.trigger(this, "select", this, this.panel, this.panel.overlay)
        }
    };
    this.uG = function (lM) {
        this.t6.style.backgroundColor = "#d2e1ff"
    };
    this.uJ = function (lM) {
        this.t6.style.backgroundColor = "#FFFFFF"
    };
    this.paint = function (panel) {
        this.panel = panel;
        this.panel.t8.appendChild(this.t6)
    };
    this.toString = function () {
        return "com.mapbar.maplet.MContextMenuItem"
    };
    this.ao["click"] = MEvent.bindDom(this.t6, "click", this, this.uK);
    this.ao["mouseover"] = MEvent.bindDom(this.t6, "mouseover", this, this.uG);
    this.ao["mouseout"] = MEvent.bindDom(this.t6, "mouseout", this, this.uJ);
    this.remove = function () {
        if (this.panel) this.panel = null;
        for (var l8 in this.ao) {
            MEvent.removeBuiltInListener(this.t6, l8, this.ao[l8]);
            delete this.ao[l8]
        }
        this.ao = null;
        if (this.t6) {
            if (this.t6.parentNode) _removeNode(this.t6);
            this.t6 = null
        }
        if (typeof this.callback == "function" && this.callback) this.callback = null
    }
};
var MContextMenu = function () {
    this.overlay = null;
    this.u5 = {};
    this.f43c9 = "";
    this.qt = new Array();
    this.id = new Date().getTime() + parseInt(Math.random() * 1000);
    this.tY = document.createElement("div");
    this.tY.className = "mapcontextmenu";
    this.t7 = document.createElement("table");
    this.t7.className = "contextmenutable";
    this.t8 = document.createElement("tbody");
    this.t7.appendChild(this.t8);
    this.tY.appendChild(this.t7);
    this.initialize = function (maplet) {
        this.maplet = maplet;
        this.maplet.sF.appendChild(this.tY)
    };
    this._0n = function (id) {
        this.f43c9 = id
    };
    this.X1xA = function (DA0a2) {
        this.overlay = DA0a2
    };
    this.addOverlay = function (DA0a2) {
        this.u5[DA0a2.id] = DA0a2
    };
    this.removeOverlay = function (DA0a2) {
        if (this.u5[DA0a2.id]) {
            if (this.overlay == this.u5[DA0a2.id]) this.hide();
            this.u5[DA0a2.id] = null;
            delete this.u5[DA0a2.id]
        }
    };
    this.getOverlaySize = function () {
        var c = 0;
        for (var i in this.u5) c++;
        return c
    };
    this.containsOverlay = function (DA0a2) {
        return typeof this.u5[DA0a2.id] != "undefined" && this.u5[DA0a2.id]
    };
    this.update = function () {
        for (var i in this.t8.childNodes) {
            if (typeof this.t8.childNodes[i] == "object") {
                if (this.t8.childNodes[i].panel != null) this.t8.childNodes[i].panel = null;
                this.t8.removeChild(this.t8.childNodes[i])
            }
        }
        for (var qC = 0; qC < this.qt.length; qC++) {
            this.qt[qC].paint(this)
        }
    };
    this.addItem = function (item, pn) {
        if (typeof pn == "undefined") {
            this.qt[this.qt.length] = item
        } else {
            pn = parseInt(pn);
            this.qt.splice(pn, 0, item)
        }
        this.update()
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (finalize) {
        if (this.getOverlaySize() > 0) {
            for (var i in this.u5) this.u5[i].removeContextMenu()
        }
        if (typeof this.maplet == "object" && this.maplet) {
            if (this == this.maplet.xc) this.maplet.xc = null;
            this.maplet = null
        }
        if (typeof finalize != "boolean") finalize = false;
        if (finalize) {
            this.clear();
            _removeNode(this.tY);
            this.tY = null;
            this.qt = null
        }
    };
    this.removeItem = function (pn) {
        if (pn < this.qt.length) this.qt[pn].remove();
        this.qt.splice(pn, 1);
        this.update()
    };
    this.clear = function () {
        for (var i = 0; i < this.qt.length; i++) {
            this.qt[i].remove()
        }
        this.qt = new Array();
        this.update()
    };
    this.show = function (x, y) {
        this.tY.style.left = parseInt(x) + "px";
        this.tY.style.top = parseInt(y) + "px";
        this.tY.style.visibility = "visible"
    };
    this.hide = function () {
        this.tY.style.visibility = "hidden"
    };
    this.toString = function () {
        return "com.mapbar.maplet.MContextMenu"
    }
};
var MSnapshotBox = function (a611, style) {
    if (!(a611 instanceof Maplet) && !a611) throw new Error("parameter para_maplet is invalid Maplet object.");
    var x6 = (typeof style != "string" || !style) ? "" : style + "/";
    var MJhR = SNAPSHOT_SERVER;
    var QAE7 = SNAPSHOT_SERVER + "get";
    var maplet = a611;
    var wAWE = new Date().getTime();
    var ao = [];
    var w91oR = "MSnapshotSizeTip" + wAWE;
    var OfWGp = w91oR + "_td";
    var Wcf = '<table cellpadding="2" cellspacing="0" style="background-color:#0E347F;color:#ff0;font-size:14px;font-family:Arial;-moz-user-select:none;-khtml-user-select:none;user-select:none;" onselectstart="return false;"><tr><td id="' + OfWGp + '"></td></tr></table>';
    var Owx05 = new fD(w91oR, 0, 0, 0, 0, false, 24, Wcf, maplet.panel);
    Owx05.div.style.width = "auto";
    Owx05.div.style.height = "auto";
    var sh3 = "MSnapshotBox" + wAWE;
    var q$R1t = '<table width="100%" height="100%" style="border:2px solid #0E347F;-moz-user-select:none;-khtml-user-select:none;user-select:none;" onselectstart="return false;" cellpadding="0" cellspacing="0"><tr><td style="background-color:#FFFFFF;filter:alpha(opacity=30);opacity:0.3;"></td></tr></table>';
    var $X3j = new fD(sh3, 0, 0, 0, 0, false, 24, q$R1t, maplet.panel);
    $X3j.div.style.overflow = "hidden";
    var Ve8 = 117;
    var d7$3 = 23;
    var ib_J7 = "MSnapshotBar" + wAWE;
    var cIj$9 = "MSnapshotBtn_preview_" + wAWE;
    var Lag3e = "MSnapshotBtn_download_" + wAWE;
    var r5$X = "MSnapshotBtn_cancel_" + wAWE;
    var b4w3I = "";
    b4w3I = '<font id="' + cIj$9 + '" class="snapshotTextBtn">\u9884\u89c8</font><font id="' + Lag3e + '" class="snapshotTextBtn">\u4fdd\u5b58</font><font id="' + r5$X + '" class="snapshotTextBtn" style="border-right: 1px solid #0E347F;">\u53d6\u6d88</font>';
    var c35 = new fD(ib_J7, 0, 0, 0, 0, false, 24, b4w3I, maplet.panel);
    c35.style.lineHeight = d7$3 + "px";
    var NE2 = "mapbar_snapshot_iframe";
    var iframe = null;
    var _s9t = "mapbar_snapshot_frm";
    var s4723 = null;
    var AbF9T = 0;
    var U26V2 = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        rect: {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: 0,
                y: 0
            }
        },
        center: ""
    };
    this.yG6 = false;
    this.pD7tE = false;
    this.show = function () {
        if (ao.length == 0) {
            ao.push(MEvent.bindDom(document.getElementById(ib_J7), "mousedown", this, jrDQq));
            ao.push(MEvent.bindDom(document.getElementById(cIj$9), "click", this, X4PY0));
            ao.push(MEvent.bindDom(document.getElementById(Lag3e), "click", this, $Ic));
            ao.push(MEvent.bindDom(document.getElementById(r5$X), "click", this, this.hide))
        }
        n7F();
        this.hide();
        $X3j.show();
        Owx05.show()
    };
    this.hide = function () {
        var l8 = I6O1(this.hide);
        if (typeof l8 != "undefined" && l8) {
            if (l8.type == "click") {
                var target = typeof l8.target != "undefined" ? l8.target : l8.srcElement;
                var id = target.id;
                if (id == r5$X) MEvent.trigger(maplet, "snapshot_done", "cancel");
                else if (id == cIj$9) MEvent.trigger(maplet, "snapshot_done", "preview");
                else if (id == Lag3e) MEvent.trigger(maplet, "snapshot_done", "download")
            }
        }
        oHTjb();
        vO4();
        Q24()
    };
    var oHTjb = function () {
        $X3j.hide();
        $X3j.resize(0, 0)
    };
    var vO4 = function () {
        Owx05.hide();
        Owx05.moveTo(-1000, -1000)
    };
    var Q24 = function () {
        c35.hide();
        c35.resize(0, 0)
    };
    this.moveTo = function (x, y) {
        $X3j.moveTo(x, y);
        var w057 = y - Owx05.div.firstChild.clientHeight - 2;
        Owx05.moveTo(x, w057);
        if (y - Owx05.div.offsetHeight < 0) {
            Owx05.moveTo(x + 3, w057 + Owx05.div.offsetHeight + 5)
        }
    };
    this.resize = function (w, h) {
        w = w < 0 ? 0 : w;
        h = h < 0 ? 0 : h;
        $X3j.resize(w, h);
        this.$8y74(w + " x " + h)
    };
    this.$8y74 = function (text) {
        document.getElementById(OfWGp).innerHTML = text
    };
    this.isVisible = function () {
        return document.getElementById(sh3).style.visibility != "hidden" ? true : false
    };
    this.B2$0 = function () {
        this.yG6 = true;
        a27e();
        var x = U26V2.x + U26V2.width - Ve8 - 2;
        var y = U26V2.y + U26V2.height;
        if (y + d7$3 > maplet.height) y -= d7$3 + (px ? 4 : 3);
        c35.resize(Ve8, d7$3);
        c35.moveTo(x, y);
        c35.show();
        maplet.KY4("pointer", document.getElementById(cIj$9));
        maplet.KY4("pointer", document.getElementById(Lag3e));
        maplet.KY4("pointer", document.getElementById(r5$X));
        MEvent.trigger(maplet, "snapshot_select", {
            x: U26V2.x,
            y: U26V2.y,
            width: U26V2.width,
            height: U26V2.height
        })
    };
    this.snapshot = function (options) {
        if (typeof options != "object") options = {};
        if (typeof options.mode != "string" || (options.mode != "fullscreen" && options.mode != "custom")) options.mode = SNAPSHOT_OPTIONS.mode;
        if (typeof options.x == "undefined" || isNaN(options.x)) options.x = 0;
        if (typeof options.y == "undefined" || isNaN(options.y)) options.y = 0;
        if (typeof options.width == "undefined" || isNaN(options.width)) options.width = maplet.width;
        if (typeof options.height == "undefined" || isNaN(options.height)) options.height = maplet.height;
        if (typeof options.zoom == "undefined" || isNaN(options.zoom)) options.zoom = maplet.getZoomLevel();
        if (typeof options.format != "string") options.format = SNAPSHOT_OPTIONS.format;
        if (typeof options.depth == "undefined" || isNaN(options.depth)) options.depth = SNAPSHOT_OPTIONS.depth;
        if (options.processMode != "string" && (options.processMode != "event" && options.processMode != "download")) options.processMode = SNAPSHOT_OPTIONS.processMode;
        a27e.apply(this, [options]);
        CF1.apply(this, [options])
    };
    var CF1 = function (options) {
        var xf192 = {};
        xf192.center = fo8j.apply(this, [U26V2.center]);
        xf192.point = "";
        xf192._ah0 = "";
        xf192.area = "";
        xf192.width = U26V2.width;
        xf192.height = U26V2.height;
        xf192.zoom = typeof options.zoom == "undefined" ? maplet.getZoomLevel() : options.zoom;
        xf192.format = typeof options.format == "undefined" ? SNAPSHOT_OPTIONS.format : options.format;
        xf192.depth = typeof options.depth == "undefined" ? SNAPSHOT_OPTIONS.depth : options.depth;
        xf192.processMode = typeof options.processMode == "undefined" ? SNAPSHOT_OPTIONS.processMode : options.processMode;
        xf192.fu878 = "";
        xf192.Q02 = "";
        xf192.traffic = false;
        xf192.X475 = "";
        xf192.VN6q = "";
        var JKU = getMarkers();
        if (JKU.length > 0) {
            xf192.point = [];
            for (var i = 0; i < JKU.length; i++) {
                var h853B = JKU[i];
                xf192.point.push(fo8j.apply(this, [h853B.sW.pt.getPid()]) + "," + h853B.text + "," + h853B.P4$0 + "," + h853B.w666 + ",,," + h853B.src + "," + h853B.jfS6F + "," + h853B.t0aW)
            }
            xf192.point = xf192.point.join("|")
        }
        var vw = getPolylines();
        if (vw.length > 0) {
            xf192._ah0 = [];
            xf192.area = [];
            for (var i = 0; i < vw.length; i++) {
                var Of5_5 = [];
                var pts = vw[i].pts;
                for (var P7P9 = 0; P7P9 < pts.length; P7P9++) {
                    Of5_5.push(fo8j.apply(this, [pts[P7P9].getPid()]))
                }
                var brush = vw[i].brush;
                if (vw[i].brush.fill) {
                    xf192.area.push(Of5_5.join(",") + ";" + A21f$(brush.bgcolor) + ";" + (parseFloat(brush.bgtransparency) / 100) + ";" + A21f$(brush.color) + ";" + brush.stroke + ";" + brush.style + ";" + (parseFloat(brush.transparency) / 100))
                } else {
                    xf192._ah0.push(Of5_5.join(",") + ";" + A21f$(brush.color) + ";" + brush.stroke + ";" + brush.style + ";" + (parseFloat(brush.transparency) / 100))
                }
            }
            if (xf192._ah0.length > 0) xf192._ah0 = xf192._ah0.join("|");
            else xf192._ah0 = "";
            if (xf192.area.length > 0) xf192.area = xf192.area.join("|");
            else xf192.area = ""
        }
        var fu878 = maplet.getEllipse();
        if (fu878.length > 0) {
            xf192.fu878 = [];
            for (var i = 0; i < fu878.length; i++) {
                var item = fu878[i];
                var brush = item.brush;
                xf192.fu878.push(fo8j.apply(this, [item.gC.getPid()]) + "," + item.Dw9u + "," + VS8w8(item.wnJ$, "") + "," + A21f$(brush.bgcolor) + "," + (parseFloat(brush.bgtransparency) / 100) + "," + A21f$(brush.color) + "," + brush.stroke + "," + brush.style + "," + (parseFloat(brush.transparency) / 100))
            }
            if (xf192.fu878.length > 0) xf192.fu878 = xf192.fu878.join("|");
            else xf192.fu878 = ""
        }
        var L30 = getRoundRect();
        if (L30.length > 0) {
            xf192.Q02 = [];
            for (var i = 0; i < L30.length; i++) {
                var item = L30[i];
                var brush = item.Q02.brush;
                xf192.Q02.push(fo8j.apply(this, [item.Q02.RD_O7.getPid()]) + "," + fo8j.apply(this, [item.Q02.C4oL.getPid()]) + "," + item.EpS3 + "," + item.u1b$5 + "," + A21f$(brush.bgcolor) + "," + (parseFloat(brush.bgtransparency) / 100) + "," + A21f$(brush.color) + "," + brush.stroke + "," + brush.style + "," + (parseFloat(brush.transparency) / 100))
            }
            if (xf192.Q02.length > 0) xf192.Q02 = xf192.Q02.join("|");
            else xf192.Q02 = ""
        }
        if (maplet.traffic && maplet.traffic.layer.getImgCount()) {
            xf192.traffic = true;
            xf192.X475 = maplet.traffic.options.city;
            xf192.VN6q = maplet.traffic.wm27_()
        }
        CL0h.apply(this, [xf192])
    };
    var fo8j = function (w9L25) {
        return w9L25.indexOf(",") != -1 ? w9L25.replace(",", "_") : w9L25
    };
    var p66 = function () {
        if (AbF9T >= 3) return;
        var taskId = s4723["taskId"].value;
        if (typeof _snapshot_result == "object" && _snapshot_result) {
            if (_snapshot_result.url != "inexistence") {
                switch (_snapshot_result.processMode) {
                case "event":
                case "preview":
                    MEvent.trigger(maplet, "snapshot", _snapshot_result.url);
                    break;
                default:
                    break
                }
                return
            }
        }
        window.setTimeout(function (e5_o) {
            return function () {
                AbF9T++;
                new foy21(QAE7 + "?taskId=" + taskId, function () {
                    p66.apply(e5_o)
                }).f7c0()
            }
        }.apply(this, [this]), 1000)
    };
    var A21f$ = function (color) {
        if (color.substring(0, 3).toLowerCase() == "rgb") {
            return color.replace(new RegExp(",", "g"), "@")
        }
        return color
    };
    var X4PY0 = function () {
        this.hide();
        var options = {};
        options.processMode = "preview";
        CF1.apply(this, [options])
    };
    var $Ic = function () {
        this.hide();
        var options = {};
        options.processMode = "download";
        CF1.apply(this, [options])
    };
    var jrDQq = function (lM) {
        B982(lM)
    };
    var getMarkers = function () {
        var v6 = [];
        var skY = maplet.getMarkers();
        if (skY.length > 0) {
            for (var i = 0; i < skY.length; i++) {
                if (!skY[i].icon) continue;
                if (!skY[i].icon.isVisible()) continue;
                var X_4 = skY[i];
                var icon = X_4.icon;
                var dkb = 0,
                    _c4k6 = 0,
                    $06 = 0,
                    h1R4 = 0;
                var Y2y94 = 0,
                    yf6 = 0;
                Y2y94 = dkb = parseInt(icon.div.style.left);
                yf6 = _c4k6 = parseInt(icon.div.style.top);
                $06 = icon.div.clientWidth;
                h1R4 = icon.div.clientHeight;
                var O1CG = "",
                    L34 = "",
                    Wi268 = "";
                if (skY[i].label) {
                    var t626A = X_4.label;
                    O1CG = t626A.getText();
                    L34 = parseInt(t626A.div.style.left);
                    Wi268 = parseInt(t626A.div.style.top);
                    var dHb5 = t626A.div.clientWidth;
                    var i3a = t626A.div.clientHeight;
                    if (L34 < dkb) dkb = L34;
                    if (Wi268 < _c4k6) _c4k6 = Wi268;
                    if ((L34 + dHb5) > (dkb + $06)) $06 = L34 + dHb5;
                    if ((Wi268 + i3a) > (_c4k6 + h1R4)) h1R4 = Wi268 + i3a
                }
                if (_isRectint(U26V2.rect, {
                    min: {
                        x: dkb,
                        y: _c4k6
                    },
                    max: {
                        x: dkb + $06,
                        y: _c4k6 + h1R4
                    }
                })) {
                    v6.push({
                        x: Y2y94,
                        y: yf6,
                        jfS6F: skY[i].icon.anchorX,
                        t0aW: skY[i].icon.anchorY,
                        src: icon.getImgUrl(),
                        text: O1CG,
                        P4$0: skY[i].label ? skY[i].label.xoffset : 0,
                        w666: skY[i].label ? skY[i].label.yoffset : 0,
                        sW: skY[i]
                    })
                }
            }
        }
        return v6
    };
    var getPolylines = function () {
        var v6 = [];
        var vw = maplet.getPolylines();
        if (vw.length > 0) {
            for (var i = 0; i < vw.length; i++) {
                var pts = vw[i].pts;
                var SM0h6 = false;
                for (var P7P9 = 0; P7P9 < pts.length; P7P9++) {
                    var E1G$x = pts[P7P9].mapX;
                    var E1G$y = pts[P7P9].mapY;
                    if (_isInsideRect({
                        x: E1G$x,
                        y: E1G$y
                    }, U26V2.rect)) {
                        SM0h6 = true;
                        break
                    }
                    if (P7P9 > 0) {
                        var E1G$P3_6 = pts[P7P9 - 1].mapX;
                        var E1G$r4fSS = pts[P7P9 - 1].mapY;
                        var $FaX_ = {
                            start: {
                                x: U26V2.rect.max.x,
                                y: U26V2.rect.max.y
                            },
                            end: {
                                x: U26V2.rect.max.x,
                                y: U26V2.rect.min.y
                            }
                        };
                        var w$i = {
                            start: {
                                x: E1G$P3_6,
                                y: E1G$r4fSS
                            },
                            end: {
                                x: E1G$x,
                                y: E1G$y
                            }
                        };
                        if (_IsIntersect($FaX_, w$i)) {
                            SM0h6 = true;
                            break
                        }
                        $FaX_ = {
                            start: {
                                x: U26V2.rect.max.x,
                                y: U26V2.rect.min.y
                            },
                            end: {
                                x: U26V2.rect.min.x,
                                y: U26V2.rect.min.y
                            }
                        };
                        if (_IsIntersect($FaX_, w$i)) {
                            SM0h6 = true;
                            break
                        }
                        $FaX_ = {
                            start: {
                                x: U26V2.rect.min.x,
                                y: U26V2.rect.min.y
                            },
                            end: {
                                x: U26V2.rect.min.x,
                                y: U26V2.rect.max.y
                            }
                        };
                        if (_IsIntersect($FaX_, w$i)) {
                            SM0h6 = true;
                            break
                        }
                        $FaX_ = {
                            start: {
                                x: U26V2.rect.min.x,
                                y: U26V2.rect.max.y
                            },
                            end: {
                                x: U26V2.rect.max.x,
                                y: U26V2.rect.max.y
                            }
                        };
                        if (_IsIntersect($FaX_, w$i)) {
                            SM0h6 = true;
                            break
                        }
                    }
                }
                if (!SM0h6 && vw[i].brush.fill) {
                    var vBG = vw[i].pts;
                    var p_E1s = [];
                    for (var P7P9 = 0; P7P9 < vBG.length; P7P9++) p_E1s.push({
                        x: vBG[P7P9].mapX,
                        y: vBG[P7P9].mapY
                    });
                    var Va58l = [{
                        x: U26V2.rect.max.x,
                        y: U26V2.rect.max.y
                    },
                    {
                        x: U26V2.rect.max.x,
                        y: U26V2.rect.min.y
                    },
                    {
                        x: U26V2.rect.min.x,
                        y: U26V2.rect.min.y
                    },
                    {
                        x: U26V2.rect.min.x,
                        y: U26V2.rect.max.y
                    }];
                    for (var P7P9 = 0; P7P9 < p_E1s.length; P7P9++) {
                        if (_isInsidePolygon(p_E1s[P7P9], Va58l)) {
                            SM0h6 = true
                        }
                    }
                    if (!SM0h6) {
                        for (var P7P9 = 0; P7P9 < Va58l.length; P7P9++) {
                            if (_isInsidePolygon(Va58l[P7P9], p_E1s)) {
                                SM0h6 = true
                            }
                        }
                    }
                }
                if (SM0h6) {
                    v6.push(vw[i])
                }
            }
        }
        return v6
    };
    var getRoundRect = function () {
        var v6 = [];
        var L30 = maplet.getRoundRect();
        if (L30.length > 0) {
            for (var i = 0; i < L30.length; i++) {
                var item = L30[i];
                var pr59 = {
                    min: {
                        x: item.RD_O7.mapX,
                        y: item.RD_O7.mapY
                    },
                    max: {
                        x: item.C4oL.mapX,
                        y: item.C4oL.mapY
                    }
                };
                if (_isRectint(U26V2.rect, pr59)) {
                    v6.push({
                        EpS3: parseInt(item.width * item.arcsize) * 2,
                        u1b$5: parseInt(item.height * item.arcsize) * 2,
                        Q02: item
                    })
                }
            }
        }
        return v6
    };
    var _0YUd = function (I1g) {
        var rt90Y = null;
        if (px) {
            rt90Y = document.createElement("<input name='" + I1g + "'>")
        } else {
            rt90Y = document.createElement("input");
            rt90Y.name = I1g
        }
        rt90Y.type = "hidden";
        return rt90Y
    };
    var CL0h = function (O$v1) {
        try {
            AbF9T = 0;
            if (typeof _snapshot_result == "object" && _snapshot_result) _snapshot_result = null;
            if (!iframe) {
                if (px) {
                    iframe = document.createElement("<IFRAME name='" + NE2 + "'>")
                } else {
                    iframe = document.createElement("IFRAME");
                    iframe.name = NE2
                }
                iframe.id = NE2;
                iframe.frameBorder = "0";
                iframe.style.width = "0px";
                iframe.style.height = "0px";
                iframe.style.zIndex = -1;
                maplet.panel.appendChild(iframe);
                var aeq = function (e5_o) {
                    return function () {
                        $_fhH.apply(e5_o)
                    }
                };
                if (px) iframe.attachEvent("onreadystatechange", aeq(this));
                else iframe.addEventListener("load", aeq(this), false);
                s4723 = document.createElement("FORM");
                s4723.id = _s9t;
                s4723.method = "POST";
                s4723.target = NE2;
                s4723.action = MJhR;
                maplet.panel.appendChild(s4723);
                s4723.appendChild(_0YUd("center"));
                s4723.appendChild(_0YUd("customer"));
                s4723.appendChild(_0YUd("size"));
                s4723.appendChild(_0YUd("markers"));
                s4723.appendChild(_0YUd("polylines"));
                s4723.appendChild(_0YUd("polygons"));
                s4723.appendChild(_0YUd("format"));
                s4723.appendChild(_0YUd("depth"));
                s4723.appendChild(_0YUd("processMode"));
                s4723.appendChild(_0YUd("taskId"));
                s4723.appendChild(_0YUd("codeform"));
                s4723.appendChild(_0YUd("zoom"));
                s4723.appendChild(_0YUd("ellipse"));
                s4723.appendChild(_0YUd("roundrect"));
                s4723.appendChild(_0YUd("traffic"));
                s4723.appendChild(_0YUd("tcity"));
                s4723.appendChild(_0YUd("ttime"))
            }
            s4723["center"].value = O$v1.center;
            s4723["customer"].value = (strLicenseKey == "3409") ? 0 : 1;
            s4723["size"].value = O$v1.width + "x" + O$v1.height;
            s4723["markers"].value = O$v1.point;
            s4723["polylines"].value = O$v1._ah0;
            s4723["polygons"].value = O$v1.area;
            s4723["format"].value = O$v1.format;
            s4723["depth"].value = O$v1.depth;
            s4723["processMode"].value = O$v1.processMode;
            s4723["taskId"].value = new Date().getTime();
            s4723["codeform"].value = "1";
            s4723["zoom"].value = O$v1.zoom;
            s4723["ellipse"].value = O$v1.fu878;
            s4723["roundrect"].value = O$v1.Q02;
            s4723["traffic"].value = O$v1.traffic;
            s4723["tcity"].value = O$v1.X475;
            s4723["ttime"].value = O$v1.VN6q;
            if (!px) s4723.target = NE2;
            s4723.submit()
        } catch (nc) {
            iframe = null;
            s4723 = null
        }
    };
    var $_fhH = function () {
        if (px && iframe.readyState != "complete") return;
        p66.apply(this)
    };
    var a27e = function (options) {
        if (typeof options == "undefined") {
            with(U26V2) {
                x = parseInt($X3j.div.style.left);
                y = parseInt($X3j.div.style.top);
                width = $X3j.div.clientWidth;
                height = $X3j.div.clientHeight
            }
        } else {
            if (options.mode == "fullscreen") {
                options.width = maplet.width;
                options.height = maplet.height
            }
            with(U26V2) {
                x = options.x;
                y = options.y;
                width = options.width;
                height = options.height
            }
        }
        with(U26V2) {
            rect = {
                min: {
                    x: x,
                    y: y
                },
                max: {
                    x: x + width,
                    y: y + height
                }
            };
            center = maplet.toMapCoordinate(x + width / 2, y + height / 2)
        }
    };
    var n7F = function () {
        with(U26V2) {
            x = 0;
            y = 0;
            width = 0;
            height = 0;
            rect = null
        }
    };
    this.finalize = function () {
        for (var i = 0; i < ao.length; i++) {
            MEvent.removeBuiltInListener(ao[i]);
            ao[i] = null
        }
        ao = null;
        maplet.panel.removeChild(Owx05.div);
        Owx05 = null;
        maplet.panel.removeChild($X3j.div);
        $X3j = null;
        maplet.panel.removeChild(c35.div);
        c35 = null;
        maplet.panel.removeChild(iframe);
        iframe = null;
        maplet.panel.removeChild(s4723);
        s4723 = null;
        maplet = null
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MSnapshotBox'
    }
};
var MIconShadow = function (url, width, height, anchorX, anchorY) {
    this.GxA2 = 0;
    this.div = document.createElement("div");
    this.div.unselectable = "on";
    this.div.style.zIndex = this.GxA2;
    this.div.style.position = "absolute";
    width = (typeof width == "undefined") ? 16 : width;
    height = (typeof height == "undefined") ? 16 : height;
    this.img = (Nfy) ? document.createElement("v:Image") : new Image();
    this.img.unselectable = "on";
    this.img.style.MozUserSelect = "none";
    this.img.style.zIndex = this.GxA2;
    this.img.style.position = "absolute";
    this.img.style.top = "0px";
    this.img.style.left = "0px";
    this.img.setAttribute(NH6, "true");
    this.img.src = (typeof url == "undefined") ? strImgsvrUrl + "images/Shadow.png" : url;
    this.div.appendChild(this.img);
    this.width = (typeof width == "undefined") ? parseInt(this.img.width) : parseInt(width);
    this.height = (typeof height == "undefined") ? parseInt(this.img.height) : parseInt(height);
    this.img.style.width = this.width + "px";
    this.img.style.height = this.height + "px";
    this.div.style.width = this.width + "px";
    this.div.style.height = this.height + "px";
    this.anchorX = this.width / 2;
    this.anchorY = this.height / 2;
    this.anchorX = parseInt((typeof anchorX == "undefined") ? this.anchorX - 16 : this.anchorX + anchorX);
    this.anchorY = parseInt((typeof anchorY == "undefined") ? this.anchorY : this.anchorY + anchorY);
    this.left = 0;
    this.top = 0;
    this.wz = function (id) {
        this.div.id = "mk_shadow_c_" + id;
        this.img.id = "mk_shadow_" + id
    };
    this.initialize = function (sW) {
        this.sW = sW;
        if (px) this.img.ondragstart = function () {
            return false
        };
        this.img.onmousedown = function () {
            return false
        }
    };
    this.update = function (maplet, left, top) {
        if (this.sW.autoHide && !this.sW.icon.isVisible()) {
            if (this.div.parentNode) {
                this.div.parentNode.removeChild(this.div);
                this.fu = false
            }
        } else {
            var zB = parseInt(left) - parseInt(this.anchorX);
            var zF = parseInt(top) - parseInt(this.anchorY);
            if (this.div.parentNode != maplet.lA.div && !this.sW.ls) {
                maplet.lA.appendChild(this.div);
                this.div.style.width = this.width + "px";
                this.div.style.height = this.height + "px";
                this.img.style.width = this.width + "px";
                this.img.style.height = this.height + "px";
                this.fu = true
            }
            this.div.style.top = zF + "px";
            this.div.style.left = zB + "px";
            this.top = zF;
            this.left = zB
        }
    };
    this.isVisible = function () {
        return (this.fu)
    };
    this.zq = function () {
        return (this.img.src) + "," + this.width + "," + this.height
    };
    this.hilite = function () {
        if (this.div) {
            if (this.div.style.zIndex < pF) {
                pF++
            }
            this.setZIndex(pF)
        }
    };
    this.finalize = function () {
        this.remove(true)
    };
    this.remove = function (finalize) {
        if (typeof finalize != "boolean") finalize = false;
        if (this.img) {
            if (px) this.img.ondragstart = null;
            this.img.onmousedown = null
        }
        if (this.div) {
            if (!finalize) {
                if (this.div.parentNode) this.div.parentNode.removeChild(this.div)
            } else {
                _removeNode(this.div);
                this.div = null
            }
        }
        if (finalize) this.sW = null
    };
    this.setZIndex = function ($t3m) {
        if (this.div && this.div.parentNode && $t3m != this.div.style.zIndex) {
            this.GxA2 = this.div.style.zIndex;
            this.div.style.zIndex = $t3m
        }
    };
    this.YS8 = function () {
        if (!this.div) return;
        if (this.GxA2 != this.div.style.zIndex) {
            this.setZIndex(this.GxA2)
        }
    };
    this.toString = function () {
        return 'com.mapbar.maplet.MIconShadow'
    }
};
window["MVersion"] = {
    "version": "31.2",
    "build": "0910151654"
};
var Maplet = function (gx, gA, AB, w, h, Ak, Al, yv, x6) {
    if (px) {
        try {
            document.execCommand("BackgroundImageCache", false, true)
        } catch (nc) {}
    }
    this.downX = 0;
    this.downY = 0;
    this.tR = 0;
    this.tS = 0;
    this.fS = 0;
    this.fT = 0;
    this.offsetX = 0;
    this.offsetY = 0;
    ac = new Date();
    this.imgWidth = 300;
    this.imgHeight = 300;
    this.clickToCenter = true;
    this.R03GR = {};
    this.customInfoWindow = false;
    this.R3U = -1;
    this.mFm62 = -1;
    this.qno = 200;
    this.ignoreMoveRange = 2;
    this.h96 = false;
    this.s08I7 = 0;
    this.qu5j5 = 0;
    this.Or5V$ = false;
    this.H6$0 = false;
    this.q1C = null;
    this.ug59 = null;
    this.mx4 = null;
    this.O7Qx = [];
    kB7 = [];
    this.v8q8Y = "";
    this.Cj9mE = -1;
    this.dV55V = -1;
    this.U9B2 = "";
    this.j5x47 = null;
    this.PVKY8 = {
        container: null,
        Ulq: [],
        yN: null,
        xd: 0.12,
        I403: 4,
        fB878: 1,
        interval: 100,
        G1$TP: {
            width: 85,
            height: 68
        },
        kjx: {
            width: 35,
            height: 27
        }
    };
    this.f7T = {
        fC: null,
        width: 16,
        height: 16,
        offsetY: 5,
        ibg: 3,
        X66R5: 4,
        overlay: null
    };
    this.gwb = -1;
    this._B3 = false;
    this.oA46 = true;
    this.Q0v = false;
    this.oA19i = bpp[0];
    this.traffic = null;
    this.Aq2 = true;
    this.Lp0m1 = 5;
    this.markerDragAnimation = true;
    this.qS = {};
    this.layerData = {};
    this.W_7 = [];
    this.J09a8 = {
        width: 41,
        height: 20
    };
    this.uM2I4 = {
        width: 0,
        height: 0
    };
    this.HF2 = null;
    this.allowDrawingDragMap = true;
    this.XHl = true;
    this.y$pP_ = false;
    this.sS = ts.ty;
    this.id = "mapbar";
    this.yt = ((new Date().getTime()) % 86400000).toString(36) + (parseInt(Math.random() * 1000)).toString(36);
    if (typeof strRemoteIP != "undefined" && strRemoteIP) {
        this.yt += "*" + strRemoteIP
    }
    document["mapbar-maplet"] = this;
    this.left = (typeof Ak == "undefined") ? 0 : parseInt(Ak);
    this.top = (typeof Al == "undefined") ? 0 : parseInt(Al);
    this.width = (typeof w == "undefined") ? 600.00001 : parseInt(w);
    this.height = (typeof h == "undefined") ? 400.00001 : parseInt(h);
    if (isNaN(parseFloat(gx)) || (typeof gx == "string" && gx.length > 3 && gx.substring(0, 3).toLowerCase() == "inf")) {
        this.id = gx;
        this.panel = (typeof gx == "object") ? gx : document.getElementById(gx);
        if (gA != null && gA != "undefined") {
            var zh = cq.vp(gA);
            this.gx = Math.min(sy[1], Math.max(sy[0], parseFloat(zh[1])));
            this.gA = Math.min(sz[1], Math.max(sz[0], parseFloat(zh[0]) % 360));
            zh = null
        }
        if (typeof this.panel != "undefined" && this.panel != null) {
            if (!this.panel.style.zIndex) this.panel.style.zIndex = 0;
            this.left = 0;
            this.top = 0;
            if (this.panel.style.left) this.left = parseInt(this.panel.style.left);
            if (this.panel.style.top) this.top = parseInt(this.panel.style.top);
            if (this.panel.style.width) this.width = parseInt(this.panel.style.width);
            if (this.panel.style.height) this.height = parseInt(this.panel.style.height)
        }
    } else {
        this.gA = gA;
        this.gx = gx
    }
    this.strImgUrl = strImgsvrUrl;
    this.AG = (typeof AB == "undefined") ? 0 : parseInt(AB);
    this.nT = 0;
    this.py = 0;
    this.rotation = 0;
    this.gk = Math.cos(this.rotation / 180 * Math.PI);
    this.wT = Math.sin(this.rotation / 180 * Math.PI);
    this.yv = (yv == "undefined") ? "" : yv;
    this.pU = new Array();
    this.qE = new Array();
    this.yl = (typeof x6 == "undefined" || x6 == null) ? ds : x6;
    this.u2 = null;
    this.u3 = '';
    this.xK = "png";
    this.xw = this.yl;
    this.yh = "";
    this.x4 = this.yl;
    this.x3 = null;
    this.uu = null;
    this.xX = this.yl;
    this.pJ = null;
    this.yFk6 = [
        ["", 1],
        [2, 3]
    ];
    this.bp = true;
    this.ff = false;
    this.fe = true;
    this.sf = null;
    this.fj = (typeof bDefaultControlOn == "undefined") ? true : bDefaultControlOn;
    this.fa = false;
    this.z4 = Math.ceil((this.width) / (this.imgWidth) / 2);
    this.z5 = Math.ceil((this.height) / (this.imgHeight) / 2);
    this.aO = new Array();
    this.aN = new Array();
    this.yG = new Array();
    this.Rb93W = null;
    this.pU = new Array();
    this.aE = new Array();
    this.aF = null;
    this.aG = null;
    this.aH = null;
    this.zy = null;
    this.tG = null;
    this.brush = new MBrush("#FF0000", 2);
    this.sv = 0;
    this.fo = false;
    this.gJ = null;
    this.gI = new Image();
    this.c8 = new MBound(0, 0, 0, 0);
    this.cH = false;
    this.c0 = false;
    this.w3 = new Array();
    this.cI = true;
    this.cn = false;
    this.gc = [];
    this.u5 = [];
    this.vA = this.sS;
    this.fs = false;
    this.c9 = false;
    this.j34 = null;
    this.tD = 0;
    this.gM = 1.0;
    this.xc = null;
    this.mapContextMenu = null;
    this.overview = new JC3(this);
    this.ovw = this.overview;
    this.wK = new Array();
    if (typeof this.panel == "undefined" || this.panel == null) {
        document.writeln('<div unselectable="on" id="' + this.id + '" style="position:absolute;overflow:hidden; width:' + this.width + 'px; height:' + this.height + 'px; left:' + this.left + 'px; top:' + this.top + 'px;"></div>');
        this.panel = q1(this.id)
    } else {
        this.panel.style.overflow = "hidden"
    }
    this.map = this.panel;
    if (this.map) {
        this.map.setAttribute("align", "left");
        if (this.map.style.position != "absolute") {
            this.map.style.position = "relative"
        }
        var T7n = "http://www.mapbar.com/ApiCopyrightLink.html?referrer=" + window.location.host;
        this.w5B = document.createElement("div");
        this.w5B.style.width = this.J09a8.width + "px";
        this.w5B.style.height = this.J09a8.height + "px";
        this.w5B.style.overflow = "hidden";
        this.w5B.innerHTML = "<img src='" + CTLIMG_RESOURCE[0].url + "' style='position:absolute;width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;left:-25px;top:-158px' />";
        this.w5B.id = "ImgCopyright";
        this.w5B.style.position = "absolute";
        this.w5B.style.zIndex = 3;
        this.w5B.style.top = (this.height - 22) + "px";
        this.w5B.setAttribute("whohide", "");
        this.w5B.style.cursor = "pointer";
        this.w5B.onclick = function () {
            window.open(T7n)
        };
        this._U5i0 = document.createElement("a");
        this._U5i0.setAttribute("target", "_blank");
        this._U5i0.setAttribute("href", "http://www.navinfo.com.cn");
        this._U5i0.innerHTML = "&copy;&nbsp;NavInfo";
        this._U5i0.style.position = "absolute";
        this._U5i0.style.zIndex = 3;
        this._U5i0.style.fontSize = "12px";
        this._U5i0.style.color = "blue";
        this._U5i0.style.fontFamily = "arial";
        this._U5i0.style.textDecoration = "none";
        this._U5i0.style.top = (this.height - 25) + "px";
        this._U5i0.style.left = (this.width - 70) + "px";
        this._U5i0.style.background = "none";
        this.dOh_8 = 0;
        this.map.appendChild(this.w5B);
        this.map.appendChild(this._U5i0);
        this.uM2I4.width = this._U5i0.offsetWidth;
        this.uM2I4.height = this._U5i0.offsetHeight
    }
    vZ(this);
    this.m0J = false;
    this.J_883 = false;
    this.uw = 0;
    this.t9 = 0;
    this.xe = 10;
    if (bp) {
        this.setOverlay('base')
    }
    this.fM = null;
    this.AY = 0.2;
    this.AS = -1;
    this.AT = 0;
    this.AZ = null;
    this.vg = 20.0;
    this.vh = null;
    this.Ah = null;
    this.vc = 0;
    this.vd = 0;
    this.vi = 0;
    this.tB = {
        "zoomin": 1,
        "zoomout": 2,
        "pan": 3,
        "erase": 13,
        "edit": 23,
        "lookup": 5,
        "bookmark": 6,
        "drawline": 9,
        "drawarea": 10,
        "measure": 11,
        "measarea": 15,
        "snapshot": 24
    }
};
Maplet.MICON_IMGSRC_FLAG = "imgsrc";
Maplet.MLABEL_TEXT_FLAG = "lbltext";
Maplet.LEFT_TOP = 1;
Maplet.LEFT_BOTTOM = 2;
Maplet.RIGHT_TOP = 3;
Maplet.RIGHT_BOTTOM = 4;
Maplet.prototype = {
    onresize: function () {
        if (this.controlCanvas && this.controlCanvas.options.view.ruler) {
            if (this.height >= 270) {
                this.controlCanvas.showCtlRuler(true, true, false)
            } else {
                this.controlCanvas.showCtlRuler(false, true, false)
            }
        }
        this.Ko8();
        this.VgxX4()
    },
    Ko8: function () {
        var dJI9 = {
            w: 0,
            h: this.J09a8.height
        };
        if (this.w5B.style.display != "none") dJI9.w = dJI9.w + this.J09a8.width + 5;
        if (this.Aq2) dJI9.w = dJI9.w + this.uM2I4.width + 5;
        var Y333 = this.width;
        if (this.controlCanvas && this.controlCanvas.options.location.type == Maplet.RIGHT_BOTTOM) {
            Y333 = Y333 - this.controlCanvas.getRect().width
        }
        if (this.overview.location.type == Maplet.RIGHT_BOTTOM) {
            var SS8F = this.overview.getRect();
            if (Y333 >= SS8F.min.x && SS8F.min.x != 0) {
                Y333 = SS8F.min.x;
                if ((this.width - SS8F.max.x >= dJI9.w) || (this.height - SS8F.max.y >= dJI9.h)) Y333 = this.width
            }
        }
        var _3w = this.Aq2 ? this.uM2I4.width : 0;
        var b9_ = this.Aq2 ? VS8w8(this._U5i0.style.left) : Y333;
        if (this.Aq2) {
            with(this._U5i0.style) {
                left = Y333 - _3w - 5 + "px";
                top = (this.height - 23) + "px";
                b9_ = this.Aq2 ? VS8w8(left) : Y333
            }
        }
        with(this.w5B) {
            if (style.display != "none") {
                style.left = b9_ - offsetWidth - 5 + "px";
                style.top = (this.height - 26) + "px"
            }
        }
    },
    nI: function () {
        if (!this.ff) return null;
        if (this.AP == null) {
            this.AP = new AO(this, -1, this.width - 16, 0, 16, this.height, this.ff, this.panel)
        }
        return this.AP
    },
    wP: function (lM) {
        B982(lM);
        if (this.h96) return false;
        MEvent.trigger(this, 'contextmenu');
        var target = (px) ? event.srcElement : lM.target;
        if (this.xc) this.xc.hide();
        var menu = null;
        var overlay = target.getAttribute("oid");
        overlay = typeof this.u5[overlay] != "undefined" ? this.u5[overlay] : null;
        if (overlay && typeof overlay.getContextMenu == "function") menu = overlay.getContextMenu(target);
        else if (typeof target.contextmenu != "undefined" && target.contextmenu) menu = target.contextmenu;
        if (menu) {
            this.xc = menu;
            menu._0n(typeof target.id == "string" ? target.id : "");
            menu.X1xA(overlay);
            menu.show(this.zQ, this.zR)
        } else {
            if (this.mapContextMenu != null) {
                this.xc = this.mapContextMenu;
                this.mapContextMenu.show(this.zQ, this.zR)
            }
        }
    },
    getContextMenu: function () {
        return this.mapContextMenu
    },
    setContextMenu: function (uc) {
        if (this.mapContextMenu != uc) {
            this.removeContextMenu()
        }
        this.mapContextMenu = uc;
        if (this.mapContextMenu != null) {
            this.mapContextMenu.initialize(this)
        }
    },
    setStandardContextMenu: function (uc) {
        this.xc = uc
    },
    removeContextMenu: function () {
        if (this.mapContextMenu != null) {
            if (this.xc == this.mapContextMenu) this.xc = null;
            this.sF.div.removeChild(this.mapContextMenu.tY);
            this.mapContextMenu.maplet = null;
            this.mapContextMenu = null
        }
    },
    showMap: function () {
        if (Nfy && this.width > 0) {
            this.panel.style.width = (this.width - 1) + "px";
            this.panel.style.height = (this.height - 1) + "px";
            this.panel.style.width = this.width + "px";
            this.panel.style.height = this.height + "px"
        }
        if (MapBackgroundColor) this.panel.style.backgroundColor = MapBackgroundColor;
        MEvent.bindDom(this.panel, "contextmenu", this, this.wP);
        this.sG = new fD("MapContainerBg", 0, 0, this.width, this.height, true, 0, '', this.panel);
        this.sF = new fD("MapContainer", 0, 0, this.width, this.height, true, 2, '', this.panel);
        this.zs = new fD("ToolTip", 0, 0, 0, 0, false, 24, '', this.sF);
        this.sE = new fD("LayerMap", 0, 0, this.width, this.height, true, 2, '', this.sF);
        this.vx = new fD("LayerPoiMap", 0, 0, this.width, this.height, true, 3, '', this.sF);
        this.nI();
        if (this.fj) {
            var gV = new MStandardControl();
            this.addControl(gV);
            this.controlCanvas = gV.nR
        }
        this.wq = new fD("LayerScale", 1, this.height - 24, 70, 24, this.fe, 3, '', this.panel);
        var content = '<table border="0" width="100%" height="100%" style="border:2px solid #0E347F;"><tr ><td align="center" valign="middle" style="filter:alpha(opacity=30);opacity:0.3;background-color:#FFFFFF;"></td></tr></table>';
        this.sD = new fD("LayerBorder", 1, 1, 1, 1, false, 6, content, this.panel);
        this.sD.style.border = "1px solid #FFFFFF";
        this.snapshotBox = new MSnapshotBox(this);
        content = "<div style=\"position:absolute;border-width:2px 0px 0px 2px;border-style:solid;border-color:red;width:4px;height:4px;left:0px;top:0px;line-height:1px;\"></div><div style=\"position:absolute;border-width:2px 2px 0px 0px;border-style:solid;border-color:red;width:4px;height:4px;left:28px;top:0px;line-height:1px;\"></div><div style=\"position:absolute;border-width:0px 0px 2px 2px;border-style:solid;border-color:red;width:4px;height:4px;left:0px;top:20px;line-height:1px;\"></div><div style=\"position:absolute;border-width:0px 2px 2px 0px;border-style:solid;border-color:red;width:4px;height:4px;left:28px;top:20px;line-height:1px;\"></div>";
        this.PVKY8.container = new fD("_mapbar_mw_indicator", 0, 0, this.PVKY8.kjx.width, this.PVKY8.kjx.height, true, 100, content, this.panel).div;
        this.PVKY8.container.style.display = "none";
        this.PVKY8.Ulq = this.PVKY8.container.getElementsByTagName("div");
        this.lA = new fD("LayerDrawMap", 0, 0, this.width, this.height, true, 4, '', this.sF);
        if (px) this.lA.style.backgroundImage = "url(" + sX + ")";
        if (!px) {
            this.lA.style.MozUserSelect = "none"
        }
        this.lA.div.setAttribute(NH6, "true");
        this.f7T.fC = new fD("_mapbar_drag_cross", 0, 0, this.f7T.width, this.f7T.height, true, 2, '', this.panel);
        with(this.f7T.fC.div) {
            style.width = this.f7T.width + "px";
            style.height = this.f7T.height + "px";
            style.display = "none";
            style.overflow = "hidden"
        }
        if (Nfy) this.f7T.fC.div.innerHTML = "<v:image  style=\"position:absolute;width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;left:-49px;top:-108px;\" src='" + CTLIMG_RESOURCE[0].url + "' />";
        else this.f7T.fC.div.innerHTML = "<img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;left:-49px;top:-108px;\">";
        this.overview.qa(this.panel); {
            var rightMargin = 15;
            var ui = 0;
            this.sg = (this.width > 360) ? 150 : 73;
            if ((this.overview.nF() + this.overview.nz()) > (this.height - 23)) {
                ui += Math.max(0, this.overview.nH() - (this.sg - 70))
            }
        } {
            MEvent.bindDom(this.map, "mousemove", this, this.a3);
            MEvent.bindDom(this.map, "mousedown", this, this.a2);
            MEvent.bindDom(this.map, "mouseup", this, this.a6);
            MEvent.bindDom(this.map, "click", this, this.aZ);
            MEvent.bindDom(this.map, "dblclick", this, this.a1);
            MEvent.bindDom(this.map, "mouseout", this, this.a4);
            MEvent.bindDom(this.map, "drag", this, this.a3);
            MEvent.bindDom(this.map, "dragstart", this, this.a3);
            MEvent.bindDom(this.map, "dragend", this, this.a3);
            MEvent.bindDom(this.map, "mouseover", this, this.a5);
            if (MOUSEWHEEL) {
                MEvent.bindDom(this.map, "mousewheel", this, this.a7);
                MEvent.bindDom(this.map, "DOMMouseScroll", this, this.a7)
            }
            if (kp) MEvent.bindDom(document, "keydown", this, this.onkeydown)
        }
        this.qd();
        this.setZoomLevel(this.AG);
        this.setMode(this.sS);
        if (this.zP == null) {
            this.zP = setInterval("document['mapbar-maplet'].zL()", 100)
        }
    },
    qd: function () {
        this.sD.hide();
        this.sD.resize(1, 1);
        this.sD.moveTo(-10, -10);
        if (document.all) {
            this.sE.moveTo(0, 0);
            this.sE.show();
            this.vx.moveTo(0, 0);
            this.vx.show();
            this.lA.moveTo(0, 0);
            this.lA.show()
        }
    },
    setStyle: function (x7, xH) {
        if (this.yl != x7) {
            this.yl = x7;
            if ("aerial" == this.yl || this.yl.indexOf("aerial") >= 0) {
                this.xK = "jpg"
            } else {
                this.xK = "png"
            }
            if (typeof xH != "undefined") {
                this.xK = xH
            }
            if (typeof this.sF != "undefined") {
                for (var i in this.pU) {
                    try {
                        if (this.pU[i] != null && typeof this.pU[i] == "object") {
                            if (this.pU[i].parentNode != null) {
                                this.pU[i].parentNode.removeChild(this.pU[i])
                            }
                            this.pU[i] = null
                        }
                    } catch (lM) {}
                }
                this.refresh();
                MEvent.trigger(this, "style", x7)
            }
        }
    },
    setRotation: function (v0) {
        if (px && rs) {
            this.rotation = v0;
            this.gk = Math.cos(this.rotation / 180 * Math.PI);
            this.wT = Math.sin(this.rotation / 180 * Math.PI)
        }
    },
    setHeadMode: function (pz) {
        this.nT = pz
    },
    setOverlay: function (xZ, uz) {
        if (typeof uz == "string") {
            this.u3 = uz
        }
        if (this.u2 != xZ) {
            this.u2 = xZ
        }
        if (typeof this.sF != "undefined") {
            this.refresh()
        }
    },
    zN: function () {
        var ll = sj[this.AG] * this.width / this.imgWidth;
        this.c8.tl = (this.gA - ll / 2);
        this.c8.s6 = (this.gA + ll / 2);
        var lk = qP[this.AG] * this.height / this.imgHeight;
        this.c8.tj = (this.gx - lk / 2);
        this.c8.s4 = (this.gx + lk / 2)
    },
    fI: function (AB) {
        if (this.w3 != null && this.w3.length > 0) {
            sY = this.c8.s0;
            te = this.c8.tp;
            var ll = sj[AB] * this.width / this.imgWidth;
            var tl = (this.gA - ll / 2);
            var s6 = (this.gA + ll / 2);
            var lk = qP[AB] * this.height / this.imgHeight;
            var tj = (this.gx - lk / 2);
            var s4 = (this.gx + lk / 2);
            for (var i = 0; i < this.w3.length; i++) {
                if (this.w3[i].qn(tj, tl) && this.w3[i].qn(s4, s6)) {
                    sY = this.w3[i].s0;
                    te = this.w3[i].tp;
                    break
                }
            }
        }
    },
    setBound: function (c7) {
        this.c8 = c7
    },
    refresh: function () {
        this.u0();
        this.u8()
    },
    fL: function () {
        if (this.fM != null) {
            clearTimeout(this.fM);
            this.fM = null
        }
        if (this.c0 || this.fs || f1.fx.length > 0) {
            this.fM = getTimeout(this, this.fL, 100);
            return
        }
        this.no()
    },
    no: function () {
        var pL = 0;
        for (var i in this.pU) {
            try {
                if (this.pU[i] != null && typeof this.pU[i] == "object") {
                    if (this.pU[i].c2 == true) {} else {
                        if (this.pU[i].parentNode != null) {
                            _removeNode(this.pU[i])
                        }
                        this.pU[i].onerror = null;
                        this.pU[i].onload = null;
                        this.pU[i] = null;
                        delete this.pU[i];
                        pL++
                    }
                }
            } catch (lM) {}
        }
    },
    zL: function () {
        if (this._B3 || this.fs || this.c0 || (typeof this.Ai != "undefined" && this.Ai != 0)) return;
        var sP = parseInt(this.sF.style.left);
        var sQ = parseInt(this.sF.style.top);
        if ((sP + this.tf1) >= 0 || (sP + this.sZ - this.width) <= 0 || (sQ + this.tg) >= 0 || (sQ + this.s1 - this.height) <= 0) {
            this.fs = true;
            this.zA()
        }
    },
    zA: function () {
        if (this.fs == false) return;
        var sP = parseInt(this.sF.style.left);
        var sQ = parseInt(this.sF.style.top);
        if ((sP + this.tf1) >= 0 || (sP + this.sZ - this.width) <= 0) {
            if (this.c0 == true) return;
            this.c0 = true;
            try {
                var qy = 0;
                var p1 = 0;
                if ((sP + this.tf1) >= 0) {
                    this.th--;
                    this.tf1 -= parseInt(this.imgWidth);
                    qy = this.th;
                    p1 = this.tf1
                }
                if ((sP + this.sZ - this.width) <= 0) {
                    this.s2++;
                    p1 = this.sZ;
                    this.sZ += parseInt(this.imgWidth);
                    qy = this.s2
                }
                var qx = qy;
                var nL = nM[this.AG];
                var s8 = parseInt(360 / sj[this.AG]);
                qy = (qy) % s8;
                if (qy >= (s8 / 2)) qy -= s8;
                if (qy < (-s8 / 2)) qy += s8;
                var yk = this.yl;
                for (var qz = this.ti; qz <= this.s3; qz++) {
                    var qA = qz;
                    var p3 = (-(qz - this.ti + 1) * this.imgHeight) + this.s1;
                    this.aA(p1, p3, qy, qA, qx, qz, yk)
                }
                this.c0 = false
            } catch (lM) {}
        }
        if ((sQ + this.tg) >= 0 || (sQ + this.s1 - this.height) <= 0) {
            if (this.c0 == true) return;
            this.c0 = true;
            try {
                var qA = 0;
                var p3 = 0;
                if ((sQ + this.tg) >= 0) {
                    this.s3++;
                    this.tg -= parseInt(this.imgHeight);
                    qA = this.s3;
                    p3 = this.tg
                }
                if ((sQ + this.s1 - this.height) <= 0) {
                    this.ti--;
                    p3 = this.s1;
                    this.s1 += parseInt(this.imgHeight);
                    qA = this.ti
                }
                var qz = qA;
                var nL = nM[this.AG];
                var s8 = parseInt(360 / sj[this.AG]);
                var yk = this.yl;
                for (var qx = this.th; qx <= this.s2; qx++) {
                    var qy = qx;
                    qy = (qy) % s8;
                    if (qy >= (s8 / 2)) qy -= s8;
                    if (qy < (-s8 / 2)) qy += s8;
                    var p1 = ((qx - this.th) * this.imgWidth) + this.tf1;
                    this.aA(p1, p3, qy, qA, qx, qz, yk)
                }
                this.c0 = false
            } catch (lM) {}
        }
        this.fs = false
    },
    aA: function (p1, p3, qy, qA, qx, qz, yk) {
        var nL = nM[this.AG];
        var dirx = parseInt(Math.floor((qy) / nL));
        var diry = parseInt(Math.floor((qA) / nL));
        if (dirx < 0) dirx += 1;
        if (diry < 0) diry += 1;
        var F3L = (qy) - dirx * nL;
        var d6t31 = (qA) - diry * nL;
        var pM = this.strImgUrl.replace("img", "img" + this.sW146(F3L, d6t31)) + "mapbank/" + yk + "/" + this.sR;
        var xY = ((this.AG).toString(16) + qx.toString(16) + 'l' + qz.toString(16)).toLowerCase();
        pM += dirx + "_" + diry + "/";
        pM += F3L + "_" + d6t31 + "." + this.xK;
        if (pM && pM.indexOf("NaN") < 0) {
            if (this.pU[xY] == null) {
                if (rs == 0 || !px) {
                    this.pU[xY] = new Image();
                    this.pU[xY].id = xY;
                    this.pU[xY].name = xY;
                    this.pU[xY].ntry = "0";
                    this.pU[xY].unselectable = "on";
                    this.pU[xY].style.position = "absolute"
                } else {
                    this.pU[xY] = document.createElement("v:Image");
                    this.pU[xY].id = xY;
                    this.pU[xY].name = xY;
                    this.pU[xY].ntry = "0";
                    this.pU[xY].unselectable = "on";
                    this.pU[xY].style.position = "absolute";
                    this.pU[xY].cE = "f";
                    this.pU[xY].style.rotation = this.rotation;
                    this.pU[xY].style.width = this.imgWidth + "px";
                    this.pU[xY].style.height = this.imgHeight + "px"
                }
                f1.nk(this.pU[xY], pM, this.imgWidth, this.imgHeight);
                this.sE.div.appendChild(this.pU[xY])
            } else {
                if (px && rs) {
                    this.pU[xY].style.rotation = this.rotation
                }
            }
            var p2 = (p1 + this.imgWidth / 2 - this.width / 2) * this.gk - (p3 + this.imgHeight / 2 - this.height / 2) * this.wT + this.width / 2;
            var p5 = (p1 + this.imgWidth / 2 - this.width / 2) * this.wT + (p3 + this.imgHeight / 2 - this.height / 2) * this.gk + this.height / 2;
            this.pU[xY].style.top = parseInt(p5 - this.imgHeight / 2) + "px";
            this.pU[xY].style.left = parseInt(p2 - this.imgWidth / 2) + "px";
            this.pU[xY].c2 = true;
            this.pU[xY].setAttribute("origy", parseInt(p5 - this.imgHeight / 2));
            this.pU[xY].setAttribute("origx", parseInt(p2 - this.imgWidth / 2));
            xY = null
        }
        pM = null
    },
    eiKX: function () {
        this.no();
        this.sG.div.style.width = this.sE.div.style.width;
        this.sG.div.style.height = this.sE.div.style.height;
        this.sG.div.style.left = this.sE.div.style.left;
        this.sG.div.style.top = this.sE.div.style.top;
        this.sG.div.style.visibility = "visible";
        for (var i in this.pU) {
            var img = this.pU[i];
            if (img && img.parentNode) {
                img.parentNode.removeChild(img);
                this.sG.div.appendChild(img)
            }
        }
        this.W413();
        this.oA46 = false
    },
    W413: function () {
        for (var i in this.pU) {
            var img = this.pU[i];
            if (img && img.parentNode) img.c2 = false
        }
    },
    ed58: function () {
        this.W413();
        this.no()
    },
    u8: function (nn, zE) {
        if (this.fe) {
            var ws = ws = (this.xg * 100 * 60 / parseInt(this.imgWidth)) * this.gM;
            var ns = "#000000";
            var xC = (en) ? "km" : tX("%u516E%uE338");
            var xF = (en) ? "mi" : tX("%u54EA");
            ws = (ws < 10) ? (ws).toPrecision(1) : parseInt(ws);
            if (this.wq.div.innerHTML == "") {
                var x2 = ["<div id=\"_scaleValue\" style=\"position:absolute;font-family: arial;FONT-SIZE: 12px; color:" + ns + ";FONT-WEIGHT: bold;left:4px;top:0px;\">&nbsp;" + ws + " " + xC + "</div>"];
                x2.push("<div style=\"position:absolute;width:69px;height:11px;overflow:hidden;top:8px;\">");
                if (Nfy) {
                    x2.push("<img src=\"" + sX + "\" style=\"position:absolute;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=" + CTLIMG_RESOURCE[0].url + ",sizingMethod=scale);width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;left:-8px;top:-209px;border:0px;\" onmousedown=\"return false;\" unselectable=\"on\" galleryimg=\"no\" />")
                } else {
                    x2.push("<img src=\"" + CTLIMG_RESOURCE[0].url + "\" style=\"position:absolute;left:-8px;top:-209px;width:" + CTLIMG_RESOURCE[0].w + "px;height:" + CTLIMG_RESOURCE[0].h + "px;border:0px;\" onmousedown=\"return false;\" unselectable=\"on\" galleryimg=\"no\" />")
                }
                x2.push("</div>");
                if (en == 1) {
                    this.wq.style.top = VS8w8(this.wq.style.top) - 10 + "px";
                    this.wq.style.height = VS8w8(this.wq.style.height) + 10 + "px";
                    x2.push("<div id=\"_scaleValue2\" style=\"position:absolute;font-family: arial;FONT-SIZE: 12px; color:" + ns + ";FONT-WEIGHT: bold;left:4px;top:19px;\">&nbsp;" + ws + ' ' + xF + "</div>")
                }
                this.wq.div.innerHTML = x2.join("")
            } else {
                if (en == 1) {
                    aa("_scaleValue").innerHTML = "&nbsp;" + ws + ' ' + xC;
                    if (aa("_scaleValue2")) aa("_scaleValue2").innerHTML = "&nbsp;" + ws + ' ' + xF
                } else aa("_scaleValue").innerHTML = "&nbsp;" + ws + ' ' + xC
            }
            this.wq.show()
        } else {
            this.wq.hide()
        }
    },
    VgxX4: function () {
        if (!this.wq) return;
        if (this.fe) {
            var l = 4,
                yw;
            if (en == 1) yw = this.height - 34;
            else yw = this.height - 24;
            var h73i0 = 0,
                y8AH = 0;
            if (this.controlCanvas && this.controlCanvas.options.location.type == Maplet.LEFT_BOTTOM) {
                h73i0 = this.controlCanvas.getRect().max.x + 10
            }
            if (this.overview && this.overview.location.type == Maplet.LEFT_BOTTOM) {
                y8AH = this.overview.getRect().max.x + 10
            }
            this.wq.moveTo(Math.max(l, Math.max(h73i0, y8AH)), yw)
        }
    },
    showNavLogo: function (c2) {
        if (!c2) {
            this._U5i0.style.display = "none"
        } else {
            this._U5i0.style.display = "block"
        }
        this.Aq2 = c2;
        this.Ko8()
    },
    waitPan: function (x, y, fy) {
        if (this.Ah) clearTimeout(this.Ah);
        this.Ah = null;
        if (x && y) {
            if (this.vi == 0) {
                this.vi = 1;
                this.vc = x;
                this.vd = y;
                this.fy = fy;
                this.Ah = getTimeout(this, this.waitPan, 500)
            }
        } else {
            if (this.vi) {
                this.vi = 0;
                this.panTo(this.vc, this.vd, this.fy)
            }
        }
    },
    doPan: function () {
        this.fa = true;
        this.Q0v = true;
        if (!px && ContentInfo && ContentInfo.isVisible()) {
            ContentInfo.un908(true)
        }
        if (!this.oA46) {
            this.no();
            this.oA46 = true
        }
        if (this.markerDragAnimation) {
            with(this.f7T) {
                if (overlay != null && !overlay.ls) this.t929(false)
            }
        }
        var tN = parseInt(Math.sqrt(this.Aq * this.Aq + this.Aw * this.Aw));
        if (this.vh) clearTimeout(this.vh);
        this.vh = null;
        if ((this.va - tN) <= (1.2 * this.vg)) {
            this.Aq = this.xoffset;
            this.Aw = this.yoffset;
            this.sF.moveTo(this.Aq, this.Aw);
            this.vh = getTimeout(this, this.finishupPan, 10)
        } else {
            var lJ = this.xoffset * this.vg / this.va;
            var lL = this.yoffset * this.vg / this.va;
            this.Aq += lJ;
            this.Aw += lL;
            this.sF.moveTo(this.Aq, this.Aw);
            this.vh = getTimeout(this, this.doPan, 10)
        }
    },
    finishupPan: function () {
        this.fa = false;
        this.Or5V$ = true;
        this.q1C = new Date().getTime();
        this.ug59 = this.Aq;
        this.mx4 = this.Aw;
        if (this.vh) clearTimeout(this.vh);
        this.vh = null;
        this.setCenter(this.ve, this.vf);
        this.Or5V$ = false;
        if (this.Rb93W && this.Rb93W.parentNode != this.sF.div) {
            this.sF.div.appendChild(this.Rb93W)
        } else {} if (this.fy != null && this.fy != "undefined") eval(this.fy);
        this.Q0v = false
    },
    AN: function (AL, x, y) {
        this.lA.hide();
        if (this._$296) {
            this._$296.setVisible(false);
            MLayer.setTipVisible(false)
        }
        for (var i in this.R03GR) {
            var p = this.R03GR[i];
            if (p.options.zoomhide && p.isVisible()) {
                p.setVisible(false)
            }
        }
        if (!this.oA46) this.no();
        this._B3 = true;
        if (typeof x != "number") x = 0;
        if (typeof y != "number") y = 0;
        var AK = Math.pow(2, parseFloat(AL)) / Math.pow(2, this.AG);
        for (var i in this.pU) {
            var img = this.pU[i];
            if (img.c2) {
                with(img.style) {
                    if (img.getAttribute("done") != "1") {
                        _removeNode(img);
                        img = null;
                        delete this.pU[i]
                    } else {
                        width = (this.imgWidth * AK < 10 ? 0 : this.imgWidth * AK + 1) + "px";
                        height = (this.imgHeight * AK < 10 ? 0 : this.imgHeight * AK + 1) + "px";
                        left = VS8w8(img.getAttribute("origx")) * AK + 1 + "px";
                        top = VS8w8(img.getAttribute("origy")) * AK + 1 + "px"
                    }
                }
            }
        }
        with(this.sE.div.style) {
            width = this.width * AK + "px";
            height = this.height * AK + "px";
            left = (this.width / 2 - VS8w8(width) / 2 + x) + "px";
            top = (this.height / 2 - VS8w8(height) / 2 + y) + "px"
        }
    },
    G94$: function (xFV22) {
        if (VS8w8(this.sE.div.style.width) != this.width) {
            with(this.sE.div.style) {
                width = this.width + "px";
                height = this.height + "px";
                left = "0px";
                top = "0px"
            }
        }
        if (typeof xFV22 == "boolean" && xFV22) {
            for (var i in this.pU) {
                var img = this.pU[i];
                if (typeof img == "object" && img.c2) {
                    img.style.left = VS8w8(img.getAttribute("origx"), 0) + "px";
                    img.style.top = VS8w8(img.getAttribute("origy"), 0) + "px";
                    img.style.width = this.imgWidth + "px";
                    img.style.height = this.imgHeight + "px"
                }
            }
        }
        this._B3 = false
    },
    vQ: function (aD) {
        while (aD != null && aD.length > 0) {
            aD[aD.length - 1] = null;
            aD.length--
        }
    },
    vS: function (aD, pp) {
        if (pp >= 0 && aD.length > pp) {
            aD[pp] = null;
            for (var i = pp; i < aD.length - 1; i++) {
                aD[i] = aD[i + 1]
            }
            aD[aD.length - 1] = null;
            aD.length--
        }
    },
    getElementById: function (aD, pid) {
        var pp = this.p8(aD, pid);
        if (pp >= 0 && aD.length > pp) {
            return aD[pp]
        }
        return null
    },
    p8: function (aD, lU) {
        var pp = -1;
        for (var i = 0; i < aD.length; i++) {
            if (aD[i].id == lU) {
                pp = i;
                break
            }
        }
        return pp
    },
    removePointAt: function (E66J) {
        this.vS(this.aO, E66J)
    },
    vX: function (pid) {
        this.vS(this.aO, this.p8(this.aO, pid))
    },
    removeAllPoints: function () {
        this.vQ(this.aO)
    },
    removeLabelAt: function (pq) {
        this.vS(this.yG, pq)
    },
    vV: function (pid) {
        this.vS(this.yG, this.p8(this.yG, pid))
    },
    removeAllLabels: function () {
        this.vQ(this.yG)
    },
    removeLineAt: function (pr) {
        this.vS(this.aN, pr)
    },
    vW: function (pid) {
        this.vS(this.aN, this.p8(this.aN, pid))
    },
    removeAllLines: function () {
        this.vQ(this.aN)
    },
    addHotspot: function (lf, li, xP, tp, s0) {
        var nW = "hotspot" + this.aE.length;
        if (typeof li == "object" && li.toString() == "com.mapbar.maplet.MPoint") {
            lf = li.lat;
            li = li.lon
        } else {
            var zh = cq.vp(li);
            lf = Math.min(sy[1], Math.max(sy[0], parseFloat(zh[1])));
            li = Math.min(sz[1], Math.max(sz[0], parseFloat(zh[0]) % 360))
        }
        var n5 = new a8(nW, '', '', parseFloat(lf), parseFloat(li), xP, '', '0');
        n5.fl = false;
        n5.AJ = tp;
        n5.AI = s0;
        this.aE[this.aE.length] = n5
    },
    addPointWithSwapImage: function (xI, xJ, lf, li, xP, xu, cK, vD) {
        this.aO[this.aO.length] = new a8("point" + this.sv, xI, xJ, parseFloat(lf), parseFloat(li), xP, xu, cK, vD);
        this.sv++
    },
    addPointWithId: function (id, lf, li, xP, xu, cK, vD) {
        this.aO[this.aO.length] = new a8(id, pc[id], pb[id], parseFloat(lf), parseFloat(li), xP, xu, cK, vD)
    },
    addIcon: function (xI, xR, xP, xA, cK, vD) {
        var aI = cq.vp(xR);
        this.addPoint(xI, aI[1], aI[0], xP, xA, cK, vD)
    },
    nC: function () {
        return this.c8
    },
    zp: function (x, y) {
        var An = (x - this.width / 2);
        if (this.rotation != 0) {
            var At = (y - this.height / 2);
            An = An * this.gk + At * this.wT
        }
        var li = this.gA + An * this.xg / this.imgWidth;
        li = Math.min(sz[1], Math.max(sz[0], li % 360));
        return li
    },
    zo: function (x, y) {
        var At = (y - this.height / 2);
        if (this.rotation != 0) {
            var An = (x - this.width / 2);
            At = -An * this.wT + At * this.gk
        }
        var lf = this.gx - At * this.xf / this.imgHeight;
        lf = Math.min(sy[1], Math.max(sy[0], lf));
        return lf
    },
    zl: function (li, lf) {
        var g2 = ((parseFloat(li) - this.gA) % 360);
        if (g2 > 180) g2 -= 360;
        if (g2 < -180) g2 += 360;
        var p1 = Math.round(this.width / 2 + g2 / sj[this.AG] * this.imgWidth);
        if (this.rotation != 0) {
            var p3 = Math.round(this.height / 2 - ((parseFloat(lf) - this.gx) % 360) / qP[this.AG] * this.imgHeight);
            p1 = (p1 - this.width / 2) * this.gk - (p3 - this.height / 2) * this.wT + this.width / 2
        }
        return p1
    },
    zm: function (lf, li) {
        var p3 = Math.round(this.height / 2 - ((parseFloat(lf) - this.gx) % 360) / qP[this.AG] * this.imgHeight);
        if (this.rotation != 0) {
            var g2 = ((parseFloat(li) - this.gA) % 360);
            if (g2 > 180) g2 -= 360;
            if (g2 < -180) g2 += 360;
            var p1 = Math.round(this.width / 2 + g2 / sj[this.AG] * this.imgWidth);
            p3 = (p1 - this.width / 2) * this.wT + (p3 - this.height / 2) * this.gk + this.height / 2
        }
        return p3
    },
    setMode: function (zr, fy) {
        zr = zr.toString().toLowerCase();
        zr = (this.tB[zr]) ? parseInt(this.tB[zr]) : parseInt(zr);
        if ((zr != 3 && zr != 23) && this.sS == zr) return null;
        if (this.sS == 3 || this.sS == 23) this.vA = this.sS;
        this.sS = parseInt(zr);
        this.a9X();
        var l8 = null;
        switch (zr) {
        case 'zoomin':
        case '1':
        case 1:
            this.cS = true;
            this.KY4('crosshair', this.map);
            this.sS = 1;
            l8 = 'zoomin';
            break;
        case 'zoomout':
        case '2':
        case 2:
            this.cS = true;
            this.sS = 2;
            this.KY4('crosshair', this.map);
            l8 = 'zoomout';
            break;
        case ts.ty:
        case "pan":
        case 3:
            this.sS = 3;
            l8 = 'pan';
            zr = null;
        case ts.l3:
        case 13:
        case 'erase':
            if (zr) {
                this.sS = 13;
                l8 = 'erase';
                zr = null
            }
        case ts.tu:
        case 'edit':
        case 23:
            if (zr) {
                this.sS = 23;
                l8 = 'edit';
                zr = null
            }
            this.cO = true;
            this.KY4('default', this.map);
            break;
        case ts.tv:
        case "lookup":
        case 5:
            this.cS = true;
            this.KY4('crosshair', this.map);
            this.sS = 5;
            l8 = 'lookup';
            break;
        case '6':
        case 6:
        case 'bookmark':
            this.KY4('default', this.map);
            l8 = 'bookmark';
            this.sS = 6;
            break;
        case '7':
        case 7:
            this.KY4('default', this.map);
            break;
        case '8':
        case 8:
            this.KY4('default', this.map);
            break;
        case '9':
        case 9:
        case 'drawline':
            this.KY4('default', this.map);
            this.po = -1;
            this.sS = 9;
            l8 = 'drawline';
            if (this.allowDrawingDragMap) this.cO = true;
            break;
        case '10':
        case 10:
        case 'drawarea':
            this.KY4('default', this.map);
            this.po = -1;
            this.sS = 10;
            l8 = 'drawarea';
            if (this.allowDrawingDragMap) this.cO = true;
            break;
        case '11':
        case 11:
        case 'measure':
            this.KY4('default', this.map);
            l8 = 'measure';
            this.sS = 11;
            if (this.allowDrawingDragMap) this.cO = true;
            break;
        case '15':
        case 15:
        case 'measarea':
            this.KY4('default', this.map);
            l8 = 'measarea';
            this.sS = 15;
            if (this.allowDrawingDragMap) this.cO = true;
            break;
        case '24':
        case 24:
        case 'snapshot':
            this.cS = true;
            this.KY4('crosshair', this.map);
            l8 = 'snapshot';
            this.sS = 24;
            break;
        default:
            break
        };
        var r6$x$ = null;
        if (l8 != null && typeof fy == "function") r6$x$ = MEvent.addListener(this, l8, fy);
        if (l8 != null) {
            MEvent.trigger(this, "setmode", l8)
        }
        return r6$x$
    },
    setCursorStyle: function (mode, icon) {
        if (typeof mode == "string" && typeof icon == "string" && mode) {
            if ("default,pointer,move,crosshair".indexOf(mode) != -1) {
                kB7[mode] = icon
            }
        }
    },
    KY4: function (mode, A17v) {
        var icon = kB7[mode];
        var cursor = "";
        if (typeof icon == "string" && icon) {
            cursor = "url('" + icon + "'),auto"
        } else {
            cursor = mode
        }
        if (A17v.style.cursor != cursor) {
            A17v.style.cursor = cursor
        }
    },
    wN: function (x, y, ya, xu, ct) {
        if (typeof ya == "undefined" || ya == null) return;
        if (iToolTipStyle == "undefined" || iToolTipStyle == 1) {
            var p0 = (typeof ya == "object") ? ya : null;
            if (p0) {
                avBubble.gl(p0.title, p0.content);
                ct = xu
            } else {
                avBubble.gl(ya, xu)
            }
            if (p0) {
                this.Rb93W = p0.gv(x, y, true)
            } else {
                this.Rb93W = gp(ya, x, y, xu, true)
            }
        } else {
            var p0 = (typeof ya == "object") ? ya : null;
            if (p0) {
                setToolTipMenu(x, y, p0.title, p0.content)
            } else {
                setToolTipMenu(x, y, ya, xu)
            }
        }
    },
    hideBubble: function () {
        hideBubble(this);
        if (this.Rb93W) {
            if (this.Rb93W.parentNode) this.Rb93W.parentNode.removeChild(this.Rb93W);
            this.Rb93W = null
        }
    },
    aY: function () {
        if ((this.tR > 0) && (this.tR < this.width) && (this.tS > 0) && (this.tS < this.height) && (this.downX > 0) && (this.downX < this.width) && (this.downY > 0) && (this.downY < this.height)) {
            return true
        } else {
            return false
        }
    },
    lu: function () {
        var w = 0,
            h = 0,
            x = 0,
            y = 0;
        if (this.tR < this.downX && this.tS < this.downY) {
            w = this.downX - this.tR;
            h = this.downY - this.tS;
            x = this.tR;
            y = this.tS
        } else if (this.tR > this.downX && this.tS < this.downY) {
            w = this.tR - this.downX;
            h = this.downY - this.tS;
            x = this.downX;
            y = this.tS
        } else if (this.tR < this.downX && this.tS > this.downY) {
            w = this.downX - this.tR;
            h = this.tS - this.downY;
            x = this.tR;
            y = this.downY
        } else if (this.tR > this.downX && this.tS > this.downY) {
            w = parseInt(this.tR) - this.downX;
            h = parseInt(this.tS) - this.downY;
            x = this.downX;
            y = this.downY
        } else {
            w = this.tR - this.downX;
            h = this.tS - this.downY;
            x = this.downX;
            y = this.downY
        }
        if (this.sS == ts._Q5y4) {
            this.snapshotBox.resize(w, h);
            this.snapshotBox.moveTo(x, y)
        } else {
            this.sD.resize(w, h);
            this.sD.moveTo(x, y)
        }
    },
    a9X: function () {
        this.cL = false;
        this.cS = false;
        this.cO = false;
        this.cN = false;
        this.cR = false;
        if (this.zy) {
            this.zy.remove(true);
            this.zy = null
        }
        if (this.tG) {
            this.tG.remove(true);
            this.tG = null
        }
        if (this.sD.style.visibility == "visible") {
            this.sD.hide();
            this.sD.resize(1, 1);
            this.sD.moveTo(-10, -10)
        }
        if (this.snapshotBox.isVisible() && !this.snapshotBox.yG6) {
            this.snapshotBox.hide()
        }
        nX()
    },
    addPolyline: function (aK, aM, xt, qq, qr, cr) {
        var ub = new a9("pline" + this.sv, aK, aM, xt, qq, qr, cr);
        ub.maplet = this;
        this.aN[this.aN.length] = ub;
        this.sv++
    },
    addPolylineString: function (x6, xT, cr) {
        var aV = x6.split(',');
        var az = new a9("pline" + this.sv, null, null, (aV.length > 2) ? aV[2] : null, (aV.length > 0) ? parseInt(aV[0]) : 0, (aV.length > 1) ? aV[1] : 1, cr);
        az.maplet = this;
        this.sv++;
        az.vp(xT);
        this.aN[this.aN.length] = az
    },
    addLabelString: function (type, xQ, wV) {
        var zh = cq.vp(xQ);
        this.addLabel((type == null) ? "http://map.mapbar.com/maplite/images/marker.gif" : type, zh[1], zh[0], wV)
    },
    addOrigin: function (lf, li) {
        aC.setOrigin(parseFloat(lf), parseFloat(li))
    },
    addDestination: function (lf, li) {
        aC.setDestination(parseFloat(lf, li))
    },
    clean: function () {
        this.hideBubble();
        this.removeAllPoints();
        this.removeAllLabels();
        this.removeAllLines();
        pd = new Array();
        pa = new Array();
        this.refresh()
    },
    showBasePois: function (c2) {
        this.bp = c2;
        this.refresh()
    },
    showZoomBar: function (c2, yh) {
        this.ff = c2;
        if (typeof yh != "undefined" && yh != null) {
            if (this.yh != yh) {
                this.yh = yh;
                this.nI().setStyle(this.yh)
            }
        }
        if (this.ff) {
            this.overview.hide();
            this.nI().show();
            this.AP.setZoomLevel(this.getZoomLevel())
        } else if (this.AP != null) {
            this.AP.hide()
        }
    },
    addControl: function (gB, fi, q6, zw) {
        if (typeof gB == "string" || (typeof gB == "object" && gB.toString().indexOf("MStandardControl") > 0)) {
            if (this.controlCanvas) {
                this.controlCanvas.g1();
                this.controlCanvas = null
            }
            var t0 = null;
            if (typeof gB == "string") {
                if (q6 == null || q6 == "undefined") {
                    q6 = 0
                }
                if (zw == null || zw == "undefined") {
                    zw = 0
                }
                t0 = new MStandardControl(gB, q6, zw, fi)
            } else if (typeof gB == "object") {
                t0 = gB
            }
            if (t0) {
                t0.initialize(this)
            }
        } else if (typeof gB == "object") {
            if (this.gc[gB.id]) {
                return
            }
            gB.initialize(this);
            this.gc[gB.id] = gB;
            this.overview.addListener(this.gc[gB.id])
        }
    },
    removeControl: function (gw) {
        if (typeof gw == "object" && this.gc[gw.id]) {
            this.gc[gw.id].remove();
            this.gc[gw.id] = null
        }
    },
    addBound: function (c7) {
        if (typeof c7 != "undefined") {
            this.w3[this.w3.length] = c7
        }
    },
    clearAllBounds: function () {
        for (var i = 0; i < this.w3.length; i++) {
            this.w3[i] = null
        }
        this.w3.length = 0
    },
    setScaleBarValue: function (qw) {},
    getCurrentMap: function () {
        var sT = this.width * sj[this.AG] / this.imgWidth;
        cq.lf = this.gx;
        cq.li = this.gA;
        var gz = cq.zn();
        var vy = (this.aO.length > 0) ? "&pois=" + this.aO.length + "," : "";
        for (var i = 0; i < this.aO.length; i++) {
            vy += this.aO[i].zn() + "," + this.aO[i].xP + ","
        }
        var vw = (this.aN.length > 0) ? "&plines=" + this.aN.length + "," : "";
        for (var i = 0; i < this.aN.length; i++) {
            vw += this.aN[i].zn() + ";"
        }
        var u1 = "";
        for (var i in this.u5) {
            if (typeof this.u5[i] == "object" && this.u5[i] != null && this.u5[i].zq) {
                if (u1.length == 0) {
                    u1 = "&overlays="
                }
                u1 += this.u5[i].zq() + ";"
            }
        }
        return "&map=" + this.AG + "," + gz + "," + this.width + "," + this.height + "&zm=" + (Math.round(parseFloat(sT) * 1000) / 10.0) + "&width=" + this.width + "&height=" + this.height + "&ctr=" + gz + vy + vw + "&client=" + strLicenseKey + u1
    },
    getLastPoint: function () {
        var vy = "&poi=";
        if (this.aO.length > 0) {
            vy += this.aO[this.aO.length - 1].zn() + "," + this.aO[this.aO.length - 1].xP
        }
        return vy
    },
    getLastLine: function () {
        var vw = "&pline=";
        if (this.aN.length > 0) {
            vw += this.aN[this.aN.length - 1].zn()
        }
        return vw
    },
    setCursorIcon: function (xI) {
        this.gJ = xI;
        this.gI.src = xI;
        nX()
    },
    v1: function () {
        this.gJ = null;
        this.gI.src = null
    },
    setBgColor: function (xt) {
        this.panel.style.backgroundColor = xt
    },
    setTransparency: function (uo) {
        this.sE.div.style.filter = "alpha(opacity=" + uo + ");";
        this.sE.div.style.MozOpacity = (uo / 100.0);
        this.sE.div.style.opacity = (uo / 100.0);
        this.sE.div.style.qK = (uo / 100)
    },
    getFitZoomLevel: function (lH, aL) {
        var pB = 1;
        while (lH <= aL[pB] && pB < (aL.length)) {
            pB++
        }
        return (pB - 1)
    },
    setBrushStyle: function (vq, vr) {
        this.brush.color = vq;
        this.brush.stroke = vr
    },
    ql: function () {
        return this.cI
    },
    setActive: function (cT) {
        this.cI = cT
    },
    onkeydown: function (lM) {
        var l8 = (lM) ? lM : (window.event) ? window.event : null;
        if (l8) {
            var qJ = (l8.fG) ? l8.fG : ((l8.keyCode) ? l8.keyCode : ((l8.which) ? l8.which : 0));
            if (qJ == "37" || qJ == "38" || qJ == "39" || qJ == "40") {
                if (this.ql()) {
                    if (l8.target && ((l8.target.nodeName == "INPUT" && l8.target.getAttribute("type").toLowerCase() == "text") || l8.target.nodeName == "TEXTAREA")) {
                        return
                    }
                    if (l8.srcElement && ((l8.srcElement.tagName == "INPUT" && l8.srcElement.type == "text") || l8.srcElement.tagName == "TEXTAREA")) {
                        return
                    }
                    if (l8.shiftKey || l8.ctrlKey) {
                        if (qJ == "37") {
                            this.setRotation(this.rotation - 15);
                            this.refresh()
                        }
                        if (qJ == "39") {
                            this.setRotation(this.rotation + 15);
                            this.refresh()
                        }
                    } else {
                        if (qJ == "37") this.panTo(this.width / 2, 0);
                        if (qJ == "38") this.panTo(0, this.height / 2);
                        if (qJ == "39") this.panTo(-this.width / 2, 0);
                        if (qJ == "40") this.panTo(0, -this.height / 2)
                    }
                }
            }
        }
    },
    showDiy: function (xO) {
        var vn = (typeof xO == "undefined") ? new Array() : sdc(xO).split(",");
        var c2 = (vn.length > 0);
        var tq = vn[0];
        x6 = vn[1];
        var xH = vn[2];
        var lF = vn[3];
        var xR = vn[4];
        var lj = vn[5];
        var lg = vn[6];
        var xD = vn[7];
        if (c2) {
            w8 = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
        } else {
            w8 = new Array(0, 0, 0, 0, 0, 0, 0, 0, 75, 0, 0, -150, 0, 0)
        }
        if (typeof tq == "undefined") {
            te = 0
        } else {
            te = parseInt(tq)
        }
        if (typeof x6 == "undefined") {
            this.setStyle("mapbar")
        } else {
            this.setStyle(x6, xH)
        }
        if (typeof lF == "undefined") {
            this.gM = 1.0
        } else {
            this.gM = parseFloat(lF)
        }
        if (typeof xD == "undefined") {
            if (c2) {
                this.strImgUrl = "http://diyimg.mapbar.com/maplite/"
            } else {
                this.strImgUrl = strImgsvrUrl
            }
        } else {
            this.strImgUrl = xD
        }
        if (typeof lg == "undefined") {
            sz = new Array(-360, 360);
            sy = new Array(-90, 90)
        } else {
            var zh = cq.vp(xR);
            sz = new Array(zh[0] - parseFloat(lj) / 2, zh[0] + parseFloat(lj) / 2);
            sy = new Array(zh[1] - parseFloat(lg) / 2, zh[1] + parseFloat(lg) / 2)
        }
        if (typeof xR != "undefined") {
            this.centerAndZoom(new MPoint(xR), sY - 1)
        }
    },
    I$mt: function () {
        var qx = 0;
        var qz = 0;
        var N33 = this.width;
        var oBsQ5 = this.height;
        var u2r9 = this.L7n();
        var gS1 = {
            tn: u2r9.min.x,
            s4063: u2r9.max.x,
            width: u2r9.max.x - u2r9.min.x
        };
        var D29i0 = this.U28x1();
        var n$I = {
            tn: D29i0.min.x,
            s4063: D29i0.max.x
        };
        with(this.controlCanvas) {
            if (isVisible()) {
                if (options.location.type == Maplet.LEFT_TOP || options.location.type == Maplet.LEFT_BOTTOM) {
                    qx = Math.max(qx, D29i0.max.x)
                } else {
                    N33 = Math.min(N33, D29i0.min.x)
                }
            }
        }
        with(this.overview) {
            if (fg) {
                if (location.type == Maplet.LEFT_TOP || location.type == Maplet.LEFT_BOTTOM) {
                    qx = Math.max(qx, u2r9.max.x + location.marginx)
                } else {
                    N33 = Math.min(N33, u2r9.min.x)
                }
            }
        }
        var w = N33 - qx;
        var h = oBsQ5 - qz;
        if (!isNaN(parseInt(avBubble.$AHEx)) && parseInt(avBubble.$AHEx) < w) w = parseInt(avBubble.$AHEx);
        if (!isNaN(parseInt(avBubble.KL9ut)) && parseInt(avBubble.KL9ut) < h) h = parseInt(avBubble.KL9ut);
        return {
            min: {
                x: qx,
                y: qz
            },
            max: {
                x: N33,
                y: oBsQ5
            },
            width: w,
            height: h,
            f0: n$I,
            overview: gS1
        }
    },
    vlp7N: function (random) {
        this.J_883 = true;
        new foy21(strImgsvrUrl + "mapbank/base/poireport.txt?" + Math.random(), this._96C2, null, null, this, this._96C2).f7c0()
    },
    _96C2: function () {
        if (typeof basepoilist == "object" && basepoilist) this.refresh();
        this.J_883 = false
    },
    setTrajectory: function (sW, oFh9, uv, lX) {
        this.ux = (uv == null || uv == "undefined") ? 5 : parseInt(uv);
        this.pid = sW;
        this.lX = lX;
        var aU = oFh9.pts;
        if (aU != null && aU.length > 0) {
            var qI = 0;
            this.zf = new Array();
            this.zg = new Array();
            this.p9 = 0;
            for (var i = 0; i < aU.length; i++) {
                {
                    var pt = cq.vp(aU[i].getPid());
                    this.zg[qI] = parseFloat(pt[0]);
                    this.zf[qI] = parseFloat(pt[1]);
                    qI++;
                    pt = null
                }
            }
            aU = null
        }
    },
    rotate: function (fy) {
        if (this.uw <= this.t9) {
            this.uw = Math.min(this.t9, this.uw + this.xe)
        } else if (this.uw >= this.t9) {
            this.uw = Math.max(this.t9, this.uw - this.xe)
        }
        this.setRotation(this.uw);
        this.refresh();
        if (this.uw == this.t9) {
            setTimeout(fy, 100)
        } else {
            setTimeout("maplet.rotate(\"" + fy + "\")", 100)
        }
    },
    doEmulation: function () {
        try {
            if (this.p9 == 0) {
                this.wY = this.zf[0];
                this.wZ = this.zg[0];
                this.py = this.p9;
                this.p9++
            }
            if (this.p9 < this.zf.length) {
                this.vh = null;
                if (this.pid.icon.div.parentNode != this.lA) {
                    this.lA.appendChild(this.pid.icon.div.parentNode);
                    this.pid.icon.div.style.zIndex = 200
                }
                if (this.nT == 1 && rs && this.py != this.p9) {
                    this.py = this.p9;
                    if (typeof this.lY == "undefined" || this.lY == null) {
                        this.lY = document.createElement("div");
                        this.lY.style.position = "absolute";
                        this.lY.style.zIndex = 1000;
                        this.lY.style.width = parseFloat(this.pid.icon.div.style.width) + "px";
                        this.lY.style.height = parseFloat(this.pid.icon.div.style.height) + "px";
                        this.lY.style.left = (this.width / 2 - parseFloat(this.pid.icon.div.style.width) / 2) + "px";
                        this.lY.style.top = (this.height / 2 - parseFloat(this.pid.icon.div.style.height) / 2) + "px";
                        this.lY.innerHTML = "<img src='" + this.pid.icon.imgUrl + "' width='" + parseFloat(this.pid.icon.div.style.width) + "px' height='" + this.pid.icon.div.style.height + "px'>";
                        this.map.appendChild(this.lY)
                    }
                    var v0 = -90 + parseFloat(180 * Math.atan2(this.zf[this.p9] - this.zf[this.p9 - 1], 0.8 * (this.zg[this.p9] - this.zg[this.p9 - 1])) / Math.PI);
                    if (v0 < 0) {
                        v0 += 360
                    }
                    v0 = v0 % 360;
                    if ((Math.abs(v0 - this.rotation) % 360) > 180) {
                        this.rotation += 360
                    }
                    if (this.rotation - 180 - 360 > 0) {
                        this.rotation = (this.rotation - 720)
                    }
                    this.uw = this.rotation;
                    this.t9 = v0;
                    if (this.p9 == 1) {
                        this.setRotation(v0);
                        this.setCenter(this.wY, this.wZ)
                    } else {
                        this.setCenter(this.wY, this.wZ);
                        setTimeout("maplet.rotate(\"maplet.doEmulation()\")", 500);
                        return
                    }
                }
                var yi = this.zl(this.zg[this.p9 - 1], this.zf[this.p9 - 1]);
                var yj = this.zm(this.zf[this.p9 - 1], this.zg[this.p9 - 1]);
                var l4 = this.zl(this.zg[this.p9], this.zf[this.p9]);
                var l5 = this.zm(this.zf[this.p9], this.zg[this.p9]);
                var w1 = this.zl(this.wZ, this.wY);
                var w2 = this.zm(this.wY, this.wZ);
                var zx = parseFloat(Math.sqrt((l4 - yi) * (l4 - yi) + (l5 - yj) * (l5 - yj)));
                var tN = parseFloat(Math.sqrt((w1 - yi) * (w1 - yi) + (w2 - yj) * (w2 - yj))) + this.ux;
                if (tN <= (zx - this.ux)) {
                    w1 = yi + tN * (l4 - yi) / zx;
                    w2 = yj + tN * (l5 - yj) / zx;
                    this.wZ = this.zg[this.p9 - 1] + tN * (this.zg[this.p9] - this.zg[this.p9 - 1]) / zx;
                    this.wY = this.zf[this.p9 - 1] + tN * (this.zf[this.p9] - this.zf[this.p9 - 1]) / zx
                } else {
                    w1 = l4;
                    w2 = l5;
                    this.wZ = this.zg[this.p9];
                    this.wY = this.zf[this.p9];
                    this.p9++
                }
                if (this.nT == 0) {
                    this.pid.icon.div.style.top = (w2 - parseFloat(this.pid.icon.div.style.height)) + "px";
                    this.pid.icon.div.style.left = (w1 - parseFloat(this.pid.icon.div.style.width) / 2) + "px"
                }
                if (this.nT == 1 && rs) {
                    this.sF.div.style.top = parseFloat(this.sF.div.style.top) + this.ux;
                    this.vh = getTimeout(this, this.doEmulation, 100)
                } else {
                    if (w1 < 0) {
                        this.panTo(this.width / 2, this.height / 2 - w2, "maplet.doEmulation()")
                    } else if (w1 > this.width) {
                        this.panTo(-this.width / 2, this.height / 2 - w2, "maplet.doEmulation()")
                    } else if (w2 < 0) {
                        this.panTo(this.width / 2 - w1, this.height / 2, "maplet.doEmulation()")
                    } else if (w2 > this.height) {
                        this.panTo(this.width / 2 - w1, -this.height / 2, "maplet.doEmulation()")
                    } else {
                        this.vh = getTimeout(this, this.doEmulation, 10)
                    }
                }
            } else {
                this.vh = null;
                this.zf = null;
                this.zg = null;
                this.pid.icon.div.style.zIndex = 1;
                if (this.lY) {
                    if (this.lY.parentNode) {
                        this.lY.parentNode.removeChild(this.lY);
                        this.lY = null
                    }
                }
                this.setRotation(0);
                this.refresh();
                if (this.lX != null || this.lX != "undefined") {
                    this.lX()
                }
            }
        } catch (nf) {}
    },
    stopEmulation: function () {
        if (this.p9 && this.zf) this.p9 = this.zf.length
    },
    getMarkersInPolygon: function (U_o) {
        var $IY = [];
        var pts = [];
        for (var i = 0; i < U_o.pts.length; i++) {
            pts.push({
                x: U_o.pts[i].mapX,
                y: U_o.pts[i].mapY
            })
        }
        var skY = this.getMarkers();
        for (var i = 0; i < skY.length; i++) {
            var pt = {
                x: skY[i].pt.mapX,
                y: skY[i].pt.mapY
            };
            if (_isInsidePolygon(pt, pts)) $IY.push(skY[i])
        }
        return $IY
    },
    getMarkerPolygons: function (_BI41) {
        var nT_1c = this.getPolylines(2);
        var $IY = [];
        if (nT_1c.length > 0) {
            var pt = {
                x: _BI41.pt.mapX,
                y: _BI41.pt.mapY
            };
            for (var i = 0; i < nT_1c.length; i++) {
                var pts = [];
                var U_o = nT_1c[i];
                for (var P7P9 = 0; P7P9 < U_o.pts.length; P7P9++) pts.push({
                    x: U_o.pts[P7P9].mapX,
                    y: U_o.pts[P7P9].mapY
                });
                if (_isInsidePolygon(pt, pts)) $IY.push(U_o)
            }
        }
        return $IY
    },
    sW146: function (x, y) {
        return this.yFk6[(x % 2) < 0 ? 0 : x % 2][(y % 2) < 0 ? 0 : y % 2]
    },
    Vye: function (detail) {
        var w = parseInt(this.PVKY8.Ulq[0].style.borderTopWidth);
        if (this.PVKY8.yN != null && ((detail < 0 && w == 0) || (detail > 0 && w == 2))) {
            return
        }
        var H$284 = {
            left: this.tR,
            top: this.tS
        };
        var size = null;
        var Gl6 = null;
        if (detail < 0) {
            Gl6 = this.p5S1A;
            size = this.PVKY8.G1$TP;
            this.nmX0(true)
        } else {
            Gl6 = this.S8$;
            size = this.PVKY8.kjx;
            this.nmX0(false)
        }
        H$284.left -= size.width / 2;
        H$284.top -= size.height / 2;
        this.VM3(true, size, H$284);
        this.PVKY8.yN = getTimeout(this, Gl6, this.PVKY8.interval)
    },
    nmX0: function (zoomout) {
        var Ulq = this.PVKY8.Ulq;
        if (zoomout) {
            Ulq[0].style.borderWidth = "0px 2px 2px 0px";
            Ulq[1].style.borderWidth = "0px 0px 2px 2px";
            Ulq[2].style.borderWidth = "2px 2px 0px 0px";
            Ulq[3].style.borderWidth = "2px 0px 0px 2px"
        } else {
            Ulq[0].style.borderWidth = "2px 0px 0px 2px";
            Ulq[1].style.borderWidth = "2px 2px 0px 0px";
            Ulq[2].style.borderWidth = "0px 0px 2px 2px";
            Ulq[3].style.borderWidth = "0px 2px 2px 0px"
        }
    },
    S8$: function () {
        this.NGEmd(false)
    },
    p5S1A: function () {
        this.NGEmd(true)
    },
    NGEmd: function (zoomout) {
        if (this.PVKY8.fB878 <= this.PVKY8.I403) {
            var c = this.PVKY8.container;
            var xd = this.PVKY8.xd * this.PVKY8.fB878;
            var a105 = c.offsetWidth * xd;
            c.style.left = (zoomout ? c.offsetLeft + a105 / 2 : c.offsetLeft - a105 / 2) + "px";
            c.style.width = (zoomout ? c.offsetWidth - a105 : c.offsetWidth + a105) + "px";
            a105 = c.offsetHeight * xd;
            c.style.top = (zoomout ? c.offsetTop + a105 / 2 : c.offsetTop - a105 / 2) + "px";
            c.style.height = (zoomout ? c.offsetHeight - a105 : c.offsetHeight + a105) + "px";
            this.mM6_();
            this.PVKY8.fB878++;
            this.PVKY8.yN = getTimeout(this, (zoomout ? this.p5S1A : this.S8$), this.PVKY8.interval - this.PVKY8.interval * this.PVKY8.xd)
        } else {
            this.VM3(false)
        }
    },
    mM6_: function () {
        var c = this.PVKY8.container;
        var i = 4;
        var w = c.offsetWidth;
        var h = c.offsetHeight;
        this.PVKY8.Ulq[1].style.left = w - i + "px";
        this.PVKY8.Ulq[2].style.top = h - i + "px";
        this.PVKY8.Ulq[3].style.left = w - i + "px";
        this.PVKY8.Ulq[3].style.top = h - i + "px"
    },
    VM3: function (visible, size, H$284) {
        var c = this.PVKY8.container;
        c.style.left = "100px";
        c.style.top = "100px";
        if (this.PVKY8.yN) {
            window.clearTimeout(this.PVKY8.yN);
            this.PVKY8.yN = null
        }
        this.PVKY8.fB878 = 1;
        this.PVKY8.container.style.display = visible ? "" : "none";
        var c = this.PVKY8.container;
        if (typeof H$284 == "object" && H$284) {
            c.style.left = H$284.left + "px";
            c.style.top = H$284.top + "px"
        }
        if (typeof size == "object" && size) {
            c.style.width = size.width + "px";
            c.style.height = size.height + "px";
            this.mM6_()
        }
    },
    U28x1: function () {
        var r = {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: 0,
                y: 0
            }
        };
        with(this.controlCanvas) {
            var D29i0 = getRect();
            if (isVisible()) {
                r.min = D29i0.rdO;
                r.max = D29i0.Q1u_
            }
        }
        return r
    },
    L7n: function () {
        var r = {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: 0,
                y: 0
            }
        };
        if (this.overview) r = this.overview.getRect();
        if (r.min.x == 0 && r.max.x == 0) r = {
            min: {
                x: this.width,
                y: this.height
            },
            max: {
                x: this.width,
                y: this.height
            }
        };
        return r
    },
    P241C: function (rect, G192, O9U) {
        if (typeof G192 != "boolean") G192 = true;
        if (typeof O9U != "boolean") O9U = true;
        var qx = rect.RE6;
        var qz = rect.I6036;
        var N33 = rect.Ch9Y4;
        var oBsQ5 = rect.fU4U3;
        var vj = 0;
        var vk = 0;
        var $505 = 0;
        var _98x2 = 0;
        var LI43 = this.width;
        var gQNa = this.height;
        if (G192 || O9U) {
            var r = {
                min: {
                    x: rect.RE6,
                    y: rect.I6036
                },
                max: {
                    x: rect.Ch9Y4,
                    y: rect.fU4U3
                },
                width: rect.Ch9Y4 - rect.RE6,
                height: rect.fU4U3 - rect.I6036
            };
            var F7$B$, l, yw;
            if (O9U && this.controlCanvas) {
                var b_1 = this.U28x1();
                F7$B$ = this.controlCanvas.options.location;
                l = (F7$B$.type == Maplet.LEFT_TOP || F7$B$.type == Maplet.LEFT_BOTTOM);
                yw = (F7$B$.type == Maplet.LEFT_TOP || F7$B$.type == Maplet.RIGHT_TOP);
                if (_isRectint(r, b_1)) {
                    if (l) {
                        $505 = b_1.max.x
                    } else LI43 = b_1.min.x
                } else {
                    if (l) {
                        if (yw && r.min.x < b_1.max.x && (r.min.y < b_1.max.y || (r.height > this.height - b_1.max.y))) {
                            $505 = b_1.max.x
                        } else if (!yw && r.min.x < b_1.max.x && (r.max.y > b_1.min.y || (r.height > b_1.min.y))) {
                            $505 = b_1.max.x
                        }
                    } else {
                        if (yw && r.max.x > b_1.min.x && (r.min.y < b_1.max.y || (r.height > this.height - b_1.max.y))) {
                            LI43 = b_1.min.x
                        } else if (!yw && r.max.x > b_1.min.x && (r.max.y > b_1.min.y || (r.height > b_1.min.y))) {
                            LI43 = b_1.min.x
                        }
                    }
                }
            }
            if (G192 && this.overview) {
                var p14 = this.L7n();
                F7$B$ = this.overview.location;
                l = (F7$B$.type == Maplet.LEFT_TOP || F7$B$.type == Maplet.LEFT_BOTTOM);
                yw = (F7$B$.type == Maplet.LEFT_TOP || F7$B$.type == Maplet.RIGHT_TOP);
                if (_isRectint(r, p14)) {
                    if (l) $505 = Math.max($505, p14.max.x);
                    else LI43 = Math.min(LI43, p14.min.x)
                } else {
                    if (l) {
                        if (yw && r.min.x < p14.max.x && (r.min.y < p14.max.y || (r.height > this.height - p14.max.y))) {
                            $505 = Math.max($505, p14.max.x)
                        } else if (!yw && r.min.x < p14.max.x && (r.max.y > p14.min.y || (r.height > p14.min.y))) {
                            $505 = Math.max($505, p14.max.x)
                        }
                    } else {
                        if (yw && r.max.x > p14.min.x && (r.min.y < p14.max.y || (r.height > this.height - p14.max.y))) {
                            LI43 = Math.min(LI43, p14.min.x)
                        } else if (!yw && r.max.x > p14.min.x && (r.max.y > p14.min.y || (r.height > p14.min.y))) {
                            LI43 = Math.min(LI43, p14.min.x)
                        }
                    }
                }
            }
        }
        if (qx < $505) vj = qx - $505;
        if (qz < _98x2) vk = qz - _98x2;
        if (N33 > LI43) {
            if (vj == 0) vj = N33 - LI43;
            else vj = 0
        }
        if (oBsQ5 > gQNa) {
            if (vk == 0) vk = oBsQ5 - gQNa;
            else vk = 0
        }
        return {
            s0_3: vj,
            cnA: vk
        }
    },
    OaB: function (rect, Sk7) {
        if (typeof Sk7 != "object" || !Sk7) Sk7 = {
            G192: true,
            O9U: true,
            rF3: true
        };
        var M3i = this.P241C(rect, Sk7.G192, Sk7.O9U, Sk7.rF3);
        var NC31 = M3i.s0_3;
        var Fa9a7 = M3i.cnA;
        if (NC31 != 0 || Fa9a7 != 0) {
            if (typeof rect.jfS6F != "number") rect.jfS6F = 0;
            if (typeof rect.t0aW != "number") rect.t0aW = 0;
            if (NC31 != 0) NC31 = (NC31 < 0 ? NC31 - rect.jfS6F : NC31 + rect.jfS6F);
            if (Fa9a7 != 0) Fa9a7 = (Fa9a7 < 0 ? Fa9a7 - rect.t0aW : Fa9a7 + rect.t0aW);
            maplet.panTo(-NC31, -Fa9a7)
        }
        return M3i
    },
    viewOverlay: function (overlay, bfTn7, eR45) {
        var s = overlay.toString();
        var Ps2 = s.indexOf("MMarker") != -1;
        var q7472 = s.indexOf("MPolyline") != -1;
        var JPN6 = s.indexOf("MEllipse") != -1;
        var u69b = s.indexOf("MRoundRect") != -1;
        var qx = 0,
            qz = 0,
            N33 = 0,
            oBsQ5 = 0;
        if (Ps2 && overlay.icon) {
            var X_4 = overlay;
            qx = X_4.pt.mapX - X_4.icon.anchorX;
            qz = X_4.pt.mapY - X_4.icon.anchorY;
            N33 = qx + parseInt(X_4.icon.div.style.width);
            oBsQ5 = qz + parseInt(X_4.icon.div.style.height)
        } else if (q7472) {
            var ynE = overlay.getCenterXY();
            qx = ynE.x - 16;
            qz = ynE.y - 16;
            N33 = qx + 32;
            oBsQ5 = qz + 32
        } else if (JPN6) {
            qx = overlay.gC.mapX - 16;
            qz = overlay.gC.mapY - 16;
            N33 = qx + 32;
            oBsQ5 = qz + 32
        } else if (u69b) {
            var mL9 = overlay.getCenterXY();
            qx = mL9.x - 16;
            qz = mL9.y - 16;
            N33 = qx + 32;
            oBsQ5 = qz + 32
        }
        return this.OaB({
            RE6: qx,
            I6036: qz,
            Ch9Y4: N33,
            fU4U3: oBsQ5,
            jfS6F: bfTn7,
            t0aW: eR45
        })
    },
    J6s3H: function () {
        this._$296 = new fD("LayerContainer", 0, 0, this.width, this.height, true, 2, '', this.sF)
    },
    LAK: function () {
        for (var i in this.layerData) {
            this.layerData[i] = null;
            delete this.layerData[i]
        }
    },
    getImgByXY: function (x, y, oV3_) {
        if (typeof oV3_ != "boolean") oV3_ = false;
        var img = this.pU[((this.AG).toString(16) + (this.gD).toString(16) + 'l' + (this.gE).toString(16)).toLowerCase()];
        if (typeof img == "object" && img) {
            var qx = Math.floor((x - parseInt(img.style.left)) / this.imgWidth);
            var qz = -Math.floor((y - parseInt(img.style.top) + (oV3_ ? w8[this.AG] : 0)) / this.imgHeight);
            return ((this.AG).toString(16) + (this.gD + qx).toString(16) + 'l' + (this.gE + qz).toString(16)).toLowerCase()
        }
        return null
    },
    t929: function (visible, left, top) {
        with(this.f7T) {
            if (typeof left != "undefined") fC.div.style.left = left + "px";
            if (typeof top != "undefined") fC.div.style.top = top + "px";
            if (fC.div.parentNode != this.panel) {
                this.panel.appendChild(fC.div);
                fC.div.style.zIndex = 2
            }
            if (fC.div.style.display != (visible ? "" : "none")) {
                fC.div.style.display = (visible ? "" : "none")
            }
            if (overlay) {
                overlay.fL5n();
                overlay = null
            }
        }
    },
    vU9jf: function () {
        if (!this.HF2) {
            this.HF2 = document.createElement("div");
            this.HF2.id = px ? "vCanvasVML" : "vCanvasSVG";
            this.HF2.style.position = "absolute";
            this.HF2.unselectable = "on";
            this.HF2.style.zIndex = 0;
            this.HF2.style.MozUserSelect = "none";
            this.lA.appendChild(this.HF2);
            if (!px) {
                var qf$$a = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                qf$$a.setAttribute("id", "LayerDrawSVG");
                qf$$a.setAttribute("version", "1.1");
                qf$$a.setAttribute("overflow", "visible");
                qf$$a.setAttribute("viewBox", "-" + this.width + " -" + this.height + " " + this.width * 3 + " " + this.height * 3);
                qf$$a.setAttribute("style", "position: absolute; left: -" + this.width + "px; top: -" + this.height + "px; z-index: 0;");
                qf$$a.setAttribute("height", this.height * 3 + "px");
                qf$$a.setAttribute("width", this.width * 3 + "px");
                qf$$a.setAttribute(NH6, "true");
                var arrow = document.createElementNS("http://www.w3.org/2000/svg", "path");
                arrow.setAttribute("d", "M 0 0 L 10 5 L 0 10 L 4 5 z");
                arrow.setAttribute("fill", this.brush.color);
                arrow.setAttribute("fill-opacity", this.brush.bgtransparency / 100 + 0.3);
                var zY = document.createElementNS("http://www.w3.org/2000/svg", "marker");
                zY.setAttribute("id", "svgArrow");
                zY.setAttribute("viewBox", "0 0 10 10");
                zY.setAttribute("refX", "6");
                zY.setAttribute("refY", "5");
                zY.setAttribute("markerUnits", "strokeWidth");
                zY.setAttribute("orient", "auto");
                zY.appendChild(arrow);
                qf$$a.appendChild(zY);
                this.HF2.appendChild(qf$$a)
            }
        }
        return this.HF2
    },
    bp5t7: function (x, y) {
        if (this.s08I7 > this.ignoreMoveRange || this.s08I7 < -this.ignoreMoveRange) {
            x = Math.abs(x);
            if (this.s08I7 < 0) this.s08I7 = Math.abs(this.s08I7)
        }
        this.s08I7 += x;
        if (this.qu5j5 > this.ignoreMoveRange || this.qu5j5 < -this.ignoreMoveRange) {
            y = Math.abs(y);
            if (this.qu5j5 < 0) this.qu5j5 = Math.abs(this.qu5j5)
        }
        this.qu5j5 += y
    },
    autoZoomLogo: function () {}
};
Maplet.prototype.toString = function () {
    return "com.mapbar.maplet.Maplet"
};
Maplet.prototype.setIwStdSize = function (w, h) {
    if (typeof w != "number") w = 260;
    if (typeof h != "number") h = 240;
    if (w < avBubble.minWidth) w = avBubble.minWidth;
    if (h < avBubble.minHeight) h = avBubble.minHeight;
    avBubble.width = w;
    avBubble.height = h
};
Maplet.prototype.setIwZoomInSize = function (w, h) {
    if (typeof w != "number") w = "";
    if (typeof h != "number") h = "";
    if (w < avBubble.width) w = "";
    if (h < avBubble.height) h = "";
    avBubble.$AHEx = w;
    avBubble.KL9ut = h
};
Maplet.prototype.addLayer = function (layer) {
    if (layer && layer instanceof MLayer) {
        if (!this.qS[layer.id]) {
            layer.initialize(this);
            this.qS[layer.id] = layer;
            var i = layer.options.zindex + 10;
            if (typeof this.W_7[i] != "undefined") {
                this.W_7[i].push(layer)
            } else {
                this.W_7[i] = [layer]
            }
            this.refresh()
        }
    } else {
        return false
    }
    return true
};
Maplet.prototype.removeLayer = function (layer, finalize) {
    if (typeof finalize != "boolean") finalize = false;
    if (layer && layer instanceof MLayer && this.qS[layer.id] && typeof layer.remove == "function") {
        this.qS[layer.id].remove(finalize);
        this.qS[layer.id] = null;
        delete this.qS[layer.id];
        var pn = layer.options.zindex + 10;
        if (typeof this.W_7[pn] != "undefined") {
            var a = this.W_7[pn];
            if (a.length == 1) {
                this.W_7[pn] = undefined
            } else {
                for (var i = 0; i < a.length; i++) {
                    if (a[i] == layer) {
                        a.splice(i, 1)
                    }
                }
            }
        }
    }
};
Maplet.prototype.clearLayers = function (finalize) {
    if (!this._$296) return;
    for (var i in this.qS) {
        if (this.qS[i].options.creator == MLayer.USER) this.removeLayer(this.qS[i], finalize)
    }
    if (!this.traffic && !this.b51x) {
        this._$296.clear();
        _removeNode(this._$296.div);
        this._$296 = null;
        this.W_7 = []
    }
};
Maplet.prototype.getLayers = function () {
    var qS = [];
    for (var i in this.qS) {
        if (this.qS[i].options.creator == MLayer.USER) qS.push(this.qS[i])
    }
    return qS
};
Maplet.prototype.addPanel = function (panel) {
    if (panel && panel instanceof MPanel) {
        if (this.R03GR[panel.id]) return true;
        panel.initialize(this);
        this.R03GR[panel.id] = panel
    } else {
        return false
    }
};
Maplet.prototype.removePanel = function (panel, finalize) {
    if (typeof finalize != "boolean") finalize = false;
    if (typeof panel == "object") {
        if (this.R03GR[panel.id]) {
            panel.remove(finalize);
            this.R03GR[panel.id] = null;
            delete this.R03GR[panel.id]
        } else if (typeof panel.remove == "function") {
            panel.remove(finalize)
        }
    } else if (typeof panel == "string") {
        if (this.R03GR[panel]) {
            this.R03GR[panel].remove(finalize);
            this.R03GR[panel] = null;
            delete this.R03GR[panel]
        }
    }
};
Maplet.prototype.getPanels = function () {
    var R03GR = [];
    for (var i in this.R03GR) {
        if (this.R03GR[i].options.creator == MPanel.USER) R03GR.push(this.R03GR[i])
    }
    return R03GR
};
Maplet.prototype.clearPanels = function (finalize) {
    for (var i in this.R03GR) {
        if (this.R03GR[i].options.creator == MPanel.USER) this.removePanel(this.R03GR[i], finalize)
    }
};
Maplet.prototype.addOverlay = function (overlay) {
    if (typeof overlay == "object") {
        if (this.u5[overlay.id]) {
            return
        }
        overlay.initialize(this);
        this.u5[overlay.id] = overlay
    }
};
Maplet.prototype.getZoomLevel = function () {
    return this.AG
};
Maplet.prototype.clearOverlays = function (finalize) {
    if (typeof finalize != "boolean") finalize = false;
    this.hideBubble(this);
    for (var id in this.u5) {
        if (this.u5[id] && this.u5[id].remove) {
            this.u5[id].remove(finalize);
            this.u5[id] = null;
            delete this.u5[id]
        }
    }
};
Maplet.prototype.removeOverlay = function (overlay, finalize) {
    if (typeof finalize != "boolean") finalize = false;
    if (typeof overlay == "object") {
        if (this.u5[overlay.id]) {
            this.u5[overlay.id].remove(finalize);
            this.u5[overlay.id] = null;
            delete this.u5[overlay.id]
        } else if (typeof overlay.remove == "function") {
            overlay.remove(finalize)
        }
    } else if (typeof overlay == "string") {
        if (this.u5[overlay]) {
            this.u5[overlay].remove(finalize);
            this.u5[overlay] = null;
            delete this.u5[overlay]
        }
    }
};
Maplet.prototype.clearCache = function () {
    cq.pu = null;
    cq.pu = {}
};
Maplet.prototype.setAutoZoom = function (tj, tl, s4, s6) {
    var aI = [];
    if (this.setAutoZoom.arguments.length == 0) {
        for (var i in this.u5) {
            if (this.u5[i] && this.u5[i].remove) {
                if (this.u5[i].toString() == "com.mapbar.maplet.MMarker") {
                    aI.push(cq.vp(this.u5[i].pt.getPid()))
                } else if (this.u5[i].toString() == "com.mapbar.maplet.MPolyline") {
                    var zh = this.u5[i].pts;
                    for (var qC = 0; qC < zh.length; qC++) {
                        aI.push(cq.vp(zh[qC].getPid()))
                    }
                }
            }
        }
        if (aI.length == 0) {
            return false
        } else {
            tj = 90;
            tl = 180;
            s4 = -90;
            s6 = -180;
            for (var qI = 0; qI < aI.length; qI++) {
                tj = Math.min(parseFloat(aI[qI][1]), tj);
                tl = Math.min(parseFloat(aI[qI][0]), tl);
                s4 = Math.max(parseFloat(aI[qI][1]), s4);
                s6 = Math.max(parseFloat(aI[qI][0]), s6)
            }
        }
    }
    if (isNaN(parseFloat(tj))) {
        var zi = cq.vp(tj);
        var zj = cq.vp(tl);
        tj = zi[1];
        tl = zi[0];
        s4 = zj[1];
        s6 = zj[0]
    }
    var zG = 1.1 * (s4 - tj) * this.imgWidth / this.height;
    var zH = 1.1 * (s6 - tl) * this.imgWidth / this.width;
    var AF = this.getFitZoomLevel(zG, qP);
    var AH = this.getFitZoomLevel(zH, sj);
    var AE = Math.min(AF, AH);
    cq.lf = (s4 + tj) / 2;
    cq.li = (s6 + tl) / 2;
    this.centerAndZoom(new MPoint(cq.zn()), AE);
    return true
};
Maplet.prototype.setZoomLevel = function (AB, fb, sN5o) {
    this.fI(AB);
    AB = parseInt(AB);
    if (AB < te) {
        AB = te
    }
    if (AB > sY) {
        AB = sY
    }
    if (fb != undefined && !fb) {
        return AB
    }
    if (this.markerDragAnimation) {
        with(this.f7T) {
            if (overlay != null && !overlay.ls) this.t929(false)
        }
    }
    if (AB != this.AG) {
        if (typeof sN5o != "boolean" || sN5o) this.eiKX();
        if (apiType == 1) MEvent.trigger(this, "zoom", AB);
        else MEvent.trigger(this, "zoom", "&act=zoom&zm=" + AB);
        for (var i in this.R03GR) {
            var p = this.R03GR[i];
            if (p.options.zoomhide && p.isVisible()) p.setVisible(false)
        }
        this.lA.hide()
    } else {
        this.W413()
    }
    if (this._$296) MLayer.setTipVisible(false);
    if (iToolTipStyle == 0) hideToolTipMenu();
    if (this.controlCanvas != null) {
        this.controlCanvas.update(AB)
    }
    if (this.gc != null) {
        for (var n8 in this.gc) {
            if (this.gc[n8].nR) this.gc[n8].nR.controlCanvas.div.update(AB)
        }
    }
    if (this.ff) this.nI().setZoomLevel(AB);
    if (ContentInfo && ContentInfo.isVisible()) {
        var B331 = this.toScreenCoordinate(avBubble._Tov1);
        if (_isInsideRect({
            x: B331[0],
            y: B331[1]
        }, {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: this.width,
                y: this.height
            }
        })) {
            this.v8q8Y = "infowindow";
            this.U9B2 = avBubble._Tov1;
            this.Cj9mE = B331[0];
            this.dV55V = B331[1]
        }
    }
    this.gwb = this.AG;
    this.AG = AB;
    this.xg = sj[this.AG];
    this.xf = qP[this.AG];
    this.sR = sI[this.AG] + "/";
    if (this.U9B2 != "") {
        var g4 = this.Cj9mE - this.width / 2;
        var g5 = this.dV55V - this.height / 2;
        var B331 = this.toScreenCoordinate(this.U9B2);
        var gp3 = B331[0] - g4;
        var L14Li = B331[1] - g5;
        this.gA = this.zp(gp3, L14Li);
        this.gx = this.zo(gp3, L14Li);
        this.Cj9mE = -1;
        this.dV55V = -1;
        this.U9B2 = "";
        this.v8q8Y = ""
    }
    this.gD = Math.floor((this.gA) / this.xg);
    this.gE = Math.floor((this.gx) / this.xf);
    if (this.gD < 0) this.gD += 1;
    this.mapX = this.width / 2 - Math.round(((this.gA * wp) % (this.xg * wp)) * this.imgWidth / (this.xg * wp));
    if (this.gx >= 0) {
        this.mapY = this.height / 2 - this.imgHeight + Math.round(((this.gx * wp) % (this.xf * wp)) * this.imgHeight / (this.xf * wp))
    } else {
        this.mapY = this.height / 2 + Math.round(((this.gx * wp) % (this.xf * wp)) * this.imgHeight / (this.xf * wp))
    }
    this.zN();
    this.refresh();
    this.gwb = this.AG;
    this.lA.show();
    if (this._$296) this._$296.setVisible(true);
    for (var i in this.R03GR) {
        var p = this.R03GR[i];
        if (p.options.zoomhide && !p.isVisible() && !p.V975J.FTK) p.setVisible(true)
    }
};
Maplet.prototype.setCenter = function (lf, li, fb, e0JG) {
    if (!this.oA46) {
        this.no();
        this.oA46 = true
    }
    var xR = lf;
    if (typeof lf == "object") {
        if (!lf.encrypt && !lf.maplet) {
            lf.initialize(this);
            xR = lf.getPid()
        } else {
            xR = lf.pid
        }
    }
    if (isNaN(parseFloat(xR)) || (typeof xR == "string" && xR.indexOf(',') > 0)) {
        var lh = cq.vp(xR);
        lf = lh[1];
        li = lh[0]
    }
    this.gx = Math.min(sy[1], Math.max(sy[0], parseFloat(lf)));
    this.gA = Math.min(sz[1], Math.max(sz[0], parseFloat(li) % 360));
    if (typeof basepoilist != "object" && !this.J_883 && this.m0J) this.m0J = false;
    if (fb == undefined || fb) {
        this.setZoomLevel(this.AG)
    }
    if (e0JG == undefined || e0JG) {
        if (apiType == 1) {
            MEvent.trigger(this, "pan", new MPoint(this.toMapCoordinate(this.width / 2, this.height / 2)))
        } else {
            MEvent.trigger(this, "pan", "&act=pan&ctr=" + this.toMapCoordinate(this.width / 2, this.height / 2))
        }
    }
};
Maplet.prototype.moveTo = function (left, top) {
    this.top = parseInt(top);
    this.left = parseInt(left);
    this.panel.style.top = parseInt(top) + "px";
    this.panel.style.left = parseInt(left) + "px"
};
Maplet.prototype.getCenter = function () {
    if (apiType == 1) {
        return new MPoint(this.getCurrentMap().split(",").slice(1, 3).join(","))
    } else {
        return this.getCurrentMap().split(",")[1]
    }
};
Maplet.prototype.enableTraffic = function (options) {
    if (typeof options != "object" || !options) options = {};
    if (!this.traffic) {
        this.traffic = new MTraffic(options);
        this.traffic.initialize(this)
    }
    return this.traffic
};
Maplet.prototype.disableTraffic = function () {
    if (this.traffic) {
        this.traffic.remove(true);
        this.traffic = null
    }
};
Maplet.prototype.enablePOILayer = function (options) {
    if (typeof options != "object" || !options) options = {};
    if (!this.b51x) {
        this.b51x = new MPOILayer(options);
        this.b51x.initialize(this)
    }
    return this.b51x
};
Maplet.prototype.disablePOILayer = function () {
    if (this.b51x) {
        this.b51x.remove(true);
        this.b51x = null
    }
};
Maplet.prototype.resize = function (w, h) {
    w = parseInt(w);
    h = parseInt(h);
    if (w < 0 || h < 0) return;
    if (w == this.width && h == this.height) return;
    aa("myalert").style.visibility = "hidden";
    if (this.snapshotBox.isVisible()) this.snapshotBox.hide();
    if (this.xc) this.xc.hide();
    this.hideBubble();
    this.width = w;
    this.height = h;
    vZ(this);
    this.z4 = Math.ceil((this.width) / (this.imgWidth) / 2);
    this.z5 = Math.ceil((this.height) / (this.imgHeight) / 2);
    this.panel.style.width = w + "px";
    this.panel.style.height = h + "px";
    this.panel.style.clip = 'rect(0px,' + this.width + 'px,' + this.height + 'px, 0px)';
    this.sF.resize(w, h);
    this.sE.resize(w, h);
    this.vx.resize(w, h);
    if (this._$296) {
        this._$296.resize(w, h);
        for (var i in this.qS) {
            this.qS[i].resize(w, h)
        }
    }
    if (this.ff) {
        this.nI().resize(h);
        this.nI().moveTo(this.width - 16, 0)
    }
    this.VgxX4();
    this.onresize();
    var An = (navigator.appVersion.match(new RegExp("6.", "i")) == '6.') ? 0 : 2;
    this.lA.resize(w, h);
    this.setZoomLevel(this.AG);
    if (this._$296) {
        for (var i in this.qS) this.qS[i].refreshDataXY()
    }
    for (var pf in this.gc) {
        if (this.gc[pf] && this.gc[pf].onresize) {
            this.gc[pf].onresize(this)
        }
    }
    this.overview.onresize()
};
Maplet.prototype.zoomIn = function () {
    if (this.AG >= sY) return;
    if (ContentInfo && ContentInfo.isVisible()) this.setZoomLevel(this.AG + 1);
    else this.zoomTo(Math.min(sY, this.AG + 1))
};
Maplet.prototype.zoomOut = function () {
    if (this.AG <= te) return;
    if (ContentInfo && ContentInfo.isVisible()) this.setZoomLevel(this.AG - 1);
    else this.zoomTo(Math.max(0, this.AG - 1))
};
Maplet.prototype.centerAndZoom = function (pt, AB) {
    this.setCenter(pt, "", false);
    if (typeof this.sF == "undefined") {
        this.AG = this.setZoomLevel(AB, false);
        this.showMap()
    } else {
        this.setZoomLevel(AB)
    }
};
Maplet.prototype.zoomTo = function (qB, fy, x, y) {
    if (fy) {
        this.fy = fy
    };
    if (ZOOM_TRANSITION && (!ContentInfo || !ContentInfo.isVisible())) {
        if (this.AZ != null) {
            clearTimeout(this.AZ)
        };
        this.AZ = null;
        if (typeof qB != "undefined") {
            this.AT = parseInt(qB);
            if (typeof x == "undefined") {
                this.vc = 0
            } else {
                this.vc = parseInt(x)
            }
            if (typeof y == "undefined") {
                this.vd = 0
            } else {
                this.vd = parseInt(y)
            }
            this.AZ = getTimeout(this, this.zoomTo, 200)
        } else {
            var vG = new Number();
            if (this.AT > this.getZoomLevel()) {
                if (this.AS <= (this.AT - this.AY)) {
                    if (this.AS == -1) {
                        this.AS = this.getZoomLevel() + this.AY
                    } else {
                        this.AS += this.AY
                    }
                    vG = (this.AS - this.getZoomLevel());
                    this.AN(this.AS, 2 * this.vc * vG, 2 * this.vd * vG);
                    this.AZ = getTimeout(this, this.zoomTo, 20)
                } else {
                    this.AS = -1;
                    this.ve = this.zo(-this.vc + this.width / 2, -this.vd + this.height / 2);
                    this.vf = this.zp(-this.vc + this.width / 2, -this.vd + this.height / 2);
                    this.setCenter(this.ve, this.vf, false, false);
                    this.setZoomLevel(this.AT);
                    if (this.fy) {
                        if (ContentInfo && ContentInfo.isVisible()) ContentInfo.setVisible(avBubble.E85J());
                        eval(this.fy)
                    }
                }
            } else if (this.AT < this.getZoomLevel()) {
                if (this.AS == -1 || this.AS >= (this.AT + this.AY)) {
                    if (this.AS == -1) {
                        this.AS = this.getZoomLevel() - this.AY
                    } else {
                        this.AS -= this.AY
                    }
                    vG = Math.abs(this.AS - this.getZoomLevel());
                    this.AN(this.AS, 2 * this.vc * vG, 2 * this.vd * vG);
                    this.AZ = getTimeout(this, this.zoomTo, 20)
                } else {
                    this.AS = -1;
                    this.ve = this.zo(-this.vc + this.width / 2, -this.vd + this.height / 2);
                    this.vf = this.zp(-this.vc + this.width / 2, -this.vd + this.height / 2);
                    this.setCenter(this.ve, this.vf, false, false);
                    this.setZoomLevel(this.AT);
                    if (this.fy) {
                        if (ContentInfo && ContentInfo.isVisible()) ContentInfo.setVisible(avBubble.E85J());
                        eval(this.fy)
                    }
                }
            }
        }
    } else {
        this.setZoomLevel(qB)
    }
};
Maplet.prototype.panTo = function (x, y, fy) {
    if (this.fa) return;
    this.xoffset = parseFloat(x);
    this.yoffset = parseFloat(y);
    this.Aq = 0;
    this.Aw = 0;
    this.fy = fy;
    this.ve = this.zo(-this.xoffset + this.width / 2, -this.yoffset + this.height / 2);
    this.vf = this.zp(-this.xoffset + this.width / 2, -this.yoffset + this.height / 2);
    this.va = parseInt(Math.sqrt(this.xoffset * this.xoffset + this.yoffset * this.yoffset));
    if (!this.fa) {
        this.doPan()
    }
};
Maplet.prototype.toMapCoordinate = function (x, y) {
    cq.li = this.zp(x, y);
    cq.lf = this.zo(x, y);
    return cq.zn()
};
Maplet.prototype.toScreenCoordinate = function (xQ) {
    var B331 = [null, null];
    try {
        var G66 = cq.vp(xQ);
        B331[0] = this.zl(G66[0], G66[1]);
        B331[1] = this.zm(G66[1], G66[0])
    } catch (lM) {
        throw lM
    }
    return B331
};
Maplet.prototype.showLogo = function (c2) {
    if (c2) {
        this.w5B.style.display = "block"
    } else {
        this.w5B.style.display = "none"
    }
    this.Ko8()
};
Maplet.prototype.showScale = function (c2, x4, xG, yb) {
    this.fe = c2;
    if (this.fe) {
        this.wq.show()
    } else {
        if (this.wq != null) this.wq.hide()
    }
};
Maplet.prototype.showOverview = function (c2, c3) {
    if (c2) {
        this.overview.show();
        if (c3) {
            this.overview.open()
        } else {
            this.overview.close()
        }
    } else {
        this.overview.hide();
        this.overview.close()
    }
};
Maplet.prototype.setOverviewLocation = function (location) {
    this.overview.setLocation(location);
    this.Ko8();
    this.VgxX4()
};
Maplet.prototype.resizeOverview = function (w, h) {
    this.overview.resizeTo(w, h);
    this.Ko8();
    this.VgxX4()
};
Maplet.prototype.showControl = function (c2) {
    this.fj = c2;
    if (this.fj) {
        if (this.controlCanvas) this.controlCanvas.show()
    } else {
        if (this.controlCanvas) this.controlCanvas.hide()
    }
    this.Ko8();
    this.VgxX4()
};
Maplet.prototype.getViewBound = function () {
    return {
        "LeftUp": this.toMapCoordinate(0, 0),
        "LeftDown": this.toMapCoordinate(0, this.height),
        "RightUp": this.toMapCoordinate(this.width, 0),
        "RightDown": this.toMapCoordinate(this.width, this.height)
    }
};
Maplet.prototype.calcPointsCt = function (pts) {
    var _p75 = Number.MAX_VALUE,
        L89kN = _p75,
        N33 = -Number.MAX_VALUE,
        oBsQ5 = N33;
    for (var qC = 0; qC < pts.length; qC++) {
        if (!pts[qC].maplet) pts[qC].initialize(this);
        _p75 = Math.min(_p75, pts[qC].mapX);
        L89kN = Math.min(L89kN, pts[qC].mapY);
        N33 = Math.max(N33, pts[qC].mapX);
        oBsQ5 = Math.max(oBsQ5, pts[qC].mapY)
    }
    if (_p75 != Number.MAX_VALUE) return new MPoint(this.toMapCoordinate(_p75 + (N33 - _p75) / 2, L89kN + (oBsQ5 - L89kN) / 2));
    else return null
};
Maplet.prototype.u0 = function () {
    if (this.c0) {
        return
    }
    if (this.fs) {
        return
    }
    this.c0 = true;
    this.fs = true;
    sb = 0;
    if (this.O7Qx.length > 0) {
        if (((this.u2 != null && this.u2 == "traffic") || this.AG != this.gwb) || bpp[0] != this.oA19i) {
            for (var p = 0; p < this.O7Qx.length; p++) {
                this.O7Qx[p].onmousedown = null;
                _removeNode(this.O7Qx[p])
            }
            this.O7Qx = []
        }
        this.oA19i = bpp[0]
    }
    this.G94$();
    var pT = '';
    if (this._$296) this.LAK();
    var pw = 0;
    var yk = this.yl;
    var uY = (this.u2 == "undefined" || this.u2 == null) ? "poi" : this.u2;
    var nL = nM[this.AG];
    this.sZ = 0;
    this.s1 = 0;
    this.tf1 = this.width;
    this.tg = this.height;
    this.s2 = parseInt(this.gD);
    this.s3 = parseInt(this.gE);
    this.th = parseInt(this.gD);
    this.ti = parseInt(this.gE);
    var uZ = new Array();
    var u4 = new Array();
    var t1 = parseInt(new Date().getTime() / 60000);
    var s8 = (360 / sj[this.AG]);
    var M5076 = this.getZoomLevel() - 1;
    if (this.AG == this.gwb) this.sE.clean();
    else if (typeof basepoilist != "object" && !this.J_883 && this.m0J) this.m0J = false;
    for (var qx = -this.z4 - 1; qx <= this.z4; qx++) {
        for (var qz = -this.z5 - 1; qz <= this.z5; qz++) {
            try {
                var qy = parseInt(this.gD + qx);
                var qA = parseInt(this.gE + qz);
                qy = (qy) % s8;
                if (qy >= (s8 / 2)) qy -= s8;
                if (qy < (-s8 / 2)) qy += s8;
                var dirx = parseInt(Math.floor((qy) / nL));
                var diry = parseInt(Math.floor((qA) / nL)); {
                    if (dirx < 0) dirx += 1;
                    if (diry < 0) diry += 1
                }
                var F3L = (qy) - dirx * nL;
                var d6t31 = (qA) - diry * nL;
                var pM = this.strImgUrl.replace("img", "img" + this.sW146(F3L, d6t31)) + "mapbank/" + yk + "/" + this.sR;
                var pQ = this.strImgUrl + "mapbank/" + uY + "/" + this.sR;
                var pG = this.strImgUrl + "mapbank/base/" + this.sR;
                pQ += dirx + "_" + diry + "/";
                pG += dirx + "_" + diry + "/";
                pM += dirx + "_" + diry + "/";
                pQ += F3L + "_" + d6t31 + ".png";
                pG += F3L + "_" + d6t31 + ".js";
                pM += F3L + "_" + d6t31 + "." + this.xK;
                var p1 = (qx * this.imgWidth) + parseInt(this.mapX);
                var p3 = (-(qz * this.imgHeight) + parseInt(this.mapY));
                var p4 = p3;
                if (this.yl != "aerial" && this.yl.indexOf("aerial") < 0) {
                    p3 = p3 + w8[this.AG]
                }
                var rRE = false;
                var d5191 = true;
                var u300 = true;
                if ((p1 < -this.imgWidth || p1 > this.width || p3 > this.height || p3 < -this.imgHeight)) rRE = true;
                if (this.u2 != null && this.u2 == "traffic" && w8[this.AG] != 0 && ((p4 < this.height || p4 <= 0))) {
                    d5191 = false;
                    if (rRE) pM = null
                }
                if (this._$296 && w8[this.AG] != 0 && ((p4 < this.height || p4 <= 0))) {
                    u300 = false;
                    if (rRE) pM = null
                }
                if (rRE && d5191 && u300) continue;
                if (pM) {
                    if (this.sZ < (p1 + this.imgWidth)) {
                        this.sZ = (p1 + this.imgWidth);
                        this.s2 = parseInt(this.gD) + parseInt(qx)
                    }
                    if (this.s1 < (p3 + this.imgHeight)) {
                        this.s1 = (p3 + this.imgHeight);
                        this.ti = parseInt(this.gE) + parseInt(qz)
                    }
                    if (this.tf1 > p1) {
                        this.tf1 = p1;
                        this.th = parseInt(this.gD) + parseInt(qx)
                    }
                    if (this.tg > p3) {
                        this.tg = p3;
                        this.s3 = parseInt(this.gE) + parseInt(qz)
                    }
                }
                var xY = ((this.AG).toString(16) + (this.gD + qx).toString(16) + 'l' + (this.gE + qz).toString(16)).toLowerCase();
                if (pw == 0) {
                    pw = 1
                }
                if (pM && pM.indexOf("NaN") < 0) {
                    if (this.pU[xY] == null) {
                        if (!rs || !px) {
                            this.pU[xY] = new Image();
                            this.pU[xY].id = xY;
                            this.pU[xY].name = xY;
                            this.pU[xY].ntry = "0";
                            this.pU[xY].unselectable = "on";
                            this.pU[xY].style.position = "absolute";
                            this.pU[xY].style.MozUserSelect = "none"
                        } else {
                            this.pU[xY] = document.createElement("v:Image");
                            this.pU[xY].id = xY;
                            this.pU[xY].name = xY;
                            this.pU[xY].ntry = "0";
                            this.pU[xY].unselectable = "on";
                            this.pU[xY].style.position = "absolute";
                            this.pU[xY].cE = "f";
                            this.pU[xY].style.rotation = this.rotation;
                            this.pU[xY].style.width = this.imgWidth;
                            this.pU[xY].style.height = this.imgHeight
                        }
                        if (px) this.pU[xY].style.filter = "alpha(opacity=0);";
                        else this.pU[xY].style.opacity = "0";
                        f1.nk(this.pU[xY], pM, this.imgWidth, this.imgHeight)
                    } else {
                        if (px && rs) {
                            this.pU[xY].style.rotation = this.rotation
                        }
                    }
                    var p2 = (p1 + this.imgWidth / 2 - this.width / 2) * this.gk - (p3 + this.imgHeight / 2 - this.height / 2) * this.wT + this.width / 2;
                    var p5 = (p1 + this.imgWidth / 2 - this.width / 2) * this.wT + (p3 + this.imgHeight / 2 - this.height / 2) * this.gk + this.height / 2;
                    this.pU[xY].style.top = parseInt(p5 - this.imgHeight / 2) + "px";
                    this.pU[xY].style.left = parseInt(p2 - this.imgWidth / 2) + "px";
                    this.pU[xY].c2 = true;
                    this.pU[xY].setAttribute("origy", parseInt(p5 - this.imgHeight / 2));
                    this.pU[xY].setAttribute("origx", parseInt(p2 - this.imgWidth / 2))
                }
                if (this.u2 != null && this.u2 == "traffic") {
                    if (!__mapbar_magic_id) __mapbar_magic_id = "";
                    var pV = bpp[0] + __mapbar_magic_id + "/" + M5076 + "/o" + xY + ".png";
                    if (Nfy) {
                        var X616n = document.createElement("v:image");
                        X616n.setAttribute("unselectable", "on");
                        X616n.id = "o" + xY;
                        X616n.setAttribute("name", xY);
                        X616n.setAttribute("traffic", "yes");
                        X616n.style.cssText = "position:absolute;top:" + p4 + "px;left:" + p1 + "px;width:300px;height:300px";
                        X616n.src = pV;
                        this.O7Qx.push(X616n)
                    } else {
                        var img = document.createElement("IMG");
                        img.id = "o" + xY;
                        img.setAttribute("name", xY);
                        img.src = pV;
                        img.ntry = "0";
                        img.unselectable = "on";
                        img.onerror = function () {
                            imageTileError(this)
                        };
                        img.onload = function () {
                            imageTileOk(this)
                        };
                        img.onmousedown = function () {
                            return false
                        };
                        img.style.cssText = "position:absolute;top:" + p4 + "px;left:" + p1 + "px;-moz-user-select: none;";
                        img.setAttribute("traffic", "yes");
                        this.O7Qx.push(img)
                    }
                    uZ[uZ.length] = 'o' + xY;
                    u4[u4.length] = dirx + "_" + diry + "/"
                } else if (this.u2 != null && this.u2 != "undefined" && pQ && pQ.indexOf("NaN") < 0) {
                    if (this.pU[xY]) {
                        var id = "o" + xY;
                        var path = dirx + "_" + diry + "/";
                        if ((bpp[0] != xl + "mapbank/base/" || (typeof basepoilist == "object" && basepoilist[sI[this.AG] + "/" + path + id + ".png"])) || DISABLE_OLD_GOLDPOI) {
                            var div = aa(id);
                            if (!div) {
                                div = document.createElement("DIV");
                                div.setAttribute("unselectable", "on");
                                div.id = id;
                                div.setAttribute("name", xY);
                                div.style.cssText = "position:absolute;width:0px;height:0px;";
                                this.O7Qx.push(div)
                            }
                            div.style.left = p1 + "px";
                            div.style.top = p4 + "px";
                            uZ[uZ.length] = id;
                            u4[u4.length] = path
                        }
                    }
                }
                if (this._$296) {
                    this.layerData[xY] = {
                        filename: this.sR + dirx + "_" + diry + "/" + F3L + "_" + d6t31,
                        dirx: dirx,
                        diry: diry,
                        grid: xY,
                        F3L: F3L,
                        d6t31: d6t31,
                        dirname: dirx + "_" + diry,
                        xyname: F3L + "_" + d6t31,
                        x: p1,
                        y: p4
                    }
                }
                pM = null;
                pQ = null
            } catch (lM) {
                throw (lM)
            }
        }
    }
    for (var qI in this.pU) {
        var img = this.pU[qI];
        if (img != null && typeof img == "object") {
            if ((typeof img.c2 == "boolean" && img.c2) || img.c2 == "true") {
                if (img.parentNode != this.sE.div) {
                    if (img.parentNode != null) img.parentNode.removeChild(img);
                    this.sE.div.appendChild(img)
                }
            } else if (img.parentNode != this.sG.div) {
                if (img.parentNode != null) _removeNode(img);
                img.onerror = null;
                img.onload = null;
                img = null;
                delete this.pU[qI]
            }
        }
    }
    if (!(this.u2 != null && this.u2 == "traffic") && this.O7Qx.length > 0) {
        var s = uZ.join(",");
        for (var P7P9 = this.O7Qx.length - 1; P7P9 >= 0; P7P9--) {
            if (s.indexOf(this.O7Qx[P7P9].id) == -1) {
                if (this.O7Qx[P7P9].parentNode) {
                    _removeNode(this.O7Qx[P7P9])
                }
                this.O7Qx.splice(P7P9, 1)
            }
        }
        for (var P7P9 = uZ.length - 1; P7P9 >= 0; P7P9--) {
            if (aa(uZ[P7P9])) uZ.splice(P7P9, 1)
        }
    }
    if (this.O7Qx.length > 0) {
        for (var q = 0; q < this.O7Qx.length; q++) {
            this.lA.div.appendChild(this.O7Qx[q])
        }
    }
    pT = null;
    for (var pid in this.R03GR) {
        var p = this.R03GR[pid];
        if (p.paint) p.paint()
    }
    if (this._$296) {
        for (var i in this.qS) {
            if (this.qS[i].inZoomRange(this.AG)) this.qS[i].update();
            else this.qS[i].clear()
        }
    }
    if (this.sE.div.parentNode != this.sF.div) {
        this.sF.div.appendChild(this.sE.div)
    }
    if (this.vx.div.parentNode != this.sF.div) {
        this.sF.div.appendChild(this.vx.div)
    }
    if ((typeof this.fo == "boolean" && this.fo) && document.getElementById("LayerMap") && document.getElementById("LayerMap").filters && document.getElementById("LayerMap").filters.length > 0) {
        document.getElementById("LayerMap").filters[0].apply();
        document.getElementById("LayerMap").filters[0].vu()
    }
    if (this.aN.length > 0) {
        for (var qk = 0; qk < this.aN.length; qk++) {
            this.aN[qk].paint()
        }
    }
    if (this.zy != null) {
        this.zy.paint();
        if (this.tG != null) {
            this.tG.paint()
        }
    }
    if (this.aO.length > 0) {
        for (qk = 0; qk < this.aO.length; qk++) {
            this.aO[qk].u9(this.vx.div);
            this.aO[qk].paint(this.lA.div)
        }
    }
    if (this.yG.length > 0) {
        if (!px) this.yG[this.yG.length - 1].label(this.lA.graphics)
    } else {
        if (iToolTipStyle == 0) hideToolTipMenu()
    }
    if (this.lA.div.parentNode != this.sF.div) {
        this.sF.div.appendChild(this.lA.div)
    }
    if (this.aE.length > 0) {
        this.aG = null;
        this.aH = null;
        this.aF = null;
        for (qk = 0; qk < this.aE.length; qk++) {
            if (this.AG >= this.aE[qk].AJ && this.AG <= this.aE[qk].AI) {
                var w4 = this.zl(this.aE[qk].li, this.aE[qk].lf);
                var w5 = this.zm(this.aE[qk].lf, this.aE[qk].li);
                if (w4 >= 0 && w4 <= this.width && w5 >= 0 && w5 <= this.height) {
                    if (this.aG == null) {
                        this.aG = new Array();
                        this.aH = new Array();
                        this.aF = new Array()
                    }
                    this.aG[this.aG.length] = w4;
                    this.aH[this.aH.length] = w5;
                    this.aF[this.aF.length] = qk
                }
            }
        }
    }
    if (!this.cH) {
        this.cH = true
    }
    if (this.u2 != null && this.u2 != "undefined") {
        if (this.u2 == "base") {
            if (this.AG >= parseInt(bpp[1]) && this.AG <= parseInt(bpp[2])) {
                if (!this.m0J && !DISABLE_OLD_GOLDPOI) {
                    this.vlp7N();
                    this.m0J = true
                }
                var i = 0;
                for (var l in uZ) {
                    try {
                        if (typeof uZ[l] == "string") {
                            if (bpp[0] != xl + "mapbank/base/" || typeof basepoilist == "object" && basepoilist[sI[this.AG] + "/" + u4[l] + uZ[l] + ".png"]) {
                                if (!DISABLE_OLD_GOLDPOI) new foy21(bpp[0] + sI[this.AG] + "/" + u4[l] + uZ[l] + ".png", parseInt, false, true).f7c0()
                            }
                            i++
                        }
                    } catch (lN) {
                        throw (lN)
                    }
                    uZ[l] = null;
                    u4[l] = null
                }
            } else {
                for (var su in uZ) {
                    try {
                        if (typeof uZ[su] == "string" && document.getElementById(uZ[su]) && document.getElementById(uZ[su]).parentNode) {
                            if (!DISABLE_OLD_GOLDPOI) _removeNode(aa(uZ[su]))
                        }
                    } catch (lM) {
                        throw (lM)
                    }
                    uZ[su] = null;
                    u4[su] = null
                }
            }
        } else {
            t1 = parseInt(new Date().getTime() / 60000);
            for (var uD in uZ) {
                try {
                    if ((this.u2 != "traffic") && typeof uZ[uD] == "string") {
                        XMLHttp.sendReq('GET', 'maplite/' + this.u2 + '.jsp?' + this.u3 + '&oid=' + uZ[uD] + '&epoch=' + t1, '', vB, uZ[uD])
                    }
                } catch (lM) {
                    throw (lM)
                }
                uZ[uD] = null;
                u4[uD] = null
            }
        }
        uZ.length = 0;
        uZ = null;
        u4.length = 0;
        u4 = null
    }
    this.c0 = false;
    this.fs = false;
    for (var i = 0; i < 2; i++) {
        for (var qi in this.u5) {
            if (this.u5[qi] && this.u5[qi].paint) {
                if (i == 0 && this.u5[qi] instanceof MMarker && !this.u5[qi].ls) this.u5[qi].paint();
                else if (i == 1 && this.u5[qi].u$2V) this.u5[qi].paint()
            }
        }
    }
    avBubble.HB1Q3();
    if (this.overview) this.overview.paint();
    cq.lf = this.gx;
    cq.li = this.gA;
    var gz = cq.zn();
    this.yu = gz + "@" + this.AG;
    if (ALLOW_MV) {
        try {
            var ww = "@mapbar" + (new Date().getTime() % 86400).toString(36);
            sB.src = "http://mv.mapbar.com/?" + this.yu + "@" + this.yt + "@" + this.width.toString(36).toUpperCase() + "@" + this.height.toString(36).toUpperCase() + "@" + this.sS.toString(36).toUpperCase() + "@" + c75 + "@" + strLicenseKey.toString(36).toUpperCase() + "@" + this.yl + "@" + ((bp) ? 1 : 0) + "@" + ((this.u2) ? this.u2 : "") + ww
        } catch (lM) {
            throw (lM)
        }
    }
    this.sF.moveTo(0, 0);
    this.vx.moveTo(0, 0);
    this.lA.moveTo(0, 0);
    MEvent.trigger(this, "update", this.yu)
};
Maplet.prototype.getEllipse = function () {
    var r = [];
    for (var i in this.u5) {
        if (this.u5[i] instanceof MEllipse) r.push(this.u5[i])
    }
    return r
};
Maplet.prototype.getRoundRect = function () {
    var r = [];
    for (var i in this.u5) {
        if (this.u5[i] instanceof MRoundRect) r.push(this.u5[i])
    }
    return r
};
Maplet.prototype.getMarkers = function () {
    var r = [];
    for (var i in this.u5) {
        if (this.u5[i] instanceof MMarker) r.push(this.u5[i])
    }
    return r
};
Maplet.prototype.getPolylines = function (hVk9h) {
    if (typeof hVk9h != "number") hVk9h = 1;
    var r = [];
    for (var i in this.u5) {
        if (this.u5[i] instanceof MPolyline) {
            if (hVk9h == 2 && !this.u5[i].hHTG3()) continue;
            else if (hVk9h == 3 && this.u5[i].hHTG3()) continue;
            r.push(this.u5[i])
        }
    }
    return r
};
Maplet.prototype.equalsLLCoords = function (_p52, F4UJ, Gm6N0) {
    if (typeof _p52 == "string" && _p52 && typeof F4UJ == "string" && F4UJ) {
        try {
            if (_p52 == F4UJ) return true;
            if (typeof Gm6N0 != "number") Gm6N0 = 0;
            var w14kk = maplet.toScreenCoordinate(_p52);
            var X3d = maplet.toScreenCoordinate(F4UJ);
            if ((w14kk[0] == X3d[0] || Math.abs(w14kk[0] - X3d[0]) <= Gm6N0) && (w14kk[1] == X3d[1] || Math.abs(w14kk[1] - X3d[1]) <= Gm6N0)) return true
        } catch (nc) {}
    }
    return false
};
Maplet.prototype.measDistance = function (pts) {
    try {
        var g0 = 0;
        var ur = pts.length;
        var zh = [],
            lf = 0,
            li = 0;
        for (var su = 1; su < ur; su++) {
            zh.push(cq.vp(pts[su - 1].getPid()));
            zh.push(cq.vp(pts[su].getPid()));
            lf = zh[1][1] - zh[0][1];
            li = zh[1][0] - zh[0][0];
            g0 += Math.sqrt(lf * lf + li * li * 0.64);
            zh.length = 0
        }
        return parseInt(g0 * this.gM * 111111.0)
    } catch (nc) {
        return 0
    }
};
Maplet.prototype.measArea = function (pts) {
    try {
        var area = 0;
        var ur = pts.length;
        var qC = 2;
        var qI = 0;
        for (var i = 1; i <= ur; i++) {
            var qj = (qC % ur);
            var pC = (qI % ur);
            var lon = parseFloat(cq.vp(pts[(i % ur)].getPid())[0]);
            var lat = parseFloat(cq.vp(pts[qj].getPid())[1]);
            var k70 = parseFloat(cq.vp(pts[pC].getPid())[1]);
            area += lon * (lat - k70);
            qC++;
            qI++
        }
        return parseInt(Math.abs(area / 2) * this.gM * this.gM * 100000 * 100000)
    } catch (nc) {
        return 0
    }
};
Maplet.prototype.decodeLine = function (pts, K8c8) {
    var rt = [];
    if (typeof pts != "string" || !pts || typeof K8c8 != "string" || !K8c8) return rt;
    var L31 = this._0P(pts);
    var C9V46 = this.u34t(K8c8);
    if (L31.length == C9V46.length) {
        for (var i = 0; i < L31.length; i++) {
            rt.push(new MPoint(L31[i][1], L31[i][0], false, C9V46[i]));
            rt[i].initialize(this)
        }
    }
    return rt
};
Maplet.prototype._0P = function (gWQj) {
    var A5_ = gWQj.length;
    var index = 0;
    var CK9 = [];
    var lat = 0;
    var KR8 = 0;
    while (index < A5_) {
        var b;
        var shift = 0;
        var $IY = 0;
        do {
            b = gWQj.charCodeAt(index++) - 63;
            $IY |= (b & 0x1f) << shift;
            shift += 5
        } while (b >= 0x20);
        var Iu6 = (($IY & 1) ? ~ ($IY >> 1) : ($IY >> 1));
        lat += Iu6;
        shift = 0;
        $IY = 0;
        do {
            b = gWQj.charCodeAt(index++) - 63;
            $IY |= (b & 0x1f) << shift;
            shift += 5
        } while (b >= 0x20);
        var iO2 = (($IY & 1) ? ~ ($IY >> 1) : ($IY >> 1));
        KR8 += iO2;
        CK9.push([lat * 1e-5, KR8 * 1e-5])
    }
    return CK9
};
Maplet.prototype.u34t = function (gWQj) {
    var K8c8 = [];
    for (var Y8G = 0; Y8G < gWQj.length; ++Y8G) {
        var sVj0$ = gWQj.charCodeAt(Y8G) - 63;
        K8c8.push(sVj0$)
    }
    return K8c8
};
var w$n = {
    wB: function (uL) {
        this.fo = (uL) ? true : false
    },
    addLabel: function (xI, lf, li, xP, xA, cK, vD) {
        if (!xA) xA = '';
        this.yG[this.yG.length] = new a8("label" + this.sv, xI, xI, parseFloat(lf), parseFloat(li), xP, xA, cK, vD);
        this.sv++
    },
    addPoint: function (xI, lf, li, xP, xu, cK, vD) {
        if (!xu) xu = '';
        this.aO[this.aO.length] = new a8("point" + this.sv, xI, xI, parseFloat(lf), parseFloat(li), xP, xu, cK, vD);
        this.sv++
    },
    updatePointAt: function (E66J, xP, xu, xI, xJ) {
        if (E66J >= 0 && this.aO.length > E66J) {
            if (!xu) xu = '';
            this.aO[E66J].zM(xP, xu);
            if (typeof xI != "undefined") {
                if (typeof xJ == "undefined") xJ = xI;
                this.aO[E66J].setIcon(xI, xJ)
            }
        }
    },
    updateLineAt: function (pr, xP, xu, cK) {
        if (pr >= 0 && this.aN.length > pr) {
            this.po = pr;
            if (xP != "undefined" && xP != null) {
                this.aN[pr].cK = (cK == "false" || cK == "0") ? false : true;
                this.aN[pr].xP = xP
            }
            if (xu != "undefined" && xu != null) {
                this.aN[pr].xu = xu
            }
            if (this.aN[pr].cK) {
                this.aN[pr].zM(xP, xu)
            }
        }
    },
    showTipOf: function (E66J, ct, cM) {
        if (cM == null || cM == false || cM == "undefined" || cM == "false") {
            if (E66J >= 0 && this.aO.length > E66J) {
                if (this.aO[E66J].pO) {
                    this.aO[E66J].pO.onmouseover();
                    this.aO[E66J].pO.wR(ct)
                }
            }
        } else {
            if (E66J >= 0 && this.aN.length > E66J) {
                this.aN[E66J].wN()
            }
        }
    }
};

function a8(id, xI, xJ, lf, li, xP, xu, cK, vD) {
    this.lf = lf;
    this.li = li;
    this.setIcon = function (xI, xJ) {
        if (xI != "undefined" && xI != "") {
            this.xI = xI;
            this.pO.src = xI;
            this.pO.up = xI
        }
        if (xJ != "undefined" && xJ != "") {
            this.xJ = xJ;
            this.pO.n1 = xJ
        }
    };
    this.zM = function (title, content) {
        this.xP = title;
        this.xu = content;
        if (this.id != "undefined" && this.xP != "undefined") {
            pe[this.id] = this.xP;
            pa[this.id] = (this.xu == null || this.xu == "undefined") ? tX('%u8BEA%u0AAC%uCEA7%uB050') : this.xu
        }
        if (this.cK) {
            if (typeof this.n2 != "undefined") {
                var container = this.n2.parentNode;
                if (container != null) {
                    container.removeChild(this.n2)
                }
                var left = parseInt(this.n2.style.left);
                var top = parseInt(this.n2.style.top);
                this.n2 = gu(this.xP, this.color);
                this.n2.style.left = left + "px";
                this.n2.style.top = top + "px";
                if (container != null) {
                    container.appendChild(this.n2)
                }
            } else {
                this.n2 = gu(this.xP, this.color)
            }
        }
    };
    if (id != "undefined" && xI != "undefined") {
        this.id = id;
        this.color = (vD == null || vD == "undefined") ? "#FF0000" : vD;
        this.cK = (cK == "1");
        this.AJ = 0;
        this.AI = 16;
        this.zM(xP, xu);
        this.pO = new Image();
        this.pO.unselectable = "on";
        this.pO.id = this.id;
        this.pO.fl = true;
        this.pO.cm = false;
        this.pO.x0 = 0;
        this.pO.As = 0;
        this.pO.lI = 0;
        this.pO.lK = 0;
        this.pO.style.position = "absolute";
        this.pO.onerror = function () {
            this.src = strImgsvrUrl + 'images/marker.gif';
            this.onerror = null
        };
        this.pO.onload = function () {
            this.onerror = null;
            this.onload = null
        };
        this.setIcon(xI, xJ);
        this.pO.onmouseover = function () {
            var maplet = document["mapbar-maplet"];
            if (maplet.sS == ts.tb || maplet.sS == ts.ta || maplet.sS == ts.tw) {
                this.style.cursor = "default";
                return
            }
            this.style.cursor = (px) ? "hand" : "pointer";
            if (this.style.zIndex < pF) {
                pF++
            }
            this.style.zIndex = pF;
            if (this.n1 != "undefined" && this.n1 != "") this.src = this.n1;
            if (this.fl && iToolTipStyle == 0) {
                var x = parseInt(this.style.left) + parseInt(this.width) / 2;
                var y = parseInt(this.style.top) + parseInt(this.height) / 2;
                setToolTipMenu(x, y, pe[this.id], pa[this.id])
            }
        };
        this.pO.onmouseout = function () {
            if (this.up != "undefined" && this.up != "") this.src = this.up;
            if (document["mapbar-maplet"].sS == ts.tu) this.uI()
        };
        this.pO.onclick = function () {
            if (this.fl.toString() == "false") return;
            var maplet = document["mapbar-maplet"];
            if (maplet.sS == ts.tb || maplet.sS == ts.ta || maplet.sS == ts.tw || maplet.sS == ts.ly || maplet.sS == ts.lz || maplet.sS == ts.np) return;
            if (maplet.sS == ts.l3) {
                var pn = maplet.p8(maplet.aO, this.id);
                maplet.removePointAt(pn);
                maplet.refresh();
                if (callback) callback("&act=del&pid=" + pn);
                return
            }
            if (this.lI == 0 && this.lK == 0) this.wR()
        };
        this.pO.onmousemove = function (lM) {
            if (document["mapbar-maplet"].sS == ts.tu && this.cm) {
                var Ap = parseInt((px) ? event.clientX : lM.clientX);
                var Av = parseInt((px) ? event.clientY : lM.clientY);
                this.lK += (Av - this.As);
                this.lI += (Ap - this.x0);
                this.style.top = (parseInt(this.style.top) + (Av - this.As)) + "px";
                this.style.left = (parseInt(this.style.left) + (Ap - this.x0)) + "px";
                this.x0 = Ap;
                this.As = Av
            }
        };
        this.pO.onmousedown = function (lM) {
            var Ap = parseInt((px) ? event.clientX : lM.clientX);
            var Av = parseInt((px) ? event.clientY : lM.clientY);
            this.cm = true;
            this.x0 = Ap;
            this.As = Av;
            this.lI = 0;
            this.lK = 0
        };
        this.pO.onmouseup = function (lM) {
            if (document["mapbar-maplet"].sS == ts.tu) this.uI(lM)
        };
        this.pO.uI = function (lM) {
            if (this.cm && (this.lI != 0 || this.lK != 0)) {
                this.cm = false;
                var maplet = document["mapbar-maplet"];
                var pt = maplet.getElementById(maplet.aO, this.id);
                if (pt != null) {
                    pt.lf += (maplet.zo(this.lI + maplet.width / 2, this.lK + maplet.height / 2) - maplet.gx);
                    pt.li += (maplet.zp(this.lI + maplet.width / 2, this.lK + maplet.height / 2) - maplet.gA);
                    cq.lf = pt.lf;
                    cq.li = pt.li;
                    var fQ = cq.zn();
                    var pn = maplet.p8(maplet.aO, this.id);
                    maplet.refresh();
                    if (callback) callback("&act=move&pid=" + pn + "&latlon=" + fQ)
                }
                this.lI = 0;
                this.lK = 0
            } else {
                this.cm = false
            }
        };
        this.pO.wR = function (ct) {
            var x = parseInt(this.style.left) + parseInt(this.width) / 2;
            var y = parseInt(this.style.top) + parseInt(this.height) / 2;
            var maplet = document["mapbar-maplet"];
            if ((iToolTipStyle == "undefined" || iToolTipStyle == 1) && (pe[this.id] != null) && (pe[this.id].length > 0)) {
                avBubble.gl(pe[this.id], pa[this.id]);
                if (ct.toString() == "true" || ((x > avBubble.xoffset) && (x < (maplet.width - avBubble.width)) && (y > avBubble.height) && (y < (maplet.height)))) {
                    maplet.Rb93W = gp(pe[this.id], x, y, pa[this.id]);
                    maplet.sF.div.appendChild(maplet.Rb93W)
                } else {
                    maplet.Rb93W = gp(pe[this.id], maplet.width / 2 + 2, avBubble.height + 10, pa[this.id]);
                    var vj = maplet.width / 2 - x;
                    var vk = avBubble.height + 10 - y;
                    maplet.panTo(vj, vk)
                }
            } else if (iToolTipStyle == 2) {
                var pn = maplet.p8(maplet.aO, this.id);
                if (callback) callback("&act=click&pid=" + pn)
            }
        }
    }
    this.lx = function (g) {
        var maplet = document["mapbar-maplet"];
        var width = (this.pO != null) ? parseInt(this.pO.width) : 16;
        var height = (this.pO != null) ? parseInt(this.pO.height) : 16;
        var left = maplet.zl(this.li, this.lf) - width / 2;
        var top = maplet.zm(this.lf, this.li) - height;
        if (this.xP && this.cK) {
            g.setColor(this.color);
            g.lC(this.xP, maplet.zl(this.li, this.lf) + width / 2, maplet.zm(this.lf, this.li) - 12)
        }
        if (this.xI) {
            g.lB(this.xI, left, top, width, height)
        }
    };
    this.paint = function (container) {
        if (this.xI) {
            var maplet = document["mapbar-maplet"]; {
                var width = (this.pO != null) ? parseInt(this.pO.width) : 16;
                var height = (this.pO != null) ? parseInt(this.pO.height) : 16;
                var left = maplet.zl(this.li, this.lf) - width / 2;
                var top = maplet.zm(this.lf, this.li) - height;
                if (left.toString() == eval("Number.NaN.toString()") || top.toString() == eval("Number.NaN.toString()")) return;
                this.pO.style.top = top + "px";
                this.pO.style.left = left + "px";
                if (top >= 0 && left >= 0 && top <= maplet.height && left <= maplet.width) {
                    if (this.pO.parentNode != container) {
                        container.appendChild(this.pO)
                    }
                    this.pO.style.visibility = "visible"
                } else {
                    this.pO.style.visibility = "hidden";
                    if (this.pO.parentNode == container) {
                        container.removeChild(this.pO)
                    }
                }
            }
        }
    };
    this.u9 = function (container) {
        if (this.xP && this.cK) {
            var maplet = document["mapbar-maplet"];
            var width = (this.pO != null) ? parseInt(this.pO.width) : 16;
            var height = (this.pO != null) ? parseInt(this.pO.height) : 16;
            var left = maplet.zl(this.li, this.lf) - width / 2;
            var top = maplet.zm(this.lf, this.li) - height;
            if (left.toString() == eval("Number.NaN.toString()") || top.toString() == eval("Number.NaN.toString()")) return;
            if (top >= 0 && left >= 0 && top <= maplet.height && left <= maplet.width) {
                this.n2.style.left = (left + width) + "px";
                this.n2.style.top = top + "px";
                if (this.n2.parentNode != container) {
                    container.appendChild(this.n2)
                }
            }
        }
    };
    this.label = function () {
        if (this.xu) {}
    };
    this.pu = {};
    this.vp = function (li) {
        return this.pu[li] ||
        function (pu, xT) {
            var pk = -1;
            var fE = 0;
            var ub = '';
            var fH = '';
            if (xT != null && parseInt(xT.charAt(0), 36) >= 33) {
                fH = xT.charAt(0);
                xT = xT.substring(1)
            }
            for (var i = 0; i < (xT.length - (c75 ? 1 : 0)); i++) {
                var n8 = parseInt(xT.charAt(i), 36) - 10;
                if (n8 >= 17) n8 = n8 - 7;
                ub += (n8).toString(36);
                if (n8 > fE) {
                    pk = i;
                    fE = n8
                }
            }
            var n9 = parseInt(ub.substring(0, pk), 16);
            var n0 = parseInt(ub.substring(pk + 1), 16);
            if ("X" == fH) {
                n9 = -n9
            }
            if ("Y" == fH) {
                n0 = -n0
            }
            var v6 = new Array();
            v6[0] = (n9 + n0 - parseInt(strLicenseKey)) / 2;
            v6[1] = (n0 - v6[0]) / 100000.0;
            v6[0] /= 100000.0;
            if (v6[0] > 180) v6[0] -= 360;
            pu[xT] = v6;
            return v6
        }(this.pu, li)
    };
    this.zn = function (li, lf) {
        if (typeof li != "undefined" && typeof lf != "undefined") {
            this.lf = parseFloat(lf);
            this.li = parseFloat(li)
        }
        var v6 = '';
        var uh = parseInt(parseFloat(Math.max(-90, Math.min(90, this.lf))) * 100000);
        var uj = parseInt(parseFloat((this.li < 0) ? (this.li + 360) : this.li) * 100000);
        var pl = uj - uh + parseInt(strLicenseKey);
        var pm = uj + uh;
        if (pl < 0) {
            v6 = 'X';
            pl = -pl
        }
        if (pm < 0) {
            v6 = 'Y';
            pm = -pm
        }
        var ph = (pl).toString(16);
        var pi = (pm).toString(16);
        for (var i = 0; i < ph.length; i++) {
            var qv = parseInt(ph.charAt(i), 16);
            v6 += (((qv >= 10) ? (qv + 7) : qv) + 10).toString(36)
        }
        v6 += 'z';
        for (var qC = 0; qC < pi.length; qC++) {
            var Jo41 = parseInt(pi.charAt(qC), 16);
            v6 += (((Jo41 >= 10) ? (Jo41 + 7) : Jo41) + 10).toString(36)
        }
        if (c75) {
            v6 += v6.charAt(c75)
        }
        return v6.toUpperCase()
    }
};

function a9(id, aK, aM, xt, qq, qr, cr) {
    this.aK = (aK == null) ? new Array() : aK;
    this.aM = (aM == null) ? new Array() : aM;
    this.color = (xt == null) ? "#FF0000" : xt;
    this.stroke = (qq == 0) ? 1 : qq;
    this.style = qr;
    this.id = id;
    this.cr = (cr == "undefined" || cr == null) ? "false" : cr;
    this.xP = '';
    this.cK = false;
    this.xu = '';
    this.maplet = null;
    this.vp = function (xT) {
        var aU = xT.split(',');
        var qI = 0;
        for (var i = 0; i < aU.length; i++) {
            if (aU[i] != null && aU[i].length > 0) {
                var pt = cq.vp(aU[i]);
                this.aM[qI] = parseFloat(pt[0]);
                this.aK[qI] = parseFloat(pt[1]);
                qI++
            }
        }
    };
    this.zn = function () {
        var xU = (this.cr.toString() == "true" || this.cr == "true") ? "2" : "0";
        var xT = this.stroke + "," + xU + "," + this.color + ":";
        for (var i = 0; i < this.aK.length; i++) {
            cq.lf = parseFloat(this.aK[i]);
            cq.li = parseFloat(this.aM[i]);
            xT += cq.zn() + ","
        }
        return xT
    };
    this.zM = function (title, content) {
        this.xP = title;
        this.xu = content;
        if (this.cK) {
            if (typeof this.n2 != "undefined") {
                var container = this.n2.parentNode;
                if (container != null) {
                    container.removeChild(this.n2)
                }
                var left = parseInt(this.n2.style.left);
                var top = parseInt(this.n2.style.top);
                this.n2 = gu(this.xP, this.color);
                this.n2.style.left = left + "px";
                this.n2.style.top = top + "px";
                if (container != null) {
                    container.appendChild(this.n2)
                }
            } else {
                this.n2 = gu(this.xP, this.color)
            }
        }
    };
    this.lx = function (g) {
        var aP = new Array();
        var aR = new Array();
        var pg = 0;
        var us = 10;
        for (var i = 0; i < this.aK.length; i++) {
            if (this.aK[i].toString() != eval("Number.NaN.toString()")) {
                aR[pg] = this.maplet.zm(this.aK[i], this.aM[i]);
                if (this.aM[i].toString() != eval("Number.NaN.toString()")) {
                    aP[pg] = this.maplet.zl(this.aM[i], this.aK[i]);
                    if (pg > 0 && (Math.abs(aP[pg] - aP[pg - 1]) + Math.abs(aR[pg] - aR[pg - 1])) > us) {
                        pg++
                    }
                }
            }
            if (pg == 0) pg++
        }
        if (this.color) g.setColor(this.color);
        if (this.stroke) g.setStroke(this.stroke);
        g.drawPolyline(aP, aR, this.style);
        g.paint()
    };
    this.paint = function (container) {
        this.zX = document.createElement("div");
        this.zX.maplet = this.maplet;
        this.zX.id = this.id;
        this.zX.unselectable = "on";
        this.zX.style.zIndex = 10;
        this.zX.style.position = "absolute";
        this.z0 = document.createElement("v:polyline");
        this.z0.unselectable = "on";
        this.z0.id = this.id;
        this.z0.strokecolor = this.color;
        this.z0.strokeweight = this.stroke + 'pt';
        this.z0.fill = false;
        this.z0.filled = this.cr;
        this.z0.style.position = "absolute";
        this.Ad = document.createElement("v:stroke");
        this.Ad.opacity = (transparencyLevel / 100);
        this.Ad.joinstyle = "round";
        this.Ad.endcap = "round";
        this.Ad.fill = "false";
        if (bArrow) {
            this.Ad.endarrow = "classic"
        }
        this.zY = document.createElement("v:fill");
        this.zY.opacity = ((transparencyLevel / 2) / 100);
        this.zY.color = this.color;
        this.z0.appendChild(this.Ad);
        this.z0.appendChild(this.zY);
        this.zX.appendChild(this.z0);
        this.update();
        if (this.xP && this.cK && this.aK.length >= 2) {
            var Ao = 0;
            var Au = 0;
            for (var i = 1; i < this.aK.length; i++) {
                if (this.aK[i].toString() != eval("Number.NaN.toString()")) Au = this.maplet.zm(this.aK[i], this.aM[i]);
                if (this.aM[i].toString() != eval("Number.NaN.toString()")) Ao = this.maplet.zl(this.aM[i], this.aK[i]);
                if (Ao >= 0 && Au >= 0 && Au <= this.maplet.height && Ao <= this.maplet.width) {
                    this.n2.style.left = Ao + "px";
                    this.n2.style.top = Au + "px";
                    if (this.n2.parentNode != this.zX) {
                        this.zX.appendChild(this.n2)
                    }
                    break
                }
            }
        }
        this.zX.style.visibility = "visible";
        if (container != null) {
            container.appendChild(this.zX)
        }
        this.zX.onmouseover = function (lM) {
            if (this.maplet.sS == ts.tb || this.maplet.sS == ts.ta || this.maplet.sS == ts.tw) {
                this.style.cursor = "default"
            } else {
                this.style.cursor = (px) ? "hand" : "pointer"
            }
        };
        this.zX.onclick = function (lM) {
            var pn = this.maplet.p8(this.maplet.aN, this.id);
            var Ap;
            var Av;
            if (pn >= 0) {
                if (this.maplet.sS == ts.l3) {
                    var gF = this.maplet.aN[pn];
                    var fc = true;
                    var pg = 0;
                    if (gF.aK.length > 2) {
                        fc = false;
                        Ap = parseInt((px) ? event.clientX : lM.clientX) - this.maplet.left - this.maplet.offsetX;
                        Av = parseInt((px) ? event.clientY : lM.clientY) - this.maplet.top - this.maplet.offsetY;
                        var qM = 0;
                        var qL = 0;
                        var gH = 0;
                        var gG = 0;
                        for (var i = gF.aK.length - 1; i > 0; i--) {
                            if (gF.aK[i].toString() != eval("Number.NaN.toString()")) {
                                gH = this.maplet.zm(gF.aK[i], gF.aM[i]);
                                if (gF.aM[i].toString() != eval("Number.NaN.toString()")) {
                                    gG = this.maplet.zl(gF.aM[i], gF.aK[i]);
                                    if (pg > 0) {
                                        var lK = gH - qM;
                                        var lI = gG - qL;
                                        if (Math.abs(lI) > Math.abs(lK)) {
                                            var Ax = lK / lI * (Ap - qL) + qM;
                                            if (Math.abs(Ax - Av) < 16) {
                                                if (i == 0) fc = true;
                                                break
                                            }
                                        } else if (Math.abs(lK) > 0) {
                                            var Ar = lI / lK * (Av - qM) + qL;
                                            if (Math.abs(Ar - Ap) < 16) {
                                                if (i == 0) fc = true;
                                                break
                                            }
                                        }
                                    }
                                    qL = gG;
                                    qM = gH;
                                    pg++
                                }
                            }
                        }
                    }
                    if (fc || (gF.aK.length - pg) < 2) {
                        this.onclick = null;
                        this.maplet.removeLineAt(pn);
                        this.maplet.refresh();
                        if (callback) callback("&act=del&lid=" + pn)
                    } else {
                        for (var qC = 0; qC < pg; qC++) {
                            gF.aK[gF.aK.length - qC - 1] = null;
                            gF.aM[gF.aM.length - qC - 1] = null
                        }
                        gF.aK.length = gF.aK.length - pg;
                        gF.aM.length = gF.aM.length - pg;
                        this.maplet.refresh();
                        if (callback) callback("&act=update&lid=" + pn + "&pline=" + gF.zn())
                    }
                } else if (this.maplet.sS == ts.ty || this.maplet.sS == ts.tu) {
                    if (iToolTipStyle == 2) {
                        if (callback) callback("&act=click&lid=" + pn)
                    } else if (this.maplet.aN[pn].xP != null && this.maplet.aN[pn].xP.length > 0) {
                        Ap = parseInt((px) ? event.clientX : lM.clientX) - this.maplet.left - this.maplet.offsetX;
                        Av = parseInt((px) ? event.clientY : lM.clientY) - this.maplet.top - this.maplet.offsetY + 8;
                        this.maplet.wN(Ap, Av, this.maplet.aN[pn].xP, this.maplet.aN[pn].xu)
                    }
                } else {
                    this.maplet.aZ(lM)
                }
            }
        }
    };
    this.update = function () {
        var aP = new Array();
        var aR = new Array();
        var pg = 0;
        var us = 10;
        if (this.aK == null || this.aK.length < 2) return;
        var cY = false;
        var tn = this.maplet.width;
        var to = this.maplet.height;
        for (var i = 0; i < this.aK.length; i += 1) {
            if (this.aK[i].toString() != eval("Number.NaN.toString()")) {
                aR[pg] = this.maplet.zm(this.aK[i], this.aM[i]);
                if (this.aM[i].toString() != eval("Number.NaN.toString()")) {
                    aP[pg] = this.maplet.zl(this.aM[i], this.aK[i]);
                    if (tn > aP[pg]) tn = aP[pg];
                    if (to > aR[pg]) to = aR[pg];
                    if (!cY && (aR[pg] < 0 || aR[pg] > this.maplet.height || aP[pg] < 0 || aP[pg] > this.maplet.width)) {
                        cY = true
                    }
                    if (pg > 0 && (Math.abs(aP[pg] - aP[pg - 1]) + Math.abs(aR[pg] - aR[pg - 1])) > us) {
                        pg++
                    }
                    if (pg == 0) pg++
                }
            }
        }
        if (cY) {
            var aQ = new Array();
            var aS = new Array();
            pg = 0;
            for (var qC = 1; qC < aP.length; qC++) {
                if ((aR[qC] < -this.maplet.height && aR[qC - 1] < -this.maplet.height) || (aR[qC] > this.maplet.height * 2 && aR[qC - 1] > this.maplet.height * 2) || (aP[qC] > this.maplet.width * 2 && aP[qC - 1] > this.maplet.width * 2) || (aP[qC] < -this.maplet.width && aP[qC - 1] < -this.maplet.width)) {
                    continue
                }
                if (aQ.length == 0 || (aQ[pg] != aP[qC - 1] && aS[pg] != aR[qC - 1])) {
                    aQ[pg] = aP[qC - 1];
                    aS[pg] = aR[qC - 1];
                    pg++
                }
                aQ[pg] = aP[qC];
                aS[pg] = aR[qC];
                pg++
            }
            aP = aQ;
            aR = aS;
            aQ = null;
            aS = null
        }
        var Aa = '';
        for (var qI = 0; qI < aP.length; qI++) {
            if (qI > 0) Aa += ',';
            Aa += (parseInt(aP[qI]) + ',' + parseInt(aR[qI]))
        }
        if (bmc) {
            this.z0.style.left = parseInt(tn) + "px";
            this.z0.style.top = parseInt(to) + "px"
        }
        if (this.z0) {
            if (this.z0.points) {
                this.z0.points.value = Aa
            } else {
                this.z0.points = Aa
            }
        }
    };
    this.wN = function () {
        var pn = this.maplet.p8(this.maplet.aN, this.id);
        if (this.maplet.aN[pn].xP != null && this.maplet.aN[pn].xP.length > 0 && this.aK.length >= 2) {
            var Ao = 0;
            var Au = 0;
            for (var i = 1; i < this.aK.length; i++) {
                if (this.aK[i].toString() != eval("Number.NaN.toString()")) Au = this.maplet.zm(this.aK[i], this.aM[i]);
                if (this.aM[i].toString() != eval("Number.NaN.toString()")) Ao = this.maplet.zl(this.aM[i], this.aK[i]);
                if (Ao >= 0 && Au >= 0 && Au <= this.maplet.height && Ao <= this.maplet.width) {
                    this.maplet.wN(Ao, Au + 8, this.maplet.aN[pn].xP, this.maplet.aN[pn].xu);
                    break
                }
            }
        }
    }
};
Maplet.prototype.aZ = function (lM) {
    if (maplet.snapshotBox.yG6) {
        maplet.snapshotBox.yG6 = false;
        return
    }
    if (this.xc) this.xc.hide();
    var l6 = (px) ? event.srcElement.id : lM.target.id;
    var target = (px) ? event.srcElement : lM.target;
    var Ap = parseInt((px) ? event.clientX : lM.clientX) - this.offsetX;
    var Av = parseInt((px) ? event.clientY : lM.clientY) - this.offsetY;
    this.l6 = l6;
    this.fS = Ap - this.left;
    this.fT = Av - this.top;
    if (this.l6 != null && this.l6.indexOf("ctrl") >= 0) {
        return false
    }
    if (this.ff && this.nI().qn(this.fS, this.fT)) {
        this.AP.tC(this.fS, this.fT);
        return
    }
    if (this.aY()) {
        var fR = this.zp(this.fS, this.fT);
        var fO = this.zo(this.fS, this.fT);
        if (this.downX == this.zQ && this.downY == this.zR) {
            var LF8_f = cq.zn(this.zp(this.fS, this.fT), this.zo(this.fS, this.fT));
            if (apiType == 1) {
                var pt = new MPoint(LF8_f);
                pt.initialize(this);
                MEvent.trigger(this, 'click', lM, pt)
            } else MEvent.trigger(this, 'click', lM, LF8_f)
        }
        var cV = false;
        if ((this.sS == 7)) {
            this.addOrigin(fO, fR)
        } else if ((this.sS == 8)) {
            this.addDestination(fO, fR)
        } else if ((this.sS == 6)) {
            cq.lf = fO;
            cq.li = fR;
            var fQ = cq.zn();
            nX();
            if (apiType == 1) MEvent.trigger(this, "bookmark", {
                action: "add",
                point: new MPoint(fQ),
                zoom: this.AG
            });
            else MEvent.trigger(this, "bookmark", "&act=add&latlon=" + fQ + "&zm=" + this.AG)
        } else if (this.sS == ts.ty || this.sS == ts.tu || this.sS == ts.l3) {
            if ((new Date().getTime() - this.tD) >= 500) {
                this.tD = new Date().getTime();
                if (this.cQ) {
                    this.cQ = false
                } else {
                    var b = false;
                    var yw = (this.l6 == "LayerMask" || this.l6 == "LayerDrawMap" || this.l6 == "LayerDrawSVG" || (target.parentNode && target.parentNode.id == "LayerMap") || (target.id && target.id.indexOf("OverlayBg") >= 0) || (target.getAttribute && target.getAttribute($$0)));
                    if (!this.cn && yw) {
                        if (this.Q0v) return;
                        if (iToolTipStyle == 0) hideToolTipMenu();
                        b = true
                    }
                    if (yw && !this.h96 && this._$296) {
                        var img = null;
                        if (img = this.getImgByXY(this.tR, this.tS, true)) {
                            var jyU8 = false;
                            for (var i = this.W_7.length - 1; i >= 0; i--) {
                                if (typeof this.W_7[i] != "undefined") {
                                    for (var P7P9 = this.W_7[i].length - 1; P7P9 >= 0; P7P9--) {
                                        if (!this.W_7[i][P7P9].inZoomRange(this.AG)) continue;
                                        var r = this.W_7[i][P7P9].click(img, this.tR, this.tS);
                                        b = r.PW4t;
                                        if (r.data) {
                                            if (r.VpKa && MEvent.contains(this, "layer_click") > 0) {
                                                MEvent.trigger(this, "layer_click", {
                                                    layer: this.W_7[i][P7P9],
                                                    pid: r.data.p,
                                                    area: r.data.l,
                                                    data: r.data.d,
                                                    name: r.data.n,
                                                    rect: r.data.rect
                                                });
                                                b = false
                                            }
                                            jyU8 = true;
                                            break
                                        }
                                    }
                                }
                                if (jyU8) break
                            }
                        }
                    }
                    if (this.clickToCenter && b) {
                        if (this.Rb93W != null) this.hideBubble();
                        this.waitPan(this.width / 2 - this.fS, -this.fT + this.height / 2)
                    }
                }
                this.cn = false
            } else {
                this.tD = new Date().getTime()
            }
        } else if (this.sS == ts.tb || this.sS == ts.ta || this.sS == ts.lz || this.sS == ts.ly) {
            if (this.allowDrawingDragMap && !this.XHl) {
                this.XHl = true;
                return false
            }
            if (this.l6 != null && this.l6.indexOf("ctrl") >= 0) return false; {
                if (!this.zy) {
                    var cr = this.sS == ts.ly || this.sS == ts.ta;
                    var s2a8 = new MBrush(this.brush.color, this.brush.stroke, this.brush.style, cr, this.brush.bgcolor, this.brush.transparency, this.brush.bgtransparency, this.brush.arrow);
                    var D1v = new MPoint(cq.zn(fR, fO));
                    this.zy = new MPolyline([D1v], s2a8, null, null);
                    this.zy.initialize(this);
                    this.sv++;
                    this.tG = new MPolyline([D1v, D1v], s2a8, null, null);
                    this.tG.initialize(this);
                    this.sv++
                } else {
                    var Wk56 = new MPoint(cq.zn(fR, fO));
                    this.zy.pts.push(Wk56);
                    this.zy.update();
                    this.tG.pts[0] = this.tG.pts[1];
                    this.tG.pts[1] = Wk56;
                    this.tG.update()
                }
                cV = true
            }
        }
        if (l6 == "LayerDrawMap" && !cV) {
            if (this.aG != null && this.aH != null) {
                for (var qk = 0; qk < this.aG.length; qk++) {
                    if (Math.abs(this.aG[qk] - this.fS) < 8 && Math.abs(this.aH[qk] - this.fT) < 8) {
                        var yg = "";
                        if (apiType == 1) yg = this.aE[this.aF[qk]].xP;
                        else yg = "&hotspot=" + this.aE[this.aF[qk]].xP;
                        this.vi = 0;
                        MEvent.trigger(this, "hotspot", yg);
                        if (hs) {
                            this.setCenter(this.aE[this.aF[qk]].lf, this.aE[this.aF[qk]].li);
                            this.setZoomLevel(8)
                        }
                        break
                    }
                }
            }
        }
    }
};
Maplet.prototype.a1 = function (lM) {
    var l6 = (px) ? event.srcElement.id : lM.target.id;
    var target = (px) ? event.srcElement : lM.target;
    this.l6 = l6;
    nX();
    if (this.l6 != null && this.l6.toString().indexOf("ctrl") >= 0) return false;
    if (this.aY()) {
        if (this.sS != ts.tz && this.sS != ts.tA && this.sS != ts._Q5y4) this.KY4("default", this.map);
        var LF8_f = cq.zn(this.zp(this.fS, this.fT), this.zo(this.fS, this.fT));
        if (apiType == 1) {
            var pt = new MPoint(LF8_f);
            pt.initialize(this);
            MEvent.trigger(this, 'dbclick', lM, pt)
        } else {
            MEvent.trigger(this, 'dbclick', lM, LF8_f)
        }
        if (this.sS == ts.tb || this.sS == ts.ta) {
            var g0 = 0;
            var area = 0;
            if (this.zy) {
                var ur = this.zy.pts.length;
                if (!px) ur = ur - 1;
                if (this.sS == ts.tb) {
                    g0 = this.measDistance(this.zy.pts)
                } else {
                    this.zy.pts[ur] = this.zy.pts[0];
                    area = this.measArea(this.zy.pts)
                }
                if (this.zy.zX.parentNode == this.lA.div) this.zy.remove(true)
            }
            if (this.tG && this.tG.zX.parentNode == this.lA.div) this.tG.remove(true);
            this.zy = null;
            this.tG = null;
            if (!px) this.refresh();
            if (g0.toString() == eval("Number.NaN.toString()")) g0 = 0;
            if (area.toString() == eval("Number.NaN.toString()")) area = 0;
            if (this.sS == ts.ta) {
                var xk = "";
                if (area > 1000000) {
                    area = parseInt(area / 10000) / 10 / 10;
                    xk = (en == 0) ? tX("%u603E%uF79D%u1151") + ":" + area + tX("%u5E77%uC42C%uB725%uE338") : "Total area:" + area + "km2"
                } else {
                    xk = (en == 0) ? tX("%u603E%uF79D%u1151") + ":" + area + tX("%u5E76%uC42C%uE22C") : "Total area:" + area + "m2"
                }
                if (this.vA != "undefined") this.setMode(this.vA);
                sC(this.width / 2 + this.left + this.offsetX, this.height / 2 + this.top + this.offsetY, xk);
                if (apiType == 1) MEvent.trigger(this, "measarea", (parseInt(area * 1000000) / 10));
                else MEvent.trigger(this, "measarea", "&act=measarea&area=" + (parseInt(area * 1000000) / 10) + tX("%u5E77%uC42C%uB725%uE338"))
            } else {
                var xB = "";
                if (g0 >= 1000) {
                    g0 = parseInt(g0 / 100) / 10;
                    xB = (en == 0) ? tX("%u603E%uEE18%u0798") + ":" + g0 + tX("%u516E%uE338") : "Total distance:" + g0 + "km"
                } else {
                    xB = (en == 0) ? tX("%u603E%uEE18%u0798") + ":" + g0 + tX("%u7C74") : "Total distance:" + g0 + "m"
                }
                if (this.vA != "undefined") this.setMode(this.vA);
                sC(this.width / 2 + this.left + this.offsetX, this.height / 2 + this.top + this.offsetY, xB);
                if (apiType == 1) MEvent.trigger(this, "measure", (parseInt(g0 * 1000) / 10));
                else MEvent.trigger(this, "measure", "&act=measure&dist=" + (parseInt(g0 * 1000) / 10) + tX("%u516E%uE338"))
            }
        } else if (this.sS == ts.lz || this.sS == ts.ly) {
            var yg = null;
            if (this.zy) {
                var wi0OR = this.zy.pts.length;
                if (!px) wi0OR = wi0OR - 1;
                this.zy.pts.length = wi0OR;
                if (this.zy.zX.parentNode == this.lA.div) this.zy.remove(true);
                if (apiType == 1) {
                    yg = this.zy.zn();
                    yg.zoom = this.AG
                } else yg = ("&act=add&pline=" + this.zy.zn() + "&zm=" + this.AG)
            }
            if (this.tG && this.tG.zX.parentNode == this.lA.div) {
                this.tG.remove(true)
            }
            this.zy = null;
            this.tG = null;
            if (!px) this.refresh();
            var nb = (this.sS == ts.lz) ? "drawline" : "drawarea";
            if (this.vA != "undefined") this.setMode(this.vA);
            MEvent.trigger(this, nb, yg)
        } else if (this.sS == ts.ty || this.sS == ts.tu || this.sS == ts.l3) {
            if (this.l6 && (this.l6 == "LayerMask" || this.l6 == "LayerDrawMap" || this.l6 == "LayerDrawSVG" || target.parentNode.id == "LayerMap" || target.id.indexOf("OverlayBg") >= 0 || this.l6.substring(0, "mk_shadow_".length) == "mk_shadow_" || target.getAttribute("traffic") == "yes") || (target.getAttribute($$0))) {
                this.vi = 0;
                if (this.getZoomLevel() < sY) this.zoomTo(this.getZoomLevel() + 1, void(0), this.width / 2 - this.fS, -this.fT + this.height / 2);
                else if (this.getZoomLevel() == sY) this.panTo(this.width / 2 - this.fS, -this.fT + this.height / 2)
            }
        }
    }
};
Maplet.prototype.a2 = function (lM) {
    if (this.sS != ts.ty) this.hideBubble();
    if (this.markerDragAnimation) this.t929(false);
    var Ap = parseInt((px) ? event.clientX : lM.clientX) - this.offsetX;
    var Av = parseInt((px) ? event.clientY : lM.clientY) - this.offsetY;
    this.l6 = (px) ? event.srcElement.id : lM.target.id;
    if (!px && this.panel.style.position != "absolute") {}
    this.downX = Ap - this.left;
    this.downY = Av - this.top;
    this.R3U = new Date().getTime();
    this.s08I7 = this.qu5j5 = 0;
    this.h96 = false;
    if (this.l6 != null && this.l6.indexOf("ctrl") >= 0 && this.controlCanvas != null) {
        this.controlCanvas.onmousedown(lM);
        return
    }
    if (lM.type == "mousedown") MEvent.trigger(this, 'mousedown', lM);
    this.tQ = '';
    if (this.ff && this.nI().qn(this.downX, this.downY)) {
        this.AP.tE(this.downX, this.downY);
        return false
    } else {
        var DA0a2 = px ? event.srcElement : lM.target;
        this.cL = (DA0a2.getAttribute(NH6) || DA0a2.getAttribute("traffic")) ? true : false;
        if (this.aY() && this.cS) {
            if (this.sS == ts._Q5y4 && !this.snapshotBox.pD7tE) {
                this.snapshotBox.show();
                this.snapshotBox.pD7tE = true
            } else {
                this.sD.resize(1, 1);
                this.sD.show()
            }
        } else if (this.sS == ts.ty || this.sS == ts.tu || this.sS == ts.l3) {
            if (px && (this.l6.indexOf("MPolyline") == this.l6.length - 9)) {
                this.KY4("move", event.srcElement)
            } else {
                eval(document.body.scrollTop);
                this.KY4("move", this.map)
            }
        }
    }
};
Maplet.prototype.a5 = function (lM) {
    var frP = x5ft(this.map);
    this.offsetX = frP[0] - mm685() - this.left;
    this.offsetY = frP[1] - $1f() - this.top
};
Maplet.prototype.a4 = function (lM) {
    MEvent.trigger(this, 'mouseout', lM);
    this.l6 = (px) ? event.srcElement.id : lM.target.id;
    if (!px || (px && event.clientX != -1)) {
        var Ap = parseInt((px) ? event.clientX : lM.clientX) - this.offsetX;
        var Av = parseInt((px) ? event.clientY : lM.clientY) - this.offsetY;
        if (this.cL) {
            this.bp5t7(Ap - this.left - (px ? 1 : 0) - this.tR, Av - this.top - (px ? 1 : 0) - this.tS)
        }
        this.tR = Ap - this.left - (px ? 1 : 0);
        this.tS = Av - this.top - (px ? 1 : 0);
        this.ug59 = this.tR - this.downX;
        this.mx4 = this.tS - this.downY
    }
    this.cI = false;
    if ((px && event.clientX == -1) || !this.aY()) {
        if (this.controlCanvas != null) {
            this.controlCanvas.onmouseout(lM)
        }
        this.a6((px) ? event : lM)
    }
    if (px) document.onmousewheel = new Function("return true")
};
Maplet.prototype.a3 = function (lM) {
    if (this.cL && this.xc) this.xc.hide();
    this.cI = true;
    if (!this.cL) this.a5(lM);
    this.l6 = (px) ? event.srcElement.id : lM.target.id;
    var Ap = parseInt((px) ? event.clientX : lM.clientX) - this.offsetX;
    var Av = parseInt((px) ? event.clientY : lM.clientY) - this.offsetY;
    if (this.cL) {
        this.bp5t7((Ap) - this.left - this.tR, (Av) - this.top - this.tS)
    }
    this.tR = (Ap) - this.left;
    this.tS = (Av) - this.top;
    if (this.controlCanvas != null) {
        if (this.controlCanvas.onmousemove(lM)) {
            return
        }
    }
    if (this.gc != null) {
        for (var n8 in this.gc) {
            if (this.gc[n8].toString().indexOf("MStandardControl") > 0 && this.gc[n8].nR && this.gc[n8].nR.onmousemove(lM)) {
                return
            }
        }
    }
    if (this.sS == ts.tb || this.sS == ts.ta || this.sS == ts.lz || this.sS == ts.ly) {
        {
            var x0 = (en) ? "Double click to finish" : tX("%u8BFC%uDFC3%uA5C7%uD0CE%uE632");
            if (this.sS == ts.tb) {}
            showMouseTipBox(this.tR, this.tS, x0, this.map)
        }
    } else if (this.sS == ts.tw) {
        if (this.gJ != null && this.gJ != "undefined" && this.gJ != "null" && this.gJ != "") {
            showMouseTipBox(this.tR - this.gI.width / 2 - 10 - 1, this.tS - this.gI.height - 2 - 18, "<img src='" + this.gI.src + "'>", this.map)
        } else {
            nX()
        }
    } else {
        nX()
    }
    if (this.ff && this.nI().tF(this.l6, this.tR, this.tS)) return;
    if (this.sS == ts.ty && !this.cN) {
        var cF = false;
        if (this.aG != null && this.aH != null) {
            for (var qk = 0; qk < this.aG.length; qk++) {
                if (Math.abs(this.aG[qk] - this.tR) < 8 && Math.abs(this.aH[qk] - this.tS) < 8) {
                    cF = true;
                    break
                }
            }
        }
        if (cF) {
            this.KY4("pointer", this.map)
        } else if (!this.cL) {
            this.KY4("default", this.map)
        }
        if (this._$296 && (this.l6 == "LayerMask" || this.l6 == "LayerDrawMap" || this.l6 == "LayerDrawSVG" || (lM.target.parentNode && lM.target.parentNode.id == "LayerMap") || lM.target.id.indexOf("OverlayBg") >= 0 || lM.target.getAttribute($$0))) {
            var img = null;
            if (img = this.getImgByXY(this.tR, this.tS, true)) {
                var b = false;
                for (var i = this.W_7.length - 1; i >= 0; i--) {
                    if (typeof this.W_7[i] != "undefined") {
                        for (var P7P9 = this.W_7[i].length - 1; P7P9 >= 0; P7P9--) {
                            if (!this.W_7[i][P7P9].inZoomRange(this.AG)) continue;
                            var d = this.W_7[i][P7P9].jct(img, this.tR, this.tS);
                            if (d) {
                                if (MEvent.contains(this, "layer_mousemove") > 0) MEvent.trigger(this, "layer_mousemove", {
                                    layer: this.qS[i],
                                    pid: data.p,
                                    area: data.l,
                                    data: data.d,
                                    name: data.n,
                                    rect: data.rect
                                });
                                b = true;
                                break
                            }
                        }
                    }
                    if (b) break
                }
            }
        }
    }
    if (this.cO && this.cL) {
        if (this.Q0v) return;
        if (!this.oA46) {
            this.no();
            this.oA46 = true
        }
        if (px) {
            if (!document.getElementById("_map_marker_speeder")) {
                var D279 = document.createElement("DIV");
                D279.id = "_map_marker_speeder";
                D279.style.display = "none";
                document.body.appendChild(D279)
            }
            document.getElementById("_map_marker_speeder").innerHTML = ""
        }
        if (iToolTipStyle == 0) hideToolTipMenu();
        if (iToolTipStyle == 0) {
            hideToolTipMenu()
        }
        this.ug59 = this.tR - this.downX;
        this.mx4 = this.tS - this.downY;
        if (!px && ContentInfo && ContentInfo.isVisible()) {
            ContentInfo.un908(true)
        }
        this.sF.moveTo(this.ug59, this.mx4);
        this.cN = true;
        this.cn = true
    } else if (this.cS && this.cL) {
        if (this.aY()) {
            this.cR = true;
            this.lu()
        }
    } else if (this.sS == ts.tb || this.sS == ts.ta || this.sS == ts.lz || this.sS == ts.ly) {
        var tP = this.zp(this.tR, this.tS);
        var tO = this.zo(this.tR, this.tS);
        if (this.zy != null) {
            this.tG.pts[1] = new MPoint(cq.zn(tP, tO));
            this.tG.update()
        }
    } else {
        if (this.l6 == "LayerDrawMap" && iToolTipStyle == 0) {
            hideToolTipMenu()
        }
    }
};
Maplet.prototype.a6 = function (lM, l6, Ap, Av) {
    var wL = 0;
    var wM = 0;
    var li = 0;
    var lf = 0;
    this.l6 = (px) ? event.srcElement.id : lM.target.id;
    this.zQ = this.tR;
    this.zR = this.tS;
    this.mFm62 = new Date().getTime();
    this.cL = false;
    if (this.l6.indexOf("MPolyline") != -1) {
        this.cn = false
    }
    if (lM.type == "mouseup") {
        if (this.s08I7 < -this.ignoreMoveRange || this.s08I7 > this.ignoreMoveRange || this.qu5j5 < -this.ignoreMoveRange || this.qu5j5 > this.ignoreMoveRange) this.h96 = true
    } else {
        this.h96 = true
    }
    if (this.l6 != null) {
        if (this.l6.indexOf("ctrl") >= 0) this.sD.hide();
        else if (lM.type == "mouseup") MEvent.trigger(this, 'mouseup', lM)
    }
    if (this.sS == ts.ty || this.sS == ts.tu || this.sS == ts.l3) {
        this.KY4("default", this.map)
    }
    if (this.ff && this.nI().tJ(this.zQ, this.zR)) {
        this.setZoomLevel(parseInt(this.AP.getZoomLevel()));
        return
    }
    if ((this.cN || this.cR) && (this.cS || this.cO)) {
        this.cN = false;
        this.cR = false;
        if (this.cO) {
            if (true || this.AG > 0) {
                wL = -(this.zQ - this.downX);
                wM = (this.zR - this.downY);
                li = this.zp(wL + this.width / 2, -wM + this.height / 2);
                lf = this.zo(wL + this.width / 2, -wM + this.height / 2);
                this.gA = li;
                this.gx = lf
            }
            var DA0a2 = (px) ? event.srcElement : lM.target;
            if (DA0a2.getAttribute(NH6)) {
                if (DA0a2.getAttribute(b4W) == "polyline") this.H6$0 = true;
                if (DA0a2.getAttribute(b4W) == "marker") this.y$pP_ = true
            }
            if (typeof basepoilist != "object" && !this.J_883 && this.m0J) this.m0J = false;
            this.Or5V$ = true;
            this.q1C = new Date().getTime();
            maplet.setZoomLevel(maplet.AG);
            this.Or5V$ = false;
            if (apiType == 1) MEvent.trigger(this, "pan", new MPoint(this.toMapCoordinate(this.width / 2, this.height / 2)));
            else MEvent.trigger(this, "pan", "&act=pan&ctr=" + this.toMapCoordinate(this.width / 2, this.height / 2));
            if (this.allowDrawingDragMap && this.h96 && ((this.sS == ts.tb || this.sS == ts.ta || this.sS == ts.lz || this.sS == ts.ly))) this.XHl = false
        } else {
            var gX = 1;
            var gW = Math.max(1, Math.abs(this.zQ - this.downX));
            if (this.sS == 1) {
                {
                    wL = (this.zQ + this.downX) / 2;
                    wM = (this.zR + this.downY) / 2;
                    li = this.zp(wL, wM);
                    lf = this.zo(wL, wM);
                    this.gA = li;
                    this.gx = lf
                }
                if (gW < this.imgWidth) {
                    gX = Math.min(sY - this.AG, Math.max(1, parseInt(Math.log(this.imgWidth / gW) / Math.log(2))))
                }
                this.setZoomLevel(this.AG + gX);
                if (apiType == 1) MEvent.trigger(this, "zoomin", this.AG);
                else MEvent.trigger(this, "zoomin", "&act=zoomin&zm=" + this.AG)
            } else if (this.sS == 2) {
                wL = (this.zQ + this.downX) / 2;
                wM = (this.zR + this.downY) / 2;
                li = this.zp(wL, wM);
                lf = this.zo(wL, wM);
                this.gA = li;
                this.gx = lf;
                if (gW < this.imgWidth) {
                    gX = Math.min(this.AG, Math.max(1, parseInt(Math.log(this.imgWidth / gW) / Math.log(2))))
                }
                this.setZoomLevel(this.AG - gX);
                if (apiType == 1) MEvent.trigger(this, "zoomout", this.AG);
                else MEvent.trigger(this, "zoomout", "&act=zoomout&zm=" + this.AG)
            } else if (this.sS == ts.tv) {
                var s6 = this.gA + (Math.max(this.zQ, this.downX) - this.width / 2) * this.xg / this.imgWidth;
                var s4 = this.gx - (Math.min(this.zR, this.downY) - this.height / 2) * this.xf / this.imgHeight;
                cq.li = s6;
                cq.lf = s4;
                var s5 = cq.zn();
                var tl = this.gA + (Math.min(this.zQ, this.downX) - this.width / 2) * this.xg / this.imgWidth;
                var tj = this.gx - (Math.max(this.zR, this.downY) - this.height / 2) * this.xf / this.imgHeight;
                cq.li = tl;
                cq.lf = tj;
                var tk = cq.zn();
                cq.li = tl;
                cq.lf = s4;
                var tm = cq.zn();
                cq.li = s6;
                cq.lf = tj;
                var s7 = cq.zn();
                var yg = "&act=lookup&max=" + s5 + "&min=" + tk + "&mmx=" + tm + "&mxm=" + s7;
                if (this.vA != "undefined") this.setMode(this.vA);
                this.cQ = true;
                if (apiType == 1) {
                    MEvent.trigger(this, "lookup", {
                        action: "lookup",
                        max: new MPoint(s5),
                        min: new MPoint(tk),
                        mmx: new MPoint(tm),
                        mxm: new MPoint(s7)
                    })
                } else {
                    MEvent.trigger(this, "lookup", yg)
                }
            } else if (this.sS == ts._Q5y4) {
                this.snapshotBox.B2$0();
                this.snapshotBox.pD7tE = false
            }
            this.sD.hide();
            this.sD.resize(1, 1);
            this.sD.moveTo(-10, -10)
        }
    }
};
Maplet.prototype.a7 = function (lM) {
    function h8425() {
        if (this.j5x47 == null) {
            this.j5x47 = this.AG;
            h8425.apply(this)
        } else if (this.j5x47 != this.Ai) {
            var xd = Math.abs(this.Ai - this.AG) / 10;
            var LStP9 = 0.25;
            xd = xd < LStP9 ? LStP9 : xd;
            if (this.tK < 0) {
                this.j5x47 -= xd;
                if (this.j5x47 <= this.Ai + 0.05) {
                    this.j5x47 = this.Ai
                }
            } else {
                this.j5x47 += xd;
                if (this.j5x47 >= this.Ai - 0.1) {
                    this.j5x47 = this.Ai
                }
            }
            if (this.j5x47 != this.Ai) {
                var AK = Math.pow(2, this.j5x47) / Math.pow(2, this.AG);
                var c281Q = (this.width / 2 - this.Cj9mE) * (AK - 1);
                var FE1O = (this.height / 2 - this.dV55V) * (AK - 1);
                this.AN(this.j5x47, c281Q, FE1O)
            }
            if (this.j5x47 == this.Ai) h8425.apply(this);
            else getTimeout(this, h8425, 0)
        } else {
            this.j5x47 = null;
            this.tK = 0;
            this.setZoomLevel(this.Ai);
            this.Ai = 0
        }
    };
    var l8 = lM || window.event;
    if (typeof l8 == "object" && l8) {
        if (typeof l8.wheelDelta == "undefined") l8.wheelDelta = -l8.detail;
        if (typeof l8.srcElement == "undefined") l8.srcElement = l8.target;
        if (l8.wheelDelta == 0 || (this.AG == te && l8.wheelDelta < 0) || (this.AG == sY && l8.wheelDelta > 0)) return;
        if (this.fa) return;
        if (typeof this.tK == "undefined") this.tK = 0;
        if (typeof this.Ai == "undefined") this.Ai = 0;
        var r = K_ER(l8.srcElement, B8577);
        if (!r || r == "false") {
            B982(l8);
            var i = l8.wheelDelta < 0 ? -1 : 1;
            this.tK += i < 0 ? Math.floor(i) : Math.ceil(i);
            if (this.tK == 0) return;
            var SG4 = true;
            if (ContentInfo && ContentInfo.isVisible()) {
                var B331 = this.toScreenCoordinate(avBubble._Tov1);
                if (_isInsideRect({
                    x: B331[0],
                    y: B331[1]
                }, {
                    min: {
                        x: 0,
                        y: 0
                    },
                    max: {
                        x: this.width,
                        y: this.height
                    }
                })) {
                    SG4 = false
                }
            }
            if (SG4) {
                this.v8q8Y = "wheel";
                if (typeof this.l6 == "undefined") this.a3(l8);
                this.Cj9mE = this.tR;
                this.dV55V = this.tS;
                this.U9B2 = this.toMapCoordinate(this.Cj9mE, this.dV55V);
                this.Vye(l8.wheelDelta)
            }
            this.Ai = parseInt(this.AG + this.tK);
            if (this.Ai < te) this.Ai = te;
            if (this.Ai > sY) this.Ai = sY;
            if (ZOOM_TRANSITION && this.j5x47 == null) {
                if (ContentInfo && ContentInfo.isVisible()) {
                    this.j5x47 = this.Ai
                }
                h8425.apply(this)
            }
        }
    }
};
var px = false;
var Nfy = false;
var j7751 = false;
var t4E0 = false;
var $x2 = false;
var MLu = false;
var s;
var $p0 = navigator.userAgent.toLowerCase();
if (s = $p0.match(new RegExp("msie ([\\d.]+)"))) {
    px = true;
    if (VS8w8(s[1], 0) == 6) Nfy = true
} else if (s = $p0.match(new RegExp("firefox\/([\\d.]+)"))) {
    j7751 = true
} else if (s = $p0.match(new RegExp("chrome\/([\\d.]+)"))) {
    t4E0 = true
} else if (s = $p0.match(new RegExp("opera.([\\d.]+)"))) {
    MLu = true
} else if (s = $p0.match(new RegExp("version\/([\\d.]+).*safari"))) {
    $x2 = true
}
var yvR3$ = document.compatMode == "CSS1Compat";
var ut = document.qS ? 1 : 0;
var lm = (px) ? "document.all." : "document.";
var yj = (px) ? ".style" : "";
if (px) {
    document.write("<html xmlns:v='urn chemas-microsoft-com:vml'>");
    document.write("<style>v\\:* {behavior: url( #default#VML )}</style>")
}
document.write("<style type='text/css'> ");
document.write(".ptlabel {  ");
document.write("  text-decoration: none;");
document.write("  cursor: pointer;");
document.write("  font-family: Arial, Helvetica, sans-serif; ");
document.write("  font-size: 8pt; ");
document.write("}  ");
document.write("");
document.write(".tooltiptitle {");
document.write("  color: #CC5522; ");
document.write("  text-decoration: none;");
document.write("  cursor: pointer;");
document.write("  font-family: Arial, Helvetica, sans-serif; ");
document.write("  font-weight: bold; ");
document.write("  font-size: 10pt;");
document.write("}  ");
document.write("");
document.write(".tooltipcontent { ");
document.write("  color: #000000; ");
document.write("  text-decoration: none;");
document.write("  cursor: pointer;");
document.write("  font-family: Arial, Helvetica, sans-serif; ");
document.write("  font-size: 8pt; ");
document.write("}  ");
document.write("");
document.write(".hotspotlabel {");
document.write("  position: absolute;");
document.write("  color: #000; ");
document.write("  text-decoration: none;");
document.write("  cursor: pointer;");
document.write("  font-family: Arial, Helvetica, sans-serif; ");
document.write("  font-size: 10pt;");
document.write("}  ");
document.write("");
document.write(".editableimg { ");
document.write("  position: absolute;");
document.write("  overflow: hidden;  ");
document.write("  cursor: pointer;");
document.write("  border: 1px solid #fff;  ");
document.write("  z-index: 1000;  ");
if (px) {
    document.write("  filter: alpha( opacity = 60 );")
} else {
    document.write("  opacity: 0.6;  ")
}
document.write("  font-size: 0px; ");
document.write("  display: block; ");
document.write("}  ");
document.write("");
document.write(".buffering {");
document.write("  position: absolute;");
document.write("  height: 16px;");
document.write("  z-index: 24; ");
if (px) {
    document.write("  filter: alpha( opacity = 60 );")
} else {
    document.write("  opacity: 0.6;  ")
}
document.write("  font-size: 12px;");
document.write("  font-weight: bold; ");
document.write("  background-color: #fff;  ");
document.write("  color: #000; ");
document.write("  border: 0px solid #000;  ");
document.write("  text-align: center;");
document.write("  padding-top: 0px;  ");
document.write("  display: block; ");
document.write("}  ");
document.write("");
document.write(".tiplabel { ");
document.write("  position: absolute;");
document.write("  height: 12px;");
document.write("  z-index: 0; white-space: nowrap; ");
document.write("  display: block; ");
document.write("  background-color: #FFFFCC;  ");
document.write("  border: 1px solid #f00;  ");
document.write("  color: #f00; ");
document.write("  font-size: 12px;");
document.write("  font-weight: bold; ");
document.write("}  ");
document.write("");
document.write("#ToolTip {  ");
document.write("  position: absolute;");
if (px) {
    document.write("  filter: alpha( opacity = 80 );")
} else {
    document.write("  opacity: 0.8;  ")
}
document.write("  width: 100px;");
document.write("  top: 0px; ");
document.write("  left: 0px;");
document.write("  z-index: 24; ");
document.write("  visibility: hidden;");
document.write("}  ");
document.write("");
document.write("#loading {  ");
document.write("  position: absolute;");
document.write("  z-index: 24; ");
if (px) {
    document.write("  filter: alpha( opacity = 60 );")
} else {
    document.write("  opacity: 0.6;  ")
}
document.write("  font-size: 13px;");
document.write("  font-weight: bold; ");
document.write("  background-color: #fff;  ");
document.write("  color: #000; ");
document.write("  border: 0px solid #000;  ");
document.write("  text-align: center;");
document.write("  padding-top: 4px;  ");
document.write("  display: block; ");
document.write("}  ");
document.write("");
document.write("#mbglabel { ");
document.write("  position: absolute;");
document.write("  z-index: 0;  ");
document.write("  white-space: nowrap;  ");
document.write("  display: block; ");
document.write("  visibility: visible;  ");
document.write("}  ");
document.write("");
document.write("#mfglabel { ");
document.write("  position: absolute;");
document.write("  z-index: 0;  ");
document.write("  white-space: nowrap;  ");
document.write("  display: block; ");
document.write("  visibility: visible;  ");
document.write("  background-color: #FFFFCC;  ");
document.write("}  ");
document.write("");
document.write("#stylelabel {  ");
document.write("  position: absolute;");
document.write("  z-index: 24; ");
if (px) {
    document.write("  filter: alpha( opacity = 80 );")
} else {
    document.write("  opacity: 0.8;  ")
}
document.write("  font-size: 13px;");
document.write("  font-weight: bold; ");
document.write("  background-color: #fff;  ");
document.write("  color: #000; ");
document.write("  border: 1px solid #000;  ");
document.write("  text-align: center;");
document.write("  padding-top: 4px;  ");
document.write("  display: block; ");
document.write("}  ");
document.write("");
document.write("#mapbar-overview-viewport {");
document.write("  position: absolute;");
document.write("  width: 0px;  ");
document.write("  top: 0px; ");
document.write("  left: 0px;");
document.write("  height: 0px; ");
document.write("  z-index: 10; ");
document.write("  font-size: 0px; ");
if (px) {
    document.write("  filter: alpha( opacity = 50 );")
} else {
    document.write("  opacity: 0.5;  ")
}
document.write("  background-color: white;  ");
document.write("  border: 2px solid white;  ");
document.write("  visibility: visible;  ");
document.write("}  ");
document.write("");
document.write("#mapbar-overview-viewframe {  ");
document.write("  position: absolute;");
document.write("  width: 0px;  ");
document.write("  top: 0px; ");
document.write("  left: 0px;");
document.write("  height: 0px; ");
document.write("  z-index: 11; ");
document.write("  font-size: 0px; ");
document.write("  border: 2px solid #D50F1E;  ");
document.write("  visibility: visible;  ");
document.write("}  ");
document.write("");
document.write("#mapbar-overview-viewpad_ctrl { ");
document.write("  position: absolute;");
document.write("  width: 0px;  ");
document.write("  top: 0px; ");
document.write("  left: 0px;");
document.write("  height: 0px; ");
document.write("  z-index: 12; ");
document.write("  font-size: 0px; ");
document.write("  border: 2px solid #D50F1E;  ");
document.write("  visibility: visible;  ");
document.write("}  ");
document.write("");
document.write("#mapbar-bordertop {  ");
document.write("  position: absolute;");
document.write("  z-index: 2;  ");
document.write("  font-size: 0px; ");
document.write("  border-top: 1px solid #949694; ");
document.write("  visibility: visible;  ");
document.write("}  ");
document.write("");
document.write("#mapbar-borderbtm {  ");
document.write("  position: absolute;");
document.write("  z-index: 2;  ");
document.write("  font-size: 0px; ");
document.write("  border-bottom: 1px solid #949694; ");
document.write("  visibility: visible;  ");
document.write("}  ");
document.write("");
document.write("#mapbar-borderlft {  ");
document.write("  position: absolute;");
document.write("  z-index: 2;  ");
document.write("  font-size: 0px; ");
document.write("  border-left: 1px solid #949694;");
document.write("  visibility: visible;  ");
document.write("}  ");
document.write("");
document.write("#mapbar-borderrgt {  ");
document.write("  position: absolute;");
document.write("  z-index: 2;  ");
document.write("  font-size: 0px; ");
document.write("  border-right: 1px solid #949694;  ");
document.write("  visibility: visible;  ");
document.write("}  ");
document.write("");
document.write(".contextmenuitem {");
document.write("  color: #0E347F; ");
document.write("  text-decoration: none;");
document.write("  cursor: pointer;");
document.write("  font-family: Arial, Helvetica, sans-serif; ");
document.write("  font-size: 9pt; ");
document.write("  padding-right: 6px; ");
document.write("  width: 100%; ");
document.write("}  ");
document.write("");
document.write(".contextmenutable {  ");
document.write("  text-decoration: none;");
document.write("  cursor: pointer;");
document.write("}  ");
document.write("");
document.write(".mapcontextmenu { ");
document.write("  position: absolute;");
document.write("  background-color: #FFFFFF; ");
document.write("  padding: 1px; ");
document.write("  border: 1px outset #cccccc; ");
document.write("  top: 0px; ");
document.write("  left: 0px;");
document.write("  z-index: 24; ");
document.write("  visibility: hidden;");
document.write("}  ");
document.write("");
document.write(".mapCirEdging .borT, ");
document.write("  .mapCirEdging .borB { ");
document.write("  height: 1px; ");
document.write("  margin: 0 1px;  ");
document.write("  border-bottom: 1px solid #8F8F8F; ");
document.write("  line-height: 1px;  ");
document.write("  font-size: 1px; ");
document.write("}  ");
document.write("");
document.write(".mapCirEdging .borB {");
document.write("  border: 0;");
document.write("  border-top: 1px solid #8F8F8F; ");
document.write("}  ");
document.write("");
document.write(".mapCirEdging .borT2, .mapCirEdging .borB2 { ");
document.write("  height: 1px; ");
document.write("  border: 1px solid #BCBCBC;  ");
document.write("  border-top: 0;  ");
document.write("  border-bottom: 0;  ");
document.write("  line-height: 1px;  ");
document.write("  font-size: 1px; ");
document.write("}  ");
document.write("");
document.write(".mapCirEdging .MPBox2 { ");
document.write("  height: auto;");
document.write("  border: 1px solid #8F8F8F;  ");
document.write("  border-top: 0;  ");
document.write("  border-bottom: 0;  ");
document.write("  background: #fff;  ");
document.write("}  ");
document.write("");
document.write(".mapCirEdging .MPbox {  ");
document.write("  margin: 3px; ");
document.write("  font-size: 12px;");
document.write("  text-align: left;  ");
document.write("}  ");
document.write(".snapshotTextBtn {  ");
document.write("  padding-top: 3px; ");
document.write("  padding-bottom: 3px; ");
document.write("  padding-left: 4px; ");
document.write("  padding-right: 4px; ");
document.write("  margin-left: 2px; ");
document.write("  font-family: \u5b8b\u4f53; ");
document.write("  font-size: 13px;");
document.write("  text-align: center;  ");
document.write("  font-weight: normal;  ");
document.write("  letter-spacing: 1px;  ");
document.write("  background: #0E347F;  ");
document.write("  color: white;  ");
document.write("}  ");
document.write(".pointBox{position:absolute;z-index:100}");
document.write(".pointBox .PMain{padding:0 10px;border: 2px solid rgb(14, 52, 127); background:#fff }");
document.write(".pointBox .pointer{overflow:hidden;width:15px;height:14px;margin:-4px 0 0;background:url(images/pointBg.png) no-repeat;_background:none}");
document.write(".pointBox .pointer img{display:none;_display:block;width:15px;height:14px;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=images/pointBg.png,sizingMethod=image,sizingMethod=scale)}");
document.write(".pointBox .BoxBg{position:absolute;z-index:-1;width:100%;margin:auto 0 0 8px;padding-top:5px;background:#666;filter:alpha(opacity=60);opacity:0.6}");
document.write(".rightThis .pointer{width:auto;margin:-4px 0 0;background-position:100% -16px!important;_background:none}");
document.write(".rightThis .pointer img{_position:absolute;_right:0;_filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=images/pointBgR.png,sizingMethod=image,sizingMethod=scale)}");
document.write(".rightThis .BoxBg{margin:auto 15px 0 0;left:-5px}");
document.write("</style>");
if (typeof xl == "undefined") var xl = strImgsvrUrl;
if (typeof ds == "undefined") var ds = "mapbar";
if (typeof en == "undefined") var en = 0;
if (typeof rs == "undefined") var rs = 0;
if (typeof apiType == "undefined") var apiType = 0;
if (typeof hs == "undefined") var hs = false;
if (typeof MOUSEWHEEL == "undefined") var MOUSEWHEEL = true;
if (typeof kp == "undefined") var kp = true;
if (typeof bDefaultControlOn == "undefined") var bDefaultControlOn = false;
if (typeof hbo == "undefined") var hbo = false;
if (typeof otp == "undefined") var otp = false;
if (typeof ZOOM_TRANSITION == "undefined") var ZOOM_TRANSITION = true;
if (typeof bsc == "undefined") var bsc = true;
if (typeof __mapbar_magic_id == "undefined") var __mapbar_magic_id = "";
if (typeof REFRESH_MK_INDEX != "boolean") var REFRESH_MK_INDEX = true;
if (typeof SNAPSHOT_SERVER != "string") var SNAPSHOT_SERVER = "http://staticmap.mapbar.com/staticmap/";
if (typeof SNAPSHOT_MAPIMG_URI_PREFIX != "string") var SNAPSHOT_MAPIMG_URI_PREFIX = "http://img[1-9]?.mapbar.com/maplite/";
if (typeof SNAPSHOT_MARKER_URI_PREFIX != "string") var SNAPSHOT_MARKER_URI_PREFIX = "http://img[1-9]?.mapbar.com/maplite/mapbank/ditu/";
var SNAPSHOT_OPTIONS = {
    mode: "fullscreen",
    format: "png",
    depth: 0,
    processMode: "event"
};
if (typeof ALLOW_MV != "boolean") var ALLOW_MV = true;
if (typeof NH6 != "string") var NH6 = "_dragmap";
if (typeof b4W != "string") var b4W = "_overlay";
if (typeof B8577 != "string") var B8577 = "_disable_mw";
if (typeof $$0 != "string") var $$0 = "_mlayer";
var c75 = 2;
var ac = null;
var ad = true;
if (typeof bp == "undefined") var bp = true;
if (typeof oo == "undefined") var oo = true;
if (typeof bmc == "undefined") var bmc = false;
if (typeof OVER_LOCATION != "object" || OVER_LOCATION) var OVER_LOCATION = null;
if (typeof STD_BUBBLE_WIDTH == "undefined") var STD_BUBBLE_WIDTH = 217;
if (typeof MIN_BUBBLE_HEIGHT == "undefined") var MIN_BUBBLE_HEIGHT = 120;
if (typeof OVER_WIN_WIDTH != "number") {
    OVER_WIN_WIDTH = 150
} else {
    if (OVER_WIN_WIDTH < 100) OVER_WIN_WIDTH = 100;
    else if (OVER_WIN_WIDTH > 210) OVER_WIN_WIDTH = 210
}
if (typeof OVER_WIN_HEIGHT != "number") {
    OVER_WIN_HEIGHT = 120
} else {
    if (OVER_WIN_HEIGHT < 100) OVER_WIN_HEIGHT = 100;
    else if (OVER_WIN_HEIGHT > 210) OVER_WIN_HEIGHT = 210
}
if (typeof MAX_BUBBLE_HEIGHT == "undefined") var MAX_BUBBLE_HEIGHT = 380;
var sX = strImgsvrUrl + "images/mask.gif";
var ul = strImgsvrUrl + "images/node.gif";
var lV = strImgsvrUrl + "images/wmk.gif";
if (typeof LPN_HOVERING_TIME == "undefined") var LPN_HOVERING_TIME = 100;
var _s12L = null;
if (typeof gQ == "undefined") gQ = 0;
var xz = '';
var AB = "";
Array.prototype.clear = function () {
    while (this.length > 0) this.pop()
};
document.write('<img id="sendmapload" style="display:none;visibility:hidden;" />');
document.writeln('<div id="myalert" style="position:absolute;z-index:100000;filter:alpha(opacity=85);opacity:0.85;visibility:hidden;background-color:white;padding:1px;"></div>');
var sb = 0;
var sc = '<div id="loading" unselectable = "on"><img src="' + strImgsvrUrl + 'images/loading.gif"></div>';
if (typeof bArrow == "undefined") {
    var bArrow = 0
}
var sB = new Image();
var initialize = 0;
var xN = (en == 0) ? new Array(tX('%u5415%uDD90%uE7F2%uD86E'), tX('%u5415%uA728%uB18A%uD86E'), tX('%u5415%uA22D%uAC8F%uD86E'), tX('%u5415%uA768%uB1CA%uD86E'), tX('%u6D4F%uFF1A%u1FAC%u0798'), tX('%u70BF%uC2B4%uE1D6%u1827%u0775%uE467'), tX('%u6540%uBE65'), tX('%u7F2B%uDB38'), tX('%u62D1%uB571%uC179%uC628%uE732%u1827%u0775%uE467')) : new Array('Go left', 'Go up', 'Go right', 'Go down', 'Measure distance', 'Click to zoom', 'Zoom In', 'Zoom Out', 'Drag to zoom');
var lt = (en == 0) ? "\u62D6\u62FD\u6B64\u70B9" : "drag to move this point";
var pe = new Array();
var pa = new Array();
var pF = 2;
var sI = new Array('W', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '16');
var sj = new Array(90, 40, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01, 0.005, 0.002, 0.001);
var qP = new Array(90 * 0.8, 40 * 0.8, 20 * 0.8, 10 * 0.8, 5 * 0.8, 2 * 0.8, 0.8, 0.5 * 0.8, 0.2 * 0.8, 0.1 * 0.8, 0.05 * 0.8, 0.02 * 0.8, 0.01 * 0.8, 0.005 * 0.8, 0.002 * 0.8, 0.001 * 0.8);
var nM = new Array(10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 50, 50, 50, 50, 50, 50);
var w8 = new Array(0, 0, 0, 0, 0, 0, 0, 0, 75, 0, 0, -150, 0, 0, 0, 0);
if (typeof DEFAULT_MAX_ZOOM_LEVEL != "number") var DEFAULT_MAX_ZOOM_LEVEL = 13;
if (typeof DEFAULT_MIN_ZOOM_LEVEL != "number") var DEFAULT_MIN_ZOOM_LEVEL = 0;
var sY = DEFAULT_MAX_ZOOM_LEVEL;
var te = DEFAULT_MIN_ZOOM_LEVEL;
var wp = 100000;
var sw = 105;
var sx = 35;
var sz = new Array(-360, 360);
var sy = new Array(-90, 90);
var g760 = null;
var uU = 8;
var uS = 15;
var uT = strImgsvrUrl + 'images/overclose.gif';
var uV = strImgsvrUrl + 'images/overopen.gif';
if (!otp) {
    uT = strImgsvrUrl + 'images/overclose2.gif';
    uV = strImgsvrUrl + 'images/overopen2.gif'
}
var uW = [0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var bpp = [xl + "mapbank/base/", 12, 13];
var vs = strMapsvrUrl + "images/done.gif";
var vt = strMapsvrUrl + "images/edit.gif";
var v3 = strMapsvrUrl + "images/stretch.gif";
var at = 0;
var as = 1;
var au = 2;
var av = 0;
var ar = 2;
var s9 = 1001;
if (typeof TRAFFIC_REFRESH_INTERVAL != "number") var TRAFFIC_REFRESH_INTERVAL = 5 * 60;
if (typeof TRAFFIC_MIN_LEVEL != "number") var TRAFFIC_MIN_LEVEL = 8;
if (typeof TRAFFIC_MAX_LEVEL != "number") var TRAFFIC_MAX_LEVEL = sY;
if (typeof BASEPOI_MIN_LEVEL != "number") var BASEPOI_MIN_LEVEL = 9;
if (typeof BASEPOI_MAX_LEVEL != "number") var BASEPOI_MAX_LEVEL = sY;
if (typeof DISABLE_OLD_GOLDPOI != "boolean") var DISABLE_OLD_GOLDPOI = false;