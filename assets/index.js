$( document ).ready(function() {
	
  let endpoint = 'https://api.spoonacular.com/recipes'
  let apiKey = '701326bc230340e0866879dd6bbd0710'

  $("#search").click(function(){   
	
	$('#results').empty();
	
	var searchValue = $("#searchInput").val();
	var template = $('#template-result');
	
		    $.ajax({
				url: "https://api.spoonacular.com/recipes/search?query=" + searchValue + "&instructionsRequired=true&apiKey=" + apiKey,
				contentType: "application/json",
				dataType: 'json',
				success: function(result){			
				$.each(result.results, function(i, recipe){				
					var recipeSrc = "https://spoonacular.com/recipeImages/" + recipe.id + "-240x150.jpg"
					var templateClone = template.clone(false);
					
					templateClone.find("img").attr('src', recipeSrc);
					templateClone.find(".card-title").text(recipe.title);
					templateClone.find(".card-header").text(recipe.title);
					templateClone.find("a").attr('href', "https://www.allrecipes.com/search/results/?wt=" + recipe.sourceUrl);
					templateClone.find(".servings").text(recipe.servings);
					templateClone.find(".time").text(recipe.readyInMinutes);
					
					$('#results').append(templateClone.html());						
				});
			}});				
   });  
});