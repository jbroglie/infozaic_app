# Command-Shift-R: run a single test (if run on an it block) or group of tests (if run on a describe block)
# Command-Shift-E: run the last test(s)
# Command-Shift-T: run all the tests in current file

require 'spec_helper'

describe "Static pages" do

  subject { page }

  describe "Home page" do
    before { visit root_path }

    it { should have_selector('h1',    text: 'Welcome to Infozaic') }
    it { should have_selector('title', text: full_title('')) }
    it { should_not have_selector 'title', text: '| Home' }
  end


  describe "About page" do
    before { visit about_path }

    it { should have_selector('h1',    text: 'About') }
    it { should have_selector('title', text: full_title('About Us')) }
  end

end