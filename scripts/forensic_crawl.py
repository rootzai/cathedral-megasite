import os
import re

# Directories
PAGES_DIR = r"c:\Projects\Cathedral_Megasite\sodomhall-project\client\src\pages"
ROUTES_DIR = r"c:\Projects\Cathedral_Megasite\sodomhall-project\client\src\routes"

# Regex for finding routes
# <Route path="/ledger" component={TheyKnew} />
# <Route key="v1" path={"/vault"}><ChurchBKPageLayout component={LegalFindings} /></Route>
ROUTE_REGEX = re.compile(r'path=\{?["\']([^"\']+)["\']\}?')

def get_all_tsx_files(root_dir):
    tsx_files = []
    for root, dirs, files in os.walk(root_dir):
        for file in files:
            if file.endswith(".tsx"):
                rel_path = os.path.relpath(os.path.join(root, file), PAGES_DIR)
                tsx_files.append(rel_path.replace("\\", "/"))
    return tsx_files

def get_all_routes_from_file(file_path):
    routes = []
    if not os.path.exists(file_path):
        return routes
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
        matches = ROUTE_REGEX.findall(content)
        routes.extend(matches)
    return routes

def perform_audit():
    all_files = get_all_tsx_files(PAGES_DIR)
    
    # Routers to check
    router_files = [
        os.path.join(ROUTES_DIR, "CoreRouter.tsx"),
        os.path.join(ROUTES_DIR, "EndgameRouter.tsx"),
        os.path.join(ROUTES_DIR, "VaultRouter.tsx"),
        os.path.join(ROUTES_DIR, "ExposeRouter.tsx"),
    ]
    
    all_mapped_routes = []
    for rf in router_files:
        all_mapped_routes.extend(get_all_routes_from_file(rf))
    
    # Unique and sorted
    all_mapped_routes = sorted(list(set(all_mapped_routes)))
    all_files = sorted(list(set(all_files)))
    
    print("--- MASTER SITE MANIFEST ---")
    print(f"Total TSX Pages in /pages: {len(all_files)}")
    print(f"Total Defined Routes: {len(all_mapped_routes)}")
    print("\n[ALL ROUTES]")
    for r in all_mapped_routes:
        print(r)
        
    print("\n[ALL PHYSICAL FILES]")
    for f in all_files:
        print(f)

if __name__ == "__main__":
    perform_audit()
