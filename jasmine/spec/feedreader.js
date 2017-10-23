$(function() {
	describe('RSS Feeds', function() {
		it('are defined', function() {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});

		it('should have URLs', function() {
			for(var i = 0; i < allFeeds.length; i++)
			{
				expect(allFeeds[i].url).toBeDefined();
				expect(allFeeds[i].url.length).not.toBe(0);
			}
		});

		it('should have link names', function() {
			for(var i = 0; i < allFeeds.length; i++)
			{
				expect(allFeeds[i].name).toBeDefined();
				expect(allFeeds[i].name.length).not.toBe(0);
			}
		});
	});

	describe('The menu', function() {
		it('should be hidden by default', function() {
			expect($('body').hasClass('menu-hidden')).toBe(true);
		});

		it('should show when clicking the menu icon', function() {
			$('.menu-icon-link').trigger('click');
			expect($('body').hasClass('menu-hidden')).toBe(false);
		});

		it('should hide again when clicking the menu icon', function() {
			$('.menu-icon-link').trigger('click');
			expect($('body').hasClass('menu-hidden')).toBe(true);
		});
	});

	describe('Initial Entries', function() {
		beforeEach(function(done) {
			loadFeed(0, function() {
				done();
			});
		});

		it('should have a minimum of one entry', function() {
			expect($('.feed .entry').length).not.toBe(0);
		});
	});

	describe('New Feed Selection', function() {
		var oldFeed, newFeed;

		beforeEach(function(done) {
			loadFeed(0, function() {
				oldFeed = $('.feed .entry').html();
				loadFeed(1, function() {
					newFeed = $('.feed .entry').html();
					done();
				});
			});
		});

		it('should change the feed list', function() {
			expect(oldFeed).not.toBe(newFeed);
		});
	});
}());