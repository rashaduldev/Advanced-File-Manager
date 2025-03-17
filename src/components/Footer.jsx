export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-semibold">About</h3>
              <p className="mt-4 text-gray-400">
                Advanced File Manager is an open-source Laravel package for professional file management.
              </p>
            </div>
  
            {/* Resources */}
            <div>
              <h3 className="text-xl font-semibold">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a href="/docs" className="text-gray-400 hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#features" className="text-gray-400 hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#installation" className="text-gray-400 hover:text-white">
                    Installation
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Community */}
            <div>
              <h3 className="text-xl font-semibold">Community</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="https://github.com/devrabiul/advanced-file-manager"
                    className="text-gray-400 hover:text-white"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/devrabiul/advanced-file-manager/discussions"
                    className="text-gray-400 hover:text-white"
                  >
                    Discussions
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Support */}
            <div>
              <h3 className="text-xl font-semibold">Support</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <a
                    href="https://github.com/devrabiul/advanced-file-manager/issues"
                    className="text-gray-400 hover:text-white"
                  >
                    Report an Issue
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/sponsors/devrabiul"
                    className="text-gray-400 hover:text-white"
                  >
                    Sponsor
                  </a>
                </li>
              </ul>
            </div>
          </div>
  
          {/* Copyright */}
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
            © 2025 Advanced File Manager. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }