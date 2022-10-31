using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace CalendarioWeb.Pages
{
    
    public class AddOrModify : PageModel
    {
        private readonly ILogger<AddOrModify> _logger;

        public AddOrModify(ILogger<AddOrModify> logger)
        {
            _logger = logger;
        }

        public void OnGet()
        {
        }
    }
    
}