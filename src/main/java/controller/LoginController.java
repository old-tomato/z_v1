package controller;

import mode.LoginCommand;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.util.logging.Logger;

/**
 * Created by zkl on 2016/8/14.
 */
@Controller
@RequestMapping("/login")
public class LoginController {
    @RequestMapping(value = "/loginCheck", method = RequestMethod.POST)
    public ModelAndView loginPage(HttpServletRequest request, LoginCommand loginCommand) {
        Logger logger = Logger.getLogger("zkl");
        logger.info("login!!!!!!!!!!!!!!!");
        String password = loginCommand.getPassword();
        logger.info("password is ==> " + password);
        return new ModelAndView("/static/jsp/login");
    }
}
