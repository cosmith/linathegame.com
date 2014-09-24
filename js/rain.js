(function() {
    var b, a, f;
    b = 0;
    a = ["ms", "moz", "webkit", "o"];
    for (f = 0; f < a.length && !window.requestAnimationFrame;) window.requestAnimationFrame = window[a[f] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[a[f] + "CancelAnimationFrame"] || window[a[f] + "CancelRequestAnimationFrame"], ++f;
    window.requestAnimationFrame || (window.requestAnimationFrame = function(a, f) {
        var startDate, h, c;
        startDate = (new Date).getTime();
        c = Math.max(0, 16 - (startDate - b));
        h = window.setTimeout(function() {
            a(g + c)
        }, c);
        b = startDate + c;
        return h
    });
    window.cancelAnimationFrame ||
        (window.cancelAnimationFrame = function(a) {
            clearTimeout(a)
        })
})();


(function() {
    var canvas = $(".js-stars")[0];
    var ctx = canvas.getContext("2d");
	var particles = [];
	var maxParticles = 100;
	var frameCounter = 0;

    function init() {
        setCanvasSize();

        for (var i = 0; i < maxParticles; i++) {
			makeParticle(true);
        }

        draw();
    }

    function makeParticle(randomPos) {
    	requestAnimationFrame(makeParticle.bind(this, false));
    	if (particles.length < maxParticles) {
    		size = Math.random() * 25;
    		particles.push({
    			"x": ~~(Math.random() * canvas.width),
    			"y": randomPos ? ~~(Math.random() * canvas.height) : -40,
    			"width": ~~(size / 10 + 1),
    			"height": ~~(size + 15),
    			"speed": ~~(size / 6) + 1
    		});
    	}
    }

	function draw() {
        var i, particle;
        requestAnimationFrame(draw.bind(this));
        ctx.fillStyle = "hsla(0, 0%, 0%, 1)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

		ctx.fillStyle = "hsla(0, 0%, 100%," + Math.random() * 100 + ")";
        for (i in particles) {
        	particle = particles[i];

        	if (particle.y > canvas.height + 10) {
        		particle.dead = true;
        	}

        	ctx.fillRect(particle.x + 0.5, particle.y + 0.5, particle.width, particle.height);
        	particle.y += particle.speed;
        }

        particles = particles.filter(function (elt) {
        	return !elt.dead;
        });
    }

    function setCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    $( window ).resize(function() {
    	setCanvasSize();
	});

    init();
})();


